// Blog arayüzünün dile bağlı metinleri ve etiketleri.
// TR (/blog) ve EN (/en/blog) rotaları aynı component'leri paylaşıyor; bu yüzden
// dile göre değişen her şey (link kökü, kategori adı, tarih biçimi, buton metni)
// tek dosyada toplandı. Burada fs kullanılmaz — client component'ler de import edebilir.

export type BlogLocale = 'tr' | 'en';

/**
 * Kategori değerleri MDX frontmatter'ında Türkçe tutuluyor (blog-types.ts'teki
 * union tipi ortak). İngilizce arayüzde bu değerler okunabilir karşılıklarıyla
 * gösteriliyor.
 */
const categoryLabels: Record<string, string> = {
  'Tümü': 'All',
  'İzolasyon': 'Waterproofing',
  'Cephe': 'Facades & Rendering',
  'Tadilat': 'Renovation',
  'Rehber': 'Guides',
  'Haberler': 'News',
};

export function categoryLabel(category: string, locale: BlogLocale = 'tr'): string {
  if (locale === 'tr') return category;
  return categoryLabels[category] ?? category;
}

export function formatBlogDate(dateString: string, locale: BlogLocale = 'tr'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale === 'en' ? 'en-GB' : 'tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function blogPostHref(slug: string, locale: BlogLocale = 'tr'): string {
  return locale === 'en' ? `/en/blog/${slug}` : `/blog/${slug}`;
}

interface BlogUiText {
  home: string;
  homeHref: string;
  blog: string;
  blogHref: string;
  updated: string;
  contents: string;
  tags: string;
  sidebarRelated: string;
  relatedHeading: string;
  sidebarCtaTitle: string;
  sidebarCtaText: string;
  sidebarCtaButton: string;
  contactHref: string;
  emptyTitle: string;
  emptyText: string;
  allCategory: string;
  readingTime: (minutes: number) => string;
}

export const blogUi: Record<BlogLocale, BlogUiText> = {
  tr: {
    home: 'Ana Sayfa',
    homeHref: '/',
    blog: 'Blog',
    blogHref: '/blog',
    updated: 'Güncellendi',
    contents: 'İçindekiler',
    tags: 'Etiketler',
    sidebarRelated: 'Benzer Yazılar',
    relatedHeading: 'İlgili Yazılar',
    sidebarCtaTitle: 'Profesyonel Destek',
    sidebarCtaText: '25 yıllık deneyimle yanınızdayız',
    sidebarCtaButton: 'Ücretsiz Keşif',
    contactHref: '/#iletisim',
    emptyTitle: 'Bu kategoride henüz yazı yok',
    emptyText: 'Yakında yeni içerikler eklenecek.',
    allCategory: 'Tümü',
    readingTime: (minutes) => `${minutes} dk okuma`,
  },
  en: {
    home: 'Home',
    homeHref: '/en',
    blog: 'Blog',
    blogHref: '/en/blog',
    updated: 'Updated',
    contents: 'Contents',
    tags: 'Tags',
    sidebarRelated: 'Related reading',
    relatedHeading: 'Related Articles',
    sidebarCtaTitle: 'Need a survey?',
    sidebarCtaText: 'English-speaking team in Kyrenia since 1999',
    sidebarCtaButton: 'Book a free survey',
    contactHref: '/en#contact',
    emptyTitle: 'No articles in this category yet',
    emptyText: 'More guides are being added.',
    allCategory: 'Tümü',
    readingTime: (minutes) => `${minutes} min read`,
  },
};
