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
import CepheServices from "./components/CepheServices";

export const metadata: Metadata = {
  title: "İç ve Dış Cephe Boya Uygulamaları | Girne Kıbrıs - Düzkar Dizayn",
  description:
    "Kıbrıs Girne'de profesyonel iç cephe ve dış cephe boya hizmetleri. Mantolama, sıva, alçı, dekoratif boya uygulamaları. Uzman ekip, kaliteli malzeme, garantili işçilik. Ücretsiz keşif!",
  keywords: [
    "dış cephe boya kıbrıs",
    "dış cephe boya girne",
    "iç cephe boya kıbrıs",
    "iç cephe boya girne",
    "mantolama kktc",
    "mantolama kıbrıs",
    "mantolama girne",
    "sıva alçı kıbrıs",
    "dekoratif boya girne",
    "cephe kaplama kktc",
    "bina boyama kıbrıs",
    "apartman boyası girne",
    "villa dış cephe",
    "ısı yalıtımı kıbrıs",
  ],
  openGraph: {
    title: "İç ve Dış Cephe Boya Uygulamaları | Girne Kıbrıs",
    description:
      "Kıbrıs'ta profesyonel cephe boya hizmetleri. Dış cephe, iç cephe, mantolama, dekoratif sıva. Uzman ekip, garantili işçilik!",
    url: "https://duzkardizayn.com/hizmetler/ic-ve-dis-cephe-uygulamalari",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/images/services/cephe/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Kıbrıs Dış Cephe Boya Hizmetleri",
      },
    ],
  },
  alternates: {
    canonical: "https://duzkardizayn.com/hizmetler/ic-ve-dis-cephe-uygulamalari",
  },
};

const timelineSteps = [
  {
    id: 1,
    title: "Keşif ve Analiz",
    description:
      "Uzman ekibimiz, uygulama yapılacak alanı ücretsiz olarak inceleyerek yüzey durumunu değerlendirir. İhtiyaca en uygun boya türü, renk ve uygulama teknikleri belirlenir.",
  },
  {
    id: 2,
    title: "Planlama ve Teklif",
    description:
      "Keşif sonrası, projenize özel planlama yapılır. Renk kartelası sunulur, kullanılacak malzemeler ve uygulama yöntemi belirlenerek şeffaf bir fiyat teklifi hazırlanır.",
  },
  {
    id: 3,
    title: "Uygulama",
    description:
      "Profesyonel ekibimiz, yüzey hazırlığından son kat boyaya kadar tüm süreci titizlikle yürütür. Özel tekniklerle pürüzsüz ve kusursuz yüzeyler elde edilir.",
  },
  {
    id: 4,
    title: "Kontrol ve Teslim",
    description:
      "Uygulama sonrası detaylı kontroller yapılarak işin kalitesi denetlenir. Temiz ve kusursuz bir şekilde projenizi teslim ederiz.",
  },
];

