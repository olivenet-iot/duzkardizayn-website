import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ServiceHero,
  FeatureCards,
  CTASection,
  FAQSection,
} from "@/components/services";
import { alternatesFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Mantolama ve Isı Yalıtımı | Girne Kıbrıs - Düzkar Dizayn",
  description:
    "KKTC'de mantolama ve dış cephe ısı yalıtımı. EPS ve taş yünü sistemleriyle klima giderlerinde %30-45'e varan tasarruf, kışın yoğuşma ve küfe karşı koruma. 5 yıl garanti, ücretsiz keşif!",
  keywords: [
    "mantolama kktc",
    "mantolama kıbrıs",
    "mantolama girne",
    "mantolama fiyatları kktc",
    "ısı yalıtımı kıbrıs",
    "ısı yalıtımı girne",
    "dış cephe ısı yalıtımı",
    "eps mantolama",
    "taş yünü mantolama",
    "bina yalıtımı kktc",
    "enerji tasarrufu kıbrıs",
    "dış cephe kaplama girne",
  ],
  openGraph: {
    title: "Mantolama ve Isı Yalıtımı | Girne Kıbrıs",
    description:
      "KKTC'de profesyonel mantolama. EPS ve taş yünü sistemleri, %30-45'e varan enerji tasarrufu, 5-8 yılda geri ödeme. Ücretsiz keşif!",
    url: "https://duzkardizayn.com/hizmetler/mantolama",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/images/services/cephe/mantolama.jpg",
        width: 1200,
        height: 630,
        alt: "Kıbrıs Mantolama ve Isı Yalıtımı Hizmetleri",
      },
    ],
  },
  alternates: alternatesFor("/hizmetler/mantolama"),
};

const features = [
  {
    id: 1,
    title: "Uzman Ekip",
    description:
      "Uzman mantolama ekibimizle levha seçiminden son kat sıvaya kadar sistemin her adımını eksiksiz uyguluyoruz.",
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
      "Dünyaca ünlü markalardan seçilmiş, yüksek kaliteli EPS, taş yünü ve sıva sistemleri kullanıyoruz.",
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
  { text: "EPS (Strafor) Sistemi" },
  { text: "Taş Yünü Sistemi" },
  { text: "%30-45 Enerji Tasarrufu" },
  { text: "5 Yıl Garanti" },
];

// SEO için FAQ verileri
const mantolamaFAQ = [
  {
    question: "Mantolama yaptırılmalı mı?",
    answer:
      "Mantolama, özellikle Kıbrıs'ın sıcak ikliminde klima giderlerini önemli ölçüde düşürür. Yazın sıcağın içeri girmesini, kışın ısının dışarı kaçmasını önler. Uzun vadede enerji faturalarınızı %40'a kadar düşürür.",
  },
  {
    question: "Mantolama için EPS mi yoksa taş yünü mü tercih edilmeli?",
    answer:
      "KKTC'de 1-4 katlı konutlar için EPS (strafor) çoğunlukla yeterli ve ekonomik seçenektir. 5 kat ve üzeri binalar ile yangın güvenliği önemli ticari yapılarda taş yünü tercih edilir. Sahil bölgelerinde EPS'nin nem geçirmezlik özelliği avantaj sağlar. Doğru karar için binanızın kat sayısı, kullanım amacı ve bütçe birlikte değerlendirilmelidir.",
  },
  {
    question: "Mantolama kalınlığı ne olmalı?",
    answer:
      "KKTC iklim koşullarında minimum 3 cm temel koruma sağlarken, standart ve önerilen kalınlık 5 cm'dir. Maksimum verim için 8-10 cm uygulanabilir. Kalınlık arttıkça enerji tasarrufu ve geri ödeme süresi orantılı biçimde iyileşir. Uygulanacak kalınlık binanın mevcut yalıtım durumu ve enerji tüketimine göre belirlenir.",
  },
  {
    question: "Mantolama kaç yılda kendini amorti eder?",
    answer:
      "KKTC'de standart 5 cm EPS mantolama uygulaması, ortalama bir konutta yıllık enerji giderini %30-45 azaltır. Yatırım maliyetine ve enerji tasarrufuna bağlı olarak geri ödeme süresi genellikle 5-8 yıl arasındadır. Yükselen elektrik fiyatları bu süreyi daha da kısaltmaktadır.",
  },
  {
    question: "Mantolama fiyatları neye göre belirlenir?",
    answer:
      "Fiyat metrekare bazında hesaplanır; yalıtım malzemesi (EPS veya taş yünü), levha kalınlığı, bina yüksekliği ve iskele ihtiyacı, cephenin mevcut durumu ve seçilen son kat kaplama fiyatı belirleyen ana etkenlerdir. Net fiyat için ücretsiz keşif hizmetimizden yararlanabilirsiniz; keşif sonrası yazılı teklif sunuyoruz.",
  },
  {
    question: "Mantolama uygulaması ne kadar sürer?",
    answer:
      "Süre binanın büyüklüğüne, kat sayısına ve cephe karmaşıklığına göre değişir. Ortalama bir villa veya daire için 1-2 hafta, çok katlı bir apartman için 2-4 hafta hesaplanabilir. Uygulama süreci hava koşullarına bağımlıdır; yağmurlu veya aşırı sıcak günlerde çalışma yapılmaz.",
  },
  {
    question: "Mantolama mevcut boya üzerine yapılabilir mi?",
    answer:
      "Mevcut boyanın durumuna bağlıdır. Sağlam ve yapışık boya üzerine belirli ön işlemlerle mantolama yapılabilir; ancak dökülen, kabaran veya küflü boya mutlaka temizlenmelidir. Uygulama öncesi profesyonel yüzey değerlendirmesi şarttır. Yüzey hazırlığı atlandığında yapıştırıcı bağ kuvveti düşer ve sistem erken yaşlanır.",
  },
  {
    question: "Mantolama sonrası ayrıca dış cephe boyası gerekir mi?",
    answer:
      "Hayır, son kat sistemin parçasıdır. Mantolama; astar sonrası UV dayanımlı silikon veya akrilik esaslı dekoratif sıva ile tamamlanır, renk ve doku bu aşamada belirlenir. Yani mantolama yaptırdığınızda binanız aynı zamanda yenilenmiş bir cephe görünümüne kavuşur.",
  },
  {
    question: "Kıbrıs'ta hangi bölgelere mantolama hizmeti veriyorsunuz?",
    answer:
      "Girne, Lefkoşa, Gazimağusa, Güzelyurt ve tüm Kuzey Kıbrıs genelinde mantolama hizmeti veriyoruz. Merkez ofisimiz Girne Alsancak'tadır.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://duzkardizayn.com" },
    { "@type": "ListItem", "position": 2, "name": "Hizmetler", "item": "https://duzkardizayn.com/hizmetler" },
    { "@type": "ListItem", "position": 3, "name": "Mantolama ve Isı Yalıtımı" }
  ]
};

