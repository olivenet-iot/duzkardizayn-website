---
name: project-overview
description: Düzkar Dizayn projesi hakkında genel bilgi sağlar. Proje yapısı, tech stack, sayfa rotaları ve çalıştırma komutları hakkında sorularda kullanılmalıdır.
---

# Düzkar Dizayn - Proje Genel Bakış

## Proje Hakkında

Düzkar Dizayn, Kuzey Kıbrıs Girne merkezli bir inşaat ve tadilat şirketinin portfolyo websitesidir. 1999'dan beri faaliyet gösteren şirket izolasyon, su yalıtımı, cephe kaplama ve genel tadilat hizmetleri sunmaktadır.

**Şirket Bilgileri:**
- Adres: Ankara Caddesi No:111, Alsancak, Girne 99320
- Telefon: +905488888503
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

```
duzkardizayn-website/
├── app/                           # Next.js App Router
│   ├── api/contact/route.ts       # Contact form API
│   ├── hizmetler/                 # Servis sayfaları
│   │   ├── izolasyon-ve-su-yalitimi/
│   │   ├── ic-ve-dis-cephe-uygulamalari/
│   │   └── genel-yenileme-ve-tadilat/
│   ├── projeler/                  # Proje sayfaları
│   │   ├── page.tsx               # Proje listesi
│   │   └── [slug]/page.tsx        # Proje detay
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Ana sayfa
│   ├── globals.css                # Global stiller
│   ├── sitemap.ts                 # Dinamik sitemap
│   └── robots.ts                  # Robots.txt
├── components/                    # Yeniden kullanılabilir componentler
│   ├── services/                  # Servis componentleri
│   └── projects/                  # Proje componentleri
├── lib/                           # Utility fonksiyonlar
│   ├── projects-data.ts           # Proje verileri
│   ├── projects.ts                # Proje utilities
│   └── utils.ts                   # Helper fonksiyonlar
├── public/images/                 # Statik görseller
├── tailwind.config.ts             # Tailwind ayarları
├── next.config.mjs                # Next.js config
└── package.json                   # Dependencies
```

## Sayfa Rotaları

| Rota | Dosya | Açıklama |
|------|-------|----------|
| `/` | `app/page.tsx` | Ana sayfa |
| `/projeler` | `app/projeler/page.tsx` | Proje listesi (filtrelenebilir) |
| `/projeler/[slug]` | `app/projeler/[slug]/page.tsx` | Proje detay |
| `/hizmetler/izolasyon-ve-su-yalitimi` | `app/hizmetler/.../page.tsx` | İzolasyon servisi |
| `/hizmetler/ic-ve-dis-cephe-uygulamalari` | `app/hizmetler/.../page.tsx` | Cephe servisi |
| `/hizmetler/genel-yenileme-ve-tadilat` | `app/hizmetler/.../page.tsx` | Tadilat servisi |

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
