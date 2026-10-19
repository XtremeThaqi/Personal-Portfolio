import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";

const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1"], { stdio: "inherit" });
let browser;
const origin = "http://127.0.0.1:3000";

try {
  let ready = false;
  for (let attempt = 0; attempt < 60; attempt++) {
    try {
      const response = await fetch(origin);
      if (response.ok) { ready = true; break; }
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  assert(ready, "Production server did not start");
  await mkdir("artifacts/responsive", { recursive: true });
  browser = await chromium.launch();
  for (const width of [320, 375, 768, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: "reduce" });
    const runtimeErrors = [];
    page.on("pageerror", (error) => runtimeErrors.push(error.message));
    await page.goto(origin, { waitUntil: "networkidle" });
    assert.match(await page.title(), /Erblin Thaqi.*Full-Stack Developer/);
    assert.equal(await page.locator('link[rel="canonical"]').getAttribute("href"), "https://erblinthaqi.netlify.app");
    assert.deepEqual(await page.locator("main > section").evaluateAll((sections) => sections.map((section) => section.id)), ["home", "projects", "about", "skills", "contact"]);
    assert.equal(await page.locator("#projects article").count(), 4);
    assert.equal(await page.locator('#projects a[href^="https://github.com/"]').count(), 4);

    // Native anchors should work with keyboard navigation and update the URL.
    const workLink = page.getByRole("navigation").getByRole("link", { name: "Work", exact: true });
    await workLink.focus();
    await page.keyboard.press("Enter");
    await page.waitForURL("**/#projects");
    await page.waitForTimeout(500);
    await page.screenshot({ path: `artifacts/responsive/projects-${width}.png` });

    for (const id of ["about", "skills", "contact"]) {
      await page.locator(`#${id}`).scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
    }
    for (const label of ["Your Name", "Email Address", "Your Message"]) {
      assert.equal(await page.getByLabel(label, { exact: true }).count(), 1);
    }
    const unnamedLinks = await page.locator("a").evaluateAll((links) => links.filter((link) => !(link.getAttribute("aria-label") || link.textContent || "").trim()).map((link) => link.outerHTML));
    assert.deepEqual(unnamedLinks, [], "Every link needs an accessible name");
    const overflow = await page.locator("main").evaluate((main) => [...main.querySelectorAll("*")].filter((element) => {
      const rect = element.getBoundingClientRect();
      return rect.width > 0 && (rect.left < -1 || rect.right > window.innerWidth + 1);
    }).map((element) => ({ tag: element.tagName, className: element.getAttribute("class") })));
    assert.deepEqual(overflow, [], `Content overflow at ${width}px`);
    for (const image of await page.locator("#projects img").all()) {
      await image.scrollIntoViewIfNeeded();
      await image.evaluate((element) => element.decode());
    }
    await page.getByRole("navigation").getByRole("link", { name: "Home", exact: true }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: `artifacts/responsive/home-${width}.png` });
    assert.deepEqual(runtimeErrors, [], "No browser runtime errors");
    console.log(`PASS: production page, metadata, navigation, accessibility names, images and layout at ${width}px`);
    await page.close();
  }
} finally {
  await browser?.close();
  server.kill();
}
