import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost, formatDate } from '@/lib/blog';

interface BlogHeroProps {
  post: BlogPost;
}

export default function BlogHero({ post }: BlogHeroProps) {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end">
      {/* Arkaplan Görsel */}
      <div className="absolute inset-0">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/30" />
      </div>

      {/* İçerik */}
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-4 pb-12 md:pb-16">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-gold-primary transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gold-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="text-gold-primary truncate max-w-[200px] md:max-w-none">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Kategori Badge */}
          <div className="mb-4">
            <span className="bg-gold-primary text-navy-dark text-xs font-bold px-4 py-2 rounded-full">
              {post.category}
            </span>
          </div>

          {/* Başlık */}
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 max-w-4xl">
            {post.title}
          </h1>

          {/* Meta Bilgiler */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-sm md:text-base">
            {/* Yazar */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gold-primary/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span>{post.author}</span>
            </div>

            {/* Tarih */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formatDate(post.publishedAt)}</span>
            </div>

            {/* Okuma Süresi */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readingTime} dk okuma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
