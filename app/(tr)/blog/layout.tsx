import { Metadata } from 'next';
import { alternatesFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Blog | Düzkar Dizayn - İzolasyon ve Tadilat Haberleri",
  description: "Kıbrıs'ta izolasyon, su yalıtımı, cephe uygulamaları ve tadilat hakkında uzman rehberler ve güncel bilgiler.",
  keywords: [
    "izolasyon blog",
    "su yalıtımı rehberi",
    "Kıbrıs tadilat",
    "cephe boya",
    "Girne izolasyon",
    "yapı yalıtımı"
  ],
  alternates: alternatesFor("/blog"),
  openGraph: {
    title: "Blog | Düzkar Dizayn",
    description: "Kıbrıs'ta izolasyon, su yalıtımı ve tadilat hakkında uzman rehberler.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
