# alfa. — Portfolio Website

> Website portofolio pribadi oleh **Fahmi Alfatah** — menawarkan jasa pembuatan website profesional.
> Dibangun dengan **Astro**, **Tailwind CSS**, dan **GSAP**.

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=flat-square&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

## ✨ Fitur

- ⚡ **Astro Static Site Generator** — output statis, super cepat
- 🎨 **Tailwind CSS** — utility-first styling dengan tema kustom
- 🎬 **GSAP Animations** — parallax, stagger, scroll reveal yang smooth
- 🌓 **Dark Mode** — toggle dengan preferensi sistem
- 📱 **Fully Responsive** — mobile-first design
- 🪟 **Glassmorphism UI** — kartu dengan efek kaca elegan
- 📧 **Formspree Integration** — form kontak siap pakai
- 🚀 **GitHub Actions** — auto-deploy ke GitHub Pages
- 🔤 **Fonts**: Inter (body) + Space Grotesk (display)
- 🎯 **SEO Optimized** — meta tags, Open Graph, sitemap

---

## 🚀 Cara Menjalankan

### Prasyarat

- **Node.js** versi 18+ (disarankan v20 LTS)
- **npm** atau **pnpm**

### Instalasi

```bash
# Masuk ke folder proyek
cd alfa

# Install dependensi
npm install
```

### Development

```bash
# Jalankan development server
npm run dev
```

Buka [http://localhost:4321](http://localhost:4321) di browser.

### Build Production

```bash
# Build untuk production (output di folder dist/)
npm run build

# Preview hasil build
npm run preview
```

---

## 📁 Struktur Proyek

```
alfa/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions untuk deploy otomatis
├── public/
│   ├── favicon.svg             # Favicon
│   └── CNAME                   # Custom domain (isi jika perlu)
├── src/
│   ├── components/
│   │   ├── Navbar.astro        # Navigasi + dark mode toggle
│   │   ├── Hero.astro          # Hero section dengan parallax
│   │   ├── Services.astro      # Kartu layanan glassmorphism
│   │   ├── Portfolio.astro     # Showcase proyek + tilt effect
│   │   ├── About.astro         # Tentang + skill bars
│   │   ├── Testimonials.astro  # Carousel testimoni klien
│   │   ├── Contact.astro       # Form kontak (Formspree)
│   │   └── Footer.astro        # Footer
│   ├── pages/
│   │   └── index.astro         # Halaman utama (single page)
│   └── styles/
│       └── global.css          # Styling global, font, animasi
├── astro.config.mjs            # Konfigurasi Astro
├── tailwind.config.cjs         # Konfigurasi Tailwind + tema kustom
├── package.json
└── README.md
```

---

## ⚙️ Kustomisasi

### 1. Ganti Identitas

- **Nama brand & tagline**: Edit di `src/components/Hero.astro`
- **Foto profil**: Ganti placeholder di `src/components/About.astro`
- **Data layanan**: Edit array `services` di `src/components/Services.astro`
- **Proyek portofolio**: Edit array `projects` di `src/components/Portfolio.astro`
- **Kontak & sosial media**: Edit di `src/components/Contact.astro` dan `Footer.astro`

### 2. Formspree Setup

1. Daftar di [formspree.io](https://formspree.io/)
2. Buat form baru, copy Form ID
3. Ganti nilai `formspreeId` di `src/components/Contact.astro`:

```astro
const formspreeId = 'your-actual-form-id';
```

### 3. Warna Tema

Edit `tailwind.config.cjs` pada bagian `theme.extend.colors`:

- `cream` — palet netral hangat
- `sage` — warna aksen utama (hijau sage)
- `accent` — warna aksen sekunder (ungu)

### 4. Deploy ke GitHub Pages

1. Push repo ke GitHub
2. Di repo Settings → Pages → Source pilih **GitHub Actions**
3. Push ke branch `main`, workflow `deploy.yml` akan otomatis build & deploy
4. Website akan live di `https://<username>.github.io/<repo-name>/`

> **Catatan**: Jika deploy ke subpath (misal `/alfa`), pastikan `base` di `astro.config.mjs` sesuai dengan nama repo.

---

## 🎨 Desain System

### Color Palette

| Warna | Hex | Penggunaan |
|-------|-----|------------|
| Cream 50 | `#FAF9F7` | Background utama (light mode) |
| Cream 900 | `#1C1B18` | Background utama (dark mode) |
| Sage 500 | `#7A9368` | Aksen utama, tombol, link |
| Sage 600 | `#5F7A50` | Hover state |
| Accent 500 | `#6C5DD3` | Aksen sekunder, gradien |

### Typography

- **Headings**: Space Grotesk Bold — tracking tight
- **Body**: Inter Light — line height 1.6
- **Fluid scale**: `clamp()` untuk responsive typography otomatis

### Animation Principles

- Durasi: `300-800ms`
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Parallax multi-layer dengan kecepatan berbeda
- Scroll reveal dengan stagger pada children

---

## 📝 Catatan Penting

- **Foto profil** masih placeholder — ganti dengan foto asli
- **Proyek portofolio** menggunakan data fiktif — isi dengan proyekmu yang sebenarnya
- **Formspree ID** perlu diganti agar form kontak berfungsi
- **Custom domain**: Isi file `public/CNAME` dengan domainmu, lalu setup DNS

---

## 📄 License

MIT — bebas digunakan dan dimodifikasi untuk keperluan pribadi maupun komersial.

---

Dibuat dengan ❤️ oleh **Fahmi Alfatah**