export default function MantolamaPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <ServiceHero
          title="Mantolama ve Isı Yalıtımı"
          description="KKTC'de klima gideri, ev bütçesinin en büyük kalemlerinden biri. Mantolama; yazın sıcağı dışarıda, kışın ısıyı içeride tutan, yoğuşma ve küf sorununu kökten çözen kalıcı bir dış cephe ısı yalıtımı sistemidir. EPS ve taş yünü sistemleriyle, keşiften son kat dekoratif sıvaya kadar tüm uygulamayı tek elden yapıyoruz."
          breadcrumb={{ current: "Mantolama ve Isı Yalıtımı" }}
          badges={heroBadges}
          imageSrc="/images/services/cephe/mantolama.jpg"
          imageAlt="Mantolama uygulaması - EPS levha montajı"
        />

        {/* SEO İçerik Bölümü - Neden Mantolama */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Sol - Rakam Kartları */}
                <div className="relative">
                  <div className="bg-gold-primary/10 rounded-2xl p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                        <span className="block font-heading text-3xl font-bold text-gold-primary mb-2">
                          %30-45
                        </span>
                        <p className="text-sm text-gray-text">
                          Klima giderinde azalma
                        </p>
                      </div>
                      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                        <span className="block font-heading text-3xl font-bold text-gold-primary mb-2">
                          4-8°C
                        </span>
                        <p className="text-sm text-gray-text">
                          İç mekanda sıcaklık farkı
                        </p>
                      </div>
                      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                        <span className="block font-heading text-3xl font-bold text-gold-primary mb-2">
                          5-8 Yıl
                        </span>
                        <p className="text-sm text-gray-text">
                          Yatırımın geri ödeme süresi
                        </p>
                      </div>
                      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                        <span className="block font-heading text-3xl font-bold text-gold-primary mb-2">
                          %5-15
                        </span>
                        <p className="text-sm text-gray-text">
                          Bina değerinde artış
                        </p>
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
                    Klima Faturasının Kalıcı Çözümü: Mantolama
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-text">
                    <p>
                      Kuzey Kıbrıs&apos;ta yaz sıcaklıkları 40°C&apos;yi aşar ve
                      güneş alan cephelerde yüzey sıcaklığı 60°C&apos;ye ulaşır.
                      Yalıtımsız betonarme duvar bu ısıyı gün boyu depolar ve
                      akşam saatlerinde içeriye vermeye devam eder. Sonuç:
                      klima sürekli çalışır, fatura kabarır, üst katlar bir
                      türlü serinlemez.
                    </p>
                    <p>
                      <strong>Mantolama (dış cephe ısı yalıtımı)</strong>, bu
                      sorunu kaynağında çözer: bina dış cephesi yalıtım
                      levhalarıyla kaplanır, duvar güneşin ısısını depolamaz
                      hale gelir. Kışın ise etkisi tersine çalışır — duvar iç
                      yüzeyi sıcak kaldığı için KKTC&apos;nin %70-80&apos;e ulaşan kış
                      neminde görülen yoğuşma, küf ve rutubet lekeleri önlenir.
                    </p>
                    <p>
                      <strong>Düzkar Dizayn</strong> olarak{" "}
                      <strong>Girne merkezli</strong>, tüm Kuzey Kıbrıs&apos;ta
                      25 yıllık deneyimimizle EPS ve taş yünü mantolama
                      sistemleri uyguluyoruz. Cephede nem veya su sızıntısı
                      varsa, mantolama öncesi{" "}
                      <Link
                        href="/hizmetler/izolasyon-ve-su-yalitimi"
                        className="text-gold-primary hover:underline"
                      >
                        su yalıtımı hizmetimizle
                      </Link>{" "}
                      sorunu kökten çözüyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EPS vs Taş Yünü */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy-dark mb-4 text-center">
                EPS mi, Taş Yünü mü?
              </h2>
              <p className="text-gray-text text-center mb-10 text-lg">
                Mantolama sistemlerinde kullanılan iki temel yalıtım malzemesi
                mevcuttur. Doğru seçim binanın tipine, kat sayısına ve kullanım
                amacına göre değişir.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* EPS Kartı */}
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-lg font-bold text-navy-dark mb-3">EPS (Strafor) Sistemi</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <span>Ekonomik: Taş yününe göre %20-35 daha uygun</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <span>Hafif ve kolay işlenir</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <span>Nem geçirmez — sahil bölgeleri için ideal</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <span>30+ yıl dayanım (doğru uygulamada)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-yellow-600 font-bold mt-0.5">!</span>
                      <span>5 kat üzeri binalarda yangın bariyeri gerektirir</span>
                    </li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3 font-medium">İdeal: Konutlar, 1-4 katlı binalar</p>
                </div>
                {/* Taş Yünü Kartı */}
                <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-lg font-bold text-navy-dark mb-3">Taş Yünü Sistemi</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <span>Yangın sınıfı A1 — tamamen yanmaz</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <span>Mükemmel ses yalıtımı</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <span>Buhar geçirgen — yapı nefes alır</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <span>Doğal ve çevre dostu malzeme</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-yellow-600 font-bold mt-0.5">!</span>
                      <span>EPS&apos;ye göre %25-40 daha yüksek maliyet</span>
                    </li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3 font-medium">İdeal: Oteller, ticari binalar, 5+ kat</p>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy-dark mb-2">
                  Kalınlık Ne Olmalı?
                </h3>
                <p className="text-gray-text text-sm leading-relaxed">
                  KKTC iklim koşullarında minimum 3 cm temel koruma sağlar;
                  standart ve önerilen kalınlık 5 cm&apos;dir, maksimum verim için
                  8-10 cm uygulanabilir. Kalınlık arttıkça enerji tasarrufu ve
                  geri ödeme süresi orantılı biçimde iyileşir. Keşifte binanızın
                  mevcut yalıtım durumuna ve enerji tüketiminize göre en verimli
                  kalınlığı birlikte belirliyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Uygulama Adımları */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy-dark mb-4 text-center">
                Mantolama Uygulama Adımları
              </h2>
              <p className="text-gray-text text-center mb-10 text-lg">
                Profesyonel mantolama, birbirine bağımlı altı adımdan oluşan bir
                sistemdir. Her adım eksiksiz uygulanmalıdır.
              </p>

              <ol className="space-y-3">
                {[
                  { step: '1', title: 'Yüzey Hazırlığı', desc: 'Dökülen boya, gevşek sıva ve küf temizlenir; çatlaklar onarılır. Yüzey kuru ve sağlam olmalıdır.' },
                  { step: '2', title: 'Su Basman Çıtası', desc: 'Alüminyum başlangıç profili zemin seviyesinin 30-40 cm üstüne yatay olarak monte edilir.' },
                  { step: '3', title: 'Levha Yapıştırma & Dübelleme', desc: 'EPS veya taş yünü levhalar yapıştırıcıyla sabitlenir, ardından min. 6 adet/m² plastik diskli dübel ile mekanik bağlantı tamamlanır.' },
                  { step: '4', title: 'Köşe ve Kenar Profilleri', desc: 'Pencere çevreleri, köşeler ve kenarlara PVC/alüminyum köşe profilleri uygulanır.' },
                  { step: '5', title: 'Donatı Filesi & Macun', desc: 'Polimer macun içine 160 g/m² cam elyaf file gömülür; köşelerde çift kat ve 10 cm bindirme zorunludur.' },
                  { step: '6', title: 'Astar & Dekoratif Sıva', desc: 'Astar sonrası UV dayanımlı silikon veya akrilik sıva ile sistem tamamlanır; cephenin rengi ve dokusu bu aşamada belirlenir.' },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-4 bg-white rounded-lg p-4 shadow-sm">
                    <span className="flex-shrink-0 w-8 h-8 bg-gold-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </span>
                    <div>
                      <strong className="text-navy-dark">{item.title}:</strong>
                      <span className="text-gray-600 ml-1">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* KKTC'ye Özel Faydalar */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy-dark mb-4 text-center">
                KKTC İkliminde Mantolamanın Faydaları
              </h2>
              <p className="text-gray-text text-center mb-10 text-lg">
                Kuzey Kıbrıs&apos;ın iklim koşulları, mantolama sistemlerinin en
                verimli sonuç verdiği ortamlardan birini oluşturur.
              </p>

              <ul className="space-y-2">
                {[
                  { icon: '☀️', text: 'Yaz sıcağı (40°C+): Mantolama, güney cephelerdeki yüzey sıcaklığını 60°C\'den 35°C\'ye düşürür. İç mekanda 4-8°C fark yaratır, klima faturasını %30-45 azaltır.' },
                  { icon: '💧', text: 'Kış nemi: %70-80\'e ulaşan kış nemi yoğuşmaya yol açar. Mantolama duvar yüzeyini sıcak tutarak yoğuşmayı engeller; küf ve nem sorunlarını ortadan kaldırır.' },
                  { icon: '🌊', text: 'Deniz tuzu: Girne ve Gazimağusa kıyılarında tuzlu hava betonu aşındırır. Mantolama koruyucu kabuk oluşturarak yapısal ömrü uzatır.' },
                  { icon: '⚡', text: 'Enerji maliyeti: Yükselen elektrik fiyatlarıyla 5-8 yılda geri öder, bina değerini %5-15 artırır.' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <span className="text-gray-700 text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* İç Bağlantı - Blog */}
              <div className="mt-10 bg-gold-primary/10 border border-gold-primary/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-primary/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-dark mb-1">Kapsamlı Mantolama Rehberi</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      EPS ve taş yünü sistemleri, uygulama adımları, sık yapılan
                      hatalar ve KKTC&apos;ye özel detaylı bilgi için blog yazımızı
                      okuyun.
                    </p>
                    <Link
                      href="/blog/kktcde-mantolama-nedir-ve-neden-onemli"
                      className="inline-flex items-center gap-2 text-gold-primary font-semibold hover:underline text-sm"
                    >
                      Mantolama Rehberini Oku
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeatureCards
          title="Profesyonel Mantolama Çözümleri"
          features={features}
          variant="dark"
        />

        <FAQSection
          title="Mantolama Hakkında Sıkça Sorulan Sorular"
          subtitle="KKTC'de mantolama ve ısı yalıtımı hakkında merak edilenler"
          faqs={mantolamaFAQ}
          schemaId="https://duzkardizayn.com/hizmetler/mantolama#faq"
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
                  İç ve Dış Cephe Boya
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
          title="Klima Faturanızı"
          highlightedText="Kalıcı Olarak Düşürün"
          description="Girne, Lefkoşa, Gazimağusa ve Güzelyurt'ta mantolama ve ısı yalıtımı işlerinizde güvenilir çözüm ortağınız. Ücretsiz keşif sonrası binanıza özel yazılı teklif sunuyoruz."
          primaryButtonText="Ücretsiz Keşif Talep Et"
          primaryButtonHref="/#iletisim"
          secondaryButtonText="+90 533 831 14 32"
          secondaryButtonHref="tel:+905338311432"
          trustBadges={trustBadges}
        />
      </main>
      <Footer />
    </>
  );
}
