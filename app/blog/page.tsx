'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BlogCard } from '@/components/blog';
import { CTASection } from '@/components/services';
import { getAllBlogPosts, getBlogsByCategory, blogCategories } from '@/lib/blog';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>('Tümü');
  const allPosts = getAllBlogPosts();
  const filteredPosts = activeCategory === 'Tümü'
    ? allPosts
    : getBlogsByCategory(activeCategory);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-navy-dark pt-32 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Blog
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-4">
            Kıbrıs&apos;ta izolasyon, su yalıtımı, cephe uygulamaları ve tadilat hakkında
            uzman rehberler ve güncel bilgiler.
          </p>
          <div className="w-16 h-1 bg-gold-primary mx-auto" />
        </div>
      </section>

      {/* Kategori Filtreleri */}
      <section className="bg-gray-50 py-6 sticky top-16 z-40 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm md:text-base font-medium
                  transition-all duration-300
                  ${activeCategory === category
                    ? 'bg-gold-primary text-navy-dark shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Kartları */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg
                className="w-16 h-16 text-gray-300 mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Bu kategoride henüz yazı yok
              </h3>
              <p className="text-gray-500">
                Yakında yeni içerikler eklenecek.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Profesyonel İzolasyon Hizmeti"
        highlightedText="Almak İster Misiniz?"
        description="25 yılı aşkın deneyimimizle Kuzey Kıbrıs genelinde izolasyon, su yalıtımı ve cephe uygulamaları sunuyoruz. Ücretsiz keşif için hemen iletişime geçin."
        primaryButtonText="Ücretsiz Keşif Talep Et"
        primaryButtonHref="/#iletisim"
        secondaryButtonText="Hemen Ara"
        secondaryButtonHref="tel:+905488888503"
        trustBadges={[
          { text: "25+ Yıl Deneyim" },
          { text: "5 Yıl Garanti" },
          { text: "Ücretsiz Keşif" },
        ]}
      />

      <Footer />
    </>
  );
}
