import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ServiceHero,
  TimelineSection,
  FeatureCards,
  CTASection,
  FAQSection,
} from "@/components/services";
import { alternatesFor, SITE_URL } from "@/lib/i18n";

export const metadata: Metadata = {
  title:
    "Renovation & Property Refurbishment in North Cyprus | Builders in Kyrenia",
  description:
    "Full property refurbishment, bathroom and kitchen renovation, suspended ceilings, flooring and stone cladding across Kyrenia and North Cyprus. English-speaking builders, trading since 1999. Free survey, written quotation, 5-year guarantee.",
  keywords: [
    "renovation north cyprus",
    "property refurbishment kyrenia",
    "bathroom renovation north cyprus",
    "kitchen refit cyprus",
    "builders kyrenia",
    "english speaking builders north cyprus",
    "villa renovation cyprus",
    "apartment renovation kyrenia",
    "suspended ceilings north cyprus",
    "flooring kyrenia",
  ],
  openGraph: {
    title: "Renovation & Property Refurbishment in North Cyprus | Düzkar Dizayn",
    description:
      "Full refurbishments, bathroom and kitchen refits, ceilings, flooring and stone cladding across Kyrenia. English-speaking builders since 1999. Free survey.",
    url: `${SITE_URL}/en/services/renovation`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/services/tadilat/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Property renovation and refurbishment in North Cyprus",
      },
    ],
  },
  alternates: alternatesFor("/en/services/renovation"),
};

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
    {
      "@type": "ListItem",
      position: 3,
      name: "Renovation & Refurbishment",
    },
  ],
};

const heroBadges = [
  { text: "Full Refurbishment" },
  { text: "Bathrooms & Kitchens" },
  { text: "Suspended Ceilings" },
  { text: "Flooring & Stone Cladding" },
];

const trustBadges = [
  { text: "Trading since 1999" },
  { text: "5-year workmanship guarantee" },
  { text: "Free survey" },
];

const scopeItems = [
  {
    title: "Bathrooms and shower rooms",
    body: "A bathroom refit is the job where corners get cut most often, because the expensive part is invisible once it is finished. Tiles and grout are not waterproof — they are a wearing surface over the layer that is. Underneath ours there is a flexible cementitious tanking system, applied in two coats with reinforcing tape worked into every internal corner, around the threshold and around the drain, and the floor laid to a fall so water actually reaches the outlet. Skip that and the first sign of trouble is a stain on the ceiling of the room below, at which point the new bathroom has to come out again.",
  },
  {
    title: "Kitchens",
    body: "Strip-out, replumbing and rewiring where it is needed, plastering, tanking to the wet areas, tiling, flooring and fitting. We coordinate the trades rather than leaving you to chase an electrician who was supposed to come on Tuesday, and we handle the sequencing so the units go in after the floor and the plaster are properly dry rather than on top of a rushed programme.",
  },
  {
    title: "Suspended ceilings and lighting",
    body: "Plasterboard suspended ceilings are the most common and the most flexible, and they solve a specific Cyprus problem: they hide air conditioning pipework and ducting that would otherwise run across the wall. Stretch ceilings give a smooth, high-sheen surface, timber-look systems a warmer one, and metal systems suit commercial spaces. All of them let lighting be planned properly rather than worked around, and they help acoustically and thermally.",
  },
  {
    title: "Flooring",
    body: "Ceramic and porcelain tiles are the most durable option in this climate and the default in most properties here. Laminate is the economical choice, solid timber the luxurious one, vinyl the practical one, and self-levelling concrete gives a modern industrial finish. Heat and humidity matter to the decision — a floor that behaves in a British house does not necessarily behave in a Cyprus villa that stands empty and closed up for months.",
  },
  {
    title: "Stone cladding and feature walls",
    body: "Natural stone, reconstituted stone, brick-effect and three-dimensional wall panels, used on living room feature walls, kitchen splashbacks, around fireplaces, in stairwells and on garden walls. Natural stone is the choice outdoors, where it has to take weather; indoors either works.",
  },
  {
    title: "Full property refurbishment",
    body: "Strip-out and clearance, plumbing and electrical renewal, plastering and skimming, waterproofing to wet areas, interior painting, flooring, suspended ceilings, kitchen and bathroom fitting, and doors and windows. One firm running all of it, which removes the co-ordination problem that turns most self-managed renovations into a six-month project.",
  },
];

