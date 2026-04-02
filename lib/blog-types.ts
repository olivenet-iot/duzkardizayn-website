// Blog type tanımları ve utility'ler - client ve server'da kullanılabilir

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  category: 'İzolasyon' | 'Cephe' | 'Tadilat' | 'Haberler' | 'Rehber';
  tags: string[];
  readingTime: number;
  metaTitle: string;
  metaDescription: string;
  tableOfContents: TableOfContentsItem[];
  faqs?: FAQItem[];
}

export interface BlogPostWithContent extends BlogPost {
  content: string;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
