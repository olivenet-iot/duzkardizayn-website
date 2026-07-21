import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogListClient from '@/components/blog/BlogListClient';
import { CTASection } from '@/components/services';
import { getAllEnBlogPosts } from '@/lib/blog-en';
import { alternatesFor, SITE_URL } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Blog | Damp, Leaks and Building Problems in North Cyprus | Düzkar Dizayn',
  description:
    "Practical guides for property owners in North Cyprus: damp and mould, flat roof leaks, pool leaks and the waterproofing checks to make before you buy. Written by a Kyrenia contractor trading since 1999.",
  keywords: [
    'damp north cyprus',
    'flat roof leak cyprus',
    'mould kyrenia',
    'buying property north cyprus',
    'swimming pool leak cyprus',
    'waterproofing advice north cyprus',
    'north cyprus property maintenance',
  ],
  openGraph: {
    title: 'Blog | Düzkar Dizayn',
    description:
      'Practical guides on damp, leaks and waterproofing for property owners in North Cyprus.',
    url: `${SITE_URL}/en/blog`,
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Düzkar Dizayn Blog — building and waterproofing guides for North Cyprus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Düzkar Dizayn',
    description:
      'Practical guides on damp, leaks and waterproofing for property owners in North Cyprus.',
    images: ['/images/og-image.jpg'],
  },
  alternates: alternatesFor('/en/blog'),
};

export default function EnBlogPage() {
  const allPosts = getAllEnBlogPosts();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/en` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/en/blog` },
    ],
  };

  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy-dark pt-32 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Blog
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-4">
            Guides on damp, leaks, rendering and renovation for people who own
            property in North Cyprus. Written from what we find on site, not
            from a brochure.
          </p>
          <div className="w-16 h-1 bg-gold-primary mx-auto" />
        </div>
      </section>

      {/* Yazı listesi — kategori filtresi client tarafında */}
      <BlogListClient posts={allPosts} locale="en" />

      <CTASection
        title="Not sure what is causing the problem?"
        highlightedText="We will come and look."
        description="We survey the property free of charge, tell you what is actually wrong and put the price in writing before anything starts. Based in Alsancak, working across Kyrenia, Nicosia, Famagusta and the rest of North Cyprus."
        primaryButtonText="Request a free survey"
        primaryButtonHref="/en#contact"
        secondaryButtonText="Call +90 533 831 14 32"
        secondaryButtonHref="tel:+905338311432"
        trustBadges={[
          { text: 'Trading since 1999' },
          { text: '5-year workmanship guarantee' },
          { text: 'English-speaking team' },
        ]}
      />

      <Footer />
    </>
  );
}