const timelineSteps = [
  {
    id: 1,
    title: "Free survey and honest assessment",
    description:
      "We walk the property with you, or on your behalf if you are not on the island, and tell you what we find — including the things you did not ask about. If there is water coming in from a terrace or a balcony, that has to be dealt with before anything cosmetic happens, and it is better to hear it before you have committed a budget than afterwards.",
  },
  {
    id: 2,
    title: "Scope, specification and written quotation",
    description:
      "A written quotation setting out what is included, the materials and systems being used, the price and the expected duration. Where you want to make choices — tiles, sanitaryware, flooring, ceiling type — we set those out so you can price the options rather than discovering them mid-job.",
  },
  {
    id: 3,
    title: "Strip-out and first fix",
    description:
      "Demolition, clearance, then plumbing and electrical first fix. This is the stage where hidden problems surface — old pipework, failed waterproofing, damp in a wall that nobody could see. We photograph anything unexpected and come back to you with the cost implication before proceeding, not after.",
  },
  {
    id: 4,
    title: "Waterproofing, plaster and screeds",
    description:
      "Tanking to wet areas, plastering and skimming, floor screeds. Everything here has to be given proper drying time. In dry Cypriot air a screed can go off far too fast and crack, so it is kept damp while it cures — rushing this stage is why floors and plaster crack a year later.",
  },
  {
    id: 5,
    title: "Second fix and finishes",
    description:
      "Tiling, flooring, suspended ceilings and lighting, kitchen and bathroom fitting, doors, then decorating. The order is fixed for a reason and we keep to it, because working out of sequence is how finished surfaces get damaged and re-done.",
  },
  {
    id: 6,
    title: "Snagging and handover",
    description:
      "We walk the property, list what needs correcting and correct it before we call the job finished. If you are abroad, you get photographs at each stage throughout and a full set at handover. The workmanship carries a 5-year guarantee.",
  },
];

const features = [
  {
    id: 1,
    title: "One firm, all the trades",
    description:
      "Waterproofing, plastering, tiling, ceilings, flooring and decorating under one contract. No co-ordinating four subcontractors from another country.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "We work for absent owners",
    description:
      "Scope agreed remotely, photographs at every stage, and a property that is finished when you land rather than a building site you have to supervise.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "The right order of works",
    description:
      "Waterproofing before finishes, always. A refurbishment laid over an unresolved damp problem is a refurbishment you pay for twice.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "How much does a renovation cost in North Cyprus?",
    answer:
      "It depends entirely on scope: a single bathroom, a partial refresh and a full villa refurbishment are different orders of magnitude, and so is the specification you choose within each. It also depends on what we find once the strip-out starts. We survey free of charge and give you a written quotation against a defined scope, rather than a per-square-metre figure that changes once work begins.",
  },
  {
    question: "How long does a full renovation take?",
    answer:
      "A complete apartment refurbishment typically runs three to six weeks, covering demolition, services, plaster, decorating, flooring and fitting. Larger villas take longer, and the timescale depends on how much has to be renewed rather than refreshed. A single bathroom is a much shorter job. We give you an expected duration in the written quotation and tell you as soon as anything moves it.",
  },
  {
    question: "Can I stay in the property while the work is done?",
    answer:
      "For a partial renovation — one room, or a single bathroom — usually yes, and we work in a way that keeps the rest of the property usable. For a full refurbishment we would advise against it. Dust, noise and the practical business of having no working kitchen or bathroom make it unpleasant, and work goes faster with the property empty.",
  },
  {
    question: "I am buying a resale property. Can you look at it before I commit?",
    answer:
      "Yes, and it is worth doing. We survey it, tell you what condition the waterproofing, plumbing, electrics and finishes are actually in, and give you a written quotation for the work you would need. Owners regularly find that the real cost sits in things nobody mentioned at the viewing — a terrace with no fall, a bathroom with no tanking under the tiles, or walls with no insulation at all.",
  },
  {
    question: "Do you renovate older properties?",
    answer:
      "Yes, and a good proportion of our work is exactly that. Buildings put up before around 2005 frequently have no meaningful waterproofing, and the bituminous materials used at the time have a service life of roughly 15 to 20 years, so on anything of that age the original system has long since stopped working. We assess the structure first, then set out what needs doing in what order.",
  },
  {
    question: "Why does waterproofing have to come first?",
    answer:
      "Because everything laid over a wet substrate fails. New plaster on a wall that is damp from a leaking terrace will blow within a year or two. Tiles bonded to a floor with no tanking will leak into the room below, whatever they cost. If a survey turns up an active water problem, we deal with it first and the finishes follow. Our waterproofing and damp proofing work is a separate service, so it is priced transparently as part of the same job.",
  },
  {
    question: "What does a bathroom renovation actually involve?",
    answer:
      "Strip-out, any plumbing and electrical changes, then the part that matters: a flexible cementitious tanking layer over the floor and the lower walls, with reinforcing tape at every internal corner and around the drain, and the floor laid to a fall so water reaches the outlet. Then tiling, fitting and finishing. If a quotation for a bathroom does not say what the waterproofing system is, ask, because that is the line that determines whether it leaks in three years.",
  },
  {
    question: "Can you manage the work while I am in the UK?",
    answer:
      "Yes. We survey the property, agree the scope with you by email or phone, and send photographs at each stage — strip-out, first fix, tanking, plaster, finishes — so you can see the state of it rather than take our word for it. A large share of our clients are absent owners who return to a completed property.",
  },
  {
    question: "Which suspended ceiling should I choose?",
    answer:
      "Plasterboard suits most homes: it is flexible, takes recessed lighting well and hides air conditioning pipework, which is the main reason people fit ceilings here. Stretch ceilings give a smooth high-sheen finish, timber-look systems a warmer feel, and metal systems are for commercial and industrial spaces. We go through the options relative to the room, the lighting plan and the budget.",
  },
  {
    question: "Do you provide a guarantee?",
    answer:
      "Yes. We provide a 5-year workmanship guarantee, alongside the manufacturers' warranties on the materials used. The company has been trading from Alsancak since 1999, which matters for a guarantee — it is only worth what the firm behind it is worth in five years' time.",
  },
];

