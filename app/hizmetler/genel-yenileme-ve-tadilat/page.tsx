import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ServiceHero,
  TimelineSection,
  FeatureCards,
  CTASection,
  FAQSection,
} from "@/components/services";
import TadilatServices from "./components/TadilatServices";

export const metadata: Metadata = {
  title: "Tadilat ve Yenileme Hizmetleri | Girne Kıbrıs - Düzkar Dizayn",
  description:
    "Kıbrıs Girne'de profesyonel tadilat hizmetleri. Asma tavan sistemleri, zemin kaplama, taş duvar kaplama, komple daire tadilatı, mutfak-banyo yenileme. 25 yıl deneyim, garantili işçilik!",
  keywords: [
    "tadilat kıbrıs",
    "tadilat girne",
    "tadilat kktc",
    "asma tavan kıbrıs",
    "asma tavan girne",
    "zemin kaplama kıbrıs",
    "taş duvar kaplama girne",
    "daire tadilatı kktc",
    "mutfak yenileme kıbrıs",
    "banyo tadilatı girne",
    "renovasyon kıbrıs",
    "ev tadilatı girne",
    "villa tadilatı kktc",
    "ofis tadilatı kıbrıs",
  ],
  openGraph: {
    title: "Tadilat ve Yenileme Hizmetleri | Girne Kıbrıs",
    description:
      "Kıbrıs'ta profesyonel tadilat hizmetleri. Asma tavan, zemin kaplama, taş duvar, komple tadilat. 25 yıl deneyim!",
    url: "https://duzkardizayn.com/hizmetler/genel-yenileme-ve-tadilat",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/images/services/tadilat/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Kıbrıs Tadilat ve Yenileme Hizmetleri",
      },
    ],
  },
  alternates: {
    canonical: "https://duzkardizayn.com/hizmetler/genel-yenileme-ve-tadilat",
  },
};

const timelineSteps = [
  {
    id: 1,
    title: "Keşif ve Analiz",
    description:
      "Uzman ekibimiz, projenizi yerinde inceleyerek ihtiyaçlarınızı belirler ve size en uygun çözüm önerilerini sunar.",
  },
  {
    id: 2,
    title: "Planlama ve Teklif",
    description:
      "Detaylı proje planı hazırlanır. Kullanılacak malzemeler ve işçilik detayları ile şeffaf fiyat teklifi sunulur.",
  },
  {
    id: 3,
    title: "Uygulama",
    description:
      "Deneyimli ustalarımız, belirlenen takvime uygun şekilde kaliteli malzemelerle tadilat işlemini gerçekleştirir.",
  },
  {
    id: 4,
    title: "Kontrol ve Teslim",
    description:
      "İşin her aşaması kontrol edilir, eksikler giderilir ve memnuniyetiniz alınarak teslim yapılır.",
  },
];

