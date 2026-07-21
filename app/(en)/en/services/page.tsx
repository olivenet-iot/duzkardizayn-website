import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CTASection, FAQSection } from "@/components/services";
import { alternatesFor, SITE_URL } from "@/lib/i18n";

export const metadata: Metadata = {
  title:
    "Our Services | Waterproofing, Rendering & Renovation in North Cyprus",
  description:
    "Waterproofing and damp proofing, external wall insulation and rendering, and full property refurbishment across Kyrenia and North Cyprus. English-speaking team trading since 1999. Free survey, written quotation, 5-year workmanship guarantee.",
  keywords: [
    "waterproofing north cyprus",
    "damp proofing cyprus",
    "external wall insulation cyprus",
    "rendering north cyprus",
    "renovation north cyprus",
    "builders kyrenia",
    "english speaking builders north cyprus",
    "property refurbishment kyrenia",
    "building services north cyprus",
  ],
  openGraph: {
    title: "Our Services | Düzkar Dizayn — Kyrenia, North Cyprus",
    description:
      "Waterproofing and damp proofing, rendering and external wall insulation, renovation and refurbishment. English-speaking contractor in Kyrenia since 1999.",
    url: `${SITE_URL}/en/services`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/services/izolasyon.jpg",
        width: 1200,
        height: 630,
        alt: "Düzkar Dizayn services in North Cyprus",
      },
    ],
  },
  alternates: alternatesFor("/en/services"),
};

const services = [
  {
    slug: "waterproofing",
    title: "Waterproofing & Damp Proofing",
    shortTitle: "Waterproofing",
    description:
      "Flat roofs, terraces, balconies, foundations, basements, wet rooms and swimming pools. Torch-applied membrane, cementitious tanking and crystalline systems, chosen for the surface and the direction the water is coming from.",
    image: "/images/services/izolasyon.jpg",
    imageAlt:
      "Waterproofing membrane being applied on a roof terrace in North Cyprus",
    features: [
      "Flat roof leak repair",
      "Terrace & balcony waterproofing",
      "Rising damp & tanking",
      "Basement waterproofing",
      "Swimming pool leak repair",
    ],
  },
  {
    slug: "facades-and-rendering",
    title: "Facades, Rendering & Insulation",
    shortTitle: "Facades",
    description:
      "External wall insulation, render repair, UV-stable exterior coatings, interior painting, plastering and decorative finishes. Systems specified for intense UV, salt air and 40°C summers.",
    image: "/images/services/cephe.jpg",
    imageAlt:
      "External wall insulation and rendering on a villa in North Cyprus",
    features: [
      "External wall insulation",
      "Render repair",
      "Exterior painting",
      "Interior decorating",
      "Decorative finishes",
    ],
  },
  {
    slug: "renovation",
    title: "Renovation & Refurbishment",
    shortTitle: "Renovation",
    description:
      "Full refurbishment of villas and apartments, bathroom and kitchen refits, suspended ceilings and lighting, flooring and stone cladding. One contract covering every trade on the job.",
    image: "/images/services/tadilat.jpg",
    imageAlt: "Refurbished interior of an apartment in North Cyprus",
    features: [
      "Full property refurbishment",
      "Bathroom renovation",
      "Kitchen refits",
      "Suspended ceilings",
      "Flooring & stone cladding",
    ],
  },
] as const;

// Ziyaretçiler hizmet adıyla değil belirtiyle arıyor; bu eşleme
// doğru sayfaya yönlendirmenin en hızlı yolu.
const symptoms = [
  {
    problem: "Water coming through the ceiling after heavy rain",
    service: "Waterproofing",
    href: "/en/services/waterproofing",
  },
  {
    problem: "Water standing on the roof two days after the rain stopped",
    service: "Waterproofing",
    href: "/en/services/waterproofing",
  },
  {
    problem: "A balcony leaking into the apartment below",
    service: "Waterproofing",
    href: "/en/services/waterproofing",
  },
  {
    problem: "A pool losing more water than evaporation explains",
    service: "Waterproofing",
    href: "/en/services/waterproofing",
  },
  {
    problem: "A wet band along the bottom of a ground-floor wall, all year",
    service: "Waterproofing",
    href: "/en/services/waterproofing",
  },
  {
    problem: "Black mould in the corners of bedrooms every winter",
    service: "Facades & insulation",
    href: "/en/services/facades-and-rendering",
  },
  {
    problem: "Cracked render, or paint blowing off the sunniest elevation",
    service: "Facades & rendering",
    href: "/en/services/facades-and-rendering",
  },
  {
    problem: "Air conditioning running all summer and still not coping",
    service: "Facades & insulation",
    href: "/en/services/facades-and-rendering",
  },
  {
    problem: "A resale property that needs bringing up to standard",
    service: "Renovation",
    href: "/en/services/renovation",
  },
  {
    problem: "A dated bathroom or kitchen that needs replacing",
    service: "Renovation",
    href: "/en/services/renovation",
  },
];

