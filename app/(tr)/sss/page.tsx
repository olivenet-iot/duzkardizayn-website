import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FAQSection, CTASection } from "@/components/services";
import { alternatesFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular | İzolasyon, Su Yalıtımı, Cephe - Düzkar Dizayn",
  description:
    "Kuzey Kıbrıs'ta izolasyon, su yalıtımı, mantolama, cephe boya ve tadilat hakkında en çok sorulan sorular ve uzman cevapları. Girne, Lefkoşa, Gazimağusa genelinde 25+ yıl deneyim.",
  keywords: [
    "izolasyon sık sorulan sorular",
    "su yalıtımı faq",
    "mantolama soruları",
    "kıbrıs izolasyon",
    "kktc tadilat",
    "girne izolasyon fiyat",
  ],
  openGraph: {
    title: "Sık Sorulan Sorular | Düzkar Dizayn",
    description:
      "İzolasyon, su yalıtımı, mantolama ve tadilat hakkında merak edilenler. KKTC'de 25+ yıl deneyimle uzman cevapları.",
    url: "https://duzkardizayn.com/sss",
    type: "website",
    locale: "tr_TR",
  },
  alternates: alternatesFor("/sss"),
};

const izolasyonFaqs = [
  { question: "Kıbrıs'ta izolasyon yaptırmak ne kadara mal olur?", answer: "İzolasyon maliyeti, uygulanacak alana, kullanılacak malzemeye ve projenin büyüklüğüne göre değişir. Temel izolasyonu, çatı izolasyonu ve mantolama farklı fiyatlandırılır. Ücretsiz keşif sonrası net fiyat teklifi sunuyoruz." },
  { question: "Kıbrıs ikliminde en uygun izolasyon malzemesi hangisidir?", answer: "Akdeniz iklimi için bitüm membran, kristalize su yalıtımı ve poliüretan köpük en çok tercih edilen malzemelerdir. Temel izolasyonunda bitüm membran, çatılarda sıvı membran, cephelerde ise EPS veya taş yünü mantolama önerilir." },
  { question: "İzolasyon ne kadar sürede yapılır?", answer: "Proje büyüklüğüne göre değişmekle birlikte, standart bir ev çatı izolasyonu 2-3 gün, temel izolasyonu 3-5 gün, komple bina izolasyonu ise 1-2 hafta sürebilir." },
  { question: "İzolasyon garantisi ne kadar süre?", answer: "Düzkar Dizayn olarak tüm izolasyon uygulamalarımızda 5 yıl garanti veriyoruz. Kaliteli malzeme ve doğru uygulama ile izolasyonun ömrü 15-20 yıla kadar uzayabilir." },
  { question: "Mevcut binaya izolasyon yaptırılabilir mi?", answer: "Evet, mevcut binalara da izolasyon uygulanabilir. Dışarıdan mantolama, çatı üstü membran, iç duvar yalıtımı gibi yöntemlerle mevcut yapılara izolasyon yapılır." },
  { question: "Radya temel nedir ve normal temelden farkı nedir?", answer: "Radya temel, binanın tüm tabanını kaplayan tek parça betonarme plaktır. Normal şerit temelden farklı olarak, yapı yükünü geniş bir alana yayar ve özellikle zayıf zeminlerde veya yeraltı suyu seviyesinin yüksek olduğu bölgelerde tercih edilir." },
  { question: "Kıbrıs'ta radya temel izolasyonu zorunlu mu?", answer: "Yasal zorunluluk olmasa da, Kıbrıs'ın yüksek yeraltı suyu seviyesi ve kil oranı yüksek toprak yapısı nedeniyle radya temel izolasyonu pratik olarak zorunludur. İzolasyonsuz temeller 5-10 yıl içinde ciddi nem ve yapısal sorunlarla karşılaşır." },
  { question: "Havuz neden sızar?", answer: "Havuz sızıntısının 5 ana nedeni: yetersiz veya hatalı izolasyon, sıcaklık farkından kaynaklanan çatlaklar, zemin hareketleri, boru geçiş noktalarındaki zayıflıklar ve kimyasal aşınmadır." },
  { question: "Balkondan alt kata su sızıyor, ne yapmalıyım?", answer: "Öncelikle sızıntının kaynağını tespit etmek gerekir. Balkon eğimi yetersiz olabilir, su yalıtımı bozulmuş veya hiç yapılmamış olabilir. Profesyonel keşif ile kaynak tespit edilip kalıcı çözüm uygulanmalıdır." },
];

