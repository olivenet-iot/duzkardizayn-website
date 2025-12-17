import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  TimelineSection,
  FeatureCards,
  CTASection,
  FAQSection,
} from "@/components/services";
import IzolasyonHero from "./components/IzolasyonHero";
import IzolasyonTypes from "./components/IzolasyonTypes";
import AdvancedTechnology from "./components/AdvancedTechnology";

export const metadata: Metadata = {
  title: "İzolasyon ve Su Yalıtımı Hizmetleri | Girne Kıbrıs - Düzkar Dizayn",
  description:
    "Kıbrıs Girne'de profesyonel izolasyon hizmetleri. Temel izolasyonu, çatı su yalıtımı, teras izolasyonu, balkon ve havuz izolasyonu. 25 yıl deneyim, 5 yıl garanti. Ücretsiz keşif için arayın!",
  keywords: [
    "izolasyon kıbrıs",
    "izolasyon girne",
    "su yalıtımı kıbrıs",
    "su yalıtımı girne",
    "temel izolasyonu kktc",
    "çatı izolasyonu kıbrıs",
    "teras su yalıtımı",
    "balkon izolasyonu girne",
    "havuz izolasyonu",
    "ıslak hacim izolasyonu",
    "bitüm membran kıbrıs",
    "su geçirmez izolasyon",
    "nem yalıtımı",
    "bodrum izolasyonu",
  ],
  openGraph: {
    title: "İzolasyon ve Su Yalıtımı | Girne Kıbrıs - Düzkar Dizayn",
    description:
      "Kıbrıs'ın önde gelen izolasyon firması. Temel, çatı, teras, balkon izolasyonu. 25 yıl deneyim, 5 yıl garanti. Ücretsiz keşif!",
    url: "https://duzkardizayn.com/hizmetler/izolasyon-ve-su-yalitimi",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/images/services/izolasyon/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Kıbrıs İzolasyon ve Su Yalıtımı Hizmetleri",
      },
    ],
  },
  alternates: {
    canonical: "https://duzkardizayn.com/hizmetler/izolasyon-ve-su-yalitimi",
  },
};

const timelineSteps = [
  {
    id: 1,
    title: "Keşif ve Analiz",
    description:
      "Uzman ekibimiz, izolasyon gerektiren alanı ücretsiz olarak ziyaret eder. Yapının durumu ve sorunun kaynağı belirlenerek uygun çözüm önerileri sunulur.",
  },
  {
    id: 2,
    title: "Planlama ve Teklif",
    description:
      "Keşif sonrası, projenize özel planlama yapılır. Kullanılacak malzemeler ve uygulama yöntemi belirlenerek size şeffaf bir fiyat teklifi sunulur.",
  },
  {
    id: 3,
    title: "Uygulama",
    description:
      "Profesyonel ekibimiz, planlanan sürede ve kalite standartlarına uygun şekilde izolasyon uygulamasını titizlikle gerçekleştirir.",
  },
  {
    id: 4,
    title: "Kontrol ve Teslim",
    description:
      "Uygulama sonrası gerekli testler ve kontroller yapılarak işimizi güvenle teslim eder, uzun ömürlü bir izolasyon sağlarız.",
  },
];

