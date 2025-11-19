Books and Balls Initiative - Website

Part 3 updates

This repository contains the website files for the Books and Balls Initiative.

What's new

- Part 2: Added an external stylesheet `style.css`, linked it across the site, improved layout and responsiveness, and cleaned up header/navigation markup.
- Part 3: Added the contact form page with client-side validation and AJAX/mailto fallback.

Change log

- 2025-11-13: Part 2 - Created and linked `style.css`. Implemented base reset, typography scale, layout rules (Flexbox / Grid), responsive breakpoints (mobile/tablet/desktop), and updated image elements with responsive attributes. Cleaned up duplicated/malformed header and body elements on several pages for better accessibility and consistency. Files updated: `Home page.html`, `Contact page.html`, `Enquiries.html`, `About page.html`, `Services.html`, `Sponser page.html`, `Donate.html`, and added `style.css`.
- 2025-11-13: Part 3 - Added `Contact page.html` with client-side validation and AJAX/mailto fallback. Prepared README entries.

How the contact form works

- Validation: The form performs HTML5 and JavaScript validation for name (min length), email format, optional phone pattern, type selection, and message length.
- Submission options:
  - AJAX: If `AJAX_ENDPOINT` is set in the script, the form sends a JSON POST to that endpoint.
  - Mail client fallback: otherwise the form opens the user's mail client using a `mailto:` link prefilled with the subject and body.

Formspree example

- Quick setup:
  1. Go to https://formspree.io and create a new form. You'll receive an endpoint like `https://formspree.io/f/xyz123`.
  2. Edit `contact.html` and set `AJAX_ENDPOINT` to your Formspree endpoint.
  3. Optionally configure Formspree to accept JSON posts or use the default settings.

- Notes:
  - The page sends a JSON body. If using Formspree ensure your form is set up to accept JSON or adjust the fetch request to send form-encoded data.

Notes about pushing to GitHub

- I committed the new files locally. To push to your remote repository run the following (from the project root):

  git remote add origin <your-remote-url>
  git branch -M main
  git push -u origin main

References

- HTML Living Standard (forms)
- MDN Web Docs: form validation, fetch API

Screenshots helper

To generate Desktop/Tablet/Mobile screenshots locally (useful as evidence for Part 2), run the included Puppeteer script.

1. Install dependencies (Node.js required):

```powershell
npm install
```

2. Run the screenshot script:

```powershell
npm run screenshots
```

This will create a `screenshots/` folder with PNG files for each page at three breakpoints.

Part 3 — Functionality & SEO

2025-11-13: Part 3 - Implemented JavaScript enhancements and SEO improvements.

- Added `main.js`: centralised interactive features including:
  - Accordion safety/keyboard handling (used on `Home page.html`).
  - Services search filter wired to `Services.html` (`#serviceSearch`).
  - Lightbox modal for sponsor images (images marked with `data-lightbox="true"` in `Sponser page.html`).
  - Enquiries form validation and AJAX-like submission handling (`Enquiries.html`).
- Updated pages to include `main.js` and removed deprecated tags and inline styles where appropriate.
- Added `robots.txt` and `sitemap.xml` (placeholders — update URLs to your live site).

Files updated for Part 3:
- `main.js` (new)
- `Enquiries.html` (form validation + AJAX handling)
- `Services.html` (search input + linked main.js)
- `Sponser page.html` (lightbox attributes + linked main.js)
- `Contact page.html` (linked main.js; contact form retained and still supports AJAX/mailto)
- `Home page.html`, `About page.html`, `Donate.html` (linked `main.js`)
- `robots.txt`, `sitemap.xml`

Notes about feedback from Part 2
- Fixed multiple instances of deprecated `<font>` tags and removed inline style attributes to centralise styling in `style.css`.
- Improved header/nav consistency and added ARIA attributes where helpful (`aria-current` set on active nav links).
- Added changelog entries and a screenshots helper to capture responsive evidence.