const nemFaqs = [
  { question: "Evdeki nem sorunu nasıl anlaşılır?", answer: "Duvarlarda lekelenme veya kabartı, boya dökülmesi, küf kokusu, pencere kenarlarında yoğuşma, ahşap mobilyalarda şişme ve parkelerde kabarma nem sorunun başlıca belirtileridir." },
  { question: "KKTC'de nem sorununun en yaygın nedeni nedir?", answer: "KKTC'de nem sorunlarının başlıca nedenleri: yetersiz veya hiç yapılmamış izolasyon, yüksek yeraltı suyu seviyesi, Akdeniz ikliminin %70-80 nem oranı ve yapı malzemelerindeki kalite eksiklikleridir." },
  { question: "Nem sorunu sağlığı nasıl etkiler?", answer: "Nem ve küf, solunum yolu hastalıkları, alerjik reaksiyonlar, astım atakları ve cilt tahrişi gibi sağlık sorunlarına yol açabilir. Özellikle çocuklar ve yaşlılar için risk daha yüksektir." },
  { question: "Nem giderici cihaz kalıcı çözüm müdür?", answer: "Hayır, nem giderici cihazlar geçici bir çözümdür ve sadece belirtiyi maskeler. Kalıcı çözüm için nemin kaynağının tespit edilip izolasyon veya su yalıtımı ile kökten çözülmesi gerekir." },
  { question: "Ne zaman profesyonel yardım almalıyım?", answer: "Duvarlardan aktif su sızıntısı, geniş alanlarda küf oluşumu, bodrum katta su birikmesi veya yapısal çatlaklar görüyorsanız mutlaka profesyonel yardım almalısınız." },
];

const cepheFaqs = [
  { question: "Mantolama nedir ve ne işe yarar?", answer: "Mantolama, binaların dış cephesine ısı yalıtım levhaları (EPS veya taş yünü) yapıştırılıp üzerine sıva ve boya uygulanmasıdır. Binanın ısı kaybını önler, enerji tasarrufu sağlar ve dış cepheyi hava koşullarından korur." },
  { question: "KKTC'de mantolama gerekli mi?", answer: "Evet, mantolama sadece soğuktan değil sıcaktan da korur. Kıbrıs'ın 35-40°C yaz sıcaklarında mantolama iç mekan sıcaklığını 5-8°C düşürebilir ve klima maliyetlerini %30-40 azaltabilir." },
  { question: "EPS ve taş yünü mantolama arasındaki fark nedir?", answer: "EPS (strafor) daha hafif ve ekonomiktir, ısı yalıtımında etkilidir. Taş yünü ise yangına dayanıklı, ses yalıtımı da sağlar. Kıbrıs koşullarında EPS genellikle yeterlidir, ancak yüksek binalar ve yangın riski olan yapılarda taş yünü tercih edilir." },
  { question: "Dış cephe boyası ne kadar dayanır?", answer: "Kaliteli, UV dayanımlı dış cephe boyası Kıbrıs ikliminde 8-12 yıl dayanır. Boyadan önce yüzey hazırlığı ve astar uygulaması ömrü doğrudan etkiler." },
  { question: "Mantolama kaç yıl dayanır?", answer: "Kaliteli malzeme ve doğru uygulama ile mantolama 20-25 yıl dayanır. Düzkar Dizayn olarak tüm mantolama uygulamalarımıza 5 yıl garanti veriyoruz." },
];

