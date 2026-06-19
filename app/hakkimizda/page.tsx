import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CTASection } from "@/components/services";

export const metadata: Metadata = {
  title: "Hakkımızda | Düzkar Dizayn - KKTC'nin Güvenilir İzolasyon Firması",
  description:
    "1999'dan bu yana Kuzey Kıbrıs'ta profesyonel izolasyon, su yalıtımı ve cephe uygulamaları. 25+ yıl deneyim, 500+ tamamlanan proje, 20+ uzman ekip. Girne merkezli, KKTC genelinde hizmet.",
  keywords: [
    "düzkar dizayn",
    "izolasyon firması kıbrıs",
    "su yalıtımı firması girne",
    "kktc izolasyon şirketi",
    "cephe kaplama firması",
    "girne tadilat firması",
  ],
  openGraph: {
    title: "Hakkımızda | Düzkar Dizayn",
    description:
      "1999'dan bu yana KKTC'de izolasyon, su yalıtımı ve cephe çözümleri. 25+ yıl deneyim, 500+ proje.",
    url: "https://duzkardizayn.com/hakkimizda",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/images/services/izolasyon/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Düzkar Dizayn - KKTC'de Profesyonel İzolasyon Hizmetleri",
      },
    ],
  },
  alternates: {
    canonical: "https://duzkardizayn.com/hakkimizda",
  },
};

const values = [
  {
    title: "Kalite Öncelikli",
    description: "Dünya standartlarında malzemeler ve kusursuz işçilik ile uzun ömürlü çözümler sunuyoruz.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Güvenilirlik",
    description: "Tüm izolasyon uygulamalarımız için 5 yıl garanti. Söz verdiğimiz sürede, söz verdiğimiz kalitede teslim.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Müşteri Odaklılık",
    description: "Her projeye ücretsiz keşifle başlıyor, müşterinin ihtiyacına en uygun çözümü öneriyoruz.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Deneyim",
    description: "25+ yıllık saha deneyimimiz, her türlü yapıda karşılaşılabilecek sorunları çözme yetkinliğimizi güçlendiriyor.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

const references = [
  { name: "Emtan Construction Ltd.", description: "West Park ve Quattro projeleri" },
  { name: "Merit International Hotels", description: "Merit Park Hotel ve Merit Royal Premium" },
  { name: "Öz-En İnşaat", description: "Konut ve ticari projeler" },
  { name: "Özmerhan Construction", description: "Büyük ölçekli inşaat projeleri" },
  { name: "Kurucuoğlu İnşaat", description: "Konut projeleri" },
  { name: "QIS Kıbrıs", description: "Endüstriyel projeler" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://duzkardizayn.com" },
    { "@type": "ListItem", "position": 2, "name": "Hakkımızda" }
  ]
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Düzkar Dizayn",
  "url": "https://duzkardizayn.com",
  "logo": "https://duzkardizayn.com/logo.png",
  "foundingDate": "1999",
  "description": "1999'dan bu yana Kuzey Kıbrıs'ta profesyonel izolasyon, su yalıtımı ve cephe uygulamaları sunan lider firma.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ankara Caddesi No:111",
    "addressLocality": "Alsancak, Girne",
    "addressRegion": "Girne",
    "postalCode": "99320",
    "addressCountry": "CY"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+905338311432",
    "contactType": "customer service",
    "availableLanguage": ["Turkish"]
  },
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 20
  },
  "areaServed": ["Girne", "Lefkoşa", "Gazimağusa", "Güzelyurt", "Kuzey Kıbrıs"],
  "knowsAbout": ["İzolasyon", "Su Yalıtımı", "Cephe Kaplama", "Mantolama", "Tadilat"],
  "sameAs": [
    "https://www.facebook.com/duzkardizayn",
    "https://www.instagram.com/duzkardizayn"
  ]
};

