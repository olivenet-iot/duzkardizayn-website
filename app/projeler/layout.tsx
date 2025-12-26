import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projeler | Düzkar Dizayn - Tamamlanan İzolasyon Projeleri",
  description: "Girne ve Kıbrıs genelinde tamamladığımız konut, otel ve karma projeleri inceleyin. 25 yıllık tecrübeyle gerçekleştirdiğimiz referans projeler.",
  keywords: [
    "izolasyon projeleri",
    "Kıbrıs inşaat projeleri",
    "Girne konut projeleri",
    "otel izolasyon",
    "su yalıtımı projeleri",
    "referans projeler"
  ],
  alternates: {
    canonical: "https://duzkardizayn.com/projeler",
  },
  openGraph: {
    title: "Projeler | Düzkar Dizayn",
    description: "Girne ve Kıbrıs genelinde tamamladığımız izolasyon ve tadilat projeleri.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function ProjelerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
