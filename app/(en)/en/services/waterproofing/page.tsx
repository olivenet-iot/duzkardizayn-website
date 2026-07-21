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
    "Waterproofing & Damp Proofing North Cyprus | Roof, Terrace & Pool Leaks",
  description:
    "Flat roof leak repair, terrace and balcony waterproofing, damp proofing, tanking and swimming pool leak repair across Kyrenia and North Cyprus. English-speaking team, trading since 1999. Free survey, 5-year workmanship guarantee.",
  keywords: [
    "waterproofing north cyprus",
    "damp proofing cyprus",
    "flat roof leak repair kyrenia",
    "roof waterproofing north cyprus",
    "terrace waterproofing cyprus",
    "balcony waterproofing cyprus",
    "swimming pool leak repair north cyprus",
    "rising damp cyprus",
    "damp and mould kyrenia",
    "tanking north cyprus",
    "basement waterproofing cyprus",
    "leaking roof kyrenia",
  ],
  openGraph: {
    title: "Waterproofing & Damp Proofing in North Cyprus | Düzkar Dizayn",
    description:
      "Leaking flat roof, damp walls, a balcony soaking the flat below or a pool losing water? Waterproofing specialists in Kyrenia since 1999. Free survey.",
    url: `${SITE_URL}/en/services/waterproofing`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/services/izolasyon/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Waterproofing and damp proofing in North Cyprus",
      },
    ],
  },
  alternates: alternatesFor("/en/services/waterproofing"),
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
      name: "Waterproofing & Damp Proofing",
    },
  ],
};

const heroBadges = [
  { text: "Flat Roofs & Terraces" },
  { text: "Balconies" },
  { text: "Damp Proofing & Tanking" },
  { text: "Swimming Pools" },
];

const trustBadges = [
  { text: "Trading since 1999" },
  { text: "5-year workmanship guarantee" },
  { text: "Free survey" },
];

// Nem türleri: Türkçe nem rehberinden alınan teşhis kriterleri.
// İngiliz mülk sahipleri "rising damp" ve "condensation" terimlerini
// aradığı için başlıklar birebir bu sorgularla kuruldu.
const dampTypes = [
  {
    title: "Rising damp",
    what: "Ground water drawn up through the wall by capillary action. The risk depends on where you are: along the Kyrenia coast the water table sits only one to three metres down, so there is water within reach of the foundations for much of the winter.",
    signs:
      "A wet band starting at floor level and reaching anywhere from 50 to 150 cm up the wall. White salt deposits on the plaster. Paint blistering off. A soil and cellar smell in ground-floor rooms.",
    tell: "It does not follow the weather. If the wall is still damp in July after months without rain, it is almost certainly rising damp.",
  },
  {
    title: "Penetrating damp",
    what: "Rainwater entering through a crack, a failed joint or a section of missing waterproofing — the roof, terrace, balcony, an external wall or a window surround.",
    signs:
      "Isolated patches rather than a continuous band. Ceiling staining below a terrace or balcony. Damp that spreads outwards from one point.",
    tell: "It tracks the rain. If the patch appears or grows 24 to 48 hours after heavy rain and dries back in a dry spell, this is what you have.",
  },
  {
    title: "Condensation",
    what: "Warm, humid indoor air meeting a cold surface. In coastal Kyrenia, winter humidity sits at 75 to 80 per cent, and this is what catches British owners out.",
    signs:
      "Water running down window glass and frames. Black mould in external corners, behind wardrobes and on north-facing walls. Persistent damp on bathroom and kitchen ceilings. Worst first thing in the morning.",
    tell: "It is worst in the coldest, most closed-up months, and it concentrates where the building is coldest — the thermal bridges. Uninsulated external walls make it dramatically worse.",
  },
  {
    title: "Ground water under pressure",
    what: "Water in saturated ground pressing against foundations and basement walls. From November to March the water table rises with the rainfall, and on the coast it does not have far to rise.",
    signs:
      "Standing water or wet floors in a basement or lower ground floor. A horizontal tide mark 50 to 100 cm up the wall. Seepage at the wall-to-floor junction. White efflorescence.",
    tell: "This is the most damaging kind and the most expensive to leave alone — the water reaches the reinforcement in the concrete and starts corroding it.",
  },
];