export default function HakkimizdaPage() {
  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-end">
          <div className="absolute inset-0">
            <Image
              src="/images/services/izolasyon/hero.jpg"
              alt="Düzkar Dizayn - KKTC'de Profesyonel İzolasyon Uygulaması Sahadan Görünüm"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/30" />
          </div>

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
                  <li className="text-gold-primary">Hakkımızda</li>
                </ol>
              </nav>

              <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                Hakkımızda
              </h1>
              <p className="text-xl text-white/80 max-w-2xl">
                1999&apos;dan bu yana Kuzey Kıbrıs&apos;ta profesyonel izolasyon ve yapı çözümleri
              </p>
            </div>
          </div>
        </section>

        {/* Firma Hikayesi */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark mb-6">
                  25 Yılı Aşkın Deneyimle KKTC&apos;nin Güvenilir İzolasyon Firması
                </h2>
                <p className="text-gray-text leading-relaxed mb-4">
                  <strong className="text-navy-dark">Düzkar Dizayn</strong>, 1999 yılında Girne&apos;de kurulmuş, Kuzey Kıbrıs&apos;ın izolasyon, su yalıtımı ve cephe uygulamaları alanında öncü firmalarından biridir. Çeyrek asrı aşkın deneyimimizle, konutlardan ticari yapılara, otellerden endüstriyel tesislere kadar her ölçekte projeye profesyonel çözümler sunuyoruz.
                </p>
                <p className="text-gray-text leading-relaxed mb-4">
                  Kuruluşumuzdan bu yana <strong className="text-navy-dark">500&apos;den fazla projeyi</strong> başarıyla tamamladık. Merit International Hotels, Emtan Construction, Öz-En İnşaat gibi Kıbrıs&apos;ın önde gelen inşaat firmaları ve otel gruplarıyla uzun vadeli iş birlikleri sürdürüyoruz.
                </p>
                <p className="text-gray-text leading-relaxed mb-6">
                  Temel izolasyonundan çatı su yalıtımına, mantolama ve dış cephe boyadan komple tadilata kadar geniş bir yelpazede hizmet veriyoruz. Tüm uygulamalarımızda <strong className="text-navy-dark">5 yıl garanti</strong> sunuyor, Akdeniz iklimine en uygun malzeme ve teknikleri kullanıyoruz.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <span className="block font-heading text-3xl font-bold text-gold-primary">25+</span>
                    <span className="text-sm text-gray-text">Yıl Deneyim</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <span className="block font-heading text-3xl font-bold text-gold-primary">500+</span>
                    <span className="text-sm text-gray-text">Tamamlanan Proje</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <span className="block font-heading text-3xl font-bold text-gold-primary">20+</span>
                    <span className="text-sm text-gray-text">Uzman Ekip</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <span className="block font-heading text-3xl font-bold text-gold-primary">5</span>
                    <span className="text-sm text-gray-text">Yıl Garanti</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gold-primary/10 rounded-2xl p-3">
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src="/images/about/firma.jpg"
                      alt="Düzkar Dizayn - Kuzey Kıbrıs'ta 25 yılı aşkın deneyimle izolasyon ve cephe çözümleri"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Değerlerimiz */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark text-center mb-4">
              Değerlerimiz
            </h2>
            <p className="text-gray-text text-center mb-12 max-w-2xl mx-auto">
              Her projemizde bu temel değerleri rehber ediniyoruz
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="w-14 h-14 bg-gold-primary/10 rounded-full flex items-center justify-center text-gold-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-heading font-bold text-navy-dark mb-2">{value.title}</h3>
                  <p className="text-gray-text text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hizmet Alanlarımız */}
        <section className="py-16 md:py-20 bg-navy-dark">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Hizmet Alanlarımız
            </h2>
            <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
              Girne merkezli olarak KKTC genelinde hizmet veriyoruz
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/hizmetler/izolasyon-ve-su-yalitimi" className="group bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors border border-white/10">
                <h3 className="font-heading font-bold text-white mb-2 group-hover:text-gold-primary transition-colors">
                  İzolasyon ve Su Yalıtımı
                </h3>
                <p className="text-white/60 text-sm">
                  Temel, çatı, teras, balkon ve havuz izolasyonu. Bitüm membran, kristalize yalıtım ve sıvı membran uygulamaları.
                </p>
              </Link>
              <Link href="/hizmetler/ic-ve-dis-cephe-uygulamalari" className="group bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors border border-white/10">
                <h3 className="font-heading font-bold text-white mb-2 group-hover:text-gold-primary transition-colors">
                  İç ve Dış Cephe Uygulamaları
                </h3>
                <p className="text-white/60 text-sm">
                  Mantolama, dış cephe boya, iç cephe boya, sıva ve alçı uygulamaları. Akdeniz iklimine dayanıklı çözümler.
                </p>
              </Link>
              <Link href="/hizmetler/genel-yenileme-ve-tadilat" className="group bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors border border-white/10">
                <h3 className="font-heading font-bold text-white mb-2 group-hover:text-gold-primary transition-colors">
                  Genel Yenileme ve Tadilat
                </h3>
                <p className="text-white/60 text-sm">
                  Komple daire tadilatı, mutfak-banyo yenileme, asma tavan sistemleri ve zemin kaplamaları.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Referanslar */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark text-center mb-4">
              Referanslarımız
            </h2>
            <p className="text-gray-text text-center mb-12 max-w-2xl mx-auto">
              KKTC&apos;nin önde gelen inşaat firmaları ve otel gruplarıyla çalışıyoruz
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {references.map((ref, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-heading font-bold text-navy-dark mb-1">{ref.name}</h3>
                  <p className="text-gray-text text-sm">{ref.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/projeler"
                className="inline-flex items-center gap-2 text-gold-primary font-semibold hover:underline"
              >
                Tüm Projelerimizi Görüntüleyin
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="Projeniz İçin"
          highlightedText="Ücretsiz Keşif İsteyin"
          description="25 yılı aşkın deneyimimizle projenize en uygun çözümü sunalım. Ücretsiz keşif için hemen iletişime geçin."
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
      </main>

      <Footer />
    </>
  );
}
