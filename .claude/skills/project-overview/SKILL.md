---
name: project-overview
description: Düzkar Dizayn projesi hakkında genel bilgi sağlar. Proje yapısı, tech stack, sayfa rotaları ve çalıştırma komutları hakkında sorularda kullanılmalıdır.
---

# Düzkar Dizayn - Proje Genel Bakış

## Proje Hakkında

Düzkar Dizayn, Kuzey Kıbrıs Girne merkezli bir inşaat ve tadilat şirketinin portfolyo websitesidir. 1999'dan beri faaliyet gösteren şirket izolasyon, su yalıtımı, cephe kaplama ve genel tadilat hizmetleri sunmaktadır.

**Şirket Bilgileri:**
- Adres: Ankara Caddesi No:109, Alsancak, Girne 99320
- Telefon: +905338311432
- Email: info@duzkardizayn.com
- Website: https://duzkardizayn.com

## Tech Stack

| Teknoloji | Versiyon | Kullanım |
|-----------|----------|----------|
| Next.js | 14.2.35 | React framework (App Router) |
| React | 18 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4.1 | Utility-first CSS |
| nodemailer | 7.0.11 | Contact form email |
| clsx | 2.1.1 | Conditional CSS classes |

## Dizin Yapısı

Site **iki dilli**: Türkçe kökte (`/`), İngilizce `/en` altında. Her dilin kendi
root layout'u var (route group'lar sayesinde `<html lang>` doğru veriliyor) ve
route group'lar URL'de görünmediği için Türkçe URL'ler değişmedi.

```
duzkardizayn-website/
├── app/                           # Next.js App Router
│   ├── (tr)/                      # TÜRKÇE — route group, URL'de görünmez
│   │   ├── layout.tsx             # Root layout, <html lang="tr">, TR schema
│   │   ├── page.tsx               # /
│   │   ├── hizmetler/             # /hizmetler/...
│   │   ├── projeler/              # /projeler/...
│   │   ├── blog/                  # /blog/...
│   │   ├── hakkimizda/  sss/
│   │   └── not-found.tsx
│   ├── (en)/                      # İNGİLİZCE — ayrı root layout
│   │   ├── layout.tsx             # <html lang="en">, EN LocalBusiness schema
│   │   └── en/                    # /en/...
│   │       ├── page.tsx           # /en
│   │       ├── services/          # /en/services/...
│   │       ├── projects/          # /en/projects/...
│   │       ├── blog/              # /en/blog/...
│   │       ├── about/  faq/
│   │       └── not-found.tsx
│   ├── api/contact/route.ts       # Contact form API
│   ├── globals.css                # Global stiller (iki layout da import eder)
│   ├── sitemap.ts                 # Dinamik sitemap, hreflang anotasyonlu
│   └── robots.ts                  # Robots.txt
├── components/                    # Ortak componentler (dile duyarlı)
│   ├── services/                  # Servis componentleri (prop-driven)
│   ├── projects/  blog/
│   └── Header/Footer/Hero/Contact # usePathname ile TR/EN sözlüğü seçer
├── content/
│   ├── blog/                      # Türkçe MDX yazılar
│   └── blog-en/                   # İngilizce MDX yazılar (çeviri DEĞİL, özgün)
├── lib/
│   ├── i18n.ts                    # routePairs, alternatesFor(), dil değiştirici
│   ├── blog.ts / blog-en.ts       # MDX loader'lar
│   ├── projects-data.ts           # Proje verileri (TR)
│   ├── projects-data-en.ts        # Proje verileri (EN)
│   └── utils.ts                   # Helper fonksiyonlar
├── public/images/                 # og-image.jpg (TR) + og-image-en.jpg (EN)
├── tailwind.config.ts             # Tailwind ayarları
├── next.config.mjs                # Next.js config + 301 redirect'ler
└── package.json                   # Dependencies
```

## Sayfa Rotaları

| Türkçe | İngilizce | Açıklama |
|--------|-----------|----------|
| `/` | `/en` | Ana sayfa |
| `/hizmetler` | `/en/services` | Hizmetler hub |
| `/hizmetler/izolasyon-ve-su-yalitimi` | `/en/services/waterproofing` | İzolasyon |
| `/hizmetler/ic-ve-dis-cephe-uygulamalari` | `/en/services/facades-and-rendering` | Cephe |
| `/hizmetler/genel-yenileme-ve-tadilat` | `/en/services/renovation` | Tadilat |
| `/projeler` · `/projeler/[slug]` | `/en/projects` · `/en/projects/[slug]` | Projeler |
| `/blog` · `/blog/[slug]` | `/en/blog` · `/en/blog/[slug]` | Blog |
| `/hakkimizda` | `/en/about` | Hakkımızda |
| `/sss` | `/en/faq` | S.S.S. |

Bu eşleşmeler `lib/i18n.ts` içindeki `routePairs` dizisinde **tek kaynaktan**
tanımlı. hreflang etiketleri, dil değiştirici ve sitemap hep oradan üretiliyor —
yeni bir sayfa çifti eklerken önce oraya satır eklenmeli.

## Çalıştırma Komutları

```bash
# Development server başlat (http://localhost:3000)
npm run dev

# Production build oluştur
npm run build

# Production server başlat
npm start

# Linting çalıştır
npm run lint
```

## Mevcut Projeler

1. **Emtan West Park** (konut) - Alsancak/Girne
2. **Merit Park Hotel** (otel) - Girne
3. **Emtan Quattro** (karma) - Girne
4. **Merit Royal Premium** (otel) - Girne

## Önemli Dosyalar

- `app/layout.tsx` - Font ve metadata tanımları
- `tailwind.config.ts` - Renk paleti ve tema
- `lib/projects-data.ts` - Proje interface ve veriler
- `components/services/index.ts` - Servis component exports
