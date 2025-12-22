import React from 'react';
import Link from 'next/link';
import { BlogPost, getRelatedPosts } from '@/lib/blog';
import TableOfContents from './TableOfContents';

interface BlogSidebarProps {
  post: BlogPost;
}

export default function BlogSidebar({ post }: BlogSidebarProps) {
  const relatedPosts = getRelatedPosts(post.slug, 3);

  return (
    <aside className="space-y-8">
      {/* İçindekiler */}
      <div className="sticky top-24">
        <TableOfContents items={post.tableOfContents} />

        {/* Tags */}
        <div className="mt-8 bg-gray-50 rounded-lg p-4 md:p-5">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            Etiketler
          </h4>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:border-gold-primary hover:text-gold-primary transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* İlgili Yazılar (Sidebar'da kısa liste) */}
        {relatedPosts.length > 0 && (
          <div className="mt-8 bg-gray-50 rounded-lg p-4 md:p-5">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              Benzer Yazılar
            </h4>
            <ul className="space-y-3">
              {relatedPosts.map((relatedPost) => (
                <li key={relatedPost.slug}>
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="block text-sm text-gray-600 hover:text-gold-primary transition-colors line-clamp-2"
                  >
                    {relatedPost.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA Mini */}
        <div className="mt-8 bg-navy-dark rounded-lg p-5 text-center">
          <h4 className="font-semibold text-white mb-2">
            Profesyonel Destek
          </h4>
          <p className="text-white/70 text-sm mb-4">
            25 yıllık deneyimle yanınızdayız
          </p>
          <Link
            href="/#iletisim"
            className="inline-block bg-gold-primary text-navy-dark font-semibold px-6 py-2.5 rounded-lg hover:bg-gold-light transition-colors text-sm"
          >
            Ücretsiz Keşif
          </Link>
        </div>
      </div>
    </aside>
  );
}