const features = [
  {
    id: 1,
    title: "Uzman Ekip",
    description:
      "Alanında uzman ekibimizle her türlü tadilat projenizi titizlikle yönetiyoruz.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Kaliteli Malzeme",
    description:
      "Sadece kaliteli ve dayanıklı malzemeler kullanarak uzun ömürlü sonuçlar sunuyoruz.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Müşteri Memnuniyeti",
    description:
      "Belirlenen sürede işlerinizi tamamlayarak, güvenilir hizmet anlayışımızı sürdürüyoruz.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const trustBadges = [
  { text: "25+ Yıl Deneyim" },
  { text: "5 Yıl Garanti" },
  { text: "Ücretsiz Keşif" },
];

const heroBadges = [
  { text: "Asma Tavan" },
  { text: "Zemin Kaplama" },
  { text: "Taş Duvar" },
  { text: "Komple Tadilat" },
];

// SEO için FAQ verileri
const tadilatFAQ = [
  {
    question: "Kıbrıs'ta tadilat fiyatları ne kadar?",
    answer:
      "Tadilat fiyatları projenin kapsamına, kullanılacak malzemelere ve işçiliği gerektiren alana göre değişir. Komple daire tadilatı, kısmi yenileme veya tek oda tadilatı için farklı fiyatlandırma uygulanır. Ücretsiz keşif sonrası detaylı fiyat teklifi sunuyoruz.",
  },
  {
    question: "Komple daire tadilatı ne kadar sürer?",
    answer:
      "Standart bir dairenin komple tadilatı ortalama 3-6 hafta sürer. Bu süre; yıkım işleri, tesisat değişimi, sıva-boya, zemin kaplama ve montaj işlemlerini kapsar. Projenin büyüklüğüne göre süre değişebilir.",
  },
  {
    question: "Tadilat sırasında evde kalmak mümkün mü?",
    answer:
      "Kısmi tadilatlarda (tek oda veya banyo) evde kalma imkanı olabilir. Ancak komple tadilatlarda toz, gürültü ve güvenlik nedeniyle başka bir yerde kalmanızı öneririz.",
  },
  {
    question: "Asma tavan çeşitleri nelerdir?",
    answer:
      "Alçıpan asma tavan, barisol gergi tavan, ahşap görünümlü asma tavan ve metal asma tavan sistemleri sunuyoruz. Her birinin farklı estetik ve fonksiyonel özellikleri vardır.",
  },
  {
    question: "Zemin kaplama seçenekleri nelerdir?",
    answer:
      "Seramik ve porselen karo, laminat parke, masif ahşap, vinil kaplama ve self leveling beton kaplama seçenekleri sunuyoruz. Mekanın kullanım amacına göre en uygun seçeneği öneriyoruz.",
  },
  {
    question: "Taş duvar kaplama dayanıklı mı?",
    answer:
      "Evet, doğal ve yapay taş duvar kaplamalar son derece dayanıklıdır. Özellikle dış mekanlarda doğal taş, iç mekanlarda ise hem doğal hem yapay taş seçenekleri uzun ömürlü çözümler sunar.",
  },
  {
    question: "Eski binalarda tadilat yapılıyor mu?",
    answer:
      "Evet, eski binalarda tadilat ve renovasyon projelerinde uzmanız. Yapısal durum değerlendirmesi yaparak güvenli ve estetik çözümler sunuyoruz.",
  },
  {
    question: "Tadilat garantisi var mı?",
    answer:
      "Evet, tüm tadilat uygulamalarımızda işçilik garantisi veriyoruz. Garanti süresi uygulama türüne göre değişmektedir. Ayrıca kullanılan malzemelerin üretici garantileri de geçerlidir.",
  },
];

export default function TadilatPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Genel Yenileme ve Tadilat"
          description="25 yıllık deneyimimizle yaşam alanlarınızın yenileme ve tadilat ihtiyaçlarını profesyonel çözümlerle karşılıyoruz. Uzman ekibimiz, komple daire tadilatından mutfak-banyo yenilemelerine, asma tavan sistemlerinden zemin kaplamalarına kadar tüm projelerde yüksek kaliteli malzemeler ve işçilik kullanarak mekanlarınıza değer katıyor."
          breadcrumb={{ current: "Genel Yenileme ve Tadilat" }}
          badges={heroBadges}
          imageSrc="/images/services/tadilat/hero.jpg"
          imageAlt="Modern asma tavan sistemi"
        />

        {/* SEO İçerik Bölümü - Kıbrıs'ta Tadilat Hizmetleri */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Sol - Görsel/İkon Grid */}
                <div className="relative">
                  <div className="bg-gold-primary/10 rounded-2xl p-8">
                    <div className="grid grid-cols-2 gap-4">
                      {/* İkon 1 - Asma Tavan */}
                      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-gold-primary/20 rounded-full flex items-center justify-center mb-4">
                          <svg className="w-7 h-7 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-navy-dark mb-2">Asma Tavan</h4>
                        <p className="text-sm text-gray-text">Modern tavan sistemleri</p>
                      </div>
                      {/* İkon 2 - Zemin Kaplama */}
                      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-gold-primary/20 rounded-full flex items-center justify-center mb-4">
                          <svg className="w-7 h-7 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-navy-dark mb-2">Zemin Kaplama</h4>
                        <p className="text-sm text-gray-text">Parke, seramik, vinil</p>
                      </div>
                      {/* İkon 3 - Taş Duvar */}
                      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-gold-primary/20 rounded-full flex items-center justify-center mb-4">
                          <svg className="w-7 h-7 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5h16M4 9h16M4 13h8m-8 4h16M4 21h8" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-navy-dark mb-2">Taş Duvar</h4>
                        <p className="text-sm text-gray-text">Doğal ve yapay taş</p>
                      </div>
                      {/* İkon 4 - Komple Tadilat */}
                      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-gold-primary/20 rounded-full flex items-center justify-center mb-4">
                          <svg className="w-7 h-7 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-navy-dark mb-2">Komple Tadilat</h4>
                        <p className="text-sm text-gray-text">Anahtar teslim çözüm</p>
                      </div>
                    </div>
                    {/* Dekoratif Elementler */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-primary/10 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-navy-dark/5 rounded-full blur-2xl"></div>
                  </div>
                </div>

                {/* Sağ - Metin İçerik */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-dark mb-6">
                    Kıbrıs&apos;ta Profesyonel Tadilat Hizmetleri
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-text">
                    <p>
                      Yaşam alanlarınızı yenilemek veya modernize etmek mi
                      istiyorsunuz? <strong>Girne</strong> ve tüm{" "}
                      <strong>Kuzey Kıbrıs</strong>&apos;ta 25 yıllık deneyimimizle
                      profesyonel tadilat hizmetleri sunuyoruz.
                    </p>
                    <p>
                      <strong>Tadilat Hizmet Alanlarımız:</strong>
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Komple daire tadilatı
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Mutfak ve banyo yenileme
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Asma tavan sistemleri
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Zemin kaplama çözümleri
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Taş duvar kaplamaları
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Aydınlatma sistemleri
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Elektrik ve tesisat yenileme
                      </li>
                    </ul>
                    <p className="mt-4">
                      Tadilat projelerinizde anahtar teslim çözümler sunuyoruz.
                      Keşiften teslime kadar tüm süreçleri profesyonelce
                      yönetiyoruz. Tadilat öncesi{" "}
                      <Link
                        href="/hizmetler/izolasyon-ve-su-yalitimi"
                        className="text-gold-primary hover:underline"
                      >
                        izolasyon
                      </Link>{" "}
                      ve{" "}
                      <Link
                        href="/hizmetler/ic-ve-dis-cephe-uygulamalari"
                        className="text-gold-primary hover:underline"
                      >
                        cephe uygulamaları
                      </Link>{" "}
                      hizmetlerimize de göz atmanızı öneririz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TadilatServices />

        {/* Tadilat Hizmetleri Detaylı Açıklama */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy-dark mb-8 text-center">
                Tadilat Hizmetleri Hakkında Detaylı Bilgi
              </h2>

              <div className="space-y-12">
                {/* Asma Tavan */}
                <div className="border-l-4 border-gold-primary pl-6">
                  <h3 className="text-2xl font-heading font-bold text-navy-dark mb-4">
                    Asma Tavan Sistemleri
                  </h3>
                  <div className="prose prose-lg max-w-none text-gray-text">
                    <p>
                      Asma tavan sistemleri, mekanlarınıza modern ve estetik bir
                      görünüm kazandırırken, aydınlatma ve klima tesisatını
                      gizlemenize olanak tanır. Kıbrıs&apos;ta özellikle yeni
                      inşaatlarda ve tadilat projelerinde yaygın olarak tercih
                      edilmektedir.
                    </p>
                    <p>
                      <strong>Asma Tavan Çeşitleri:</strong> Alçıpan asma tavan
                      (en yaygın), barisol gergi tavan (parlak görünüm), ahşap
                      görünümlü asma tavan (sıcak atmosfer), metal asma tavan
                      (endüstriyel mekanlar).
                    </p>
                    <p>
                      <strong>Asma Tavan Avantajları:</strong> Aydınlatma
                      entegrasyonu, klima ve havalandırma kanalı gizleme, ses
                      yalıtımı, ısı yalıtımı, estetik görünüm.
                    </p>
                  </div>
                </div>

                {/* Zemin Kaplama */}
                <div className="border-l-4 border-gold-primary pl-6">
                  <h3 className="text-2xl font-heading font-bold text-navy-dark mb-4">
                    Zemin Kaplama Çözümleri
                  </h3>
                  <div className="prose prose-lg max-w-none text-gray-text">
                    <p>
                      Zemin kaplama, mekanın genel görünümünü ve konforunu
                      doğrudan etkiler. Kıbrıs ikliminde nem ve sıcaklığa
                      dayanıklı zemin kaplamaları tercih edilmelidir.
                    </p>
                    <p>
                      <strong>Zemin Kaplama Seçenekleri:</strong> Seramik ve
                      porselen karo (en dayanıklı), laminat parke (ekonomik),
                      masif ahşap parke (lüks görünüm), vinil kaplama (pratik),
                      self leveling beton (modern endüstriyel).
                    </p>
                    <p>
                      <strong>Brüt Beton Koruma:</strong> Retro görünümlü beton
                      yüzeylerden endüstriyel kaplamalara kadar çeşitli
                      seçeneklerle, tüm zemin ihtiyaçlarınıza uzun ömürlü ve şık
                      çözümler sağlıyoruz.
                    </p>
                  </div>
                </div>

                {/* Taş Duvar Kaplama */}
                <div className="border-l-4 border-gold-primary pl-6">
                  <h3 className="text-2xl font-heading font-bold text-navy-dark mb-4">
                    Taş Duvar Kaplama
                  </h3>
                  <div className="prose prose-lg max-w-none text-gray-text">
                    <p>
                      Taş duvar kaplama, mekanlarınıza estetik ve karakteristik
                      bir görünüm kazandırır. American style, retro tasarım gibi
                      farklı konseptlerde, doğal taş görünümlü duvar
                      kaplamalarıyla yaşam alanlarınıza sıcaklık ve zenginlik
                      katıyoruz.
                    </p>
                    <p>
                      <strong>Taş Duvar Kaplama Çeşitleri:</strong> Doğal taş
                      kaplama, yapay taş kaplama, tuğla görünümlü kaplama,
                      3 boyutlu duvar panelleri.
                    </p>
                    <p>
                      <strong>Kullanım Alanları:</strong> Salon özellik duvarı,
                      mutfak tezgah arkası, bahçe duvarları, şömine çevresi,
                      merdiven boşluğu.
                    </p>
                  </div>
                </div>

                {/* Komple Tadilat */}
                <div className="border-l-4 border-gold-primary pl-6">
                  <h3 className="text-2xl font-heading font-bold text-navy-dark mb-4">
                    Komple Daire ve Villa Tadilatı
                  </h3>
                  <div className="prose prose-lg max-w-none text-gray-text">
                    <p>
                      Komple tadilat projelerinde tüm işçilikleri tek elden
                      yönetiyoruz. Tesisat, elektrik, sıva, boya, zemin kaplama
                      ve montaj işlerini koordineli şekilde yürüterek zamandan
                      tasarruf sağlıyoruz.
                    </p>
                    <p>
                      <strong>Komple Tadilat Kapsamında:</strong> Yıkım ve
                      hafriyat, su ve elektrik tesisatı yenileme, sıva ve alçı
                      uygulamaları, iç cephe boya, zemin kaplama, asma tavan,
                      mutfak ve banyo montajı, kapı ve pencere değişimi.
                    </p>
                    <p>
                      <strong>Anahtar Teslim Çözüm:</strong> Keşiften teslime
                      kadar tüm süreci profesyonelce yönetiyoruz. Projenin her
                      aşamasında bilgilendirme yapıyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeatureCards
          title="Profesyonel Yenileme Çözümleri"
          features={features}
          variant="dark"
        />

        <TimelineSection
          title="Profesyonel Tadilat Süreci"
          steps={timelineSteps}
        />

        <FAQSection
          title="Tadilat Hakkında Sıkça Sorulan Sorular"
          subtitle="Kıbrıs'ta tadilat hizmetlerimiz hakkında merak edilenler"
          faqs={tadilatFAQ}
          schemaId="https://duzkardizayn.com/hizmetler/genel-yenileme-ve-tadilat#faq"
        />

        {/* Internal Linking Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-xl font-heading font-bold text-navy-dark mb-6">
                Diğer Hizmetlerimiz
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/hizmetler/izolasyon-ve-su-yalitimi"
                  className="px-6 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-navy-dark hover:text-gold-primary"
                >
                  İzolasyon ve Su Yalıtımı
                </Link>
                <Link
                  href="/hizmetler/ic-ve-dis-cephe-uygulamalari"
                  className="px-6 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-navy-dark hover:text-gold-primary"
                >
                  İç ve Dış Cephe Uygulamaları
                </Link>
                <Link
                  href="/projeler"
                  className="px-6 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-navy-dark hover:text-gold-primary"
                >
                  Tamamlanan Projeler
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Tecrübe ve Kalite"
          highlightedText="Bir Arada"
          description="Kıbrıs'ta su yalıtımı, izolasyon, cephe kaplamaları ve yenileme işlerinizde güvenilir çözüm ortağınız. Detaylı bilgi ve fiyat teklifi almak için bizimle iletişime geçin."
          primaryButtonText="Ücretsiz Teklif Al"
          primaryButtonHref="/#iletisim"
          secondaryButtonText="+90 548 888 85 03"
          secondaryButtonHref="tel:+905488888503"
          trustBadges={trustBadges}
        />
      </main>
      <Footer />
    </>
  );
}
