# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- Run the Hugo dev server:
  ```bash
  hugo server -D --bind 127.0.0.1 --port 1313
  ```
- Build the production site into `public/`:
  ```bash
  hugo
  ```
- Build with draft content included:
  ```bash
  hugo -D
  ```
- Clean generated output before a fresh build:
  ```bash
  rm -rf public resources
  hugo
  ```

There is no project-level `package.json`, lint script, or automated test suite in this repository. Validate changes with `hugo` and, for UI changes, run `hugo server -D --bind 127.0.0.1 --port 1313` and inspect the affected pages in a browser.

## Project architecture

This is a Hugo Extended static site for LintasHome, using the local `hugobricks` theme rather than a package-managed frontend build. The public website is primarily a single Indonesian landing page plus supporting pages, with a separate static payment notice page.

Key structure:

- `hugo.yaml` configures Hugo, sets `theme: "hugobricks"`, uses `content/en` as the active content directory, disables taxonomy/term/section pages, enables `unsafe` Goldmark rendering, and ignores unused demo/content folders from the theme.
- `content/en/_index.md` is the main landing page. It is assembled from Hugo shortcodes such as `brick_intro`, `brick_image`, `brick_features`, `brick_prices`, `brick_reviews`, and `brick_cta`; inline `<div id="...">` anchors drive the one-page navigation.
- `content/en/get-started.md`, `content/en/404.md`, and `content/en/bricks/` provide supporting pages and reusable brick fallback content.
- `data/settings.yaml` controls theme-level behavior such as `color_name: lintashome`, sticky header, footer style, search, preheader, and intersection observer.
- `data/en/*.yaml` provides localized site data used by layouts: header navigation/CTA, general contact info, footer links, reviews, contact form, and webshop/cart-related settings.
- `themes/hugobricks/layouts/` contains the active templates. `baseof.html` defines the global document shell, header, footer, CSS includes, and theme scripts. `home.html` renders page content after unwrapping accidental paragraph wrappers around section tags. Brick shortcodes in `themes/hugobricks/layouts/_shortcodes/` map to partials in `themes/hugobricks/layouts/_partials/`.
- `static/css/lintashome.css` is the active site stylesheet because `data/settings.yaml` sets `color_name: lintashome`. It imports the theme CSS files and then applies LintasHome-specific overrides.
- `static/` contains images, icons, JavaScript, CSS, and other assets served at the site root.
- `bayar.lintashome.com/` is a standalone static payment/QRIS page and is not part of the Hugo page pipeline.

## Content and styling conventions

- Most homepage edits should happen in `content/en/_index.md`; change shared navigation/contact/footer/review data in `data/en/*.yaml` instead of hardcoding those values in templates.
- Brick sections use markdown split by `---` inside shortcode blocks. For example, `brick_prices` treats the content before the first separator as the section intro and each following chunk as one pricing card.
- The theme expects assets referenced from content to be available under `static/`, so `/foo.webp` maps to `static/foo.webp`.
- Keep LintasHome-specific CSS in `static/css/lintashome.css` unless changing reusable theme behavior. Theme base styles are imported from `/css/fonts.css`, `/css/base.css`, `/css/header-footer.css`, and `/css/bricks.css`.
- If changing template behavior, prefer editing the local theme under `themes/hugobricks/layouts/`; there is no upstream theme dependency manager in this repo.
