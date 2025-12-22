// Blog Post Interface ve Helper Fonksiyonlar

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  category: 'İzolasyon' | 'Cephe' | 'Tadilat' | 'Haberler';
  tags: string[];
  readingTime: number;
  metaTitle: string;
  metaDescription: string;
  tableOfContents: TableOfContentsItem[];
}

// Blog yazıları
export const blogPosts: BlogPost[] = [
  {
    slug: 'kuzey-kibrista-izolasyonun-onemi',
    title: 'Kuzey Kıbrıs\'ta İzolasyonun Önemi: Kapsamlı Rehber',
    excerpt: 'Akdeniz ikliminde binanızı nem, sıcak ve sudan koruma yöntemleri. Kıbrıs\'ta izolasyon türleri, malzemeler ve ev alırken dikkat edilecek noktalar hakkında kapsamlı rehber.',
    coverImage: '/images/blog/izolasyon-rehberi/cover.jpg',
    author: 'Düzkar Dizayn',
    publishedAt: '2025-12-21',
    category: 'İzolasyon',
    tags: ['izolasyon', 'su yalıtımı', 'kıbrıs', 'nem sorunu', 'rehber', 'temel izolasyonu', 'çatı izolasyonu'],
    readingTime: 12,
    metaTitle: 'Kuzey Kıbrıs\'ta İzolasyonun Önemi | Kapsamlı Rehber - Düzkar Dizayn',
    metaDescription: 'Kıbrıs ikliminde izolasyon neden önemli? Temel, çatı, balkon izolasyonu türleri, malzemeler ve ev alırken dikkat edilecekler. 25 yıllık deneyimle uzman rehberi.',
    tableOfContents: [
      { id: 'giris', title: 'Giriş', level: 2 },
      { id: 'kibris-iklimi', title: 'Kıbrıs İkliminin Özellikleri', level: 2 },
      { id: 'izolasyonsuz-sorunlar', title: 'İzolasyonsuz Binalarda Yaşanan Sorunlar', level: 2 },
      { id: 'izolasyon-turleri', title: 'İzolasyon Türleri ve Uygulama Alanları', level: 2 },
      { id: 'izolasyon-malzemeleri', title: 'İzolasyon Malzemeleri', level: 2 },
      { id: 'ev-alirken-kontrol', title: 'Kıbrıs\'ta Ev Alırken İzolasyon Kontrolü', level: 2 },
      { id: 'ne-zaman-yaptirmali', title: 'Ne Zaman İzolasyon Yaptırmalısınız?', level: 2 },
      { id: 'sonuc', title: 'Sonuç ve Öneriler', level: 2 },
    ],
  },
  {
    slug: 'radya-temel-izolasyonu-kibrista-neden-onemli',
    title: 'Radya Temel İzolasyonu: Kıbrıs\'ta Neden Vazgeçilmez?',
    excerpt: 'Kuzey Kıbrıs\'ta radya temel izolasyonunun önemi, uygulama yöntemleri ve dikkat edilmesi gerekenler. Yapı uzmanından kapsamlı teknik rehber.',
    coverImage: '/images/blog/radya-temel-izolasyonu-cover.jpg',
    author: 'Düzkar Dizayn',
    publishedAt: '2025-12-21',
    category: 'İzolasyon',
    tags: ['radya temel', 'temel izolasyonu', 'su yalıtımı', 'kıbrıs', 'bodrum izolasyonu', 'membran', 'yeraltı suyu'],
    readingTime: 10,
    metaTitle: 'Radya Temel İzolasyonu Kıbrıs | Neden Önemli? - Düzkar Dizayn',
    metaDescription: 'Kıbrıs\'ta radya temel izolasyonu neden zorunlu? Yeraltı suyu, nem koruması, uygulama teknikleri. 25 yıl deneyimli uzman rehberi.',
    tableOfContents: [
      { id: 'giris', title: 'Giriş', level: 2 },
      { id: 'radya-temel-nedir', title: 'Radya Temel Nedir?', level: 2 },
      { id: 'neden-zorunlu', title: 'Kıbrıs\'ta Neden Zorunlu Hale Geldi?', level: 2 },
      { id: 'tehdit-faktorleri', title: 'Radya Temeli Tehdit Eden Faktörler', level: 2 },
      { id: 'kibris-toprak-iklim', title: 'Kıbrıs Toprak ve İklim Koşulları', level: 2 },
      { id: 'uygulama-teknikleri', title: 'Uygulama Teknikleri', level: 2 },
      { id: 'malzemeler', title: 'Kullanılan Malzemeler', level: 2 },
      { id: 'izolasyonsuz-sonuclar', title: 'İzolasyonsuz Temelin Sonuçları', level: 2 },
      { id: 'yeni-insaat', title: 'Yeni İnşaatta Dikkat Edilmesi Gerekenler', level: 2 },
      { id: 'mevcut-binalar', title: 'Mevcut Binalarda Temel İzolasyonu', level: 2 },
      { id: 'profesyonel-uygulama', title: 'Profesyonel Uygulama Neden Önemli?', level: 2 },
      { id: 'sonuc', title: 'Sonuç', level: 2 },
    ],
  },
];

// Helper Fonksiyonlar

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getBlogsByCategory(category: string): BlogPost[] {
  if (category === 'Tümü') return getAllBlogPosts();
  return blogPosts.filter(post => post.category === category);
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogBySlug(currentSlug);
  if (!currentPost) return [];

  // Aynı kategorideki veya aynı tag'lere sahip yazıları bul
  return blogPosts
    .filter(post => post.slug !== currentSlug)
    .filter(post =>
      post.category === currentPost.category ||
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, limit);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export const blogCategories = ['Tümü', 'İzolasyon', 'Cephe', 'Tadilat', 'Haberler'] as const;
