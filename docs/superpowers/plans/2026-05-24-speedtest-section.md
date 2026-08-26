# Speedtest Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Speedtest navbar item and embedded SpeedtestCustom section to the Lintashomes homepage before the final Contact/CTA section.

**Architecture:** This is a small Hugo content and styling change. The homepage section is added inline in `content/en/_index.md`, navigation is data-driven through `data/en/header.yaml`, and visual styling stays in the site override stylesheet `static/css/lintashome.css`.

**Tech Stack:** Hugo Extended, Markdown with inline HTML, YAML data files, CSS.

---

## File structure

- Modify `data/en/header.yaml`: add the `Speedtest` navbar item between `Harga` and `Kontak`.
- Modify `content/en/_index.md`: add the `#speedtest` anchor and inline Speedtest section after `{{< /brick_prices >}}` and before the existing Contact/CTA block.
- Modify `static/css/lintashome.css`: add responsive styles for the Speedtest section and iframe.

---

### Task 1: Add Speedtest navbar item

**Files:**
- Modify: `data/en/header.yaml:4-14`

- [ ] **Step 1: Update the menu list**

Replace the current `menuitems` block with:

```yaml
menuitems:
  - title: Tentang
    link: /#tentang
  - title: Testimoni
    link: /#testimoni
  - title: Layanan
    link: /#layanan
  - title: Harga
    link: /#harga
  - title: Speedtest
    link: /#speedtest
  - title: Kontak
    link: /#kontak
```

- [ ] **Step 2: Verify YAML parses through Hugo**

Run:

```bash
hugo
```

Expected: Hugo builds successfully with no YAML parse errors.

---

### Task 2: Add inline Speedtest homepage section

**Files:**
- Modify: `content/en/_index.md:192-196`

- [ ] **Step 1: Insert the section before Contact/CTA**

Find:

```markdown
{{< /brick_prices >}}

<!-- ===== KONTAK ===== -->
<div id="kontak"></div>
{{< brick_cta >}}{{< /brick_cta >}}
```

Replace it with:

```markdown
{{< /brick_prices >}}

<!-- ===== SPEEDTEST ===== -->
<div id="speedtest"></div>
<section class="speedtest-section">
  <div class="container">
    <div class="speedtest-layout">
      <div class="speedtest-copy">
        <p class="speedtest-kicker">Speedtest Lintashomes</p>
        <h2>Uji Kecepatan Internet Anda</h2>
        <p>Cek kecepatan koneksi Lintashomes Anda secara real-time melalui server speedtest kami.</p>
      </div>
      <div class="speedtest-frame">
        <iframe
          src="https://dsserver.speedtestcustom.com"
          title="Speedtest Lintashomes"
          loading="lazy"
          scrolling="no"
          frameborder="0"
          allow="fullscreen"></iframe>
      </div>
    </div>
  </div>
</section>

<!-- ===== KONTAK ===== -->
<div id="kontak"></div>
{{< brick_cta >}}{{< /brick_cta >}}
```

- [ ] **Step 2: Verify Hugo renders the inline HTML**

Run:

```bash
hugo
```

Expected: Hugo builds successfully and does not escape the `<section>` or `<iframe>` markup.

---

### Task 3: Add responsive Speedtest styling

**Files:**
- Modify: `static/css/lintashome.css`

- [ ] **Step 1: Append Speedtest styles at the end of the file**

Add this CSS after the existing footer/logo overrides:

```css
.speedtest-section {
  padding: clamp(64px, 8vw, 112px) 0;
  background: oklch(98% 0.006 210);
}

.speedtest-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.5fr);
  gap: clamp(28px, 5vw, 72px);
  align-items: center;
}

.speedtest-copy {
  max-width: 34rem;
}

.speedtest-kicker {
  margin: 0 0 12px;
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.speedtest-copy h2 {
  margin-bottom: 16px;
}

.speedtest-copy p {
  margin-bottom: 0;
}

.speedtest-frame {
  overflow: hidden;
  border-radius: 24px;
  background: oklch(96% 0.008 210);
  box-shadow: 0 24px 70px rgb(38 50 56 / 0.14);
}

.speedtest-frame iframe {
  display: block;
  width: 100%;
  height: 560px;
  border: 0;
}

@media (max-width: 900px) {
  .speedtest-layout {
    grid-template-columns: 1fr;
  }

  .speedtest-frame iframe {
    height: 640px;
  }
}
```

- [ ] **Step 2: Verify Hugo build still succeeds**

Run:

```bash
hugo
```

Expected: Hugo builds successfully.

---

### Task 4: Browser verification

**Files:**
- No source edits expected unless verification reveals a visible issue.

- [ ] **Step 1: Start the dev server**

Run:

```bash
hugo server -D --bind 127.0.0.1 --port 1313
```

Expected: Hugo serves the site at `http://127.0.0.1:1313/`.

- [ ] **Step 2: Check desktop homepage behavior**

Open `http://127.0.0.1:1313/` in a browser. Confirm:

- Navbar includes `Speedtest` between `Harga` and `Kontak`.
- Clicking `Speedtest` scrolls to the Speedtest section.
- The section appears after pricing and before Contact/CTA.
- The iframe renders inside the section without collapsing.

- [ ] **Step 3: Check mobile homepage behavior**

Resize browser below `900px`. Confirm:

- Speedtest copy stacks above the iframe.
- Iframe remains usable and does not overflow horizontally.
- Mobile navbar anchor still scrolls to the section.

- [ ] **Step 4: Commit implementation**

Run:

```bash
git add data/en/header.yaml content/en/_index.md static/css/lintashome.css
git commit -m "$(cat <<'EOF'
Add homepage speedtest section

Embed the SpeedtestCustom widget before the contact CTA and expose it through the one-page navigation.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

Expected: A new commit is created containing only the implementation files.

---

## Self-review

- Spec coverage: The plan adds the navbar item, places the Speedtest section before Contact/CTA, embeds `https://dsserver.speedtestcustom.com`, omits the fallback button, styles the layout, and validates via Hugo plus browser checks.
- Placeholder scan: No TBD/TODO/fill-in placeholders remain.
- Scope check: This is one small homepage feature and does not need decomposition.
