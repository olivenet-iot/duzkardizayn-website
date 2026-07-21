// İngilizce blog yazıları için loader — server-side only (fs kullanır).
// lib/blog.ts ile aynı şekilde çalışır, tek farkı content/blog-en dizinini okuması.
// İngilizce yazılar Türkçe yazıların çevirisi değil; İngiliz/expat mülk sahiplerine
// yönelik özgün içerik olduğu için ayrı bir dizinde ve ayrı bir loader ile tutuluyor.
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Type'lar ortak — client component'ler bu dosyayı değil blog-types.ts'i import etmeli.
export type { TableOfContentsItem, FAQItem, BlogPost, BlogPostWithContent } from './blog-types';
export { blogCategories } from './blog-categories';
export { categoryLabel, formatBlogDate, blogPostHref, blogUi } from './blog-locale';
export type { BlogLocale } from './blog-locale';

import type { BlogPost, BlogPostWithContent } from './blog-types';

const BLOG_EN_DIR = path.join(process.cwd(), 'content/blog-en');

function parseFrontmatter(filePath: string): BlogPost {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);
  return data as BlogPost;
}

function parseFullPost(filePath: string): BlogPostWithContent {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  return {
    ...(data as BlogPost),
    content,
  };
}

export function getEnBlogBySlug(slug: string): BlogPost | undefined {
  const filePath = path.join(BLOG_EN_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;
  return parseFrontmatter(filePath);
}

export function getEnBlogPostWithContent(slug: string): BlogPostWithContent | undefined {
  const filePath = path.join(BLOG_EN_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;
  return parseFullPost(filePath);
}

export function getAllEnBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_EN_DIR)) return [];
  const files = fs.readdirSync(BLOG_EN_DIR).filter((f) => f.endsWith('.mdx'));
  const posts = files.map((file) => parseFrontmatter(path.join(BLOG_EN_DIR, file)));
  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getEnBlogsByCategory(category: string): BlogPost[] {
  if (category === 'Tümü') return getAllEnBlogPosts();
  return getAllEnBlogPosts().filter((post) => post.category === category);
}

export function getRelatedEnPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getEnBlogBySlug(currentSlug);
  if (!currentPost) return [];

  return getAllEnBlogPosts()
    .filter((post) => post.slug !== currentSlug)
    .filter(
      (post) =>
        post.category === currentPost.category ||
        post.tags.some((tag) => currentPost.tags.includes(tag))
    )
    .slice(0, limit);
}

/** İngilizce yazılar için tarih biçimi: 21 July 2026. */
export function formatEnDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
