import React from 'react';
import { BlogPost } from '@/lib/blog-types';
import { BlogLocale, blogUi } from '@/lib/blog-locale';
import BlogCard from './BlogCard';

interface RelatedPostsProps {
  posts: BlogPost[];
  title?: string;
  locale?: BlogLocale;
}

export default function RelatedPosts({ posts, title, locale = 'tr' }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  const heading = title ?? blogUi[locale].relatedHeading;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mb-4">
            {heading}
          </h2>
          <div className="w-16 h-1 bg-gold-primary mx-auto" />
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
