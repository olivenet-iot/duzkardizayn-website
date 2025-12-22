import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost, formatDate } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        {/* Kapak Görseli */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Kategori Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-gold-primary text-navy-dark text-xs font-bold px-3 py-1.5 rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        {/* İçerik */}
        <div className="p-5 md:p-6">
          {/* Başlık */}
          <h3 className="font-heading font-bold text-lg md:text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-gold-primary transition-colors duration-300">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm md:text-base line-clamp-2 mb-4">
            {post.excerpt}
          </p>

          {/* Meta Bilgiler */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{formatDate(post.publishedAt)}</span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readingTime} dk okuma
            </span>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
