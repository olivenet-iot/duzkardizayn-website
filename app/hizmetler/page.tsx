import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CTASection } from "@/components/services";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Düzkar Dizayn — KKTC İzolasyon, Cephe ve Tadilat",
  description:
    "Düzkar Dizayn hizmetleri: izolasyon ve su yalıtımı, iç/dış cephe uygulamaları (mantolama dahil), genel yenileme ve tadilat. Kuzey Kıbrıs genelinde 25+ yıl saha deneyimi, 5 yıl garanti.",
  keywords: [
    "izolasyon kıbrıs",
    "su yalıtımı kktc",
    "mantolama girne",
    "tadilat kıbrıs",
    "dış cephe kaplama kktc",
    "iç cephe boya kıbrıs",
    "çatı izolasyonu girne",
    "düzkar dizayn hizmetler",
  ],
  openGraph: {
    title: "Hizmetlerimiz | Düzkar Dizayn",
    description:
      "İzolasyon, su yalıtımı, iç/dış cephe uygulamaları ve genel tadilat. KKTC genelinde 25+ yıl deneyimle profesyonel çözümler.",
    url: "https://duzkardizayn.com/hizmetler",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/images/services/izolasyon.jpg",
        width: 1200,
        height: 630,
        alt: "Düzkar Dizayn — Kuzey Kıbrıs'ta Profesyonel Yapı ve Yalıtım Hizmetleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hizmetlerimiz | Düzkar Dizayn",
    description:
      "İzolasyon, cephe ve tadilat çözümleri — KKTC genelinde 25+ yıl deneyim, 5 yıl garanti.",
    images: ["/images/services/izolasyon.jpg"],
  },
  alternates: {
    canonical: "https://duzkardizayn.com/hizmetler",
  },
};

const services = [
  {
    slug: "izolasyon-ve-su-yalitimi",
    title: "İzolasyon ve Su Yalıtımı",
    shortTitle: "İzolasyon",
    description:
      "Temel, çatı, teras, balkon ve havuz izolasyonu. Bitümlü membran, kristalize yalıtım, sıvı membran ve EPS/XPS sistemleriyle kalıcı su yalıtımı çözümleri.",
    image: "/images/services/izolasyon.jpg",
    imageAlt:
      "Düzkar Dizayn — KKTC'de izolasyon ve su yalıtımı uygulaması",
    features: [
      "Radya Temel İzolasyonu",
      "Perde Duvar İzolasyonu",
      "Çatı ve Teras",
      "Balkon ve Islak Hacim",
      "Havuz İzolasyonu",
    ],
  },
  {
    slug: "ic-ve-dis-cephe-uygulamalari",
    title: "İç ve Dış Cephe Uygulamaları",
    shortTitle: "Cephe",
    description:
      "Mantolama sistemleri, dış cephe boya, iç cephe boya, sıva-alçı ve dekoratif kaplamalar. Akdeniz ikliminin tuzlu havasına ve UV'ye dayanıklı uygulamalar.",
    image: "/images/services/cephe.jpg",
    imageAlt:
      "Düzkar Dizayn — KKTC'de iç ve dış cephe boya, mantolama uygulaması",
    features: [
      "Mantolama",
      "Dış Cephe Boya",
      "İç Cephe Boya",
      "Sıva ve Alçı",
      "Dekoratif Kaplamalar",
    ],
  },
  {
    slug: "genel-yenileme-ve-tadilat",
    title: "Genel Yenileme ve Tadilat",
    shortTitle: "Tadilat",
    description:
      "Komple daire tadilatı, mutfak-banyo yenileme, asma tavan sistemleri, zemin kaplamaları ve dekoratif taş duvar uygulamaları. Anahtar teslim dönüşüm.",
    image: "/images/services/tadilat.jpg",
    imageAlt:
      "Düzkar Dizayn — KKTC'de genel yenileme ve tadilat işleri",
    features: [
      "Asma Tavan",
      "Zemin Kaplama",
      "Taş Duvar Kaplama",
      "Mutfak-Banyo Yenileme",
      "Anahtar Teslim",
    ],
  },
] as const;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: "https://duzkardizayn.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Hizmetler",
      item: "https://duzkardizayn.com/hizmetler",
    },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Düzkar Dizayn Hizmetleri",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `https://duzkardizayn.com/hizmetler/${service.slug}`,
    name: service.title,
    description: service.description,
  })),
};

