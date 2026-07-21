import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CTASection } from "@/components/services";
import { projectsEn } from "@/lib/projects-data-en";
import { alternatesFor, SITE_URL } from "@/lib/i18n";

export const metadata: Metadata = {
  title:
    "Our Projects in North Cyprus | Waterproofing & Facades | Düzkar Dizayn",
  description:
    "Waterproofing, tanking and facade work on hotels and residential developments around Kyrenia, North Cyprus: Emtan West Park, Merit Park Hotel, Emtan Quattro and Merit Royal Premium.",
  keywords: [
    "waterproofing projects north cyprus",
    "construction projects kyrenia",
    "hotel waterproofing cyprus",
    "pool waterproofing north cyprus",
    "builders north cyprus",
    "Düzkar Dizayn projects",
  ],
  openGraph: {
    title: "Our Projects in North Cyprus | Düzkar Dizayn",
    description:
      "Waterproofing, tanking and facade work on hotels and residential developments around Kyrenia, North Cyprus.",
    url: `${SITE_URL}/en/projects`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/projects/merit-park-hotel/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Waterproofing project by Düzkar Dizayn in Kyrenia, North Cyprus",
      },
    ],
  },
  alternates: alternatesFor("/en/projects"),
};

// Listeleme sayfası CollectionPage + ItemList olarak işaretleniyor:
// Google proje detaylarını tek tek keşfetmese bile listeyi bir bütün olarak görüyor.
const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/en/projects#collection`,
  name: "Our Projects in North Cyprus",
  description:
    "Waterproofing, tanking and facade projects carried out by Düzkar Dizayn on hotels and residential developments in North Cyprus.",
  url: `${SITE_URL}/en/projects`,
  inLanguage: "en-GB",
  isPartOf: { "@id": SITE_URL },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: projectsEn.length,
    itemListElement: projectsEn.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      description: project.shortDescription,
      url: `${SITE_URL}/en/projects/${project.slug}`,
      image: `${SITE_URL}${project.coverImage}`,
    })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
    { "@type": "ListItem", position: 2, name: "Projects" },
  ],
};

const relatedServices = [
  {
    title: "Waterproofing & Damp Proofing",
    href: "/en/services/waterproofing",
    body: "Roofs, terraces, balconies, foundations, wet rooms and pools — the work that makes up most of the projects on this page.",
  },
  {
    title: "Facades, Rendering & Insulation",
    href: "/en/services/facades-and-rendering",
    body: "External wall insulation, render repair and UV-stable exterior coatings, plus interior plastering and decorating.",
  },
  {
    title: "Renovation & Refurbishment",
    href: "/en/services/renovation",
    body: "Full refurbishment of villas and apartments, bathroom and kitchen refits, ceilings and floor finishes.",
  },
];

export default function EnProjectsPage() {
  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-primary/5 rounded-full blur-2xl" />

          <div className="container mx-auto px-4 relative z-10">
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/60">
                <li>
                  <Link
                    href="/en"
                    className="hover:text-gold-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-white/30">/</li>
                <li className="text-gold-primary">Projects</li>
              </ol>
            </nav>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
              Our Projects in North Cyprus
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
              Most of our week is private work: a flat roof on a villa in Lapta,
              a balcony letting water into the flat below in Kyrenia, a bathroom
              that was tiled without anything underneath the tiles. The projects
              below are the larger end of the same trade — hotels and residential
              developments where the waterproofing had to be right first time,
              because none of it is reachable once the finishes are on.
            </p>
          </div>
        </section>

        {/* Proje kartları */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectsEn.map((project) => (
                <Link
                  key={project.slug}
                  href={`/en/projects/${project.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.coverImage}
                      alt={`${project.title} — ${project.typeLabel.toLowerCase()} in ${project.location}, North Cyprus`}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold-primary text-navy-dark text-xs font-bold px-3 py-1.5 rounded-full">
                        {project.typeLabel}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="font-heading text-xl md:text-2xl font-bold text-navy-dark mb-1 group-hover:text-gold-primary transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-gray-500 text-sm mb-4">
                      {project.location}
                    </p>
                    <p className="text-gray-text text-sm leading-relaxed mb-5">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.services.slice(0, 3).map((service) => (
                        <span
                          key={service.title}
                          className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
                        >
                          {service.title}
                        </span>
                      ))}
                      {project.services.length > 3 && (
                        <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                          +{project.services.length - 3} more
                        </span>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-2 text-gold-primary text-sm font-semibold">
                      View project
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bağlamı kuran metin + hizmetlere iç link */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark mb-4">
                The same work on a smaller scale
              </h2>
              <p className="text-gray-text leading-relaxed mb-4">
                A hotel pool and a villa roof terrace fail for the same reasons:
                falls that do not take water to the outlet, details left short at
                the parapet or the pipe penetration, and a membrane that has been
                cooked by ten summers of UV with nothing over the top of it.
              </p>
              <p className="text-gray-text leading-relaxed">
                If you own a property in the Kyrenia area and something is
                leaking, the survey is free and you will get a written quotation
                setting out what we propose to do about it.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group block bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-gold-primary/40 hover:shadow-md transition-all"
                >
                  <h3 className="font-heading text-lg font-bold text-navy-dark mb-3 group-hover:text-gold-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed">
                    {service.body}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Free survey and a"
          highlightedText="written quotation"
          description="We look at the property, tell you what is actually causing the problem and put a written price in front of you. There is no charge for the visit and no obligation to go ahead."
          primaryButtonText="Request a free survey"
          primaryButtonHref="/en#contact"
          secondaryButtonText="+90 533 831 14 32"
          secondaryButtonHref="tel:+905338311432"
          trustBadges={[
            { text: "Trading since 1999" },
            { text: "English-speaking team" },
            { text: "5-year workmanship guarantee" },
          ]}
        />
      </main>

      <Footer />
    </>
  );
}
