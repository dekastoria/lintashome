# LintasHome

Website utama LintasHome untuk promosi layanan internet rumah dan bisnis di Jepara.

Repository ini berisi situs **Hugo** untuk landing page utama, halaman pendaftaran singkat, blok konten reusable, serta aset statis pendukung. Repo ini juga menyimpan halaman pembayaran statis terpisah di folder `bayar.lintashome.com/`.

## Ringkasan

- Landing page utama untuk akuisisi calon pelanggan
- CTA pendaftaran dan konsultasi via WhatsApp
- Paket internet rumah, UMKM, dan bisnis
- Section layanan seperti dedicated, hotspot voucher, IPTV, CCTV, dan layanan tambahan
- Build static site cepat dengan Hugo
- Halaman pembayaran statis terpisah di `bayar.lintashome.com/`

## Tech Stack

- [Hugo Extended](https://gohugo.io/) `v0.152.2+extended`
- Konten berbasis Markdown + data YAML
- Styling kustom di `static/css/lintashome.css`
- HTML statis untuk halaman pembayaran di `bayar.lintashome.com/index.html`

## Struktur Project

- `hugo.yaml` — konfigurasi utama Hugo
- `content/en/_index.md` — landing page utama
- `content/en/get-started.md` — halaman pendaftaran/kontak
- `content/en/404.md` — halaman 404
- `content/en/bricks/` — blok konten reusable seperti CTA, map, dan reviews
- `data/en/general.yaml` — kontak umum situs
- `data/en/header.yaml` — navigasi/header
- `data/en/footer.yaml` — footer dan social links
- `data/en/reviews.yaml` — data testimoni
- `data/en/contactform.yaml` — konfigurasi form kontak
- `data/en/webshop.yaml` — data CTA/tautan terkait penjualan
- `static/` — aset statis dan CSS kustom
- `themes/` — komponen tema dan layout situs
- `bayar.lintashome.com/` — halaman pembayaran statis dan aset QRIS

## Menjalankan Project

Prerequisite:

- Hugo Extended terpasang

Jalankan lokal:

```bash
hugo server --source "D:\vibe-2026\lintashome" -D --bind 127.0.0.1 --port 1313
```

Lalu buka:

- `http://127.0.0.1:1313/`

Build production:

```bash
hugo --source "D:\vibe-2026\lintashome"
```

Output build akan dibuat di folder `public/`.

## Konten Utama Situs

Landing page saat ini mencakup:

- Hero section dengan CTA daftar
- Tentang LintasHome
- Keunggulan layanan internet
- Testimoni pelanggan
- Daftar layanan utama
- Harga paket internet
- CTA kontak WhatsApp

Halaman yang tersedia di repo saat ini:

- `/` dari `content/en/_index.md`
- `/get-started/` dari `content/en/get-started.md`
- halaman `404`

## Kontak Saat Ini

- WhatsApp / Telepon: `+6282225488188`
- Email: `admin@lintasjepara.com`

## Catatan

README ini mencerminkan struktur repo saat ini setelah penyederhanaan sejumlah halaman lama menjadi fokus pada landing page utama, halaman get started, dan halaman pembayaran statis terpisah.