const areasWeWaterproof = [
  {
    title: "Flat roofs and roof terraces",
    body: [
      "The single most common call-out we get, and the one that does the most damage while it is ignored. A flat roof in Cyprus takes the full load of the climate: surface temperatures of 70 to 80°C on a dark roof in summer, dropping to 20 to 25°C overnight. That 50 to 60 degree daily swing is repeated hundreds of times a year, and it works micro-cracks into the membrane, the parapet upstands and every pipe penetration.",
      "Two things decide whether a flat roof survives here: the falls and the detailing. A flat roof needs a minimum fall of 1.5 to 2 per cent towards the outlets. A great many roofs in North Cyprus were either never laid to a fall or have settled flat over the years. If water is still standing 48 hours after the rain stops, you have a falls problem, and no membrane on the market will survive permanent standing water on top of it.",
      "Where the falls are wrong we lay a new screed, at least C20/25 and a minimum of 3 cm thick, before any membrane goes down. Correcting the falls is not an optional extra — it is the difference between a repair and a repeat.",
    ],
  },
  {
    title: "Balconies and terraces over living space",
    body: [
      "A balcony leak rarely announces itself on the balcony. It announces itself on the ceiling of the apartment underneath, which is why balcony leaks so often turn into a dispute with a neighbour. Around 80 per cent of balcony repairs trace back to a failure in the waterproofing layer rather than anything structural.",
      "The usual sequence is the same each time: the balcony has too little fall, water sits on it for two or three days after each downpour, and it finds its way through grout lines and hairline cracks into the slab. Once it is in the slab it corrodes the reinforcement, and that is a far bigger job than the one you started with.",
      "A permanent balcony repair means lifting the existing tiling, re-laying the screed to a proper fall, applying a flexible two-part cementitious waterproofing layer in two coats, dressing the upstands and the threshold with reinforcing tape, fitting a proper outlet collar, then protecting it with a screed before it is re-tiled. Cover-up products applied over the existing tiles buy you a season or two, no more.",
    ],
  },
  {
    title: "Foundations, basements and retaining walls",
    body: [
      "Ground conditions here vary more than people expect, and they decide how much risk a building carries. The coastal strip is largely sandy and rocky, and along the Kyrenia coast the water table sits just one to three metres below the surface — the highest-risk ground on the island, and exactly where most foreign-owned property is. Inland from Kyrenia it is rocky and calcareous with the water table three to six metres down. Nicosia, on clay and limestone at six to ten metres, is comparatively forgiving. From November to March the level rises with the rain.",
      "In a building where the foundation was never properly tanked, that water works through the pores in the concrete. It often takes five to ten years to show, and then it shows as mould, salt staining and structural damage in the lower ground floor.",
      "On the positive side — the face the water arrives from — we use bituminous membrane or a two-part liquid-applied bituminous coating, protected before backfilling. Where the water can only be dealt with from inside, which is the case in most existing basements, the answer is a cementitious tanking system. Bitumen applied to the inside face of a basement wall will blister and peel off under water pressure; it belongs on the outside.",
    ],
  },
  {
    title: "Bathrooms, shower rooms and kitchens",
    body: [
      "Tiles and grout are not waterproof. They are a wearing surface over the layer that is. In a wet room the tanking sits underneath the tiling and turns the floor and the lower part of the walls into a sealed tray, with reinforcing tape worked into every internal corner and around the drain.",
      "This is the part of a bathroom refit that is easiest to skip and most expensive to put right, because putting it right means taking the finished bathroom out again. If you are having a bathroom renovated, make sure the quotation says what the tanking system is. Ours does.",
    ],
  },
  {
    title: "Swimming pools and water features",
    body: [
      "A pool has to be waterproofed in two directions at once: water pushing out from the inside, and ground water pushing in from the outside. It also has to survive chlorinated water, UV, and summer air temperatures of 38 to 42°C in Kyrenia against 22 to 25°C at night.",
      "On the inside face we use a crystalline cementitious system, brushed on in two crossed coats to a total thickness of 2 to 3 mm and then kept damp for three to five days to cure properly. Crystalline systems grow into the pore structure of the concrete rather than sitting on top of it, which is why they hold against pressure from the wrong side. Outside, below ground, we use two layers of torch-applied membrane protected with XPS board before backfilling.",
      "Most pools we are called to are not leaking through the shell. They are leaking at the skimmer box, the light fittings and the pipe penetrations, because those details were never sealed properly. We finish every pool with a water test: three days at half fill, then seven days at full fill, with a maximum accepted loss of 0.5 cm a day once evaporation is accounted for. No tiling goes on a pool that has not passed that test.",
    ],
  },
];