const genelFaqs = [
  { question: "Ücretsiz keşif nasıl talep edebilirim?", answer: "Web sitemizdeki iletişim formunu doldurarak, +90 533 831 14 32 numarasını arayarak veya WhatsApp üzerinden bize ulaşarak ücretsiz keşif talep edebilirsiniz. Uzman ekibimiz en kısa sürede sizi ziyaret eder." },
  { question: "Hangi bölgelere hizmet veriyorsunuz?", answer: "Girne merkezli olarak Lefkoşa, Gazimağusa, Güzelyurt ve tüm Kuzey Kıbrıs genelinde hizmet veriyoruz." },
  { question: "Ödeme seçenekleriniz nelerdir?", answer: "Nakit, kredi kartı ve banka havalesi ile ödeme kabul ediyoruz. TRY, EUR ve GBP ile işlem yapabilirsiniz. Büyük projelerde taksit imkanı da sunuyoruz." },
  { question: "Garanti kapsamınız nedir?", answer: "Tüm izolasyon ve su yalıtımı uygulamalarımızda 5 yıl garanti veriyoruz. Garanti süresince oluşabilecek sorunlarda ücretsiz onarım yapıyoruz." },
  { question: "Çalışma saatleriniz nedir?", answer: "Pazartesi-Cuma 08:00-18:00, Cumartesi 08:00-14:00 arası hizmet veriyoruz. Acil durumlar için WhatsApp üzerinden 7/24 ulaşabilirsiniz." },
  { question: "Ev alırken izolasyon kontrolü nasıl yapılır?", answer: "Duvarların nem durumu, çatı ve teras birleşim noktaları, bodrum katın su geçirgenliği, balkon ve teras eğimleri kontrol edilmelidir. Profesyonel keşif ile nem ölçümü yaptırmanız önerilir." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://duzkardizayn.com" },
    { "@type": "ListItem", "position": 2, "name": "Sık Sorulan Sorular" }
  ]
};

export default function SSSPage() {
  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main>
        {/* Hero */}
        <section className="bg-navy-dark pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <nav className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-sm text-white/70">
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
                <li className="text-gold-primary">Sık Sorulan Sorular</li>
              </ol>
            </nav>
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Sık Sorulan Sorular
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              İzolasyon, su yalıtımı, mantolama ve tadilat hakkında en çok merak edilen soruların uzman cevapları
            </p>
          </div>
        </section>

        {/* Hızlı Navigasyon */}
        <section className="bg-white border-b border-gray-100 sticky top-0 z-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
              {[
                { id: "izolasyon", label: "İzolasyon ve Su Yalıtımı" },
                { id: "nem", label: "Nem Sorunu" },
                { id: "cephe", label: "Cephe ve Mantolama" },
                { id: "genel", label: "Genel" },
              ].map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="flex-shrink-0 px-4 py-2 bg-gray-100 hover:bg-gold-primary hover:text-navy-dark rounded-full text-sm font-medium text-gray-text transition-colors"
                >
                  {cat.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Bölümleri */}
        <div id="izolasyon">
          <FAQSection
            title="İzolasyon ve Su Yalıtımı"
            subtitle="Temel, çatı, balkon, havuz izolasyonu ve su yalıtımı hakkında sorular"
            schemaId="https://duzkardizayn.com/sss#izolasyon"
            faqs={izolasyonFaqs}
          />
        </div>

        <div id="nem">
          <FAQSection
            title="Nem Sorunu ve Çözümleri"
            subtitle="KKTC'de ev ve işyerlerindeki nem sorunları hakkında sorular"
            schemaId="https://duzkardizayn.com/sss#nem"
            faqs={nemFaqs}
          />
        </div>

        <div id="cephe">
          <FAQSection
            title="Cephe Uygulamaları ve Mantolama"
            subtitle="Mantolama, dış cephe boya ve sıva uygulamaları hakkında sorular"
            schemaId="https://duzkardizayn.com/sss#cephe"
            faqs={cepheFaqs}
          />
        </div>

        <div id="genel">
          <FAQSection
            title="Genel Sorular"
            subtitle="Hizmet bölgeleri, ödeme, garanti ve çalışma saatleri hakkında sorular"
            schemaId="https://duzkardizayn.com/sss#genel"
            faqs={genelFaqs}
          />
        </div>

        {/* CTA */}
        <CTASection
          title="Sorunuzun Cevabını Bulamadınız mı?"
          highlightedText="Bize Sorun"
          description="Girne, Lefkoşa, Gazimağusa ve Güzelyurt genelinde ücretsiz keşif hizmeti sunuyoruz. Uzman ekibimize sorunuzu iletin."
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
