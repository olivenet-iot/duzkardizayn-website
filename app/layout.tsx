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
  title: "Düzkar Dizayn | Profesyonel İzolasyon ve Cephe Çözümleri - KKTC",
  description:
    "Kuzey Kıbrıs'ın önde gelen izolasyon ve cephe çözümleri firması. 25 yıllık deneyimle su yalıtımı, mantolama, iç-dış cephe uygulamaları ve tadilat hizmetleri. Girne, KKTC.",
  keywords: [
    "izolasyon",
    "su yalıtımı",
    "cephe kaplama",
    "mantolama",
    "KKTC",
    "Kuzey Kıbrıs",
    "Girne",
    "tadilat",
    "boya",
    "sıva",
    "Düzkar Dizayn",
  ],
  authors: [{ name: "Düzkar Dizayn" }],
  creator: "Düzkar Dizayn",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://duzkardizayn.com",
    siteName: "Düzkar Dizayn",
    title: "Düzkar Dizayn | Profesyonel İzolasyon ve Cephe Çözümleri",
    description:
      "Kuzey Kıbrıs'ın önde gelen izolasyon ve cephe çözümleri firması. 25 yıllık deneyimle su yalıtımı, mantolama ve tadilat hizmetleri.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Düzkar Dizayn - İzolasyon ve Cephe Çözümleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Düzkar Dizayn | Profesyonel İzolasyon ve Cephe Çözümleri",
    description:
      "Kuzey Kıbrıs'ın önde gelen izolasyon ve cephe çözümleri firması.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Düzkar Dizayn",
              image: "https://duzkardizayn.com/images/logo.png",
              description:
                "Profesyonel izolasyon ve cephe çözümleri firması",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ankara Caddesi No:111",
                addressLocality: "Alsancak, Girne",
                addressRegion: "Kuzey Kıbrıs",
                addressCountry: "CY",
              },
              telephone: "+90 548 888 85 03",
              email: "info@duzkardizayn.com",
              url: "https://duzkardizayn.com",
              foundingDate: "1999",
              priceRange: "$$",
              openingHours: "Mo-Sa 08:00-18:00",
              sameAs: [],
              geo: {
                "@type": "GeoCoordinates",
                latitude: "35.3397",
                longitude: "33.1594",
              },
              areaServed: {
                "@type": "Place",
                name: "Kuzey Kıbrıs",
              },
            }),
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
