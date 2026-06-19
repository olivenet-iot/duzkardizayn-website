import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogListClient from '@/components/blog/BlogListClient';
import { CTASection } from '@/components/services';
import { getAllBlogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: "Blog | Düzkar Dizayn — KKTC Yapı ve Yalıtım Rehberi",
  description:
    "Kuzey Kıbrıs'ta izolasyon, su yalıtımı, mantolama, nem sorunu, balkon sızıntısı ve yapı teknolojileri üzerine saha deneyimine dayalı rehber yazılar.",
  keywords: [
    "izolasyon rehberi kıbrıs",
    "mantolama kktc",
    "nem sorunu kuzey kıbrıs",
    "balkon sızıntısı kıbrıs",
    "su yalıtımı rehberi",
    "kktc yapı blog",
    "düzkar dizayn blog",
  ],
  openGraph: {
    title: "Blog | Düzkar Dizayn",
    description:
      "KKTC'de izolasyon, su yalıtımı ve yapı uygulamaları üzerine saha deneyimine dayalı rehber yazılar.",
    url: "https://duzkardizayn.com/blog",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Düzkar Dizayn Blog — KKTC Yapı ve Yalıtım Rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Düzkar Dizayn",
    description:
      "KKTC'de izolasyon, su yalıtımı ve yapı uygulamaları üzerine rehber yazılar.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://duzkardizayn.com/blog",
  },
};

export default function BlogPage() {
  const allPosts = getAllBlogPosts();

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

      {/* Blog List with Client-side Filtering */}
      <BlogListClient posts={allPosts} />

      {/* CTA Section */}
      <CTASection
        title="Profesyonel İzolasyon Hizmeti"
        highlightedText="Almak İster Misiniz?"
        description="25 yılı aşkın deneyimimizle Girne, Lefkoşa, Gazimağusa ve Güzelyurt genelinde izolasyon, su yalıtımı ve cephe uygulamaları sunuyoruz. Ücretsiz keşif için hemen iletişime geçin."
        primaryButtonText="Ücretsiz Keşif Talep Et"
        primaryButtonHref="/#iletisim"
        secondaryButtonText="Hemen Ara"
        secondaryButtonHref="tel:+905338311432"
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
