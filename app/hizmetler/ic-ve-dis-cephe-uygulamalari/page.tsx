import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ServiceHero,
  TimelineSection,
  FeatureCards,
  CTASection,
} from "@/components/services";
import CepheServices from "./components/CepheServices";

export const metadata: Metadata = {
  title: "İç ve Dış Cephe Uygulamaları | Düzkar Dizayn - Kıbrıs",
  description:
    "Kıbrıs'ta profesyonel iç ve dış cephe boya, sıva, alçı ve mantolama hizmetleri. Uzman ekip, kaliteli malzeme, garantili işçilik.",
  keywords:
    "cephe boya kıbrıs, dış cephe, iç cephe, mantolama, sıva, alçı, KKTC, boya uygulaması, dekoratif sıva",
  openGraph: {
    title: "İç ve Dış Cephe Uygulamaları | Düzkar Dizayn",
    description:
      "İç ve dış mekanlarda profesyonel boya, sıva ve mantolama çözümleri. Uzman ekip, kaliteli malzeme.",
    type: "website",
    locale: "tr_TR",
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
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        <CepheServices />

        <FeatureCards
          title="Profesyonel Cephe Çözümleri"
          features={features}
          variant="dark"
        />

        <TimelineSection
          title="Profesyonel Boya ve Cephe Uygulama Süreci"
          steps={timelineSteps}
        />

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
