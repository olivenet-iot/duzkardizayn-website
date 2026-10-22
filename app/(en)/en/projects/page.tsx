import type { Metadata } from "next";
import StoryCollection from "@/components/projects/StoryCollection";
import { alternatesFor } from "@/lib/i18n";
import { getProjectStories } from "@/lib/project-stories";

export function generateMetadata(): Metadata {
  const latest = getProjectStories("en")[0];
  return {
    title: "Project Stories in North Cyprus | Düzkar Dizayn",
    description:
      "Waterproofing, facade and renovation projects in North Cyprus, documented with our own site photographs, work stages and before-and-after views.",
    alternates: alternatesFor("/en/projects"),
    openGraph: {
      title: "Projects from Site | Düzkar Dizayn",
      description:
        "Our waterproofing, facade and renovation work, documented with real site photographs.",
      type: "website",
      locale: "en_GB",
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
  return <StoryCollection locale="en" />;
}