const systems = [
  {
    title: "Torch-applied bituminous membrane",
    body: "Polymer-modified bitumen sheet, heated with a gas torch and bonded to the substrate. This is the workhorse for large horizontal areas — roofs, terraces and the positive face of foundations. In this climate we apply two layers, 3 mm then 4 mm, with a minimum 10 cm overlap at every seam and the second layer offset by at least 50 cm so the joints never line up. At parapets the membrane is carried at least 20 cm up the wall. Bare membrane is never left exposed to Cypriot sun: it is either mineral-faced or covered with screed or gravel, otherwise UV ages it out years early.",
  },
  {
    title: "Flexible cementitious waterproofing",
    body: "A two-part brush or trowel-applied system that bonds chemically into the pores of concrete, screed and render rather than sticking to the surface. It is applied in two coats, roughly 2.5 to 3 kg per square metre in total, with reinforcing tape in the corners and a third pass at junctions. It stays vapour-open, so it will not trap moisture and blister on a wall that is drying from behind, and tiles can be bonded directly over it. This is what belongs in bathrooms, on balconies and on internal basement faces.",
  },
  {
    title: "Crystalline systems",
    body: "Cementitious coatings that react with moisture in the concrete and grow crystals into its capillaries, sealing it from within. They resist chlorides and continuous water pressure, including pressure from the negative side, which makes them the first choice on the inside face of pools, water tanks and basements. They need a saturated, matt-damp substrate to work — applied to dry concrete, or rushed in 35°C midday heat, the crystal formation is compromised.",
  },
  {
    title: "Two-part liquid-applied bitumen",
    body: "A cold-applied thick coating, so no flame and no torch. It cures to a seamless, flexible layer typically 2 to 4 mm thick when dry, and it takes the shape of awkward details — internal corners, pipe roots, anchor points — far better than a sheet can. Applied in at least two coats; where there is water table pressure the first coat carries a reinforcing mesh.",
  },
];

