import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  TimelineSection,
  FeatureCards,
  CTASection,
} from "@/components/services";
import IzolasyonHero from "./components/IzolasyonHero";
import IzolasyonTypes from "./components/IzolasyonTypes";
import AdvancedTechnology from "./components/AdvancedTechnology";

export const metadata: Metadata = {
  title: "İzolasyon ve Su Yalıtımı | Düzkar Dizayn - Kıbrıs",
  description:
    "Kıbrıs'ta profesyonel izolasyon ve su yalıtımı hizmetleri. Temel, çatı, teras, havuz ve ıslak hacim izolasyonu. 25 yıllık deneyim, 5 yıl garanti.",
  keywords: [
    "izolasyon kıbrıs",
    "su yalıtımı",
    "temel izolasyonu",
    "çatı izolasyonu",
    "havuz izolasyonu",
    "KKTC",
    "teras izolasyonu",
    "ıslak hacim izolasyonu",
  ],
  openGraph: {
    title: "İzolasyon ve Su Yalıtımı | Düzkar Dizayn",
    description:
      "Kıbrıs'ta profesyonel izolasyon ve su yalıtımı hizmetleri. 25 yıllık deneyim, 5 yıl garanti.",
    type: "website",
    locale: "tr_TR",
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
      "Dünya standartlarında, yüksek kaliteli izolasyon malzemeleri kullanıyoruz.",
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
      "Kıbrıs'ın önde gelen inşaat firmaları dahil yüzlerce memnun müşteriyle çalışmanın gururunu yaşıyoruz.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default function IzolasyonPage() {
  return (
    <>
      <Header />
      <main>
        <IzolasyonHero />
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