export default function RenovationPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <ServiceHero
          title="Renovation & Property Refurbishment in North Cyprus"
          description="Full refurbishments of villas and apartments, bathroom and kitchen refits, suspended ceilings, flooring and stone cladding, across Kyrenia and the rest of North Cyprus. One firm running all the trades, an English-speaking team, a written quotation before anything starts and photographs at every stage if you are watching from the UK. Trading since 1999, with a 5-year workmanship guarantee."
          breadcrumb={{ current: "Renovation & Refurbishment" }}
          badges={heroBadges}
          imageSrc="/images/services/tadilat/hero.jpg"
          imageAlt="Renovated interior with suspended ceiling in a property in North Cyprus"
        />

        {/* Yabancı alıcılar için giriş */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy-dark mb-6">
                Refurbishing a property you have bought here
              </h2>
              <div className="prose prose-lg max-w-none text-gray-text">
                <p>
                  Most of the refurbishment work we do falls into one of three
                  situations. Somebody has bought a resale villa or apartment
                  and wants it brought up to standard before they move in or let
                  it. Somebody has owned a property here for fifteen years and
                  the bathrooms, kitchen and finishes have reached the end of
                  their life. Or somebody has discovered a problem — damp, a
                  leak, blown plaster — and the repair has grown into a
                  renovation.
                </p>
                <p>
                  All three have the same trap in them, and it catches buyers
                  from Britain more than anyone, because the building stock here
                  behaves differently from what they are used to. The visible
                  work — kitchens, bathrooms, floors, paint — is the part that
                  is easy to price and easy to imagine. The part that decides
                  whether any of it lasts is underneath: whether the terrace
                  above the bedroom has a working membrane, whether the bathroom
                  floor was ever tanked, whether the external walls have any
                  insulation in them at all.
                </p>
                <p>
                  Buildings put up before around 2005 very often have no
                  meaningful waterproofing anywhere in them, and even where it
                  was done, the bituminous materials of that period last roughly
                  15 to 20 years, so on a property of that age it has stopped
                  working whether or not anyone has noticed. Newer builds have
                  the opposite problem: waterproofing that exists but was
                  installed too thin, with inadequate falls and rushed detailing,
                  and starts to fail after two or three winters.
                </p>
                <p>
                  We survey before we price, and we will tell you what we find
                  rather than what would be convenient to find. It is a more
                  useful conversation to have before you commit a budget than
                  after the tiles are down.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* İşlerin sırası */}
        <section className="py-16 bg-navy-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-white mb-6">
                The order of works decides everything
              </h2>
              <div className="prose prose-lg max-w-none text-white/80 prose-strong:text-white">
                <p>
                  This is the one thing worth understanding before you engage
                  anybody for a renovation in North Cyprus, and it is the reason
                  we keep waterproofing, facades and renovation under one roof
                  rather than sending you to three firms.
                </p>
                <ul>
                  <li>
                    <strong>
                      Plaster and paint over a damp wall will fail.
                    </strong>{" "}
                    If water is coming in from a terrace, a balcony or a
                    foundation, the wall keeps getting wet from behind. The new
                    plaster blows, the new paint blisters, and you have paid for
                    the same room twice.
                  </li>
                  <li>
                    <strong>
                      A bathroom without tanking will leak into the room below.
                    </strong>{" "}
                    Not immediately — usually in the second or third year, once
                    the grout has taken a few hundred thermal cycles. Fixing it
                    means removing a bathroom you have just paid for.
                  </li>
                  <li>
                    <strong>
                      Render or insulation over a wet wall will come off.
                    </strong>{" "}
                    The bond is only as good as the surface behind it, and a
                    surface that is drying from the inside pushes the system
                    away from the wall.
                  </li>
                  <li>
                    <strong>Screeds and plaster need their drying time.</strong>{" "}
                    In dry Cypriot air materials can go off far too quickly and
                    crack. A programme that does not allow for curing produces a
                    floor that cracks in its first year.
                  </li>
                </ul>
                <p>
                  So the sequence is fixed:{" "}
                  <Link
                    href="/en/services/waterproofing"
                    className="text-gold-primary hover:underline font-medium"
                  >
                    waterproofing
                  </Link>{" "}
                  and damp first, structural and services second,{" "}
                  <Link
                    href="/en/services/facades-and-rendering"
                    className="text-gold-primary hover:underline font-medium"
                  >
                    plaster, render and insulation
                  </Link>{" "}
                  third, finishes last. Any contractor willing to start with the
                  finishes because that is the quickest way to a nice-looking
                  result is offering you a problem on a delay.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kapsam */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy-dark mb-10 text-center">
                What we do
              </h2>

              <div className="space-y-12">
                {scopeItems.map((item) => (
                  <div
                    key={item.title}
                    className="border-l-4 border-gold-primary pl-6"
                  >
                    <h3 className="text-2xl font-heading font-bold text-navy-dark mb-4">
                      {item.title}
                    </h3>
                    <div className="prose prose-lg max-w-none text-gray-text">
                      <p>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Uzaktaki mülk sahipleri */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy-dark mb-6">
                If you are not on the island while the work happens
              </h2>
              <div className="prose prose-lg max-w-none text-gray-text">
                <p>
                  A large share of our clients live in the UK for most of the
                  year and own a property here that they use for part of it.
                  Managing building work from two thousand miles away is the
                  thing they worry about most, and with reason — the most common
                  complaint owners have about building work in North Cyprus is
                  not the standard of the work but not being told what is going
                  on.
                </p>
                <p>How we handle it:</p>
                <ul>
                  <li>
                    We survey the property and send you the assessment in
                    writing, in English, with photographs of anything we are
                    concerned about.
                  </li>
                  <li>
                    The scope and the quotation are agreed by email or phone
                    before anything is booked, so you are not approving costs
                    under pressure.
                  </li>
                  <li>
                    You get photographs at each stage — strip-out, first fix,
                    tanking, plaster, finishes — rather than a single set at the
                    end.
                  </li>
                  <li>
                    If we find something unexpected once the strip-out starts,
                    you hear about it with a photograph and a cost before we
                    proceed, not on the final invoice.
                  </li>
                  <li>
                    If the dates move because of weather or materials, you hear
                    that from us first.
                  </li>
                </ul>
                <p>
                  You can see the standard of finish on our{" "}
                  <Link
                    href="/en/projects"
                    className="text-gold-primary hover:underline font-medium"
                  >
                    completed projects
                  </Link>{" "}
                  page, which includes residential developments and hotels
                  around Kyrenia as well as private villas and apartments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FeatureCards
          title="How we work"
          features={features}
          variant="minimal"
        />

        <TimelineSection
          title="What happens, step by step"
          steps={timelineSteps}
        />

        <FAQSection
          title="Renovation & Refurbishment: Frequently Asked Questions"
          subtitle="What property owners in Kyrenia and across North Cyprus ask us most"
          faqs={faqs}
          schemaId={`${SITE_URL}/en/services/renovation#faq`}
        />

        {/* İç bağlantılar */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-xl font-heading font-bold text-navy-dark mb-6">
                Related services
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/en/services/waterproofing"
                  className="px-6 py-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow text-navy-dark hover:text-gold-primary"
                >
                  Waterproofing & Damp Proofing
                </Link>
                <Link
                  href="/en/services/facades-and-rendering"
                  className="px-6 py-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow text-navy-dark hover:text-gold-primary"
                >
                  Facades, Rendering & Insulation
                </Link>
                <Link
                  href="/en/projects"
                  className="px-6 py-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow text-navy-dark hover:text-gold-primary"
                >
                  Completed Projects
                </Link>
                <Link
                  href="/en/services"
                  className="px-6 py-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow text-navy-dark hover:text-gold-primary"
                >
                  All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Talk to us about"
          highlightedText="your property"
          description="Whether it is one bathroom or a whole villa, the first step is the same: we come and look, tell you what we find, and put a written quotation in front of you. No charge for the survey, and no obligation. Kyrenia, Nicosia, Famagusta, İskele and Güzelyurt."
          primaryButtonText="Request a Free Survey"
          primaryButtonHref="/en#contact"
          secondaryButtonText="+90 533 831 14 32"
          secondaryButtonHref="tel:+905338311432"
          trustBadges={trustBadges}
        />
      </main>
      <Footer />
    </>
  );
}
