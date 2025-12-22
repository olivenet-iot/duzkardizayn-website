---
name: seo-content
description: Düzkar Dizayn SEO ve içerik kuralları. Meta tag yapısı, anahtar kelimeler, schema markup ve Türkçe içerik kuralları hakkında bilgi sağlar. Yeni sayfa veya içerik oluştururken SEO uyumluluğu için kullanılmalıdır.
---

# Düzkar Dizayn - SEO ve İçerik Kılavuzu

## Ana Metadata Yapısı

`app/layout.tsx` içinde tanımlı:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://duzkardizayn.com"),
  title: "Düzkar Dizayn | İzolasyon, Su Yalıtımı ve Cephe Kaplama - Girne, KKTC",
  description: "Kuzey Kıbrıs Girne'de 25 yıllık deneyimle profesyonel izolasyon,
               su yalıtımı ve cephe kaplama çözümleri...",
  keywords: [...],
  openGraph: {...},
  twitter: {...},
}
```

## Hedef Anahtar Kelimeler

### İzolasyon Servisi
```
izolasyon kıbrıs, izolasyon girne, su yalıtımı, temel izolasyonu,
çatı izolasyonu, teras izolasyonu, balkon su yalıtımı, havuz izolasyonu,
ıslak hacim izolasyonu, bitüm membran, nem yalıtımı, Düzkar Dizayn
```

### Cephe Servisi
```
dış cephe boya girne, iç cephe boya kıbrıs, mantolama kktc, sıva alçı,
dekoratif boya, cephe kaplama, bina boyama, apartman boyası, villa dış cephe,
ısı yalıtımı
```

### Tadilat Servisi
```
tadilat kıbrıs, asma tavan, zemin kaplama, taş duvar kaplama,
daire tadilatı, mutfak yenileme, banyo tadilatı, renovasyon, ev tadilatı
```

### Coğrafi Hedefleme
```
girne, kıbrıs, kuzey kıbrıs, kktc, lefkoşa, gazimağusa, güzelyurt, alsancak
```

## LocalBusiness Schema

`app/layout.tsx` içinde JSON-LD olarak tanımlı:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Düzkar Dizayn",
  "description": "Profesyonel izolasyon ve cephe kaplama hizmetleri",
  "url": "https://duzkardizayn.com",
  "telephone": "+905488888503",
  "email": "info@duzkardizayn.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ankara Caddesi No:111",
    "addressLocality": "Alsancak, Girne",
    "postalCode": "99320",
    "addressCountry": "CY"
  },
  "geo": {
    "latitude": 35.343519,
    "longitude": 33.195114
  },
  "foundingDate": "1999",
  "areaServed": ["Girne", "Lefkoşa", "Gazimağusa", "Güzelyurt"],
  "openingHours": ["Mo-Fr 08:00-18:00", "Sa 08:00-14:00"]
}
```

## FAQ Schema

Servis sayfalarında `FAQSection` componenti kullanılır:

```typescript
// components/services/FAQSection.tsx
// JSON-LD FAQPage schema otomatik oluşturulur

interface FAQ {
  question: string;
  answer: string;
}
```

Her servis sayfasında 8-10 FAQ sorusu bulunur.

## Servis Sayfası Meta Pattern

```typescript
export const metadata: Metadata = {
  title: "[Servis Adı] | Düzkar Dizayn - Girne, KKTC",
  description: "[150-160 karakter açıklama, anahtar kelime içerir]",
  keywords: ["anahtar", "kelimeler", "listesi"],
  alternates: {
    canonical: "https://duzkardizayn.com/hizmetler/[slug]",
  },
  openGraph: {
    title: "[Servis Adı]",
    description: "[Açıklama]",
    url: "https://duzkardizayn.com/hizmetler/[slug]",
    images: [{ url: "/images/services/[slug]/hero.jpg" }],
    locale: "tr_TR",
    type: "website",
  },
};
```

## Proje Sayfası Dinamik Meta

`app/projeler/[slug]/page.tsx` içinde:

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  return {
    title: `${project.title} | Düzkar Dizayn`,
    description: project.shortDescription,
    openGraph: {
      images: [{ url: project.coverImage }],
    },
  };
}
```

## Türkçe İçerik Kuralları

### Başlık Formatı
- Ana başlık: `[Servis] | Düzkar Dizayn - Girne, KKTC`
- Alt başlıklar: Title case, Türkçe karakterler (İ, Ş, Ğ, Ü, Ö, Ç)

### Güven İfadeleri
- "25 yıllık deneyim" (25 years experience)
- "5 yıl garanti" (5-year guarantee)
- "Profesyonel ekip"
- "Kuzey Kıbrıs'ın önde gelen firması"

### Coğrafi Vurgular
- Her sayfada "Girne", "Kuzey Kıbrıs" veya "KKTC" geçmeli
- Servis alanları belirtilmeli

### İç Bağlantılar
`SEOContentSection` componenti ile internal linking:
```typescript
// components/services/SEOContentSection.tsx
const InternalLink = ({ href, children }) => (
  <Link href={href} className="text-gold-primary hover:underline">
    {children}
  </Link>
);
```

## Sitemap ve Robots

### Dinamik Sitemap (`app/sitemap.ts`)
```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://duzkardizayn.com', lastModified: new Date() },
    { url: 'https://duzkardizayn.com/projeler', lastModified: new Date() },
    // Tüm proje ve servis sayfaları
  ];
}
```

### Robots.txt (`app/robots.ts`)
```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://duzkardizayn.com/sitemap.xml',
  };
}
```

## Open Graph Görselleri

- Boyut: 1200x630px önerilir
- Format: JPG veya PNG
- Konum: `/public/images/[sayfa]/og-image.jpg`

## Sayfa Yapısı Şablonu

1. Hero bölümü (breadcrumb dahil)
2. SEO içerik bloğu (açıklayıcı paragraflar)
3. Servis/Proje detayları
4. FAQ bölümü (schema markup ile)
5. CTA bölümü
6. İç bağlantılar (ilgili sayfalar)
