import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";

const origin = "http://127.0.0.1:3000";
const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1"], { stdio: "inherit" });
let browser;
const preview = process.argv.includes("--preview");
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitFor(check, message) {
  for (let attempt = 0; attempt < 40; attempt++) {
    if (await check()) return;
    await pause(100);
  }
  assert.fail(message);
}

try {
  let response;
  for (let attempt = 0; attempt < 60; attempt++) {
    try {
      response = await fetch(origin);
      if (response.ok) break;
    } catch {}
    await pause(500);
  }
  assert(response?.ok, "Production server did not start");
  const html = await response.text();
  assert.match(html, /mailto:erblinthaqi40@gmail.com/, "Contact fallback must be server-rendered");
  assert(!html.includes("Loading contact..."), "No empty client-only contact placeholder");
  assert.match(html, /summary_large_image/);
  assert.match(html, /apple-touch-icon/);
  const robots = await (await fetch(origin + "/robots.txt")).text();
  const sitemap = await (await fetch(origin + "/sitemap.xml")).text();
  if (preview) {
    assert.match(response.headers.get("x-robots-tag"), /noindex/);
    assert.match(html, /content="noindex, nofollow"/);
    assert.match(robots, /Disallow: \/\s/);
    assert(!sitemap.includes("<loc>"));
    console.log("PASS: preview HTML, response headers, robots and sitemap prevent indexing");
  } else {
    assert(!response.headers.get("x-robots-tag")?.includes("noindex"));
    assert.match(html, /content="index, follow"/);
    assert.match(robots, /Allow: \/\s/);
    assert(!robots.includes("Disallow: /"));
    assert.match(sitemap, /<loc>https:\/\/erblinthaqi.netlify.app<\/loc>/);

    // Generated branding assets must respond as actual correctly sized images.
    for (const [path, width, height] of [["/opengraph-image", 1200, 630], ["/apple-icon", 180, 180]]) {
      const asset = await fetch(origin + path);
      assert(asset.ok);
      assert.match(asset.headers.get("content-type"), /image\/png/);
      const png = Buffer.from(await asset.arrayBuffer());
      assert.equal(png.readUInt32BE(16), width);
      assert.equal(png.readUInt32BE(20), height);
    }
    assert((await fetch(origin + "/icon.svg")).ok);
    await mkdir("artifacts/responsive", { recursive: true });
    browser = await chromium.launch();

    const noJS = await browser.newContext({ javaScriptEnabled: false });
    const fallbackPage = await noJS.newPage();
    await fallbackPage.goto(origin + "/#contact");
    assert(await fallbackPage.getByRole("link", { name: "erblinthaqi40@gmail.com", exact: true }).isVisible());
    await noJS.close();

    for (const width of [320, 375, 768, 1024, 1440]) {
      const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: "reduce" });
      const runtimeErrors = [];
      page.on("pageerror", (error) => runtimeErrors.push(error.message));
      page.on("console", (message) => { if (message.type() === "error") runtimeErrors.push(message.text()); });
      await page.goto(origin, { waitUntil: "networkidle" });
      assert.match(await page.title(), /Erblin Thaqi.*Full-Stack Developer/);
      assert.equal(await page.locator('link[rel="canonical"]').getAttribute("href"), "https://erblinthaqi.netlify.app");
      assert.deepEqual(await page.locator("main > section").evaluateAll((sections) => sections.map((section) => section.id)), ["home", "projects", "about", "skills", "contact"]);
      assert.deepEqual(await page.locator("#projects h3").allTextContents(), ["BLINI Restaurant", "TaskFlow", "TechInsights"]);
      assert.equal(await page.locator('#projects a[href^="https://github.com/"]').count(), 3);
      assert.equal(await page.locator('#projects a[aria-label*="live demo"]').count(), 2);
      for (const link of await page.locator("#projects a").all()) {
        assert.match(await link.getAttribute("href"), /^https:\/\/(github.com\/XtremeThaqi\/|blini.netlify.app|erblinthaqi-tech.netlify.app)/);
      }

      for (const [name, id] of [["Work", "projects"], ["About", "about"], ["Skills", "skills"], ["Contact", "contact"], ["Home", "home"]]) {
        const link = page.getByRole("navigation").getByRole("link", { name, exact: true });
        await link.focus();
        await page.keyboard.press("Enter");
        await page.waitForURL("**/#" + id);
        await waitFor(async () => (await link.getAttribute("aria-current")) === "location", "Active section should follow " + id);
        await waitFor(() => page.evaluate((target) => document.activeElement.id === target, id), "Anchor focus should move to " + id);
      }

      // Manual scrolling must also update the active section regardless of nav order.
      await page.locator("#projects").evaluate((element) => element.scrollIntoView({ block: "start", behavior: "instant" }));
      await waitFor(async () => (await page.getByRole("navigation").getByRole("link", { name: "Work", exact: true }).getAttribute("aria-current")) === "location", "Manual scroll should activate Work");

      for (const image of await page.locator("#projects img").all()) {
        assert.equal(await image.getAttribute("loading"), "lazy");
        await image.scrollIntoViewIfNeeded();
        await image.evaluate((element) => element.decode());
      }
      await page.locator("#projects").evaluate((element) => element.scrollIntoView({ block: "start", behavior: "instant" }));
      await pause(300);
      await page.screenshot({ path: `artifacts/responsive/projects-${width}.png` });
      for (const id of ["about", "skills", "contact"]) {
        await page.locator("#" + id).evaluate((element) => element.scrollIntoView({ block: "start", behavior: "instant" }));
        await pause(200);
      }
      for (const label of ["Your Name", "Email Address", "Your Message"]) {
        assert.equal(await page.getByLabel(label, { exact: true }).count(), 1);
      }
      const unnamedLinks = await page.locator("a").evaluateAll((links) => links.filter((link) => !(link.getAttribute("aria-label") || link.textContent || "").trim()).map((link) => link.outerHTML));
      assert.deepEqual(unnamedLinks, []);
      const overflow = await page.locator("main, nav, footer").evaluateAll((roots) => roots.flatMap((root) => [root, ...root.querySelectorAll("*")]).filter((element) => {
        if (element.closest('[aria-hidden="true"]') || element.classList.contains("sr-only")) return false;
        const rect = element.getBoundingClientRect();
        return rect.width > 0 && (rect.left < -1 || rect.right > innerWidth + 1);
      }).map((element) => ({ tag: element.tagName, className: element.getAttribute("class") })));
      assert.deepEqual(overflow, [], "Content overflow at " + width + "px");
      const target = await page.getByRole("navigation").getByRole("link", { name: "Home", exact: true }).evaluate((link) => {
        const style = getComputedStyle(link, "::before");
        return { width: parseFloat(style.width), height: parseFloat(style.height) };
      });
      assert(target.width >= 44 && target.height >= 44, "Navigation hit targets must be at least 44px");
      await page.getByRole("navigation").getByRole("link", { name: "Home", exact: true }).click();
      await pause(300);
      await page.screenshot({ path: `artifacts/responsive/home-${width}.png`, fullPage: true });
      assert.deepEqual(runtimeErrors, [], "No console or hydration errors");
      console.log("PASS: content, metadata, navigation, keyboard, images, console and layout at " + width + "px");
      await page.close();
    }

    const resized = await browser.newPage({ viewport: { width: 375, height: 900 }, reducedMotion: "reduce" });
    await resized.goto(origin);
    await resized.getByRole("navigation").getByRole("link", { name: "Work", exact: true }).focus();
    for (const width of [1024, 320, 1440]) {
      await resized.setViewportSize({ width, height: 900 });
      await waitFor(() => resized.getByRole("navigation").getByRole("link", { name: "Work", exact: true }).evaluate((link) => link === document.activeElement), "Navigation focus should survive breakpoint changes");
    }
    await resized.close();

    // Test transport responses without delivering any real email.
    for (const scenario of ["honeypot", "failure", "success"]) {
      const context = await browser.newContext({ reducedMotion: "reduce" });
      const page = await context.newPage();
      let requests = 0;
      await page.route("https://api.emailjs.com/**", async (route) => {
        requests++;
        const payload = route.request().postDataBuffer()?.toString() ?? "";
        assert.match(payload, /service_x7ad9n2/);
        assert.match(payload, /template_dtq8b0u/);
        await pause(500);
        await route.fulfill({ status: scenario === "failure" ? 500 : 200, contentType: "text/plain", body: scenario === "failure" ? "Service unavailable" : "OK" });
      });
      await page.goto(origin + "/#contact", { waitUntil: "networkidle" });
      const button = page.getByRole("button", { name: "Send Message", exact: true });
      await button.click();
      assert.equal(await page.locator('[aria-invalid="true"]').count(), 3);
      assert.equal(requests, 0);
      await page.getByLabel("Your Name", { exact: true }).fill("Erblin Test");
      await page.getByLabel("Email Address", { exact: true }).fill("portfolio-test@example.com");
      await page.getByLabel("Your Message", { exact: true }).fill("Automated contact form test; transport is mocked.");
      if (scenario === "honeypot") {
        await page.locator("#contact-website").evaluate((input) => { input.parentElement.style.display = "block"; });
        await page.locator("#contact-website").fill("spam");
      }
      await button.click();
      if (scenario !== "honeypot") {
        await page.getByRole("button", { name: "Sending...", exact: true }).waitFor();
        assert(await page.getByRole("button", { name: "Sending...", exact: true }).isDisabled());
        await page.locator("#contact form").evaluate((form) => form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true })));
      }
      if (scenario === "success") {
        await page.getByText("Message sent. Thank you for getting in touch.", { exact: true }).waitFor();
        assert.equal(await page.getByLabel("Your Message", { exact: true }).inputValue(), "");
      } else {
        await page.getByRole("alert").waitFor();
        assert(await page.getByLabel("Your Message", { exact: true }).inputValue());
      }
      assert.equal(requests, scenario === "honeypot" ? 0 : 1);
      assert(await page.getByRole("button", { name: "Send Message", exact: true }).isEnabled());
      await context.close();
      console.log("PASS: mocked contact " + scenario + " and duplicate-submit protection");
    }

    const animated = await browser.newPage({ reducedMotion: "no-preference" });
    await animated.goto(origin);
    await animated.getByRole("navigation").getByRole("link", { name: "Work", exact: true }).click();
    await waitFor(async () => (await animated.getByRole("navigation").getByRole("link", { name: "Work", exact: true }).getAttribute("aria-current")) === "location", "Smooth scrolling should settle on Work");
    await pause(1000);
    await animated.screenshot({ path: "artifacts/responsive/desktop-motion.png" });
    await animated.close();

    // Lighthouse reports are informational; do not invent score thresholds.
    if (process.env.RUN_LIGHTHOUSE === "1") {
      await mkdir("artifacts/lighthouse", { recursive: true });
      const lighthouse = spawn(process.execPath, ["node_modules/lighthouse/cli/index.js", origin, "--chrome-flags=--headless --no-sandbox", "--only-categories=performance,accessibility,best-practices,seo", "--output=html", "--output=json", "--output-path=artifacts/lighthouse/portfolio", "--quiet"], { stdio: "inherit", env: { ...process.env, CHROME_PATH: chromium.executablePath() } });
      await new Promise((resolve, reject) => {
        lighthouse.on("error", reject);
        lighthouse.on("exit", (code) => code === 0 ? resolve() : reject(new Error("Lighthouse exited with " + code)));
      });
    }
  }
} finally {
  await browser?.close();
  server.kill();
}
