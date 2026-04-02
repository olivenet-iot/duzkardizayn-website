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
import { CTASection, FAQSection } from '@/components/services';
import { getBlogPostWithContent, getAllBlogPosts, getRelatedPosts } from '@/lib/blog';

// MDX'te kullanılacak custom component'ler
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

// Static params for SSG
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostWithContent(slug);

  if (!post) {
    return {
      title: 'Yazı Bulunamadı | Düzkar Dizayn',
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags,
    alternates: {
      canonical: `https://duzkardizayn.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://duzkardizayn.com/blog/${post.slug}`,
      images: [{ url: post.coverImage }],
      locale: 'tr_TR',
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

// HowTo schema verileri
const howToSchemas: Record<string, object> = {
  'radya-temel-izolasyonu-kibrista-neden-onemli': {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Radya Temel İzolasyonu Nasıl Yapılır?",
    "description": "Kıbrıs'ta radya temel izolasyonunun adım adım uygulama rehberi.",
    "step": [
      { "@type": "HowToStep", "name": "Zemin Hazırlığı", "text": "Grobeton dökümü yapılır ve yüzey düzeltilir." },
      { "@type": "HowToStep", "name": "Astar Uygulaması", "text": "Bitüm esaslı soğuk astar tüm yüzeye uygulanır. Kuruma süresi: 4-6 saat." },
      { "@type": "HowToStep", "name": "Membran Serimi", "text": "Bitümlü membran ruloları açılır ve şaloma ile yapıştırılır." },
      { "@type": "HowToStep", "name": "Bindirme ve Kaynak", "text": "Rulo kenarları minimum 10 cm bindirme ile kaplanır." },
      { "@type": "HowToStep", "name": "Koruma Katmanı", "text": "Membran üzerine koruma betonu dökülür veya XPS plakalar yerleştirilir." },
      { "@type": "HowToStep", "name": "Son Kontrol", "text": "Su testi yapılır. 24-48 saat beklenir ve sızıntı kontrolü yapılır." },
    ]
  },
  'balkonda-su-sizintisi-kktc-rehberi': {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Balkon Su Yalıtımı Nasıl Yapılır?",
    "description": "KKTC'de balkon su sızıntısı için kalıcı izolasyon uygulama adımları.",
    "step": [
      { "@type": "HowToStep", "name": "Yüzey Hazırlığı ve Söküm", "text": "Mevcut seramik kaplama kaldırılır, çatlaklar onarılır ve yüzey kurutulur." },
      { "@type": "HowToStep", "name": "Eğim Şapı", "text": "Gidere doğru %1.5-2 eğim verecek şekilde yeni şap atılır." },
      { "@type": "HowToStep", "name": "Bitümlü Astar", "text": "Tüm yüzeye bitümlü astar uygulanır." },
      { "@type": "HowToStep", "name": "Membran Uygulaması", "text": "Bitüm membran şaloma ile yapıştırılır, duvar dönüşlerinde en az 20 cm yüksekliğe çıkılır." },
      { "@type": "HowToStep", "name": "Koruma ve Kaplama", "text": "Membran üzerine koruma şapı atılır ve seramik kaplama yapılır." },
    ]
  },
  'kktcde-mantolama-nedir-ve-neden-onemli': {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Mantolama Nasıl Yapılır?",
    "description": "KKTC evleri için mantolama uygulama adımları rehberi.",
    "step": [
      { "@type": "HowToStep", "name": "Yapıştırıcı Harç", "text": "Yalıtım levhasının duvara yapıştırılması için çimento bazlı özel yapıştırıcı uygulanır." },
      { "@type": "HowToStep", "name": "Yalıtım Levhası", "text": "EPS veya taş yünü levhalar kademeli derzlerle yerleştirilir." },
      { "@type": "HowToStep", "name": "Mekanik Dübeller", "text": "Levhalar plastik diskli çelik dübeller ile duvara bağlanır." },
      { "@type": "HowToStep", "name": "Sıva ve Donatı Filesi", "text": "Alkali dayanımlı cam elyaf file üzerine ince sıva uygulanır." },
      { "@type": "HowToStep", "name": "Son Kat Boya", "text": "UV dayanımlı, elastik yapıda dış cephe boyası uygulanır." },
    ]
  },
  'kktcde-cati-ve-teras-izolasyonu-rehberi': {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Çatı İzolasyonu Nasıl Yapılır?",
    "description": "KKTC'de düz çatı su yalıtımı adım adım uygulama rehberi.",
    "step": [
      { "@type": "HowToStep", "name": "Mevcut Durum Tespiti ve Söküm", "text": "Eski membran değerlendirilir, yapışması bozulmuş membran sökülür ve yüzey temizlenir." },
      { "@type": "HowToStep", "name": "Eğim Düzeltmesi", "text": "Gider noktalarına doğru minimum %1.5-2 eğim verecek şekilde şap betonu dökülür." },
      { "@type": "HowToStep", "name": "Astar Uygulaması", "text": "Bitüm esaslı soğuk astar tüm yüzeye uygulanır. Kuruma süresi: 4-6 saat." },
      { "@type": "HowToStep", "name": "Birinci Kat Membran", "text": "3 mm polimer modifiyeli bitüm membran şaloma ile yapıştırılır, 10 cm bindirme payı bırakılır." },
      { "@type": "HowToStep", "name": "İkinci Kat Membran", "text": "4 mm membran kaydırmalı olarak uygulanır, parapet dönüşlerinde 20 cm yüksekliğe çıkılır." },
      { "@type": "HowToStep", "name": "Detay Noktaları", "text": "Boru geçişleri, gider ağızları ve parapet köşelerine sıvı membran takviyesi yapılır." },
      { "@type": "HowToStep", "name": "Su Testi ve Kontrol", "text": "Kaynak dikişleri kontrol edilir, çatı 24-48 saat su ile doldurularak sızdırmazlık doğrulanır." },
    ]
  },
};

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostWithContent(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  // MDX'i compile et
  const { default: MDXContent } = await evaluate(post.content, {
    ...runtime,
    development: false,
  } as Parameters<typeof evaluate>[1]);

  // BlogPosting JSON-LD Schema
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "image": `https://duzkardizayn.com${post.coverImage}`,
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt,
    "author": {
      "@type": "Organization",
      "name": "Düzkar Dizayn",
      "url": "https://duzkardizayn.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Düzkar Dizayn",
      "logo": {
        "@type": "ImageObject",
        "url": "https://duzkardizayn.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://duzkardizayn.com/blog/${post.slug}`
    },
    "keywords": post.tags.join(", "),
    "articleSection": post.category,
    "wordCount": post.readingTime * 200,
    "inLanguage": "tr"
  };

  // BreadcrumbList JSON-LD Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": "https://duzkardizayn.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://duzkardizayn.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title
      }
    ]
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

      {/* Hero */}
      <BlogHero post={post} />

      {/* İçerik */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Ana İçerik */}
            <div className="lg:col-span-2">
              <BlogContent>
                <MDXContent components={mdxComponents} />
              </BlogContent>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar post={post} relatedPosts={relatedPosts} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Bölümü */}
      {post.faqs && post.faqs.length > 0 && (
        <FAQSection
          title={`${post.title.split(':')[0]} Hakkında Sık Sorulan Sorular`}
          schemaId={`https://duzkardizayn.com/blog/${post.slug}#faq`}
          faqs={post.faqs}
        />
      )}

      {/* İlgili Yazılar */}
      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}

      {/* CTA */}
      <CTASection
        title="Profesyonel İzolasyon Hizmeti"
        highlightedText="Almak İster Misiniz?"
        description="25 yılı aşkın deneyimimizle Girne, Lefkoşa, Gazimağusa ve Güzelyurt genelinde izolasyon, su yalıtımı ve cephe uygulamaları sunuyoruz. Ücretsiz keşif için hemen iletişime geçin."
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