export default function HizmetlerPage() {
  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-primary/5 rounded-full blur-2xl" />

          <div className="container mx-auto px-4 relative z-10">
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center justify-center gap-2 text-sm text-white/70">
                <li>
                  <Link
                    href="/"
                    className="hover:text-gold-primary transition-colors"
                  >
                    Ana Sayfa
                  </Link>
                </li>
                <li className="text-white/40">/</li>
                <li className="text-gold-primary font-medium">Hizmetler</li>
              </ol>
            </nav>

            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                HİZMETLERİMİZ
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed">
                Kuzey Kıbrıs&apos;ta 25 yılı aşkın deneyimle{" "}
                <span className="text-gold-primary">izolasyon</span>,{" "}
                <span className="text-gold-primary">cephe uygulamaları</span> ve{" "}
                <span className="text-gold-primary">genel tadilat</span>.
                Akdeniz ikliminin tuzlu havası, yoğun UV ve ani yağışlarına
                dayanıklı profesyonel çözümler.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark mb-4">
                Üç Ana Hizmet Alanımız
              </h2>
              <p className="text-gray-text">
                Her proje ücretsiz keşifle başlar. Uygulamalarımızın tamamı 5
                yıl garantilidir.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/hizmetler/${service.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-gold-primary text-navy-dark text-xs font-bold px-3 py-1.5 rounded-full">
                        {service.shortTitle}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading font-bold text-xl text-navy-dark mb-3 group-hover:text-gold-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-text text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <ul className="flex flex-wrap gap-2 mb-5">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <span className="inline-flex items-center gap-2 text-gold-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Detaylı Bilgi
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Neden Düzkar Dizayn */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark mb-4">
                Neden Düzkar Dizayn?
              </h2>
              <p className="text-gray-text">
                Hizmet kalitesinin arkasında 25 yıllık saha tecrübesi,
                gerçek proje referansları ve sağlam garanti var.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100">
                <span className="block font-heading text-3xl font-bold text-gold-primary mb-2">
                  25+
                </span>
                <span className="text-sm text-gray-text">
                  Yıl Saha Deneyimi
                </span>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100">
                <span className="block font-heading text-3xl font-bold text-gold-primary mb-2">
                  500+
                </span>
                <span className="text-sm text-gray-text">Tamamlanan Proje</span>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100">
                <span className="block font-heading text-3xl font-bold text-gold-primary mb-2">
                  5 Yıl
                </span>
                <span className="text-sm text-gray-text">Uygulama Garantisi</span>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100">
                <span className="block font-heading text-3xl font-bold text-gold-primary mb-2">
                  Ücretsiz
                </span>
                <span className="text-sm text-gray-text">Yerinde Keşif</span>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link
                href="/hakkimizda"
                className="inline-flex items-center gap-2 text-gold-primary font-semibold hover:underline"
              >
                Firmamız Hakkında Daha Fazla Bilgi
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="Projeniz İçin"
          highlightedText="Ücretsiz Keşif İsteyin"
          description="Hangi hizmete ihtiyacınız olduğundan emin değilseniz, ücretsiz yerinde keşifle en uygun çözümü birlikte belirleyelim."
          primaryButtonText="Ücretsiz Keşif Talep Et"
          primaryButtonHref="/#iletisim"
          secondaryButtonText="+90 548 888 85 03"
          secondaryButtonHref="tel:+905488888503"
          trustBadges={[
            { text: "25+ Yıl Deneyim" },
            { text: "5 Yıl Garanti" },
            { text: "Ücretsiz Keşif" },
          ]}
        />
      </main>

      <Footer />
    </>
  );
}
