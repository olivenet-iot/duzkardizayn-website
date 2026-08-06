import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { evaluate } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  BlogHero,
  BlogContent,
  BlogSidebar,
  RelatedPosts,
  InfoBox,
  ComparisonTable,
  CheckList,
  StepByStep,
} from '@/components/blog';
import { CTASection, CrossSellSection, FAQSection } from '@/components/services';
import {
  getAllEnBlogPosts,
  getEnBlogPostWithContent,
  getRelatedEnPosts,
} from '@/lib/blog-en';
import { SITE_URL } from '@/lib/i18n';

// MDX içinde kullanılabilen component'ler — Türkçe blogla aynı set.
const mdxComponents = {
  InfoBox,
  ComparisonTable,
  CheckList,
  StepByStep,
  Link,
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href?.startsWith('/')) {
      return <Link href={href} {...props}>{children}</Link>;
    }
    return <a href={href} {...props}>{children}</a>;
  },
};

export async function generateStaticParams() {
  const posts = getAllEnBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getEnBlogPostWithContent(slug);

  if (!post) {
    return {
      title: 'Article not found | Düzkar Dizayn',
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags,
    // İngilizce yazılar Türkçe yazıların çevirisi değil — bilerek hreflang yok.
    alternates: {
      canonical: `${SITE_URL}/en/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE_URL}/en/blog/${post.slug}`,
      images: [{ url: post.coverImage }],
      locale: 'en_GB',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.coverImage],
    },
  };
}

// Adım adım anlatım içeren yazılar için HowTo schema.
const howToSchemas: Record<string, object> = {
  'flat-roof-leaking-north-cyprus': {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How a flat roof is re-waterproofed in North Cyprus',
    description:
      'The sequence a flat roof or roof terrace in North Cyprus should be stripped, re-graded and re-covered in to stop leaks permanently.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Survey and strip out',
        text: 'The existing covering is assessed. Membrane that has lost adhesion or blistered is stripped off and the deck is cleaned back.',
      },
      {
        '@type': 'HowToStep',
        name: 'Correct the falls',
        text: 'Screed is laid to give a minimum fall of 1.5 to 2 per cent towards the outlets so water cannot stand on the roof.',
      },
      {
        '@type': 'HowToStep',
        name: 'Prime the surface',
        text: 'A bitumen-based cold primer is applied over the whole area. Drying time is typically 4 to 6 hours.',
      },
      {
        '@type': 'HowToStep',
        name: 'First membrane layer',
        text: 'A 3 mm polymer-modified bituminous membrane is torched down with a minimum 10 cm overlap at every seam.',
      },
      {
        '@type': 'HowToStep',
        name: 'Second membrane layer',
        text: 'A 4 mm layer is laid over the first with the joints offset, and dressed a minimum of 20 cm up parapets and upstands.',
      },
      {
        '@type': 'HowToStep',
        name: 'Detail the weak points',
        text: 'Outlets, pipe penetrations and parapet corners are reinforced with liquid membrane or additional membrane collars.',
      },
      {
        '@type': 'HowToStep',
        name: 'Water test',
        text: 'Seams are checked and the roof is flooded for 24 to 48 hours to confirm it is watertight before any protective screed or finish goes down.',
      },
    ],
  },
  'swimming-pool-losing-water-cyprus': {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to do the bucket test on a swimming pool',
    description:
      'A 24-hour test that tells you whether your pool is losing water to evaporation or to a genuine leak.',
    tool: [
      { '@type': 'HowToTool', name: 'Bucket' },
      { '@type': 'HowToTool', name: 'Waterproof marker or tape' },
    ],
    step: [
      {
        '@type': 'HowToStep',
        name: 'Fill the pool to its normal level',
        text: 'Top the pool up to the level it normally runs at, roughly halfway up the skimmer mouth.',
      },
      {
        '@type': 'HowToStep',
        name: 'Stand a bucket on a step',
        text: 'Place a bucket on the top step so it is weighted down and sitting in the pool, then fill it with pool water to within a few centimetres of the rim.',
      },
      {
        '@type': 'HowToStep',
        name: 'Mark both water levels',
        text: 'Mark the water level inside the bucket and the pool level on the outside of the bucket, so the same conditions apply to both.',
      },
      {
        '@type': 'HowToStep',
        name: 'Switch off the top-up and leave it 24 hours',
        text: 'Turn off any automatic top-up, keep the pump running as normal and do not let anyone swim for 24 hours.',
      },
      {
        '@type': 'HowToStep',
        name: 'Compare the two drops',
        text: 'If both levels have dropped by the same amount, you are seeing evaporation. If the pool has dropped noticeably more than the bucket, you have a leak.',
      },
      {
        '@type': 'HowToStep',
        name: 'Repeat with the pump off',
        text: 'Run the test again with the pump switched off. A leak that slows or stops points to the pipework or filtration side rather than the pool shell.',
      },
    ],
  },
};

export default async function EnBlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getEnBlogPostWithContent(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedEnPosts(slug, 3);

  // Damp/mould yazısı Rehber kategorisinde ama konusu su — çapraz satışa dahil.
  const showCrossSell =
    post.category === 'İzolasyon' || post.slug === 'damp-and-mould-in-north-cyprus-homes';

  const { default: MDXContent } = await evaluate(post.content, {
    ...runtime,
    development: false,
  } as Parameters<typeof evaluate>[1]);

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: `${SITE_URL}${post.coverImage}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Düzkar Dizayn',
      url: `${SITE_URL}/en`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Düzkar Dizayn',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/en/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    wordCount: post.content.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length,
    inLanguage: 'en',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/en`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_URL}/en/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
      },
    ],
  };

  const howToSchema = howToSchemas[slug];

  return (
    <>
      <Header />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}

      <BlogHero post={post} locale="en" />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <BlogContent>
                <MDXContent components={mdxComponents} />
              </BlogContent>
            </div>

            <div className="lg:col-span-1">
              <BlogSidebar post={post} relatedPosts={relatedPosts} locale="en" />
            </div>
          </div>
        </div>
      </section>

      {post.faqs && post.faqs.length > 0 && (
        <FAQSection
          title="Frequently Asked Questions"
          schemaId={`${SITE_URL}/en/blog/${post.slug}#faq`}
          faqs={post.faqs}
        />
      )}

      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} locale="en" />}

      {/* Cross-sell: follow-on work after waterproofing repairs */}
      {showCrossSell && (
        <CrossSellSection
          title="Once the Leak Is Fixed — What Comes Next?"
          description="Waterproofing repairs usually end with redecoration: stained ceilings repainted, tired render made good. We can quote for the follow-on work in the same free survey, so one team handles the whole job."
          linkLabel="Find out more"
          items={[
            {
              href: '/en/services/facades-and-rendering',
              title: 'Facades, Rendering & Insulation',
              description:
                'Repainting stained ceilings and walls, render repairs and external wall insulation once the damp is resolved.',
            },
            {
              href: '/en/services/renovation',
              title: 'Renovation & Refurbishment',
              description:
                'Plastering, ceilings, flooring and full refurbishment — the whole property brought up to standard together.',
            },
          ]}
        />
      )}

      <CTASection
        title="Want someone to look at it"
        highlightedText="before it gets worse?"
        description="We survey the property free of charge, tell you what is actually causing the problem and give you a written quotation before any work starts. Based in Alsancak, Kyrenia, working across the whole of North Cyprus."
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
