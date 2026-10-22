import type { Metadata } from "next";
import StoryCollection from "@/components/projects/StoryCollection";
import { alternatesFor } from "@/lib/i18n";
import { getProjectStories } from "@/lib/project-stories";

export function generateMetadata(): Metadata {
  const latest = getProjectStories("tr")[0];
  return {
    title: "Projelerimiz | Sahadan Uygulama Örnekleri | Düzkar Dizayn",
    description:
      "KKTC’de gerçekleştirdiğimiz su yalıtımı, cephe ve yenileme projeleri. Gerçek saha fotoğrafları, uygulama adımları ve öncesi–sonrası örnekleri.",
    alternates: alternatesFor("/projeler"),
    openGraph: {
      title: "Sahadan Projeler | Düzkar Dizayn",
      description:
        "Gerçek saha fotoğraflarıyla su yalıtımı, cephe ve yenileme çalışmalarımız.",
      type: "website",
      locale: "tr_TR",
      images: latest
        ? [
            {
              url: latest.photos[latest.cover].src,
              alt: latest.photos[latest.cover].alt,
            },
          ]
        : [],
    },
  };
}

export default function ProjectsPage() {
  return <StoryCollection locale="tr" />;
}
