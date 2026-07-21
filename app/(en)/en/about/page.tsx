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
    "About Us | English-Speaking Builders in North Cyprus | Düzkar Dizayn",
  description:
    "Düzkar Dizayn has been trading since 1999 from Alsancak, just outside Kyrenia. Waterproofing, rendering and renovation for property owners across North Cyprus. English-speaking, written quotations, free survey, 5-year workmanship guarantee.",
  keywords: [
    "builders in north cyprus",
    "english speaking builders kyrenia",
    "construction company north cyprus",
    "waterproofing company kyrenia",
    "renovation contractor north cyprus",
    "Düzkar Dizayn",
  ],
  openGraph: {
    title: "About Düzkar Dizayn | Builders in North Cyprus Since 1999",
    description:
      "Waterproofing, rendering and renovation from Alsancak, just outside Kyrenia. Trading since 1999, English-speaking, written quotations and a 5-year workmanship guarantee.",
    url: `${SITE_URL}/en/about`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/services/izolasyon/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Düzkar Dizayn — waterproofing and building work in North Cyprus",
      },
    ],
  },
  alternates: alternatesFor("/en/about"),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
    { "@type": "ListItem", position: 2, name: "About" },
  ],
};

// İşletme verisi (en) layout'undaki LocalBusiness düğümünde; burada onu tekrar
// tanımlamak yerine aynı @id'ye referans veriyoruz.
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/en/about#about`,
  name: "About Düzkar Dizayn",
  description:
    "Waterproofing, rendering and renovation contractor based in Alsancak, just outside Kyrenia, North Cyprus. Trading since 1999.",
  url: `${SITE_URL}/en/about`,
  inLanguage: "en-GB",
  mainEntity: { "@id": SITE_URL },
};

const reasons = [
  {
    title: "The quotation is a document, not a figure",
    body: "You get the scope, the system and materials, the price and the expected duration, in English and in writing, before anything is booked in. That gives you something to compare against another firm's price on the same basis, and something to hold us to at the end of the job.",
  },
  {
    title: "Nobody stands in the middle",
    body: "You deal with us directly about your own property. Nothing that matters is being relayed through an estate agent, a management company or a neighbour who happens to speak both languages, and nothing is lost on the way through.",
  },
  {
    title: "You hear about changes from us",
    body: "Weather and deliveries move dates in this trade; that part is normal. Finding out by driving past an empty site is not, and it is what owners here complain about most. If your dates move, you get the new ones from us.",
  },
  {
    title: "Built around owners who are not here",
    body: "Scope agreed by email or telephone, photographs as each stage is finished, and progress you can follow from wherever you are. If you fly in twice a year, the work happens between the visits rather than during them.",
  },
  {
    title: "We look before we price, and we say what we find",
    body: "Ceilings stain for more than one reason. The survey is free precisely so that both sides know which reason applies before anyone commits to a scope of work — including the times when the job turns out to be smaller than you feared.",
  },
  {
    title: "There is somebody to come back to",
    body: "Trading from the same address in Alsancak since 1999. Five-year workmanship guarantees are not rare in this trade; the question worth asking is who will still be answering the telephone in year four.",
  },
];

const steps = [
  {
    number: "01",
    title: "Free survey",
    body: "We come out, look at the affected area and at the places water is likely to be getting in, and tell you what we think is happening. No charge, no obligation.",
  },
  {
    number: "02",
    title: "Written quotation",
    body: "A priced document in English, naming the system to be used, what it covers, how long it should take and the payment terms. Nothing is ordered or booked in before you have it.",
  },
  {
    number: "03",
    title: "Dates agreed",
    body: "We agree a start date and a programme with you. If the weather or a delivery moves it, we tell you rather than leaving you to work it out.",
  },
  {
    number: "04",
    title: "The work",
    body: "Our own team carries out the work. If you are off the island, you get photographs as each stage is completed so you can follow it from where you are.",
  },
  {
    number: "05",
    title: "Handover and guarantee",
    body: "We walk the finished work with you, or photograph it for you if you are away. Waterproofing installations carry our 5-year workmanship guarantee, with the material warranty running alongside it.",
  },
];