const faqs = [
  {
    question: "Which service do I actually need?",
    answer:
      "Often it is not the one you would guess, because water travels and the mark on the wall is rarely above the cause. A ceiling stain can be a roof outlet, a cracked parapet, a balcony above or condensation, and those have four different fixes. That is what the free survey is for: we work out the cause first, then quote for the work that addresses it.",
  },
  {
    question: "Do I get a written quotation?",
    answer:
      "Always, on every service. It sets out the scope, the system and materials, the price and the expected duration. We do not begin work on a figure agreed verbally, and we do not quote a per-square-metre rate over the phone before anyone has seen the property.",
  },
  {
    question: "Is the survey really free?",
    answer:
      "Yes, including travel anywhere in North Cyprus, and there is no obligation attached to it. If we look at a property and conclude the work you were considering is not what it needs, we will say so.",
  },
  {
    question: "Does your team speak English?",
    answer:
      "Yes. The survey, the quotation, questions during the job and the handover are all in English. For a lot of British and other foreign owners around Kyrenia that is the main reason they call us rather than a firm recommended locally.",
  },
  {
    question: "Can you do more than one of these services on the same job?",
    answer:
      "That is usually how it works, and it is the reason we keep the three together. Waterproofing, rendering and refurbishment depend on each other: render over a wall that is still damp will fail, and a bathroom refit with no tanking underneath will leak into the room below. One firm running all three means the sequence is right and nobody is blaming another trade.",
  },
  {
    question: "When is the best time of year to book work?",
    answer:
      "For waterproofing, late spring through to early autumn, because the surface has to be genuinely dry before a membrane goes down. For exterior painting and rendering, spring and autumn are better than the peak of summer, when coatings skin over before they bond. Interior work and refurbishment can run at any time of year.",
  },
  {
    question: "What guarantee do you provide?",
    answer:
      "A 5-year workmanship guarantee across our installations, alongside the manufacturers' warranties on the materials. The company has been trading from Alsancak since 1999, which is the part that gives a guarantee its value.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We are based on Ankara Caddesi in Alsancak, a few minutes west of Kyrenia, and we work across the whole of North Cyprus — Lapta, Karşıyaka, Çatalköy, Esentepe, Ozanköy, Bellapais, Nicosia, Famagusta, İskele and Güzelyurt included.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/en`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${SITE_URL}/en/services`,
    },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Düzkar Dizayn Services in North Cyprus",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${SITE_URL}/en/services/${service.slug}`,
    name: service.title,
    description: service.description,
  })),
};

