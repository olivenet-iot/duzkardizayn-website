import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogListClient from '@/components/blog/BlogListClient';
import { CTASection } from '@/components/services';
import { getAllBlogPosts } from '@/lib/blog';

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