const timelineSteps = [
  {
    id: 1,
    title: "Free survey and diagnosis",
    description:
      "We come and look at the property before we quote anything. The point is to find where the water is actually coming from, which is often not where it appears. A ceiling stain in a bedroom can be a roof outlet, a cracked parapet, a balcony above or a condensation problem, and the four have completely different fixes. If it is condensation and not a leak, we will tell you that rather than sell you a membrane.",
  },
  {
    id: 2,
    title: "Written quotation",
    description:
      "You receive a written quotation setting out the scope, the system we intend to use, the price and the expected duration. If you are in the UK we send it by email and go through it with you before anything is booked. Nothing starts on a verbal figure.",
  },
  {
    id: 3,
    title: "Strip back and surface preparation",
    description:
      "Old tiling, failed membrane and loose screed come off. Cracks deeper than about 5 mm are cut out, filled with repair mortar and left 24 hours to cure. The substrate has to be genuinely dry before bituminous work starts — after rain that means waiting at least 48 hours, checked with a moisture meter rather than by eye.",
  },
  {
    id: 4,
    title: "Falls and screed",
    description:
      "Where water has been standing, a new screed is laid to a minimum fall of 1.5 to 2 per cent towards the outlets, at least C20/25 and a minimum of 3 cm thick. In dry Cypriot air a screed can go off far too quickly and crack, so it is kept damp while it cures.",
  },
  {
    id: 5,
    title: "Waterproofing and detailing",
    description:
      "Primer first, then the waterproofing system itself. On a membrane roof that means two layers with 10 cm overlaps and staggered joints, upstands taken 20 cm up parapet walls, and reinforcement at every outlet, pipe penetration and internal corner. The details are where systems fail, so this is the slow part of the job and we do not rush it.",
  },
  {
    id: 6,
    title: "Testing, protection and handover",
    description:
      "Seams are checked, and where the design allows we flood-test the area for 24 to 48 hours before covering anything up. Pools get a full seven-day water test. Only then does the protective screed, gravel or tiling go on. You get photographs of each stage, which matters if you were not on the island while the work happened, and a 5-year workmanship guarantee.",
  },
];

const features = [
  {
    id: 1,
    title: "We find the cause, not just the symptom",
    description:
      "Water travels. The wet patch is rarely above the hole. We survey before we price, and we will tell you if the real problem is something other than the one you called about.",
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Systems matched to the surface",
    description:
      "Bitumen on the positive face, cementitious on the negative face, crystalline in pools and tanks. Using the wrong one in the right place is the most common reason waterproofing fails here.",
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
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "25+ years of it, in this climate",
    description:
      "Trading from Alsancak since 1999, on villas, apartment blocks and hotels. Every installation carries a 5-year workmanship guarantee alongside the manufacturer's material warranty.",
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
    question: "How much does waterproofing cost in North Cyprus?",
    answer:
      "It depends on the area, the condition of what is already there and whether the falls need correcting. Re-waterproofing a balcony and stripping back a 200 m² roof terrace are completely different jobs, and a rate quoted over the phone before anyone has seen the roof is a guess. We survey free of charge and give you a fixed written price.",
  },
  {
    question: "My villa is only three years old. Why is it already leaking?",
    answer:
      "This is the most common question we are asked by owners on newer developments, and the answer is usually one of three things: the waterproofing was a single thin membrane layer where two are needed, the falls to the outlets are too shallow so water stands on the roof, or the detailing at parapets and pipe penetrations was rushed. Any of those will survive two or three winters and then fail. Patching the visible leak does not fix it; correcting the falls and laying a properly detailed system does.",
  },
  {
    question: "When is the best time of year to have waterproofing done?",
    answer:
      "Late spring to early autumn. The surface has to be genuinely dry before a bituminous system goes down, so once the winter rains start, work often has to wait for a dry window. The other consideration is heat: in July and August a roof surface can pass 70°C, which makes both membrane and screed behave badly, so we work early in the day. If you have a leak, deal with it during the dry months rather than waiting for the rain to prove the point again.",
  },
  {
    question: "How do I know whether I have a leak or condensation?",
    answer:
      "Watch when it appears. Penetrating damp follows the weather — the patch shows up or grows 24 to 48 hours after heavy rain and dries back in a dry spell. Condensation is worst in the coldest, most closed-up months, shows on window glass and in external corners, and is worst first thing in the morning. Rising damp ignores the weather entirely and is still there in July. The three need completely different work, which is why we survey before quoting.",
  },
  {
    question: "There is black mould in the bedrooms every winter. Is that a leak?",
    answer:
      "Often it is not. Winter humidity on the Kyrenia coast reaches 75 to 80 per cent, and mould that appears in external corners, behind furniture and around window reveals is usually condensation on cold surfaces rather than water coming in. Cleaning it off treats the stain, not the cause. The lasting fix is to stop those surfaces being cold, which usually means external wall insulation, combined with ventilation. If there is also a leak feeding it, we will find that at the survey.",
  },
  {
    question: "Can you waterproof over existing tiles?",
    answer:
      "Sometimes, with elastic systems designed for it, and it can be the right answer where the tiling is sound and well bonded. But if the underlying problem is that the balcony or terrace has no fall, coating over the top will not solve it, because the water will still stand there. Lifting the tiles, correcting the screed and waterproofing properly is the permanent answer. We will tell you at the survey which of the two your property needs.",
  },
  {
    question: "How long does the work take?",
    answer:
      "A standard apartment balcony is around two to three days, or four to five including stripping the old finish and re-tiling. A house roof of 100 to 150 m² is typically three to five working days. Foundation and basement work runs one to two weeks. A pool is five to seven days for a new installation and seven to ten for a refurbishment, plus the seven-day water test before tiling. Weather can move any of these, and we tell you when it does.",
  },
  {
    question: "How long should waterproofing last?",
    answer:
      "A correctly installed and properly protected bituminous roof system lasts around 15 to 20 years in this climate. Left exposed to direct Cypriot sun with no mineral facing, screed or gravel over it, the same membrane can lose significant performance in 8 to 12 years, because the UV index here reaches 11 in July — roughly two to three times central European levels. From year ten onwards it is worth an annual look for cracks and blistering.",
  },
  {
    question: "My swimming pool is losing water. Is it definitely the shell?",
    answer:
      "Usually not. In most pools we are called to, the shell is sound and the water is escaping at the skimmer box, the light fittings or the pipe penetrations, where the detailing was never done properly. There is no visible crack, just a level that keeps dropping. We work out where it is going, deal with the details, and confirm the result with a staged water test rather than by refilling it and hoping.",
  },
  {
    question: "I live in the UK for most of the year. Can you manage the job without me there?",
    answer:
      "Yes, and a large share of our work is exactly that. We survey the property, agree the scope with you by email or phone, and send photographs at each stage so you can see the substrate, the falls, the membrane going down and the finished job. You come back to completed work rather than a site.",
  },
];