const services = [
  {
    title: "Waterproofing & Damp Proofing",
    href: "/en/services/waterproofing",
    body: "Flat roofs, terraces, balconies, foundations and retaining walls, wet rooms and swimming pools. Torch-on membrane and cementitious tanking systems.",
    image: "/images/services/izolasyon/hero.jpg",
  },
  {
    title: "Facades, Rendering & Insulation",
    href: "/en/services/facades-and-rendering",
    body: "External wall insulation, render repair, UV-stable exterior coatings, interior plastering and decorating.",
    image: "/images/services/cephe/hero.jpg",
  },
  {
    title: "Renovation & Refurbishment",
    href: "/en/services/renovation",
    body: "Full refurbishment of villas and apartments, bathroom and kitchen refits, suspended ceilings, flooring and stone cladding.",
    image: "/images/services/tadilat/hero.jpg",
  },
];

export default function EnAboutPage() {
  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-end">
          <div className="absolute inset-0">
            <Image
              src="/images/services/izolasyon/hero.jpg"
              alt="Düzkar Dizayn waterproofing work in progress in North Cyprus"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/30" />
          </div>

          <div className="relative z-10 w-full">
            <div className="container mx-auto px-4 pb-12 md:pb-16 pt-32">
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
                  <li className="text-gold-primary">About</li>
                </ol>
              </nav>

              <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4 max-w-4xl">
                About Düzkar Dizayn — Builders in North Cyprus Since 1999
              </h1>
              <p className="text-xl text-white/80 max-w-2xl">
                Waterproofing, rendering and renovation, from Alsancak just
                outside Kyrenia.
              </p>
            </div>
          </div>
        </section>

        {/* Güven şeridi */}
        <section className="bg-navy-dark py-10 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { figure: "1999", label: "Trading since" },
                { figure: "25+", label: "Years of experience" },
                { figure: "5 yr", label: "Workmanship guarantee" },
                { figure: "EN / TR", label: "We work in both languages" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-heading text-3xl md:text-4xl font-bold text-gold-primary">
                    {item.figure}
                  </p>
                  <p className="text-white/70 text-sm mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Firma hikayesi */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark mb-6">
                  A construction company in Kyrenia, trading since 1999
                </h2>
                <p className="text-gray-text leading-relaxed mb-4">
                  <strong className="text-navy-dark">Düzkar Dizayn</strong> has
                  been working in North Cyprus since 1999. We are based at Ankara
                  Caddesi in Alsancak, a few minutes west of Kyrenia, and we
                  cover the whole of the north from there.
                </p>
                <p className="text-gray-text leading-relaxed mb-4">
                  The work divides into three connected trades: waterproofing and
                  damp proofing, facades and rendering, and general renovation.
                  They belong together more than they look as if they do. Render
                  applied over a wall that is still wet will blow off it within a
                  couple of years, and a bathroom refitted without tanking under
                  the tiles will eventually show itself on the ceiling of the
                  room below.
                </p>
                <p className="text-gray-text leading-relaxed mb-4">
                  Twenty-five years of it here means we have seen how buildings
                  on this island actually fail. The damage comes in two stages: a
                  long, ultraviolet-heavy summer that hardens and shrinks
                  whatever is sitting on the roof, and then a winter that
                  delivers most of its rain in a handful of weeks and tests every
                  joint at once. Detailing that would pass without comment in
                  Britain does not always survive that cycle.
                </p>
                <p className="text-gray-text leading-relaxed mb-6">
                  Alongside private villas and apartments we work for developers
                  and hotel groups, which is where the larger jobs on our
                  projects page come from. The systems and the standard of
                  detailing are the same either way.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <span className="block font-heading text-3xl font-bold text-gold-primary">
                      1999
                    </span>
                    <span className="text-sm text-gray-text">Trading since</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <span className="block font-heading text-3xl font-bold text-gold-primary">
                      25+
                    </span>
                    <span className="text-sm text-gray-text">
                      Years of experience
                    </span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <span className="block font-heading text-3xl font-bold text-gold-primary">
                      5
                    </span>
                    <span className="text-sm text-gray-text">
                      Year workmanship guarantee
                    </span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <span className="block font-heading text-3xl font-bold text-gold-primary">
                      Free
                    </span>
                    <span className="text-sm text-gray-text">
                      Survey and quotation
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gold-primary/10 rounded-2xl p-3">
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src="/images/about/firma.jpg"
                      alt="Düzkar Dizayn, waterproofing and rendering contractor in Alsancak, Kyrenia"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Yabancı mülk sahiplerine dönük güven bölümü */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark mb-4">
                Why foreign owners take us on
              </h2>
              <p className="text-gray-text leading-relaxed">
                If you have bought a property here from abroad, the difficulty is
                rarely finding someone with a van. It is knowing whether the
                price you were given is the price you will pay, whether anyone
                will turn up on the day, and who you speak to when something is
                wrong six months later.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <h3 className="font-heading font-bold text-navy-dark mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed">
                    {reason.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nasıl çalışıyoruz */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark mb-4">
                How a job runs
              </h2>
              <p className="text-gray-text leading-relaxed">
                The same five steps whether it is one balcony or a whole roof
                terrace, and whether you are here or in the UK while it happens.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                >
                  <span className="font-heading text-3xl font-bold text-gold-primary/40 block mb-3">
                    {step.number}
                  </span>
                  <h3 className="font-heading font-bold text-navy-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hizmetler */}
        <section className="py-16 md:py-20 bg-navy-dark">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white text-center mb-4">
              What we do
            </h2>
            <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
              Three trades under one roof, so nobody is waiting on another firm
              to finish before they can start.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group block bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="relative h-44">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-white mb-2 group-hover:text-gold-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {service.body}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Projeler */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark mb-4">
                Larger projects
              </h2>
              <p className="text-gray-text leading-relaxed">
                Developments and hotels we have worked on in and around Kyrenia.
                The waterproofing on a building of that size has to be right the
                first time, because almost none of it can be reached again once
                the finishes are on.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectsEn.map((project) => (
                <Link
                  key={project.slug}
                  href={`/en/projects/${project.slug}`}
                  className="group block rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all bg-white"
                >
                  <div className="relative h-40">
                    <Image
                      src={project.coverImage}
                      alt={`${project.title} — ${project.typeLabel} in ${project.location}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-bold text-navy-dark group-hover:text-gold-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-text text-sm mt-1">
                      {project.location}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/en/projects"
                className="inline-flex items-center gap-2 text-gold-primary font-semibold hover:gap-3 transition-all"
              >
                View all projects
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

        {/* Nerede olduğumuz */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark mb-4">
                  Where we work
                </h2>
                <p className="text-gray-text leading-relaxed mb-4">
                  We are based in Alsancak, on the coast road west of Kyrenia,
                  and we cover the whole of North Cyprus. Most of our work is in
                  the Kyrenia region — Alsancak, Lapta, Karaoğlanoğlu,
                  Karşıyaka, Çatalköy, Esentepe, Ozanköy and Bellapais — and we
                  also work in Nicosia, Famagusta, İskele, Boğaz and Güzelyurt.
                </p>
                <p className="text-gray-text leading-relaxed">
                  There is no call-out charge for a survey anywhere we cover. If
                  you are not on the island, we can survey the property and speak
                  to you afterwards.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-heading font-bold text-navy-dark mb-6 pb-4 border-b border-gray-200">
                  Contact details
                </h3>
                <dl className="space-y-5 text-sm">
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Address
                    </dt>
                    <dd className="text-navy-dark font-medium not-italic">
                      Ankara Caddesi No:109
                      <br />
                      Alsancak, Kyrenia
                      <br />
                      North Cyprus
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Telephone
                    </dt>
                    <dd>
                      <a
                        href="tel:+905338311432"
                        className="text-gold-primary font-medium hover:text-gold-dark transition-colors"
                      >
                        +90 533 831 14 32
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Email
                    </dt>
                    <dd>
                      <a
                        href="mailto:info@duzkardizayn.com"
                        className="text-gold-primary font-medium hover:text-gold-dark transition-colors"
                      >
                        info@duzkardizayn.com
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Languages
                    </dt>
                    <dd className="text-navy-dark font-medium">
                      English and Turkish
                    </dd>
                  </div>
                </dl>

                <Link
                  href="/en/faq"
                  className="inline-flex items-center gap-2 text-gold-primary text-sm font-semibold mt-6 hover:gap-3 transition-all"
                >
                  Read our frequently asked questions
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
          </div>
        </section>

        <CTASection
          title="Book a"
          highlightedText="free survey"
          description="Tell us what the property is doing and we will come and look at it. You get a written quotation in English before any work is booked in."
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
