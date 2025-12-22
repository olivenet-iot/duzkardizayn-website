---
name: design-system
description: Düzkar Dizayn tasarım sistemi bilgileri. Renk paleti, fontlar, animasyonlar ve CSS sınıfları hakkında sorularda kullanılmalıdır. Yeni component veya sayfa oluştururken tutarlılık için referans alınmalıdır.
---

# Düzkar Dizayn - Design System

## Renk Paleti

### Ana Renkler (Gold)
| İsim | Hex | Tailwind Class | Kullanım |
|------|-----|----------------|----------|
| Gold Primary | `#D4A017` | `gold-primary` | Butonlar, vurgular, linkler |
| Gold Light | `#F5C518` | `gold-light` | Hover durumları, gradientler |
| Gold Dark | `#B8860B` | `gold-dark` | Aktif durumlar |

### Arkaplan Renkleri (Navy)
| İsim | Hex | Tailwind Class | Kullanım |
|------|-----|----------------|----------|
| Navy Dark | `#1a1f2e` | `navy-dark` | Ana arkaplan |
| Navy Medium | `#2d3447` | `navy-medium` | Kartlar, bölümler |
| Navy Light | `#3d4557` | - | Gradient geçişleri |

### Nötr Renkler
| İsim | Hex | Tailwind Class | Kullanım |
|------|-----|----------------|----------|
| White | `#ffffff` | `white` | Metin, arkaplan |
| Light Gray | `#f8f9fa` | `gray-light` | Açık arkaplanlar |
| Gray Text | `#6b7280` | `gray-text` | İkincil metin |
| Dark Text | `#1f2937` | `text-dark` | Başlıklar |

## Fontlar

Tüm fontlar Google Fonts'tan yüklenir (`app/layout.tsx`):

| Font | CSS Variable | Tailwind Class | Kullanım |
|------|--------------|----------------|----------|
| Montserrat | `--font-montserrat` | `font-heading` | Başlıklar (H1-H6) |
| Open Sans | `--font-open-sans` | `font-body` | Body text |
| Oswald | `--font-oswald` | `font-stats` | İstatistik sayıları |

**Font Weights:** 400, 500, 600, 700, 800

## Animasyonlar

`tailwind.config.ts` içinde tanımlı:

```javascript
animation: {
  'fade-in-up': 'fadeInUp 0.6s ease-out',
  'count-up': 'countUp 2s ease-out',
  'slide-in': 'slideIn 0.5s ease-out',
}
```

### Scroll Reveal Pattern
```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}
.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
```

## CSS Sınıfları

`app/globals.css` @layer components içinde:

### Butonlar
```css
.btn-primary {
  @apply bg-gold-primary text-navy-dark font-semibold
         px-8 py-4 rounded-lg shadow-lg
         hover:bg-gold-light hover:scale-105
         transition-all duration-300;
}

.btn-secondary {
  @apply border-2 border-gold-primary text-gold-primary
         font-semibold px-8 py-4 rounded-lg
         hover:bg-navy-medium transition-all duration-300;
}
```

### Başlık Stili
```css
.section-title {
  @apply text-3xl md:text-4xl font-bold text-center
         mb-12 uppercase tracking-wider;
  /* Alt çizgi: 1px solid gold, 60px width */
}
```

### Kart Stili
```css
.card {
  @apply bg-white rounded-lg shadow-lg
         hover:shadow-xl hover:-translate-y-2
         transition-all duration-300;
}
```

### Navigation Link
```css
.nav-link {
  @apply text-white/90 hover:text-gold-primary
         transition-colors duration-300 tracking-wide;
}
```

### İstatistik Sayısı
```css
.stat-number {
  @apply text-5xl md:text-6xl font-bold font-stats;
}
```

## Gradient Utilities

```css
.gradient-overlay {
  background: linear-gradient(to right,
    rgba(26, 31, 46, 0.95),
    rgba(26, 31, 46, 0.7),
    rgba(26, 31, 46, 0.4)
  );
}

.gold-gradient {
  background: linear-gradient(135deg, #D4A017, #F5C518);
}

.service-gradient-1 {
  background: linear-gradient(135deg, #1a1f2e, #2d3447, #3d4557);
}
```

## Responsive Breakpoints

| Prefix | Minimum Width | Kullanım |
|--------|---------------|----------|
| `sm:` | 640px | Küçük cihazlar |
| `md:` | 768px | Tabletler |
| `lg:` | 1024px | Masaüstü |

## Yaygın Pattern'ler

### Grid Layout
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

### Container
```jsx
<div className="max-w-7xl mx-auto px-4">
```

### Section Spacing
```jsx
<section className="py-20 bg-navy-dark">
```

### Görsel Overlay
```jsx
<div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/70 to-transparent" />
```

### Hover Effect (Image)
```jsx
<img className="group-hover:scale-110 transition-transform duration-500" />
```

## Dosya Referansları

- Tailwind config: `tailwind.config.ts`
- Global CSS: `app/globals.css`
- Font tanımları: `app/layout.tsx`
