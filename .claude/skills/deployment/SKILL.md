---
name: deployment
description: Düzkar Dizayn deployment ve build bilgileri. Build komutları, production ayarları ve environment variables hakkında bilgi sağlar. Deploy veya production işlemleri için kullanılmalıdır.
---

# Düzkar Dizayn - Deployment Kılavuzu

## Build Komutları

```bash
# Development server (http://localhost:3000)
npm run dev

# Production build oluştur
npm run build

# Production server başlat
npm start

# Linting kontrolü
npm run lint
```

## Next.js Konfigürasyonu

### next.config.ts (Ana Config)
```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Tüm HTTPS domain'lerden görsel yükleme izni
      },
    ],
  },
  output: "standalone", // Docker/production için optimize
};
```

**Standalone Output:**
- `.next/standalone` klasörü oluşturur
- Minimal production bundle
- Node.js server dahil
- Docker deployment için ideal

### next.config.mjs (Alternatif)
```javascript
const nextConfig = {
  images: {
    unoptimized: true, // Image optimization devre dışı
  },
};
```

## Image Optimization

**Yapılandırma:**
- Remote pattern: Tüm HTTPS kaynakları izinli
- Local images: `/public/images/` klasöründen
- Format: Otomatik WebP/AVIF dönüşümü (production'da)

**Görsel Klasör Yapısı:**
```
public/images/
├── about/          # Hakkında görselleri
├── projects/       # Proje görselleri
│   ├── emtan-quattro/
│   ├── emtan-west-park/
│   ├── merit-park-hotel/
│   └── merit-royal-premium/
├── services/       # Servis görselleri
│   ├── cephe/
│   ├── izolasyon/
│   └── tadilat/
└── references/     # Referans logoları
```

## Environment Variables

Contact form için nodemailer yapılandırması gerekir:

```env
# .env.local (oluşturulmalı)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
SMTP_FROM=noreply@duzkardizayn.com
CONTACT_EMAIL=info@duzkardizayn.com
```

**API Route:** `/app/api/contact/route.ts`

## Production Checklist

### Build Öncesi
- [ ] `npm run lint` hatasız geçmeli
- [ ] Tüm görseller `/public/images/` içinde
- [ ] Environment variables tanımlı
- [ ] Metadata doğru (title, description)

### Build Sonrası
- [ ] `npm run build` başarılı
- [ ] Static pages generate edildi
- [ ] Sitemap oluşturuldu (`/sitemap.xml`)
- [ ] Robots.txt mevcut (`/robots.txt`)

## Static Generation

Dinamik rotalar için `generateStaticParams`:

```typescript
// app/projeler/[slug]/page.tsx
export async function generateStaticParams() {
  return [
    { slug: "emtan-west-park" },
    { slug: "merit-park-hotel" },
    { slug: "emtan-quattro" },
    { slug: "merit-royal-premium" },
  ];
}
```

## Deployment Seçenekleri

### Vercel (Önerilen)
```bash
# Vercel CLI ile deploy
npx vercel

# Production deploy
npx vercel --prod
```

### Docker
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
```

### PM2 (VPS)
```bash
# Build
npm run build

# PM2 ile başlat
pm2 start npm --name "duzkardizayn" -- start

# Otomatik restart
pm2 startup
pm2 save
```

## Performance Optimizasyonları

**Next.js Built-in:**
- Automatic code splitting
- Image optimization (next/image)
- Font optimization (next/font)
- Static generation (SSG)
- Incremental Static Regeneration (ISR)

**Tailwind CSS:**
- Unused CSS purge (production'da)
- Content paths tanımlı

## Domain ve SSL

**Mevcut Domain:** `duzkardizayn.com`
**SSL:** Hosting provider tarafından sağlanmalı (Let's Encrypt önerilir)

## Monitoring

Production'da izlenmesi gereken:
- Core Web Vitals (LCP, FID, CLS)
- Contact form submission başarı oranı
- 404 hataları
- Server response time

## Dosya Referansları

- Build config: `next.config.ts`
- Package scripts: `package.json`
- TypeScript config: `tsconfig.json`
- Tailwind config: `tailwind.config.ts`
- PostCSS config: `postcss.config.mjs`
