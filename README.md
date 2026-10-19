# Erblin Thaqi — Personal Portfolio

A personal portfolio built with Next.js App Router, React, Tailwind CSS, and Framer Motion. It keeps the original black/red styling and floating glass navigation.

## Setup

Use Node.js 22 LTS or newer.

```bash
git clone https://github.com/XtremeThaqi/Personal-Portfolio.git
cd Personal-Portfolio
npm ci
npm run dev
```

Open http://localhost:3000. Production and lint commands:

```bash
npm run lint
npm run build
npm start
```

Next.js and its ESLint configuration are pinned to 16.4.2, with PostCSS 8.5.31, to address dependency advisories found during validation. The existing Tailwind 3 and React architecture is retained.

The build needs access to Google's font servers for the existing Inter font. ESLint uses `eslint.config.mjs`; no extra runtime libraries were added.

## Content and navigation

The homepage contains Home, Work, About, Skills, and Contact. Navigation keeps the appearance, spacing, icon layout, and spring underline from `main`. Native anchors preserve URL hashes and browser history. Active-section detection uses actual page positions, including scrolling, resizing, and layout changes. Keyboard focus follows activated anchors and survives the mobile/desktop breakpoint. Touch targets extend to 44px without changing icon spacing.

The three screenshot-led cards are BLINI Restaurant, TaskFlow, and TechInsights. Existing screenshots are reused with reserved aspect ratios, lazy loading, and responsive `sizes`.

| Project | Source | Scope |
| --- | --- | --- |
| BLINI Restaurant | [Restaurant-App](https://github.com/XtremeThaqi/Restaurant-App) | Restaurant frontend concept with menu and contact UI; no booking backend. |
| TaskFlow | [taskflow](https://github.com/XtremeThaqi/taskflow) | Python/Tkinter task manager; task data is in memory. |
| TechInsights | [Technology-News](https://github.com/XtremeThaqi/Technology-News) | Static news frontend with category filtering. |

Descriptions are based on source inspection. No features, screenshots, metrics, experience, or CV were invented.

## Contact

`Contact.jsx` is server-rendered: the heading and email fallback are available in the initial HTML and without JavaScript. `ContactForm.jsx` keeps the existing form style, loads EmailJS only on submission, validates fields, associates errors with inputs, announces status, prevents duplicate requests, and includes a honeypot and client-side cooldown.

The existing EmailJS public key, service ID, template ID, and `name`, `email`, `message` field names are preserved. Account credentials, allowed origins, service connection, and template recipient must remain configured in EmailJS; browser tests mock responses and do not verify real delivery. Client-side spam protection is only a basic deterrent. Configure EmailJS domain restrictions and service-side rate limits in the account for stronger protection.

The fallback address in `src/app/lib/contact.js` is the existing author email from repository commit `4d4800adc6429ffa469fa065e77ece81f890ba73`. No private credentials are needed in this repository.

## SEO and previews

Next.js metadata conventions generate a 1200 × 630 Open Graph PNG, an SVG favicon, a 180 × 180 Apple icon, `robots.txt`, and `sitemap.xml`. Twitter uses `summary_large_image`. Canonical URLs point to https://erblinthaqi.netlify.app.

When Netlify's build-time `CONTEXT` is a preview or other non-production context, the page emits `noindex, nofollow`, Next.js sends an `X-Robots-Tag` header, robots disallows crawling, and the sitemap has no entries. `CONTEXT=production` and ordinary local builds remain indexable. Netlify also applies its own noindex header to Deploy Previews. No blanket production noindex rule is added.

## Validation

GitHub Actions performs `npm ci`, ESLint, a production build, browser checks at 320, 375, 768, 1024, and 1440px, and an informational Lighthouse run. It then builds with `CONTEXT=deploy-preview` and checks preview indexing protection separately.

Browser checks cover initial HTML and no-JavaScript contact access, project order and link destinations, keyboard/native anchors, manual scrolling, breakpoint focus, accessible names and labels, image loading, overflow, and browser errors. Mocked EmailJS tests cover validation, loading, error, success, honeypot rejection, and duplicate requests; they never deliver email. Screenshots and Lighthouse reports are uploaded as the `portfolio-review` artifact.

Run these checks locally after `npm run build`:

```bash
npm install --no-save --package-lock=false playwright lighthouse
npx playwright install chromium
RUN_LIGHTHOUSE=1 node scripts/check-responsive.mjs
```

On PowerShell, set `$env:RUN_LIGHTHOUSE = "1"` before running the Node command. Real EmailJS delivery and assistive-technology testing remain separate manual checks.

## Deployment

Review PR #1 before merging into `main` or deploying to production. Existing Netlify integration may automatically create deploy previews for branch updates. This change does not request a production deployment.

## License

See [LICENSE](LICENSE).
