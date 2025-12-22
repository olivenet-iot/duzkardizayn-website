---
name: components-guide
description: Düzkar Dizayn component kütüphanesi. Tüm componentlerin listesi, props yapıları ve kullanım örnekleri. Yeni sayfa veya özellik eklerken mevcut componentleri kullanmak için referans alınmalıdır.
---

# Düzkar Dizayn - Component Kılavuzu

## Kök Componentler (`/components/`)

### Header.tsx
**Amaç:** Site navigasyonu ve logo
**Özellikler:**
- Sabit pozisyon, backdrop blur
- Mobil hamburger menü
- Dropdown servis menüsü
- Scroll'da arkaplan değişimi

```jsx
import Header from "@/components/Header";
<Header />
```

### Hero.tsx
**Amaç:** Ana sayfa hero bölümü
**Özellikler:**
- Arkaplan görsel + gradient overlay
- Animasyonlu başlıklar
- CTA butonları
- Gold glow efektleri

### Stats.tsx
**Amaç:** İstatistik gösterimi
**Özellikler:**
- Sayı count-up animasyonu
- IntersectionObserver tetiklemesi
- Oswald font kullanımı

**İstatistikler:**
- 25+ Yıl Deneyim
- 300+ Tamamlanan Proje
- 20+ Uzman Personel
- 5 Yıl Garanti

### Services.tsx
**Amaç:** Ana sayfa servis kartları
**Özellikler:**
- 3 servis kartı grid
- Görsel overlay + hover efekti
- Link to servis sayfaları

### Projects.tsx
**Amaç:** Ana sayfa öne çıkan projeler
**Özellikler:**
- Proje kartları grid
- Filtreleme (Tümü/Konut/Otel/Karma)
- Link to proje detay

### About.tsx
**Amaç:** Şirket hakkında bölümü
**Özellikler:**
- Görsel + metin layout
- Güven rozetleri

### References.tsx
**Amaç:** Müşteri referansları
**Özellikler:**
- Müşteri logoları
- Testimonial slider (opsiyonel)

### Contact.tsx
**Amaç:** İletişim formu
**Özellikler:**
- Form validation
- API call to `/api/contact`
- Başarı/hata mesajları

### Footer.tsx
**Amaç:** Site footer
**Özellikler:**
- İletişim bilgileri
- Navigasyon linkleri
- Sosyal medya

---

## Servis Componentleri (`/components/services/`)

### ServiceHero.tsx
**Amaç:** Servis sayfası hero template
**Props:**
```typescript
interface ServiceHeroProps {
  title: string;
  description: string;
  badges: { text: string }[];
  imageSrc: string;
  imageAlt: string;
}
```
**Kullanım:**
```jsx
import { ServiceHero } from "@/components/services";

<ServiceHero
  title="İzolasyon ve Su Yalıtımı"
  description="Profesyonel izolasyon çözümleri..."
  badges={[{ text: "25 Yıl Deneyim" }, { text: "5 Yıl Garanti" }]}
  imageSrc="/images/services/izolasyon/hero.jpg"
  imageAlt="İzolasyon hizmeti"
/>
```

### TimelineSection.tsx
**Amaç:** Süreç timeline gösterimi
**Props:**
```typescript
interface TimelineProps {
  steps: {
    id: number;
    title: string;
    description: string;
  }[];
}
```
**Kullanım:**
```jsx
<TimelineSection
  steps={[
    { id: 1, title: "Keşif", description: "Ücretsiz yerinde inceleme" },
    { id: 2, title: "Teklif", description: "Detaylı fiyat teklifi" },
    { id: 3, title: "Uygulama", description: "Profesyonel işçilik" },
    { id: 4, title: "Teslim", description: "Kalite kontrol ve garanti" },
  ]}
/>
```

### FeatureCards.tsx
**Amaç:** Özellik kartları grid
**Props:**
```typescript
interface FeatureCardsProps {
  features: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
}
```

