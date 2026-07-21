import type { Metadata } from "next";
import { Montserrat, Open_Sans, Oswald } from "next/font/google";
import Script from "next/script";
import { alternatesFor, SITE_URL } from "@/lib/i18n";
import "../globals.css";

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
  metadataBase: new URL(SITE_URL),
  title:
    "Düzkar Dizayn | Waterproofing & Damp Proofing Specialists — Kyrenia, North Cyprus",
  description:
    "English-speaking waterproofing and damp proofing specialists in Kyrenia, North Cyprus. Flat roof leaks, terrace and balcony waterproofing, pool leak repair, rendering and external wall insulation. Established 1999. Free survey.",
  keywords: [
    "waterproofing north cyprus",
    "damp proofing cyprus",
    "flat roof leak repair kyrenia",
    "roof waterproofing north cyprus",
    "terrace waterproofing cyprus",
    "balcony leak repair kyrenia",
    "swimming pool leak repair north cyprus",
    "external wall insulation cyprus",
    "rendering north cyprus",
    "damp and mould kyrenia",
    "renovation north cyprus",
    "english speaking builders north cyprus",
    "builders kyrenia",
    "Düzkar Dizayn",
  ],
  authors: [{ name: "Düzkar Dizayn" }],
  creator: "Düzkar Dizayn",
  openGraph: {
    type: "website",
    locale: "en_GB",
    alternateLocale: "tr_TR",
    url: `${SITE_URL}/en`,
    siteName: "Düzkar Dizayn",
    title: "Waterproofing & Damp Proofing in North Cyprus | Düzkar Dizayn",
    description:
      "Flat roof leaks, damp, terrace and pool waterproofing across Kyrenia, Nicosia and Famagusta. English-speaking team, established 1999, 5-year guarantee. Free survey.",
    images: [
      {
        url: "/images/og-image-en.jpg",
        width: 1200,
        height: 630,
        alt: "Düzkar Dizayn — Waterproofing and Rendering in North Cyprus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterproofing & Damp Proofing in North Cyprus | Düzkar Dizayn",
    description:
      "Flat roof leaks, damp, terrace and pool waterproofing across North Cyprus. English-speaking team since 1999. Free survey.",
    images: ["/images/og-image-en.jpg"],
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
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: alternatesFor("/en"),
};

// İngilizce LocalBusiness schema. Türkçesinden ayrı tutuluyor çünkü hem açıklamalar
// hem de yer adları farklı (Kyrenia/Nicosia/Famagusta). Aynı @id kullanılıyor:
// Google için tek işletme, iki dilde tarif edilmiş oluyor.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL,
  name: "Düzkar Dizayn",
  description:
    "Waterproofing, damp proofing, rendering and renovation contractor based in Kyrenia, North Cyprus. Established 1999. English-speaking team serving Kyrenia, Nicosia, Famagusta, Iskele and Guzelyurt.",
  url: `${SITE_URL}/en`,
  telephone: "+905338311432",
  email: "info@duzkardizayn.com",
  image: `${SITE_URL}/images/og-image-en.jpg`,
  logo: `${SITE_URL}/images/logo.png`,
  foundingDate: "1999",
  // Yabancı mülk sahipleri için en kritik güven sinyali: İngilizce hizmet.
  knowsLanguage: ["en", "tr"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ankara Caddesi No:109",
    addressLocality: "Alsancak",
    addressRegion: "Kyrenia",
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
  priceRange: "££",
  currenciesAccepted: "GBP, EUR, TRY",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  areaServed: [
    {
      "@type": "City",
      name: "Kyrenia",
      alternateName: "Girne",
      "@id": "https://www.wikidata.org/wiki/Q207553",
    },
    {
      "@type": "City",
      name: "Nicosia",
      alternateName: "Lefkoşa",
      "@id": "https://www.wikidata.org/wiki/Q3856",
    },
    {
      "@type": "City",
      name: "Famagusta",
      alternateName: "Gazimağusa",
      "@id": "https://www.wikidata.org/wiki/Q193464",
    },
    { "@type": "City", name: "Iskele", alternateName: "İskele" },
    { "@type": "City", name: "Guzelyurt", alternateName: "Güzelyurt" },
    { "@type": "AdministrativeArea", name: "Northern Cyprus" },
  ],
  sameAs: [
    "https://www.facebook.com/duzkardizayn",
    "https://www.instagram.com/duzkardizayn",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Waterproofing, Facade and Renovation Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Waterproofing & Damp Proofing",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Flat Roof & Terrace Waterproofing",
              description:
                "Torch-on bituminous membrane systems for flat roofs and terraces, including fall correction and detailing around outlets and parapets.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Balcony Waterproofing",
              description:
                "Permanent repair of balcony leaks that damage the property below, including screed falls and membrane upstands.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Foundation & Basement Tanking",
              description:
                "Raft foundation and retaining wall waterproofing against ground water and rising damp.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Wet Room & Bathroom Tanking",
              description:
                "Cementitious tanking beneath tiling in bathrooms, shower rooms and kitchens.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Swimming Pool Leak Repair",
              description:
                "Leak detection and permanent waterproofing for swimming pools and water features.",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Facades, Rendering & Insulation",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "External Wall Insulation",
              description:
                "EPS and mineral wool external wall insulation systems that cut air conditioning and heating costs.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Exterior Painting & Rendering",
              description:
                "UV-stable, water-repellent exterior coatings and render systems suited to the Cypriot climate.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Interior Painting & Plastering",
              description:
                "Interior decorating, plastering and decorative finishes.",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Renovation & Refurbishment",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Property Refurbishment",
              description:
                "Full refurbishment of villas and apartments, including resale properties bought for renovation.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Bathroom & Kitchen Renovation",
              description:
                "Bathroom and kitchen refits including tanking, tiling and finishing.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Suspended Ceilings & Floor Coatings",
              description:
                "Suspended ceiling systems, lighting layouts, self-levelling and decorative floor finishes.",
            },
          },
        ],
      },
    ],
  },
};

export default function EnRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#D4A017" />
        <meta name="geo.region" content="CY-05" />
        <meta name="geo.placename" content="Kyrenia, North Cyprus" />
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4JTZQCR1SW"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4JTZQCR1SW');
          `}
        </Script>
      </body>
    </html>
  );
}
