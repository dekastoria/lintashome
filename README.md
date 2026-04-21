# LintasHome

Website company profile resmi LintasHome untuk promosi layanan internet rumah dan bisnis di wilayah Jepara.

Repository ini menggunakan **Hugo** dengan struktur komponen konten yang sudah dikustomisasi untuk kebutuhan landing page, halaman layanan, CTA WhatsApp, dan konten pemasaran LintasHome.

## Ringkasan

- Landing page utama untuk akuisisi calon pelanggan
- CTA pendaftaran dan konsultasi via WhatsApp
- Paket internet rumah, UMKM, dan bisnis
- Section layanan tambahan seperti dedicated, hotspot voucher, IPTV, CCTV, dan server
- Build static site cepat dengan Hugo

## Tech Stack

- [Hugo Extended](https://gohugo.io/) `v0.152.2+extended`
- Konten berbasis Markdown + data YAML
- Styling kustom di `static/css/lintashome.css`

## Struktur Project

- `hugo.yaml` — konfigurasi utama Hugo
- `content/en/_index.md` — landing page utama
- `content/en/bricks/` — blok CTA dan konten reusable
- `content/en/get-started.md` — halaman kontak/lead form
- `data/en/general.yaml` — kontak umum situs
- `data/en/webshop.yaml` — link CTA/cart WhatsApp
- `data/en/footer.yaml` — footer dan social links
- `themes/` — komponen tema dan layout situs
- `static/` — aset statis dan CSS kustom

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

Halaman utama saat ini mencakup:

- Hero section dengan CTA daftar
- Tentang LintasHome
- Keunggulan layanan internet
- Testimoni pelanggan
- Daftar layanan utama
- Harga paket internet
- CTA kontak WhatsApp

Halaman tambahan yang tersedia di project:

- `about`
- `blog`
- `contact`
- `faq`
- `get-started`
- `our-services`
- `privacy-policy`
- `team`
- `webshop`

## Kontak Saat Ini

- WhatsApp / Telepon: `+6282225488188`
- Email: `admin@lintasjepara.com`

## Catatan Migrasi dari Repo Sebelumnya

README ini disesuaikan dari repository `dekastoria/lintashome`, tetapi kontennya telah diperbarui agar sesuai dengan implementasi repository lokal ini yang berbasis Hugo.

