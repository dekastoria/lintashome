# Speedtest Section Design

## Goal

Add a Speedtest section to the Lintashomes homepage so visitors can test their connection without leaving the main landing page.

## Placement

The section appears after the pricing section and before the final Contact/CTA section. The navbar gets a `Speedtest` item placed between `Harga` and `Kontak`, linking to `/#speedtest`.

## Implementation approach

Use a direct inline homepage section in `content/en/_index.md`, not a reusable brick or shortcode. This keeps the change small because the Speedtest embed is only needed once on the homepage.

The section will include:

- Anchor: `<div id="speedtest"></div>`
- Text column with label, heading, and short explanatory copy
- Iframe column embedding `https://dsserver.speedtestcustom.com`

No fallback button will be added, per user preference.

## UI behavior

Desktop layout uses two columns: copy on the left and the Speedtest iframe on the right. Mobile layout stacks the copy above the iframe.

The iframe must have an explicit height so it does not collapse, and it should use:

- `title="Speedtest Lintashomes"` for accessibility
- `loading="lazy"` because the section is below the fold
- `scrolling="no"` and `frameborder="0"` to match the SpeedtestCustom embed behavior

## Styling

Add Lintashomes-specific styles to `static/css/lintashome.css`. The section should feel consistent with the current landing page: clean spacing, restrained teal accent, and a contained iframe surface. Do not edit theme base CSS unless necessary.

## Validation

Run `hugo` to verify the static build. For UI verification, run the Hugo dev server and inspect the homepage in a browser at desktop and mobile widths, checking navbar anchor scrolling and iframe rendering.