export default function EnServicesPage() {
  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-primary/5 rounded-full blur-2xl" />

          <div className="container mx-auto px-4 relative z-10">
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center justify-center gap-2 text-sm text-white/70">
                <li>
                  <Link
                    href="/en"
                    className="hover:text-gold-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-white/40">/</li>
                <li className="text-gold-primary font-medium">Services</li>
              </ol>
            </nav>

            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Waterproofing, Rendering & Renovation Services in North Cyprus
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed">
                Three connected trades under one contract, from an
                English-speaking team that has been working on property around{" "}
                <span className="text-gold-primary">Kyrenia</span> since 1999.
                Free survey, written quotation, 5-year workmanship guarantee.
              </p>
            </div>
          </div>
        </section>

        {/* Giriş metni */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none text-gray-text">
                <p>
                  The Cypriot climate is harder on buildings than most people
                  moving here expect. Months of intense UV and heat open up
                  cracks and split membranes, and then the winter rain arrives
                  concentrated into a few weeks and finds every one of them. The
                  work below is what that produces, year after year, in
                  properties from three years old to thirty.
                </p>
                <p>
                  We keep waterproofing, facades and renovation together
                  deliberately, because they are not really separate problems.
                  New render over a wall that is still wet from a failed terrace
                  will blow within a year or two. A bathroom refit without
                  tanking underneath the tiles will leak into the room below in
                  its third winter. Mould in a bedroom corner is often a cold,
                  uninsulated wall rather than a leak at all. Splitting a job
                  across three firms is how owners end up with three
                  explanations and no fix.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hizmet kartları */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark mb-4">
                Our three service areas
              </h2>
              <p className="text-gray-text">
                Every job starts with a free survey and a written quotation.
                Every installation carries a 5-year workmanship guarantee.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/en/services/${service.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-gold-primary text-navy-dark text-xs font-bold px-3 py-1.5 rounded-full">
                        {service.shortTitle}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading font-bold text-xl text-navy-dark mb-3 group-hover:text-gold-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-text text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <ul className="flex flex-wrap gap-2 mb-5">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <span className="inline-flex items-center gap-2 text-gold-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Read more
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Belirti eşlemesi */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark mb-4 text-center">
                Start with the symptom
              </h2>
              <p className="text-gray-text text-center mb-10 max-w-2xl mx-auto">
                Nobody rings a contractor asking for a cementitious tanking
                system. They ring because of a stain, a smell, a crack or an
                electricity bill. Here is roughly where each of those leads.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {symptoms.map((item) => (
                  <Link
                    key={item.problem}
                    href={item.href}
                    className="group flex items-start justify-between gap-4 bg-gray-50 hover:bg-white rounded-xl p-5 border border-gray-100 hover:border-gold-primary/40 hover:shadow-md transition-all"
                  >
                    <span className="text-gray-text text-sm leading-relaxed">
                      {item.problem}
                    </span>
                    <span className="flex-shrink-0 text-gold-primary text-xs font-semibold whitespace-nowrap pt-0.5">
                      {item.service} →
                    </span>
                  </Link>
                ))}
              </div>

              <p className="text-gray-text text-sm text-center mt-8">
                Not sure? That is what the survey is for. A ceiling stain is not
                always a roof failure, and mould is not always a leak.
              </p>
            </div>
          </div>
        </section>

        {/* Güven şeridi */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark mb-4">
                Why foreign property owners work with us
              </h2>
              <p className="text-gray-text">
                Twenty-five years of site experience in this climate, real
                project references, and a guarantee from a firm that will still
                be here to honour it.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { figure: "1999", label: "Trading since" },
                { figure: "25+", label: "Years of experience" },
                { figure: "5 yr", label: "Workmanship guarantee" },
                { figure: "Free", label: "On-site survey" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl p-6 text-center border border-gray-100"
                >
                  <span className="block font-heading text-3xl font-bold text-gold-primary mb-2">
                    {item.figure}
                  </span>
                  <span className="text-sm text-gray-text">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/en/projects"
                className="inline-flex items-center gap-2 text-gold-primary font-semibold hover:underline"
              >
                See our completed projects
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Before you call, or before you compare quotations"
          faqs={faqs}
          schemaId={`${SITE_URL}/en/services#faq`}
        />

        <CTASection
          title="Not sure which service you need?"
          highlightedText="Ask for a survey"
          description="Describe what you are seeing and we will come and look at it, free of charge and with no obligation. You get a written assessment and a fixed price for the work that actually addresses the cause. Kyrenia, Nicosia, Famagusta, İskele and Güzelyurt."
          primaryButtonText="Request a Free Survey"
          primaryButtonHref="/en#contact"
          secondaryButtonText="+90 533 831 14 32"
          secondaryButtonHref="tel:+905338311432"
          trustBadges={[
            { text: "Trading since 1999" },
            { text: "5-year workmanship guarantee" },
            { text: "English-speaking team" },
          ]}
        />
      </main>

      <Footer />
    </>
  );
}
