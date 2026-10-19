# Erblin Thaqi — Personal Portfolio

Personal portfolio built with Next.js App Router, React, Tailwind CSS, and Framer Motion. The existing black background, red accents, rounded surfaces, typography, and section animations are preserved.

## Development

Use Node.js 22 LTS or newer and npm.

```bash
git clone https://github.com/XtremeThaqi/Personal-Portfolio.git
cd Personal-Portfolio
npm ci
npm run dev
```

Open http://localhost:3000.

```bash
npm run lint
npm run build
npm start
```

ESLint uses the flat configuration in `eslint.config.mjs`. Next.js 16 no longer provides `next lint`.

The contact form uses the existing EmailJS browser integration. Public service, template, and key identifiers are configured in `src/app/components/Contact.jsx`; configure your own EmailJS account and permitted origins before reusing the form. Never add private EmailJS credentials. Sending a real message is a separate integration check.

## Structure

- `src/app/page.tsx`: Home → Projects → About → Skills → Contact, with navigation and footer.
- `src/app/components/Projects.jsx`: project content, scope notes, source and demo links.
- `src/app/components/Home.jsx`: hero copy and shared social links.
- `src/app/layout.tsx`: SEO metadata and the existing Inter font setup.
- `src/app/globals.css`: base styles, keyboard focus, skip link, anchor offsets, reduced motion.
- `src/app/components/images/`: existing project previews; no new screenshots are fabricated.

The build uses `next/font/google` and needs access to Google's font servers.

## Featured projects and verified scope

Descriptions are based on repository source inspection on 19 October 2026, not claims of production readiness. These are separate projects; the portfolio does not run their backends.

| Project | Repository | Implemented in source | Scope |
| --- | --- | --- | --- |
| TechPhone Store | [Smartphone_store](https://github.com/XtremeThaqi/Smartphone_store) | PHP authentication; MySQL cart; order and item inserts in a transaction; admin product CRUD and image uploads | Learning project. No payment gateway. Deployment and end-to-end behavior need further validation. |
| BLINI Restaurant | [Restaurant-App](https://github.com/XtremeThaqi/Restaurant-App) | Next.js menu, about, opening hours, testimonials and contact UI | Fictional restaurant concept. Booking form has no reservation backend. |
| TaskFlow | [taskflow](https://github.com/XtremeThaqi/taskflow) | Tkinter task creation, completion, deletion and scrolling | Desktop prototype. In-memory tasks reset on exit; no browser demo. |
| TechInsights | [Technology-News](https://github.com/XtremeThaqi/Technology-News) | Static pages and client-side category filtering | Frontend prototype. Subscription form only shows an alert; no CMS or mailing service. |

Source references:
- TechPhone: `includes/auth.php`, `pages/cart.php`, `pages/checkout.php`, `admin/phones/{add,edit,delete}.php`.
- BLINI: `src/app/components/{Food,Contact,Open,Testimonials}.jsx` and the fictional-restaurant note in `WarningMessage.jsx`.
- TaskFlow: `taskflow.py`, including in-memory pending/completed lists.
- TechInsights: `index.html`, `articles.html`, `about.html`, `javascipt/index.js` (repository spelling).

Existing BLINI and TechInsights demo links are retained. TechPhone's previously used hosted demo is linked with an availability note; availability and backend behavior are not guaranteed. TaskFlow links to its source. Existing previews are retained and may reflect earlier versions.

## Validation

The GitHub Actions portfolio check installs from the lockfile, runs ESLint, builds production output, then checks the built site in Chromium at 320, 375, 768, and 1440 pixels. It checks project order, source links, navigation, metadata, accessible link names, form labels, image loading, and horizontal overflow, and uploads screenshots for review.

To run the browser check locally after a production build:

```bash
npm install --no-save --package-lock=false playwright
npx playwright install chromium
node scripts/check-responsive.mjs
```

Also review keyboard focus, reduced motion, mobile and desktop layouts, and contact-form delivery manually before merging. Automated checks do not replace assistive-technology testing.

## Deployment

The current site is hosted at https://erblinthaqi.netlify.app. This branch does not change hosting configuration. Review and approve the pull request before merging into `main` or deploying.

## License

See [LICENSE](LICENSE).