export default function WaterproofingPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <ServiceHero
          title="Waterproofing & Damp Proofing in North Cyprus"
          description="Leaking flat roofs, damp walls, balconies soaking the flat below, basements that smell of earth every winter and pools quietly losing water. We have been dealing with all of it from Alsancak, just outside Kyrenia, since 1999. Every job starts with a free survey to find where the water is actually getting in, and finishes with a written 5-year workmanship guarantee."
          breadcrumb={{ current: "Waterproofing & Damp Proofing" }}
          badges={heroBadges}
          imageSrc="/images/services/izolasyon/hero.jpg"
          imageAlt="Waterproofing membrane being applied to a roof terrace in North Cyprus"
        />

        {/* İklim bölümü — İngiliz mülk sahiplerinin en çok şaşırdığı nokta */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy-dark mb-6">
                Why buildings leak here
              </h2>
              <div className="prose prose-lg max-w-none text-gray-text">
                <p>
                  Most people who buy property in North Cyprus arrive with the
                  idea that it is a dry island and that water is somebody
                  else&apos;s problem. The rainfall figures support that: around
                  500 mm a year, less than most of Britain. What the figures do
                  not show is that roughly 60 per cent of it falls between
                  December and February, in short and heavy bursts.
                </p>
                <p>
                  So the year splits into two halves that work against each
                  other. From April to October, intense UV and heat do the
                  damage. The UV index in Kyrenia reaches 11 in July, two to
                  three times what central Europe sees, and it is still at 9 in
                  April and May. A dark flat roof reaches a surface temperature
                  of 70 to 80°C on a summer afternoon and falls back to 20 to
                  25°C overnight. That daily swing of 50 to 60 degrees is
                  repeated hundreds of times a year. Bitumen hardens, loses its
                  flexibility and opens micro-cracks — at the seams, at the
                  parapet upstands and around every pipe that comes through the
                  roof.
                </p>
                <p>
                  Then in December the rain arrives all at once and finds every
                  one of them. That is the pattern behind the great majority of
                  leaks we are called out to, and it is why waterproofing that
                  would be perfectly adequate in northern Europe fails early
                  here.
                </p>
                <p>
                  On the coast there are two more factors. Airborne salt
                  accelerates corrosion of metal outlets, edge trims and the
                  reinforcement in the concrete, and it is measurable up to a
                  kilometre inland. And winter humidity along the Kyrenia and
                  Famagusta coastline sits at 75 to 80 per cent, which is high
                  enough to cause condensation and mould inside a property with
                  no leak at all — something a lot of British owners meet for
                  the first time in their second winter here.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nem türleri — teşhis. "rising damp", "damp and mould" sorguları */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy-dark mb-4">
                Four kinds of damp, and why telling them apart matters
              </h2>
              <p className="text-gray-text text-lg mb-10">
                Damp is not one problem with one fix. There are four distinct
                causes, they produce different marks on the wall, and treating
                the wrong one is how people end up paying twice. This is the
                first thing we work out at the survey.
              </p>

              <div className="space-y-8">
                {dampTypes.map((type) => (
                  <div
                    key={type.title}
                    className="border-l-4 border-gold-primary pl-6"
                  >
                    <h3 className="text-2xl font-heading font-bold text-navy-dark mb-3">
                      {type.title}
                    </h3>
                    <div className="prose prose-lg max-w-none text-gray-text">
                      <p>{type.what}</p>
                      <p>
                        <strong>What you see:</strong> {type.signs}
                      </p>
                      <p>
                        <strong>How to tell:</strong> {type.tell}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-gold-primary/10 border border-gold-primary/30 rounded-xl p-6">
                <p className="text-gray-text">
                  Condensation and mould are frequently made much worse by
                  uninsulated external walls, because the wall surface stays
                  cold enough for moisture in the air to settle on it. Where
                  that is the cause, the durable answer is on our{" "}
                  <Link
                    href="/en/services/facades-and-rendering"
                    className="text-gold-primary hover:underline font-medium"
                  >
                    external wall insulation and rendering
                  </Link>{" "}
                  page rather than this one. We will say so at the survey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Yeni bina kusurları — hedef kitlenin en çok yaşadığı sorun */}
        <section className="py-16 bg-navy-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-white mb-6">
                Why so many new-build properties leak after two or three winters
              </h2>
              <div className="prose prose-lg max-w-none text-white/80 prose-strong:text-white">
                <p>
                  A leaking twenty-year-old roof surprises nobody. A leaking
                  three-year-old villa surprises everybody, and it is one of the
                  most frequent calls we take. The reasons are consistent enough
                  that we can usually predict what we will find before we get on
                  the roof.
                </p>
                <ul>
                  <li>
                    <strong>A single membrane layer.</strong> One layer is
                    quicker and cheaper. In this climate the standard is two —
                    3 mm then 4 mm — with the joints staggered so they never
                    line up. A single layer has no redundancy: one failed seam
                    is a leak.
                  </li>
                  <li>
                    <strong>Falls that are too shallow or missing.</strong> The
                    minimum is 1.5 to 2 per cent towards the outlets. Get it
                    wrong and water stands on the roof after every downpour,
                    loading the membrane with constant hydrostatic pressure.
                    Water still sitting there 48 hours after the rain stopped is
                    not normal and will not dry its way out of being a problem.
                  </li>
                  <li>
                    <strong>Rushed detailing.</strong> Membrane that stops short
                    of the required 20 cm upstand at parapets, overlaps under
                    the 10 cm minimum, seams welded unevenly, no reinforcement
                    around outlets and pipe penetrations. Nothing here is
                    visible from the ground on handover day.
                  </li>
                  <li>
                    <strong>Membrane left bare in the sun.</strong> Exposed
                    bitumen with no mineral facing, screed or gravel over it
                    ages fast under a UV index of 11 and cracks years early.
                  </li>
                  <li>
                    <strong>Later additions nobody sealed.</strong> Air
                    conditioning units, satellite dishes, solar panels and water
                    tanks bolted to a finished roof puncture the membrane. Left
                    without a proper sealing detail, each fixing is a leak
                    waiting for December.
                  </li>
                </ul>
                <p>
                  None of this is fixed by finding the wet spot and patching it.
                  Where the falls are wrong or the membrane was single-layer,
                  the honest answer is to strip back and lay a correct system,
                  and that is what our quotation will say.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Uygulama alanları */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy-dark mb-10 text-center">
                What we waterproof
              </h2>

              <div className="space-y-12">
                {areasWeWaterproof.map((area) => (
                  <div
                    key={area.title}
                    className="border-l-4 border-gold-primary pl-6"
                  >
                    <h3 className="text-2xl font-heading font-bold text-navy-dark mb-4">
                      {area.title}
                    </h3>
                    <div className="prose prose-lg max-w-none text-gray-text">
                      {area.body.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-gray-text">
                <p>
                  Pool and foundation waterproofing on hotel and residential
                  developments makes up a good share of our work as well —
                  Merit Park Hotel, Merit Royal Premium, Emtan West Park and
                  Emtan Quattro among them. You can see the detail on our{" "}
                  <Link
                    href="/en/projects"
                    className="text-gold-primary hover:underline font-medium"
                  >
                    completed projects
                  </Link>{" "}
                  page.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sistemler */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy-dark mb-4">
                The systems we use, and where each one belongs
              </h2>
              <p className="text-gray-text text-lg mb-10">
                There is no single best waterproofing material. There is a right
                material for a given surface, a given direction of water
                pressure and a given climate. Most of the failures we are asked
                to put right are not poor-quality products — they are the wrong
                product in the wrong place.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {systems.map((system) => (
                  <div
                    key={system.title}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                  >
                    <h3 className="font-heading text-xl font-bold text-navy-dark mb-3">
                      {system.title}
                    </h3>
                    <p className="text-gray-text text-sm leading-relaxed">
                      {system.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 prose prose-lg max-w-none text-gray-text">
                <p>
                  The rule of thumb we work to: bitumen on the positive face —
                  the side the water arrives from — where a thick, tough,
                  flexible barrier is needed over a large area. Cementitious
                  systems where the surface has to stay vapour-open, where tiles
                  are going on top, or where the water has to be held back from
                  the inside. Get that the wrong way round and the system
                  blisters off within a couple of years, whatever it cost.
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
          title="Waterproofing & Damp Proofing: Frequently Asked Questions"
          subtitle="What property owners in Kyrenia and across North Cyprus ask us most"
          faqs={faqs}
          schemaId={`${SITE_URL}/en/services/waterproofing#faq`}
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
                  href="/en/services/facades-and-rendering"
                  className="px-6 py-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow text-navy-dark hover:text-gold-primary"
                >
                  Facades, Rendering & Insulation
                </Link>
                <Link
                  href="/en/services/renovation"
                  className="px-6 py-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow text-navy-dark hover:text-gold-primary"
                >
                  Renovation & Refurbishment
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
          title="Book a free survey"
          highlightedText="before the rains"
          description="Tell us what you are seeing — a stain on the ceiling, a balcony leaking into the flat below, mould that comes back every winter, a pool level that keeps dropping. We will come and look, work out where the water is coming from, and put a written quotation in front of you. Kyrenia, Nicosia, Famagusta, İskele and Güzelyurt."
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
