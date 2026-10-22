This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Saha projelerini ekleme

Yeni proje yazılarının kaynağı `content/projects/<slug>.mdx` (Türkçe) ve
`content/projects-en/<slug>.mdx` (İngilizce). İki dilde slug aynıdır.
`lib/project-stories.ts` dosyaları okuyarak proje listesini, ana sayfanın son
projelerini, detay sayfalarını ve sitemap girdilerini üretir. Kod içinde yeni
metadata dizisi veya slug koşulu eklenmez.

Her ayrı uygulama ayrı yazıdır. Aynı müşterinin farklı işlerindeki fotoğraflar,
metrajlar ve uygulamalar birleştirilmez. İlk örnek:
`merit-park-teras-kusluk-su-yalitimi.mdx`.

1. Teyitli saha raporundan başlangıç durumu, yapılan işler ve sonuç anlatımını
   çıkar. Metraj, test, garanti veya müşteri kabulü bilinmiyorsa ekleme.
2. Kullanılacak gerçek fotoğrafları `public/images/projects/<iş-klasörü>/`
   altına koy. Özel müşteri/çalışan verisi ve mali belgeler public dizinine girmez.
3. İki dildeki MDX dosyasına `title`, `client`, `excerpt`, `category`, `location`,
   `completedAt` (gerçek uygulama ayı, `YYYY-MM`), `updatedAt` (gerçek içerik
   güncellemesi, `YYYY-MM-DD`), `cover`, `systems`, `services` ve `photos` ekle.
   Fotoğraflarda `src`, açıklayıcı `alt`, `caption`, gerçek `width`/`height` ve
   isteğe bağlı `label` bulunur. `cover`, `photos` içindeki bir anahtardır.
4. Gövdede `<PhotoPair first="foto-anahtarı" second="foto-anahtarı" />` veya
   `<ProjectPhoto id="foto-anahtarı" />` kullan. Fotoğraflar büyütülebilir;
   farklı açıdaki önce/sonra fotoğrafları aynı kadrajmış gibi üst üste bindirilmez.
5. Yarım içeriği iki dilde de `draft: true` ile sakla; liste, detay rotası ve
   sitemap dışında kalır. İki dil hazır olduğunda bu alanı kaldır.
   `publishedAt` isteğe bağlıdır; yalnız gerçek ilk yayın tarihi biliniyorsa
   eklenir. Yayın tarihi ile uygulama ayını karıştırma.
6. `legacyProject` varsa eski proje slug'ını yaz; eski sayfada yeni işe bağlantı
   otomatik görünür. İleride yayımlanan bloglar `relatedBlogs` altında
   `{ "title": "...", "href": "/blog/..." }` biçiminde bağlanabilir. Blogdan
   proje sayfasına da anlamlı bir bağlantı ekle. Henüz olmayan URL'yi ekleme.
7. `npm run lint` ve `npm run build` çalıştır. Mobil/masaüstü görünümü, fotoğraf
   bağlantıları, TR/EN geçişi, canonical/hreflang ve sitemap'i kontrol et.

Eski dört projenin adresleri ve içerikleri korunur; yeni liste altındaki
“Önceki proje arşivi”nden erişilir. Yeni iş için eski slug tekrar kullanılmaz.
URL değişmesi gerekirse karşılığına kalıcı yönlendirme planlanır.

Yerel hazırlık yayın değildir. Canlı yayın `/root/.hermes/codex/references/website.md`
akışına göre, mevcut yayın yetkisiyle main üzerinden yapılır. Yeni düzenli içerik
için takvim veya otomatik yayın görevi açılmaz.
