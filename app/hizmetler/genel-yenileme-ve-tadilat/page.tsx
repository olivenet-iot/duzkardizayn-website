import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ServiceHero,
  TimelineSection,
  FeatureCards,
  CTASection,
} from "@/components/services";
import TadilatServices from "./components/TadilatServices";

export const metadata: Metadata = {
  title: "Genel Yenileme ve Tadilat | Düzkar Dizayn - Kıbrıs",
  description:
    "Kıbrıs'ta profesyonel tadilat hizmetleri. Asma tavan, zemin kaplama, taş duvar kaplama. Komple daire tadilatı, mutfak-banyo yenileme. 25 yıl deneyim.",
  keywords:
    "tadilat kıbrıs, asma tavan, zemin kaplama, taş duvar, daire tadilatı, KKTC, yenileme, renovasyon",
  openGraph: {
    title: "Genel Yenileme ve Tadilat | Düzkar Dizayn",
    description:
      "Profesyonel tadilat hizmetleri. Asma tavan, zemin kaplama, taş duvar kaplama. 25 yıl deneyim.",
    type: "website",
    locale: "tr_TR",
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
      "Sadece kaliteli ve dayanıklı malzemeler kullanarak uzun ömürlü sonuçlar sunuyoruz.",
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
      "Belirlenen sürede işlerinizi tamamlayarak, güvenilir hizmet anlayışımızı sürdürüyoruz.",
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
  { text: "Asma Tavan" },
  { text: "Zemin Kaplama" },
  { text: "Taş Duvar" },
  { text: "Komple Tadilat" },
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

        <TadilatServices />

        <FeatureCards
          title="Profesyonel Yenileme Çözümleri"
          features={features}
          variant="dark"
        />

        <TimelineSection
          title="Profesyonel Tadilat Süreci"
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