### CTASection.tsx
**Amaç:** Call-to-action bölümü
**Özellikler:**
- Telefon ve WhatsApp butonları
- Güven rozetleri
- Gold gradient arkaplan

```jsx
<CTASection />
```

### FAQSection.tsx
**Amaç:** FAQ accordion + schema markup
**Props:**
```typescript
interface FAQProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}
```
**Özellikler:**
- Otomatik JSON-LD FAQ schema
- Accordion toggle

### SEOContentSection.tsx
**Amaç:** SEO içerik bloğu
**Özellikler:**
- InternalLink helper
- Paragraf formatting

### ContactFormSection.tsx
**Amaç:** Sayfa içi iletişim formu
**Özellikler:**
- Form fields: isim, telefon, email, mesaj
- Servis seçimi dropdown
- Validation

---

## Proje Componentleri (`/components/projects/`)

### ProjectCard.tsx
**Amaç:** Proje kartı (liste sayfası için)
**Props:**
```typescript
interface ProjectCardProps {
  project: Project; // lib/projects-data.ts'den
}
```
**Kullanım:**
```jsx
import { ProjectCard } from "@/components/projects";

<ProjectCard project={project} />
```

### ProjectHero.tsx
**Amaç:** Proje detay hero
**Props:**
```typescript
interface ProjectHeroProps {
  project: Project;
}
```

### ProjectInfo.tsx
**Amaç:** Proje sidebar bilgileri
**İçerik:**
- Müşteri adı
- Lokasyon
- Yıl
- Proje tipi

### ProjectServiceCards.tsx
**Amaç:** Proje kapsamındaki servisler
**Props:**
```typescript
interface ProjectServiceCardsProps {
  services: {
    title: string;
    description: string;
  }[];
}
```

### ProjectGallery.tsx
**Amaç:** Proje fotoğraf galerisi
**Props:**
```typescript
interface ProjectGalleryProps {
  images: string[];
  projectTitle: string;
}
```

### OtherProjects.tsx
**Amaç:** İlgili projeler bölümü
**Props:**
```typescript
interface OtherProjectsProps {
  currentSlug: string;
  projects: Project[];
}
```

---

## Import Pattern

Barrel export kullanılır:

```jsx
// Servis componentleri
import {
  ServiceHero,
  TimelineSection,
  FeatureCards,
  CTASection,
  FAQSection,
  SEOContentSection,
  ContactFormSection,
} from "@/components/services";

// Proje componentleri
import {
  ProjectCard,
  ProjectHero,
  ProjectInfo,
  ProjectServiceCards,
  ProjectGallery,
  OtherProjects,
} from "@/components/projects";
```

---

## Servis Sayfası Özel Componentleri

### İzolasyon Sayfası (`/app/hizmetler/izolasyon-ve-su-yalitimi/components/`)
- `IzolasyonHero.tsx` - Özel hero tasarımı
- `IzolasyonTypes.tsx` - İzolasyon türleri grid
- `AdvancedTechnology.tsx` - Teknoloji showcase
- `ProcessTimeline.tsx` - Süreç timeline
- `Expertise.tsx` - Uzmanlık alanları
- `ServiceCTA.tsx` - Özel CTA

### Cephe Sayfası (`/app/hizmetler/ic-ve-dis-cephe-uygulamalari/components/`)
- `CepheServices.tsx` - Cephe servisleri grid

### Tadilat Sayfası (`/app/hizmetler/genel-yenileme-ve-tadilat/components/`)
- `TadilatServices.tsx` - Tadilat servisleri grid

---

## Utility Fonksiyonlar (`/lib/utils.ts`)

```typescript
// Conditional CSS classes
import { cn } from "@/lib/utils";
cn("base-class", condition && "conditional-class")

// Smooth scroll
import { scrollToSection } from "@/lib/utils";
scrollToSection("contact") // id="contact" olan elemente scroll
```
