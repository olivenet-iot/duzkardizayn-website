// Blog Post Helper Fonksiyonlar - Server-side only (fs kullanır)
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Type'ları re-export et (client component'ler bu dosyayı import edemez, blog-types.ts kullanmalı)
export type { TableOfContentsItem, FAQItem, BlogPost, BlogPostWithContent } from './blog-types';
export { blogCategories } from './blog-categories';

import type { BlogPost, BlogPostWithContent } from './blog-types';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

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

export function getBlogBySlug(slug: string): BlogPost | undefined {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;
  return parseFrontmatter(filePath);
}

export function getBlogPostWithContent(slug: string): BlogPostWithContent | undefined {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;
  return parseFullPost(filePath);
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));
  const posts = files.map(file => parseFrontmatter(path.join(BLOG_DIR, file)));
  return posts.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getBlogsByCategory(category: string): BlogPost[] {
  if (category === 'Tümü') return getAllBlogPosts();
  return getAllBlogPosts().filter(post => post.category === category);
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogBySlug(currentSlug);
  if (!currentPost) return [];

  return getAllBlogPosts()
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
