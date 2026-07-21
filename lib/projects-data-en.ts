// İngilizce proje içeriği.
//
// Türkçe metinlerin makine çevirisi değil: aynı işleri İngiliz mülk sahibinin
// kullandığı teknik dille ("tanking", "screed", "render") yeniden yazıyor.
// Görsel yolları, müşteri adı ve proje tipi Türkçe veriden okunuyor —
// tek kaynak lib/projects-data.ts, burada tekrar edilmiyor.

import { projects as trProjects, type Project } from "./projects-data";

export interface ProjectEnService {
  title: string;
  description: string;
}

/** Sadece çevrilen alanlar. Görsel/müşteri gibi ortak veriler aşağıda ekleniyor. */
export interface ProjectEnContent {
  slug: string;
  title: string;
  typeLabel: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  services: ProjectEnService[];
}

export interface ProjectEn extends ProjectEnContent {
  type: Project["type"];
  client: string;
  coverImage: string;
}

const content: ProjectEnContent[] = [
  {
    slug: "emtan-west-park",
    title: "Emtan West Park",
    typeLabel: "Residential development",
    location: "Alsancak, Kyrenia",
    shortDescription:
      "Waterproofing and decorating throughout a residential development in Alsancak, west of Kyrenia.",
    fullDescription:
      "We carried out the waterproofing and the decorating package on Emtan Group's West Park residential development in Alsancak, a few minutes west of Kyrenia. The scope ran from the retaining walls at foundation level up to the roofs and terraces, and took in the balconies and wet rooms in every apartment. Once the building was watertight we prepared and decorated the interiors and applied the external coatings. The work was completed to the developer's programme.",
    services: [
      {
        title: "Retaining wall waterproofing",
        description:
          "Waterproofing to the foundations and retaining walls. The below-ground structure was protected with bitumen-based membrane systems, which is what keeps ground moisture out of the building in a climate that spends half the year wet and half of it very dry.",
      },
      {
        title: "Balcony and wet room tanking",
        description:
          "Tanking to the bathrooms, WCs and balconies before tiling. This is the layer that stops water reaching the structure, and its absence is the usual reason water appears on the ceiling of the apartment below.",
      },
      {
        title: "Roof and terrace waterproofing",
        description:
          "Bitumen-based membrane laid across the roofs and terraces, detailed to hold up to months of direct UV in summer and to the heavy rainfall that follows in winter.",
      },
      {
        title: "Interior preparation and plastering",
        description:
          "Preparation of the internal wall substrates throughout the apartments — render, satin plaster skim and primer — to leave a flat, sound surface for decoration.",
      },
      {
        title: "External decoration",
        description:
          "Exterior coatings chosen for UV stability and for the swings in humidity here, so the facade holds its colour rather than fading and streaking after a couple of summers.",
      },
    ],
  },
  {
    slug: "merit-park-hotel",
    title: "Merit Park Hotel",
    typeLabel: "Hotel",
    location: "Kyrenia",
    shortDescription:
      "Raft foundation, pool, terrace and floor waterproofing at a hotel in Kyrenia.",
    fullDescription:
      "We carried out waterproofing across Merit Park Hotel, part of the Merit group, in Kyrenia. The work started at the raft foundation beneath the pool structure and went on to the pool itself, the floor build-ups and the external areas, using mineral-finished and textile membrane systems. All of it was installed by our own team. On a working hotel the constraint is as much sequencing as technique: areas have to be handed back finished and watertight.",
    services: [
      {
        title: "Raft foundation waterproofing",
        description:
          "Bitumen-based waterproofing to the raft foundation under the hotel's pool structure, protecting the slab against ground water and moisture rising through it.",
      },
      {
        title: "Swimming pool waterproofing",
        description:
          "Tanking to the pool structures so that the shell holds water rather than losing it into the ground around it. On a hotel pool a slow leak is expensive twice over — in water and in downtime.",
      },
      {
        title: "Self-levelling floor screed",
        description:
          "Self-levelling screed across the hotel floors, giving a flat, sound and durable base for the finished floor coverings to be laid on.",
      },
      {
        title: "Mineral-finished (slate chip) membrane",
        description:
          "Mineral-finished membrane to external areas. The slate chip surface shields the bitumen beneath it from UV and leaves a finished appearance without a separate covering over the top.",
      },
      {
        title: "Textile membrane system",
        description:
          "Textile membrane installed over the Bordex substrate before the final covering went down, giving a continuous layer across the whole area rather than a set of joints waiting to open up.",
      },
    ],
  },
  {
    slug: "emtan-quattro",
    title: "Emtan Quattro",
    typeLabel: "Mixed-use development",
    location: "Kyrenia",
    shortDescription:
      "Waterproofing and facade work across a residential and commercial development in Kyrenia.",
    fullDescription:
      "We carried out the waterproofing and facade package on Emtan Group's Quattro residential and commercial development in Kyrenia. The scope ran from under-screed waterproofing on the balconies and external areas through to the roof membrane, the wet rooms in the apartments, and the interior and exterior finishes — including the retail units at the front of the development. Emtan Construction is one of the longest-established builders in North Cyprus, and the sequencing on a mixed-use building of this kind has to be right first time, because very little of this work is accessible once the finishes are on.",
    services: [
      {
        title: "Under-screed waterproofing",
        description:
          "Under-screed waterproofing and protective fleece to the balconies and external areas, so that water getting through the tiling above is taken to the drainage outlets instead of into the structure.",
      },
      {
        title: "Retaining wall waterproofing",
        description:
          "Waterproofing to the foundations and retaining walls, protecting the below-ground parts of the building against ground moisture over the long term.",
      },
      {
        title: "Roof waterproofing",
        description:
          "Bitumen-based membrane across the roof, forming a continuous waterproof layer over the whole surface and around the details where roofs normally fail first.",
      },
      {
        title: "Wet room and balcony tanking",
        description:
          "Tanking to the bathrooms, WCs and balconies in the apartments, applied before tiling so that the waterproof layer sits below the finish rather than depending on it.",
      },
      {
        title: "Interior finishes",
        description:
          "Satin plaster skim throughout the interiors, including the retail units at the front of the development, leaving a smooth and even base for decoration.",
      },
      {
        title: "External facade preparation",
        description:
          "Priming and preparation of the external facade using materials suited to the weather here, so that the finish coats bond properly and last.",
      },
    ],
  },
  {
    slug: "merit-royal-premium",
    title: "Merit Royal Premium",
    typeLabel: "Hotel",
    location: "Kyrenia",
    shortDescription:
      "Pool waterproofing and elastic membrane over existing terrace tiling at a hotel in Kyrenia.",
    fullDescription:
      "We carried out waterproofing at Merit Royal Premium, part of the Merit group, in Kyrenia. The work covered the pool structures, moisture-barrier priming, and elastic waterproofing systems laid over the existing ceramic terrace surfaces. Working over the tiling rather than stripping it out kept the terraces looking as they were meant to look and kept the hotel's disruption down, while still putting a continuous waterproof layer across the area.",
    services: [
      {
        title: "Swimming pool waterproofing",
        description:
          "Moisture-barrier primer and waterproofing to the hotel's pool structures, so the pools hold water and stay in service rather than being drained for repairs in season.",
      },
      {
        title: "Elastic waterproofing over existing tiling",
        description:
          "Qis UVi elastic waterproofing over the existing ceramic surfaces on the terraces, over a Serex primer. The tiling stays where it is: the area is made watertight without stripping it back and re-laying it.",
      },
      {
        title: "Epoxy primer and elastic membrane",
        description:
          "Epoxy primer followed by a 2000-series elastic waterproofing system. The membrane stays flexible, so it moves with the substrate as it expands and contracts instead of cracking along with it.",
      },
    ],
  },
];

export const projectsEn: ProjectEn[] = content.map((item) => {
  const base = trProjects.find((p) => p.slug === item.slug);

  // Slug'lar iki dilde ortak; eşleşme yoksa görsel yolu da yok demektir.
  // Sessizce boş sayfa üretmektense build'i düşürmek doğrusu.
  if (!base) {
    throw new Error(
      `projects-data-en: "${item.slug}" için Türkçe proje kaydı bulunamadı.`
    );
  }

  return {
    ...item,
    type: base.type,
    client: base.client,
    coverImage: base.coverImage,
  };
});

export function getProjectEnBySlug(slug: string): ProjectEn | undefined {
  return projectsEn.find((p) => p.slug === slug);
}

export function getOtherProjectsEn(currentSlug: string): ProjectEn[] {
  return projectsEn.filter((p) => p.slug !== currentSlug);
}

export function getAllProjectEnSlugs(): string[] {
  return projectsEn.map((p) => p.slug);
}