const features = [
  {
    id: 1,
    title: "Uzman Ekip",
    description:
      "Uzman boya ve mantolama ekibimizle kusursuz yüzeyler ve dayanıklı çözümler sunuyoruz.",
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
      "Dünyaca ünlü markalardan seçilmiş, yüksek kaliteli boya ve mantolama malzemeleri kullanıyoruz.",
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
      "Konut ve ticari projelerde müşterilerimizin beklentilerini aşan sonuçlarla güven kazandık.",
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
  { text: "İç Cephe Boya" },
  { text: "Dış Cephe Boya" },
  { text: "Mantolama" },
  { text: "Dekoratif Sıva" },
];

// SEO için FAQ verileri
const cepheFAQ = [
  {
    question: "Kıbrıs'ta dış cephe boya fiyatları ne kadar?",
    answer:
      "Dış cephe boya fiyatları metrekare bazında hesaplanır ve kullanılan boya kalitesi, yüzey durumu, iskele ihtiyacı ve bina yüksekliğine göre değişir. Ortalama fiyat bilgisi için ücretsiz keşif hizmetimizden yararlanabilirsiniz.",
  },
  {
    question: "Dış cephe boyası ne kadar dayanır?",
    answer:
      "Kaliteli dış cephe boyaları, doğru uygulama ile Kıbrıs ikliminde 8-12 yıl dayanıklılık gösterir. UV dayanımı yüksek, su itici özelliğe sahip boyalar tercih ediyoruz.",
  },
  {
    question: "Mantolama yaptırılmalı mı?",
    answer:
      "Mantolama, özellikle Kıbrıs'ın sıcak ikliminde klima giderlerini önemli ölçüde düşürür. Yazın sıcağın içeri girmesini, kışın ısının dışarı kaçmasını önler. Uzun vadede enerji faturalarınızı %40'a kadar düşürür.",
  },
  {
    question: "İç cephe boyası için hangi markalar kullanılıyor?",
    answer:
      "Filli Boya, Marshall, Polisan, Dyo gibi kaliteli markaların ürünlerini kullanıyoruz. Odaya göre mat, saten veya ipek mat seçenekleri sunuyoruz. Çocuk odaları için anti-bakteriyel boyalar da mevcuttur.",
  },
  {
    question: "Boya sırasında evde kalmak mümkün mü?",
    answer:
      "İç cephe boya uygulamasında oda oda çalışarak evde kalmanıza imkan tanırız. Ancak çocuklu ailelerde ve solunum hastalığı olanlarda boya kokusundan uzak durmanızı öneririz. Dış cephe çalışmasında ise evde rahatlıkla kalabilirsiniz.",
  },
  {
    question: "Dekoratif sıva çeşitleri nelerdir?",
    answer:
      "Venedik sıvası, taş görünümlü dokular, metalik efektler, beton görünümü ve rustik dokular sunuyoruz. Her biri mekana özgün bir karakter ve estetik katmaktadır.",
  },
  {
    question: "Kıbrıs'ta hangi bölgelere hizmet veriyorsunuz?",
    answer:
      "Girne, Lefkoşa, Gazimağusa, Güzelyurt ve tüm Kuzey Kıbrıs genelinde iç ve dış cephe boya hizmeti veriyoruz. Merkez ofisimiz Girne Alsancak'tadır.",
  },
  {
    question: "Dış cephe boyası için en uygun mevsim hangisi?",
    answer:
      "Kıbrıs'ta dış cephe boya uygulamaları için en uygun dönem ilkbahar ve sonbahar aylarıdır. Aşırı sıcak yaz günlerinde ve yağışlı kış günlerinde uygulama yapılmaması tavsiye edilir.",
  },
];

export default function CepheUygulamalariPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="İç ve Dış Cephe Uygulamaları"
          description="İç ve dış mekanlarda profesyonel boya, sıva ve mantolama çözümleri sunuyoruz. Uzman ekibimizle, yüksek kaliteli malzemeler kullanarak mekanlarınıza estetik ve dayanıklılık katıyoruz. Tüm cephe uygulamalarımızda müşteri memnuniyetini ön planda tutarak, uzun ömürlü sonuçlar garanti ediyoruz."
          breadcrumb={{ current: "İç ve Dış Cephe Uygulamaları" }}
          badges={heroBadges}
          imageSrc="/images/services/cephe/hero.jpg"
          imageAlt="Cephe boya uygulaması"
        />

        {/* SEO İçerik Bölümü - Kıbrıs'ta Cephe Uygulamalarının Önemi */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Sol - Görsel/İkon Grid */}
                <div className="relative">
                  <div className="bg-gold-primary/10 rounded-2xl p-8">
                    <div className="grid grid-cols-2 gap-4">
                      {/* İkon 1 - UV Koruması */}
                      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-gold-primary/20 rounded-full flex items-center justify-center mb-4">
                          <svg className="w-7 h-7 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-navy-dark mb-2">UV Koruması</h4>
                        <p className="text-sm text-gray-text">Güneş ışınlarına dayanıklı</p>
                      </div>
                      {/* İkon 2 - Su İticilik */}
                      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-gold-primary/20 rounded-full flex items-center justify-center mb-4">
                          <svg className="w-7 h-7 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-navy-dark mb-2">Su İticilik</h4>
                        <p className="text-sm text-gray-text">Yağmur ve neme karşı</p>
                      </div>
                      {/* İkon 3 - Isı Yalıtımı */}
                      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-gold-primary/20 rounded-full flex items-center justify-center mb-4">
                          <svg className="w-7 h-7 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-navy-dark mb-2">Isı Yalıtımı</h4>
                        <p className="text-sm text-gray-text">%40 enerji tasarrufu</p>
                      </div>
                      {/* İkon 4 - Estetik Görünüm */}
                      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-gold-primary/20 rounded-full flex items-center justify-center mb-4">
                          <svg className="w-7 h-7 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-navy-dark mb-2">Estetik Görünüm</h4>
                        <p className="text-sm text-gray-text">Modern ve şık cepheler</p>
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
                    Kıbrıs İkliminde Cephe Uygulamalarının Önemi
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-text">
                    <p>
                      Kuzey Kıbrıs&apos;ın Akdeniz iklimi, bina cephelerini zorlu
                      koşullara maruz bırakır. Yaz aylarında 40°C&apos;yi aşan
                      sıcaklıklar, yoğun UV ışınları, kış yağmurları ve tuzlu deniz
                      havası, koruyucu önlem alınmamış cephelerde ciddi hasarlara
                      neden olur.
                    </p>
                    <p>
                      <strong>Girne ve çevresinde</strong> profesyonel cephe
                      uygulaması yapılmamış binalarda yaşanan sorunlar:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        Boya ve sıva dökülmeleri
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        Renk solması ve lekelenme
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        Çatlaklar ve su sızıntısı
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        Mantolama yapılmamışsa yüksek enerji giderleri
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        Binanın değer kaybı
                      </li>
                    </ul>
                    <p className="mt-4">
                      <strong>Düzkar Dizayn</strong> olarak{" "}
                      <strong>Kıbrıs&apos;ta dış cephe boya</strong>,{" "}
                      <strong>iç cephe boya</strong>, mantolama ve dekoratif sıva
                      uygulamalarında 25 yıllık deneyimimizle hizmet veriyoruz.
                      Cephe boyası öncesi{" "}
                      <Link
                        href="/hizmetler/izolasyon-ve-su-yalitimi"
                        className="text-gold-primary hover:underline"
                      >
                        izolasyon hizmetlerimize
                      </Link>{" "}
                      göz atmanızı öneririz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CepheServices />

        {/* Cephe Uygulamaları Detaylı Açıklama */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy-dark mb-8 text-center">
                Cephe Hizmetleri Hakkında Detaylı Bilgi
              </h2>

              <div className="space-y-12">
                {/* Dış Cephe Boya */}
                <div className="border-l-4 border-gold-primary pl-6">
                  <h3 className="text-2xl font-heading font-bold text-navy-dark mb-4">
                    Dış Cephe Boya Uygulamaları
                  </h3>
                  <div className="prose prose-lg max-w-none text-gray-text">
                    <p>
                      Dış cephe boyası, binanızın ilk izlenimini belirler ve
                      yapıyı dış etkenlere karşı korur. Kıbrıs&apos;ın zorlu iklim
                      koşullarında doğru dış cephe boyası seçimi binanızın
                      ömrünü uzatır.
                    </p>
                    <p>
                      <strong>Dış Cephe Boya Özellikleri:</strong> UV dayanımı
                      (güneş ışınlarına karşı), su iticilik (yağmur ve neme
                      karşı), nefes alabilirlik (nem atımı), renk kalıcılığı.
                    </p>
                    <p>
                      <strong>Kullandığımız Markalar:</strong> Filli Boya,
                      Marshall, Polisan, Dyo gibi kaliteli markalar.
                    </p>
                    <p>
                      <strong>Kıbrıs İklimi İçin Öneriler:</strong> Açık renkler
                      tercih edilmeli (ısı emilimini azaltır), akrilik veya
                      silikon esaslı boyalar, minimum 2 kat uygulama.
                    </p>
                  </div>
                </div>

                {/* İç Cephe Boya */}
                <div className="border-l-4 border-gold-primary pl-6">
                  <h3 className="text-2xl font-heading font-bold text-navy-dark mb-4">
                    İç Cephe Boya Uygulamaları
                  </h3>
                  <div className="prose prose-lg max-w-none text-gray-text">
                    <p>
                      İç cephe boyası, yaşam alanlarınızın estetiği ve sağlığı
                      doğrudan etkiler. Kıbrıs&apos;ın nemli ikliminde doğru boya
                      seçimi ve uygulama tekniği kritik öneme sahiptir.
                    </p>
                    <p>
                      <strong>İç Cephe Boya Hizmetlerimiz:</strong> Mat, yarı mat
                      ve saten boya uygulamaları, anti-bakteriyel ve küf
                      önleyici boyalar, çocuk odası için özel boyalar, ofis ve
                      ticari mekan boyaları.
                    </p>
                    <p>
                      <strong>Uygulama Sürecimiz:</strong> Yüzey temizliği ve
                      tamir, macun ve zımpara işlemleri, astar uygulaması,
                      minimum 2 kat boya.
                    </p>
                  </div>
                </div>

                {/* Mantolama */}
                <div className="border-l-4 border-gold-primary pl-6">
                  <h3 className="text-2xl font-heading font-bold text-navy-dark mb-4">
                    Mantolama Sistemleri
                  </h3>
                  <div className="prose prose-lg max-w-none text-gray-text">
                    <p>
                      Mantolama (ısı yalıtımı), binanızın enerji verimliliğini
                      artıran en etkili yöntemdir. Kıbrıs&apos;ta yaz aylarında
                      klimanın daha az çalışması, kış aylarında ısınma
                      giderlerinin düşmesi anlamına gelir.
                    </p>
                    <p>
                      <strong>Mantolama Neden Gerekli?</strong> %40&apos;a varan
                      enerji tasarrufu, yaz-kış konforlu iç mekan sıcaklığı, dış
                      cephenin korunması, bina değerinin artması.
                    </p>
                    <p>
                      <strong>Mantolama Uygulama Aşamaları:</strong> Yüzey
                      hazırlığı ve temizlik, yapıştırıcı ile EPS levha montajı,
                      mekanik dübelleme, file ve sıva tabakası, astar ve boya
                      uygulaması.
                    </p>
                    <p>
                      <strong>Kıbrıs&apos;ta Mantolama Kalınlıkları:</strong> Minimum
                      3cm (temel koruma), önerilen 5cm (standart), ideal 8-10cm
                      (maksimum verim).
                    </p>
                  </div>
                </div>

                {/* Dekoratif Sıva */}
                <div className="border-l-4 border-gold-primary pl-6">
                  <h3 className="text-2xl font-heading font-bold text-navy-dark mb-4">
                    Dekoratif Sıva ve Tekstür Boya
                  </h3>
                  <div className="prose prose-lg max-w-none text-gray-text">
                    <p>
                      Dekoratif sıva ve tekstür boya uygulamaları, mekanlarınıza
                      özgün ve estetik bir görünüm kazandırır. Standart boyadan
                      farklı olarak, üç boyutlu dokular ve özel efektler
                      oluşturur.
                    </p>
                    <p>
                      <strong>Dekoratif Uygulama Türleri:</strong> Venedik
                      sıvası, taş görünümlü dokular, metalik efektler, beton
                      görünümü, rustik dokular.
                    </p>
                    <p>
                      <strong>Kullanım Alanları:</strong> Otel lobileri, restoran
                      ve kafeler, ofis resepsiyon alanları, villa ve daire iç
                      mekanları, özellik duvarları (accent wall).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeatureCards
          title="Profesyonel Cephe Çözümleri"
          features={features}
          variant="dark"
        />

        <TimelineSection
          title="Profesyonel Boya ve Cephe Uygulama Süreci"
          steps={timelineSteps}
        />

        <FAQSection
          title="Cephe Uygulamaları Hakkında Sıkça Sorulan Sorular"
          subtitle="Kıbrıs'ta iç ve dış cephe hizmetlerimiz hakkında merak edilenler"
          faqs={cepheFAQ}
          schemaId="https://duzkardizayn.com/hizmetler/ic-ve-dis-cephe-uygulamalari#faq"
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