const features = [
  {
    id: 1,
    title: "Uzman Ekip",
    description:
      "25 yıllık tecrübemizle Kıbrıs'ın en deneyimli izolasyon ekibine sahibiz.",
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
      "Dünya standartlarında, yüksek kaliteli izolasyon malzemeleri kullanıyoruz.",
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
      "Kıbrıs'ın önde gelen inşaat firmaları dahil yüzlerce memnun müşteriyle çalışmanın gururunu yaşıyoruz.",
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
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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

// SEO için FAQ verileri
const izolasyonFAQ = [
  {
    question: "Kıbrıs'ta izolasyon fiyatları ne kadar?",
    answer:
      "İzolasyon fiyatları metrekare bazında hesaplanır ve kullanılan malzeme, uygulama alanı ve zorluğuna göre değişir. Ücretsiz keşif sonrası net fiyat bilgisi veriyoruz. Genel olarak Kıbrıs'ta izolasyon metrekare fiyatları projenin kapsamına göre değişkenlik göstermektedir. En doğru fiyat için ücretsiz keşfimizden yararlanabilirsiniz.",
  },
  {
    question: "İzolasyon ne kadar sürede yapılır?",
    answer:
      "İzolasyon süresi projenin büyüklüğüne bağlıdır. Standart bir daire balkonu 1-2 gün, çatı izolasyonu 3-5 gün, temel izolasyonu 1-2 hafta sürebilir. Keşif sonrası net süre bilgisi veriyoruz.",
  },
  {
    question: "İzolasyon garantisi var mı?",
    answer:
      "Evet, tüm izolasyon uygulamalarımızda 5 yıl malzeme ve işçilik garantisi veriyoruz. Garanti süresi boyunca oluşabilecek sorunları ücretsiz gideriyoruz.",
  },
  {
    question: "Hangi izolasyon malzemeleri kullanıyorsunuz?",
    answer:
      "Dünya standartlarında, TSE ve CE belgeli malzemeler kullanıyoruz. Bitüm esaslı membranlar, likit membranlar, elastik su yalıtım malzemeleri ve ısı yalıtım levhaları ana malzemelerimizdir.",
  },
  {
    question: "Mevcut seramik üzerine izolasyon yapılabilir mi?",
    answer:
      "Evet, özel elastik sistemlerle mevcut seramik üzerine izolasyon yapılabilir. Ancak duruma göre seramiğin kaldırılması daha kalıcı sonuç verebilir. Keşifte en uygun yöntemi belirliyoruz.",
  },
  {
    question: "Kıbrıs'ta hangi bölgelere hizmet veriyorsunuz?",
    answer:
      "Girne, Lefkoşa, Gazimağusa, Güzelyurt ve tüm Kuzey Kıbrıs genelinde izolasyon hizmeti veriyoruz. Merkez ofisimiz Girne Alsancak'tadır.",
  },
  {
    question: "Yağmurlu havalarda izolasyon yapılabilir mi?",
    answer:
      "İzolasyon uygulamaları kuru hava koşullarında yapılmalıdır. Yağmurlu veya nemli havalarda uygulama kalitesi düşeceğinden, uygun hava koşullarını bekliyoruz. Bu durum projenizin başarısı için kritik öneme sahiptir.",
  },
  {
    question: "Temel izolasyonu neden önemlidir?",
    answer:
      "Temel izolasyonu, binanın toprak ile temas eden en kritik noktasını korur. Kıbrıs'ın nemli toprak yapısı nedeniyle, temel izolasyonu yapılmamış binalarda bodrum katlarda nem, küf ve yapısal hasar riski yüksektir. Doğru yapılmış temel izolasyonu binanın ömrünü önemli ölçüde uzatır.",
  },
];

export default function IzolasyonPage() {
  return (
    <>
      <Header />
      <main>
        <IzolasyonHero />

        {/* SEO İçerik Bölümü - Kıbrıs'ta İzolasyonun Önemi */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Sol - Görsel/İkon Grid */}
                <div className="relative">
                  <div className="bg-gold-primary/10 rounded-2xl p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-gold-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-7 h-7 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-navy-dark">Nem Koruması</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-gold-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-7 h-7 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-navy-dark">Su Yalıtımı</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-gold-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-7 h-7 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-navy-dark">Isı İzolasyonu</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-gold-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-7 h-7 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-navy-dark">Yapı Koruma</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sağ - Metin */}
                <div>
                  <h2 className="text-3xl font-heading font-bold text-navy-dark mb-6">
                    Kıbrıs İkliminde İzolasyonun Önemi
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-text">
                    <p>
                      Kuzey Kıbrıs&apos;ın Akdeniz iklimi, yaz aylarında yoğun
                      sıcaklık ve kış aylarında nem problemi yaratır.{" "}
                      <strong>Girne</strong> ve çevresindeki yapılar, deniz
                      kenarındaki konumları nedeniyle tuzlu nem ve rüzgara maruz
                      kalır. Bu koşullar, profesyonel izolasyon yapılmamış binalarda
                      ciddi sorunlara yol açar.
                    </p>
                    <p>
                      <strong>Kıbrıs&apos;ta izolasyon</strong> yaptırılmayan
                      binalarda sıkça karşılaşılan problemler:
                    </p>
                    <ul>
                      <li>Bodrum ve zemin katlarda nem ve küf oluşumu</li>
                      <li>Çatı ve teraslarda su sızıntısı</li>
                      <li>Balkonlarda su birikintisi ve alt kata sızma</li>
                      <li>Yüksek enerji faturaları (ısı kaybı/kazancı)</li>
                      <li>Boya ve sıva dökülmeleri</li>
                      <li>Yapısal hasarlar ve değer kaybı</li>
                    </ul>
                    <p>
                      25 yıllık deneyimimizle <strong>Girne, Lefkoşa, Gazimağusa</strong> ve
                      tüm Kuzey Kıbrıs&apos;ta profesyonel{" "}
                      <strong>izolasyon ve su yalıtımı</strong> hizmetleri sunuyoruz.
                      Çatı izolasyonu sonrası{" "}
                      <Link
                        href="/hizmetler/ic-ve-dis-cephe-uygulamalari"
                        className="text-gold-primary hover:underline"
                      >
                        dış cephe boya hizmetlerimize
                      </Link>{" "}
                      göz atabilirsiniz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <IzolasyonTypes />
        <AdvancedTechnology />

        <FeatureCards
          title="İzolasyonda 25 Yıllık Uzmanlık"
          features={features}
          variant="minimal"
        />

        <TimelineSection
          title="Profesyonel İzolasyon Süreci"
          steps={timelineSteps}
        />

        {/* İzolasyon Çeşitleri Detaylı Açıklama */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy-dark mb-8 text-center">
                İzolasyon Türleri Hakkında Detaylı Bilgi
              </h2>

              <div className="space-y-12">
                {/* Radya Temel İzolasyonu */}
                <div className="border-l-4 border-gold-primary pl-6">
                  <h3 className="text-2xl font-heading font-bold text-navy-dark mb-4">
                    Radya Temel İzolasyonu
                  </h3>
                  <div className="prose prose-lg max-w-none text-gray-text">
                    <p>
                      Radya temel izolasyonu, binanın toprak ile temas eden en
                      alt noktasında uygulanan kritik bir su yalıtımı
                      sistemidir. Kıbrıs&apos;ın nemli toprak yapısı ve yüksek yer
                      altı su seviyesi nedeniyle, radya temel izolasyonu olmayan
                      binalarda ciddi nem problemleri yaşanır.
                    </p>
                    <p>
                      <strong>Uygulama Yöntemimiz:</strong> Yüzey temizliği ve
                      astar uygulaması, bitüm esaslı membran serilmesi, koruyucu
                      şap veya keçe uygulaması ve minimum 10 cm beton koruma
                      tabakası.
                    </p>
                    <p>
                      <strong>Kullandığımız Malzemeler:</strong> 3mm ve 4mm
                      kalınlığında bitümlü membranlar, polimer modifiyeli bitüm
                      esaslı astarlar ve koruyucu geotekstil keçeler.
                    </p>
                  </div>
                </div>

                {/* Çatı ve Teras İzolasyonu */}
                <div className="border-l-4 border-gold-primary pl-6">
                  <h3 className="text-2xl font-heading font-bold text-navy-dark mb-4">
                    Çatı ve Teras İzolasyonu
                  </h3>
                  <div className="prose prose-lg max-w-none text-gray-text">
                    <p>
                      Teras ve çatı izolasyonu, binanın en çok hava koşullarına
                      maruz kalan bölümlerini korur. Kıbrıs&apos;ın yoğun güneş
                      ışınları, kış yağmurları ve sıcaklık farkları çatı
                      yüzeylerinde ciddi hasarlara neden olabilir.
                    </p>
                    <p>
                      <strong>Sıcak Çatı Sistemi:</strong> Betonarme çatılara
                      uygundur. Bitümlü membran + ısı yalıtımı. Üzeri gezilmez
                      veya seramik kaplanabilir.
                    </p>
                    <p>
                      <strong>Soğuk Çatı Sistemi:</strong> Kiremit altı
                      uygulamaları. Havalandırmalı çatı boşluğu. Nem bariyeri +
                      ısı yalıtımı.
                    </p>
                    <p>
                      Girne&apos;de yaptığımız çatı ve teras izolasyonu projelerinde
                      %100 müşteri memnuniyeti sağlıyoruz.
                    </p>
                  </div>
                </div>

                {/* Balkon İzolasyonu */}
                <div className="border-l-4 border-gold-primary pl-6">
                  <h3 className="text-2xl font-heading font-bold text-navy-dark mb-4">
                    Balkon Su Yalıtımı
                  </h3>
                  <div className="prose prose-lg max-w-none text-gray-text">
                    <p>
                      Balkon izolasyonu, özellikle alt katlara su sızıntısını
                      önlemek için kritik öneme sahiptir. Kıbrıs&apos;ta birçok
                      apartmanda balkon izolasyonu eksikliği nedeniyle komşular
                      arası anlaşmazlıklar yaşanmaktadır.
                    </p>
                    <p>
                      <strong>Neden Önemli?</strong> Yağmur suyu birikintileri
                      alta sızar, alt dairede tavan lekesi ve boya dökülmesi
                      oluşur, beton demirlerinde korozyon ve yapısal hasar riski
                      artar.
                    </p>
                    <p>
                      Girne ve KKTC genelinde balkon izolasyonu hizmetlerimizle
                      yüzlerce daireyi su sorunlarından kurtardık.
                    </p>
                  </div>
                </div>

                {/* Havuz İzolasyonu */}
                <div className="border-l-4 border-gold-primary pl-6">
                  <h3 className="text-2xl font-heading font-bold text-navy-dark mb-4">
                    Havuz İzolasyonu
                  </h3>
                  <div className="prose prose-lg max-w-none text-gray-text">
                    <p>
                      Havuz izolasyonu, hem yüzme havuzları hem de süs havuzları
                      için kritik öneme sahip özel bir su yalıtımı uygulamasıdır.
                      Kıbrıs&apos;ın sıcak iklimi nedeniyle birçok villa ve otelde
                      havuz bulunmaktadır.
                    </p>
                    <p>
                      <strong>Havuz İzolasyonu Gereksinimleri:</strong> İçeriden
                      dışarıya su kaçağı önleme, dışarıdan içeriye yer altı suyu
                      sızmasını engelleme, kimyasal maddelere dayanıklılık (klor
                      vb.), UV ve sıcaklık değişimlerine direnç.
                    </p>
                    <p>
                      Merit Park Hotel, Merit Royal Premium gibi prestijli
                      otellerin havuz izolasyonlarını başarıyla tamamladık.{" "}
                      <Link
                        href="/projeler"
                        className="text-gold-primary hover:underline"
                      >
                        Projelerimizi inceleyin
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQSection
          title="İzolasyon Hakkında Sıkça Sorulan Sorular"
          subtitle="Kıbrıs'ta izolasyon hizmetlerimiz hakkında merak edilenler"
          faqs={izolasyonFAQ}
          schemaId="https://duzkardizayn.com/hizmetler/izolasyon-ve-su-yalitimi#faq"
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
                  href="/hizmetler/ic-ve-dis-cephe-uygulamalari"
                  className="px-6 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-navy-dark hover:text-gold-primary"
                >
                  İç ve Dış Cephe Uygulamaları
                </Link>
                <Link
                  href="/hizmetler/genel-yenileme-ve-tadilat"
                  className="px-6 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-navy-dark hover:text-gold-primary"
                >
                  Tadilat ve Yenileme
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
