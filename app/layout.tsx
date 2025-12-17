import type { Metadata } from "next";
import { Montserrat, Open_Sans, Oswald } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://duzkardizayn.com"),
  title: "Düzkar Dizayn | İzolasyon, Su Yalıtımı ve Cephe Kaplama - Girne, KKTC",
  description:
    "Kuzey Kıbrıs Girne'de profesyonel izolasyon, su yalıtımı ve cephe çözümleri. Temel izolasyonu, çatı su yalıtımı, teras izolasyonu, mantolama, iç-dış cephe boya ve tadilat hizmetleri. 25 yıl deneyim, 5 yıl garanti. Ücretsiz keşif için arayın!",
  keywords: [
    "izolasyon kıbrıs",
    "izolasyon girne",
    "izolasyon kktc",
    "su yalıtımı kıbrıs",
    "su yalıtımı girne",
    "cephe kaplama kıbrıs",
    "mantolama kuzey kıbrıs",
    "dış cephe boya girne",
    "iç cephe boya kıbrıs",
    "tadilat girne",
    "tadilat kktc",
    "çatı izolasyonu kıbrıs",
    "temel izolasyonu girne",
    "balkon su yalıtımı",
    "teras izolasyonu",
    "havuz izolasyonu",
    "Düzkar Dizayn",
  ],
  authors: [{ name: "Düzkar Dizayn" }],
  creator: "Düzkar Dizayn",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://duzkardizayn.com",
    siteName: "Düzkar Dizayn",
    title: "Düzkar Dizayn | Profesyonel İzolasyon ve Cephe Çözümleri - Girne, Kıbrıs",
    description:
      "Kuzey Kıbrıs'ın önde gelen izolasyon firması. Temel, çatı, teras, balkon izolasyonu, su yalıtımı, mantolama, iç-dış cephe boya ve tadilat. 25 yıl deneyim. Ücretsiz keşif!",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Düzkar Dizayn - Kıbrıs İzolasyon ve Cephe Çözümleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Düzkar Dizayn | İzolasyon ve Cephe Çözümleri - Girne, Kıbrıs",
    description:
      "Kuzey Kıbrıs'ın önde gelen izolasyon firması. Temel, çatı, teras izolasyonu, mantolama, boya, tadilat. Ücretsiz keşif!",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "https://duzkardizayn.com",
  },
};

// Gelişmiş LocalBusiness Schema.org Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://duzkardizayn.com",
  name: "Düzkar Dizayn",
  description:
    "Kuzey Kıbrıs Girne'de profesyonel izolasyon, su yalıtımı ve cephe çözümleri. Temel izolasyonu, çatı su yalıtımı, teras izolasyonu, mantolama ve tadilat hizmetleri.",
  url: "https://duzkardizayn.com",
  telephone: "+905488888503",
  email: "info@duzkardizayn.com",
  image: "https://duzkardizayn.com/images/og-image.jpg",
  logo: "https://duzkardizayn.com/images/logo.png",
  foundingDate: "1999",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ankara Caddesi No:111",
    addressLocality: "Alsancak",
    addressRegion: "Girne",
    postalCode: "99320",
    addressCountry: "CY",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.343519,
    longitude: 33.195114,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "TRY, EUR, GBP",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  areaServed: [
    {
      "@type": "City",
      name: "Girne",
      "@id": "https://www.wikidata.org/wiki/Q207553",
    },
    {
      "@type": "City",
      name: "Lefkoşa",
      "@id": "https://www.wikidata.org/wiki/Q3856",
    },
    {
      "@type": "City",
      name: "Gazimağusa",
      "@id": "https://www.wikidata.org/wiki/Q193464",
    },
    {
      "@type": "City",
      name: "Güzelyurt",
    },
    {
      "@type": "AdministrativeArea",
      name: "Kuzey Kıbrıs",
    },
  ],
  sameAs: [
    "https://www.facebook.com/duzkardizayn",
    "https://www.instagram.com/duzkardizayn",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "İzolasyon ve Cephe Hizmetleri",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Su Yalıtımı ve İzolasyon Hizmetleri",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Radya Temel İzolasyonu",
              description:
                "Binanın temelini toprak altı sularından ve nemden koruyan profesyonel izolasyon uygulaması",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Perde Duvar İzolasyonu",
              description:
                "Bodrum katları ve zemin altı yapıları toprak basıncı ve yeraltı sularına karşı koruyan izolasyon",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Çatı ve Teras İzolasyonu",
              description:
                "Çatı ve terasları yağmur, kar ve güneş ışınlarına karşı koruyan su yalıtımı uygulaması",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Balkon İzolasyonu",
              description:
                "Balkonlardan alt katlara su sızmasını engelleyen profesyonel su yalıtımı",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Islak Hacim İzolasyonu",
              description:
                "Banyo, tuvalet ve mutfak gibi su kullanılan alanlarda seramik altı su yalıtımı",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Havuz İzolasyonu",
              description:
                "Yüzme havuzları ve süs havuzlarında su kaçağını önleyen profesyonel izolasyon",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "İç ve Dış Cephe Uygulamaları",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "İç Cephe Boya",
              description:
                "Profesyonel iç mekan boya uygulamaları, mat, yarı mat ve saten boya seçenekleri",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dış Cephe Boya",
              description:
                "UV dayanımlı, su itici dış cephe boya uygulamaları",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mantolama",
              description:
                "Bina dış cephesinde ısı yalıtımı sağlayan mantolama sistemleri",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sıva ve Alçı Uygulamaları",
              description:
                "Profesyonel sıva, alçı ve saten alçı uygulamaları",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dekoratif Sıva",
              description:
                "Venedik sıvası, tekstür boya ve özel dekoratif uygulamalar",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Genel Yenileme ve Tadilat",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Asma Tavan Sistemleri",
              description:
                "Modern tasarım asma tavan sistemleri ve aydınlatma çözümleri",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Zemin Kaplama",
              description:
                "Self leveling, brüt beton koruma ve zemin kaplama uygulamaları",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Taş Duvar Kaplama",
              description:
                "Doğal taş görünümlü dekoratif duvar kaplama çözümleri",
            },
          },
        ],
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#D4A017" />
        <meta name="geo.region" content="CY-05" />
        <meta name="geo.placename" content="Girne, Kuzey Kıbrıs" />
        <meta name="geo.position" content="35.343519;33.195114" />
        <meta name="ICBM" content="35.343519, 33.195114" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} ${oswald.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
