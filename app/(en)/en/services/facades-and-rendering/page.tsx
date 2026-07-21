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
    "External Wall Insulation, Rendering & Exterior Painting | North Cyprus",
  description:
    "Render repair, external wall insulation, exterior and interior painting across Kyrenia and North Cyprus. UV-stable coatings built for the Cypriot climate. English-speaking team, trading since 1999. Free survey, 5-year guarantee.",
  keywords: [
    "external wall insulation cyprus",
    "rendering north cyprus",
    "render repair kyrenia",
    "exterior painting north cyprus",
    "house painting kyrenia",
    "facade repair north cyprus",
    "wall insulation kyrenia",
    "painters and decorators north cyprus",
    "cracked render cyprus",
    "interior painting kyrenia",
  ],
  openGraph: {
    title: "External Wall Insulation & Rendering in North Cyprus | Düzkar Dizayn",
    description:
      "Cracked render, faded walls, paint blowing off, rooms that cost a fortune to cool. Facade and insulation specialists in Kyrenia since 1999. Free survey.",
    url: `${SITE_URL}/en/services/facades-and-rendering`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/services/cephe/hero.jpg",
        width: 1200,
        height: 630,
        alt: "External wall insulation and rendering in North Cyprus",
      },
    ],
  },
  alternates: alternatesFor("/en/services/facades-and-rendering"),
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
      name: "Facades, Rendering & Insulation",
    },
  ],
};

const heroBadges = [
  { text: "External Wall Insulation" },
  { text: "Render Repair" },
  { text: "Exterior Painting" },
  { text: "Interior Decorating" },
];

const trustBadges = [
  { text: "Trading since 1999" },
  { text: "5-year workmanship guarantee" },
  { text: "Free survey" },
];

const insulationSteps = [
  {
    step: "1",
    title: "Surface preparation",
    body: "Blown paint, loose render and any mould are taken off and cracks are repaired. The wall has to be dry and sound. Skipping this is why systems come away from the wall a few years later — the adhesive is only ever as good as what it is stuck to.",
  },
  {
    step: "2",
    title: "Starter track",
    body: "An aluminium starter profile is fixed level, 30 to 40 cm above ground level. It sets the line for the whole facade and stops the bottom edge of the boards being exposed.",
  },
  {
    step: "3",
    title: "Boards bonded and fixed",
    body: "EPS or mineral wool boards are bonded with adhesive, then mechanically fixed with a minimum of six plate fixings per square metre. Adhesive alone is not a system; the fixings are what hold it through years of wind loading.",
  },
  {
    step: "4",
    title: "Corner and edge beads",
    body: "PVC or aluminium beads at every external corner, around window and door reveals and along exposed edges. These are the points that get knocked and weathered, and they are what stops the render chipping away at the arris.",
  },
  {
    step: "5",
    title: "Reinforcing mesh and basecoat",
    body: "A 160 g/m² glass fibre mesh is embedded into a polymer basecoat, with a double layer at corners and a 10 cm overlap at every mesh joint. This layer is what stops the finished render cracking as the building moves.",
  },
  {
    step: "6",
    title: "Primer and finish render",
    body: "Primer, then a UV-stable silicone or acrylic finish render in your chosen texture and colour. This is the layer taking the sun and the salt for the next couple of decades, so it is not the place to economise.",
  },
];

const timelineSteps = [
  {
    id: 1,
    title: "Free survey",
    description:
      "We look at the elevations, check what the render is doing and why, and establish whether the wall behind it is dry. This matters more than it sounds: render or insulation applied over a wall that is still wet from a leak will fail, so if we find water coming in we deal with that first.",
  },
  {
    id: 2,
    title: "Written quotation and colour",
    description:
      "You get a written quotation setting out the scope, the system, the price and the duration, with colour options to choose from. Scaffolding requirements and access are priced in, not added later.",
  },
  {
    id: 3,
    title: "Preparation",
    description:
      "Access set up, surfaces protected, blown paint and loose render removed, cracks cut out and filled. On a repaint this is the majority of the labour, and it is the part that decides how long the finish lasts.",
  },
  {
    id: 4,
    title: "Application",
    description:
      "Insulation boards, mesh and basecoat where the job includes external wall insulation, then primer and a minimum of two finish coats. We work around the weather: not in rain, not below 5°C, and not on an elevation in full afternoon sun in high summer, when coatings skin over before they have bonded.",
  },
  {
    id: 5,
    title: "Inspection and handover",
    description:
      "We walk the elevations with you, or send photographs if you are not on the island. Anything that needs a second pass gets one before we take the access down, because putting scaffolding back up later suits nobody.",
  },
];

const features = [
  {
    id: 1,
    title: "Coatings chosen for this climate",
    description:
      "UV resistance, water repellency and breathability come first. A paint that performs perfectly in Britain can fade and chalk in three Cypriot summers.",
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
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "We check what is behind the render",
    description:
      "New render over a damp wall is money thrown away. If there is water getting in from a roof, a balcony or a foundation, we find it at the survey and say so.",
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
    id: 3,
    title: "Full system, not just the visible layer",
    description:
      "Starter track, fixings, beads, mesh and basecoat all done properly. The parts nobody sees afterwards are the parts that decide whether the facade lasts.",
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
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "What is external wall insulation and is it worth doing in Cyprus?",
    answer:
      "External wall insulation is a system fixed to the outside of the building — insulation board, mechanical fixings, a reinforced basecoat and a finish render — that stops heat moving through the walls. In Cyprus the case for it is about summer, not winter. On an uninsulated south-facing wall the surface can reach around 60°C on a July afternoon; with insulation that drops to roughly 35°C, which translates into an interior 4 to 8°C cooler and cuts annual energy costs by around 30 to 45 per cent. It also keeps the internal wall surface warmer in winter, which is what stops condensation forming and mould growing on it.",
  },
  {
    question: "EPS or mineral wool — which should I choose?",
    answer:
      "For most one to four storey houses and villas in North Cyprus, EPS is the sensible choice: it costs roughly 20 to 35 per cent less than mineral wool, it is light and easy to work, and it does not absorb moisture, which is an advantage close to the sea. Mineral wool is chosen for buildings of five storeys and above, and for hotels and commercial premises where fire performance matters — it is classified A1, non-combustible, and it is also vapour-open and much better acoustically. It costs around 25 to 40 per cent more. We work through the decision with you based on the building rather than selling one by default.",
  },
  {
    question: "How thick should the insulation be?",
    answer:
      "In this climate 3 cm gives basic protection, 5 cm is the standard we recommend for most properties, and 8 to 10 cm gives the maximum benefit. The thicker the system, the greater the saving and the shorter the payback, so the decision comes down to the building's current condition, how much you spend cooling it and your budget.",
  },
  {
    question: "How long before external wall insulation pays for itself?",
    answer:
      "A standard 5 cm EPS system on an average home in North Cyprus reduces annual energy costs by roughly 30 to 45 per cent. Depending on what the installation costs and what you currently spend, that generally works out at a payback period of five to eight years, and rising electricity prices shorten it. It also protects the structure from salt and UV, and adds to the value of the property.",
  },
  {
    question: "Why is my render cracking?",
    answer:
      "Almost always thermal movement. Summer surface temperatures well above 40°C followed by cool nights make the render expand and contract, hundreds of cycles a year, and it eventually crazes. Fine surface crazing is cosmetic. Cracks wide enough to take water are not: once water is in the wall it corrodes the reinforcement, blows the render off in sheets and shows up as damp inside. Cracks around window and door reveals and at floor levels are the ones worth looking at first.",
  },
  {
    question: "How long does exterior paint last in North Cyprus?",
    answer:
      "A good quality exterior coating, properly applied, lasts around 8 to 12 years here. What kills it early is UV, salt and poor preparation. Light colours help, because they absorb less heat and fade less visibly. We use acrylic or silicone-based systems with high UV resistance and water repellency that still let the wall breathe, applied in a minimum of two coats over primer.",
  },
  {
    question: "What time of year should exterior painting be done?",
    answer:
      "Spring and autumn are the best windows. We avoid painting in the peak of summer, when an elevation in direct sun is hot enough that the coating skins over before it has properly bonded, and we avoid the wet months. In practice that means booking work for roughly March to May or September to November, and working the shaded elevations at the hottest part of the day.",
  },
  {
    question: "Can insulation go straight over the existing paint?",
    answer:
      "It depends on the state of it. Sound, well-bonded paint can be prepared and worked over. Paint that is flaking, blistering or has mould on it has to come off completely, because the adhesive bond will only ever be as strong as the layer underneath. We assess this at the survey — skipping the preparation is the single most common reason these systems fail early.",
  },
  {
    question: "Do you do interior painting and decorating as well?",
    answer:
      "Yes. Interior walls and ceilings in matt, mid-sheen or satin, anti-bacterial and mould-resistant paints for bathrooms and kitchens, plastering and skimming, and decorative finishes — Venetian plaster, stone-effect and concrete-effect textures, metallic effects and feature walls. Preparation is the same discipline as outside: clean, fill, sand, prime, then a minimum of two coats.",
  },
  {
    question: "How long does a facade job take?",
    answer:
      "For external wall insulation, roughly one to two weeks for a villa or an average apartment, and two to four weeks for a multi-storey block, depending on the complexity of the elevations. Exterior repainting alone is quicker, but preparation is the majority of the work and its extent only becomes clear once access is up. Weather affects both — we do not apply coatings in rain or in extreme heat, and we tell you when dates move.",
  },
];

export default function FacadesAndRenderingPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <ServiceHero
          title="External Wall Insulation, Rendering & Exterior Painting in North Cyprus"
          description="Cracked render, paint blowing off the south elevation, walls streaked and faded after a few summers, rooms that never get comfortable however hard the air conditioning works. We repair, insulate, render and repaint facades across Kyrenia and the rest of North Cyprus, using systems chosen for intense UV, salt air and 40°C summers. Free survey, written quotation, 5-year workmanship guarantee."
          breadcrumb={{ current: "Facades, Rendering & Insulation" }}
          badges={heroBadges}
          imageSrc="/images/services/cephe/hero.jpg"
          imageAlt="External wall insulation and render being applied to a villa in North Cyprus"
        />

        {/* İklim ve cephe hasarı */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy-dark mb-6">
                What the Cypriot climate does to a facade
              </h2>
              <div className="prose prose-lg max-w-none text-gray-text">
                <p>
                  A facade in North Cyprus is working harder than it looks.
                  Summer air temperatures pass 40°C, the UV index reaches 11 in
                  July, and the wall surface itself gets far hotter than the air
                  around it — an uninsulated south-facing elevation can sit at
                  about 60°C on a July afternoon. At night it drops back
                  sharply. Render, plaster, paint and the blockwork behind them
                  all expand and contract at slightly different rates, hundreds
                  of times a year.
                </p>
                <p>
                  Near the coast, salt in the air adds to it. It attacks
                  coatings, corrodes fixings and, where cracks let it reach the
                  reinforcement, corrodes that too. Then the winter rain comes
                  concentrated into a few weeks and drives into whatever has
                  opened up over the summer.
                </p>
                <p>
                  The result is a fairly predictable list of complaints from
                  owners around Kyrenia, Lapta, Karşıyaka, Esentepe and Çatalköy:
                </p>
                <ul>
                  <li>Hairline crazing and wider cracks across the render</li>
                  <li>
                    Paint blistering, chalking or coming away in sheets,
                    normally on the sunniest elevation first
                  </li>
                  <li>
                    Colour fading unevenly, and dirt streaking below window
                    sills and copings
                  </li>
                  <li>
                    Render sounding hollow when tapped, where it has lost its
                    bond to the wall
                  </li>
                  <li>
                    Air conditioning running constantly through the summer and
                    still not coping, because there is no insulation in the
                    walls at all
                  </li>
                  <li>
                    Black mould in the corners of rooms in winter, on the inside
                    face of cold external walls
                  </li>
                </ul>
                <p>
                  The last two are the ones British owners tend not to see
                  coming. A great many properties here were built with no wall
                  insulation whatsoever, which is why they are expensive to cool
                  in August and cold and damp in January.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sıva onarımı */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy-dark mb-6">
                Render repair: which cracks matter
              </h2>
              <div className="prose prose-lg max-w-none text-gray-text">
                <p>
                  Not every crack is a problem. Fine surface crazing spread
                  evenly across an elevation is usually cosmetic and can be
                  dealt with when the wall is next repainted. What matters is
                  anything wide enough to take water, anything that has opened
                  along a line — around window and door reveals, at floor
                  levels, where two different materials meet — and any area that
                  sounds hollow when you tap it, because that render has lost
                  its bond and will eventually come off.
                </p>
                <p>
                  Repairing render properly means cutting the crack out rather
                  than filling over it, removing everything that has debonded
                  back to a sound edge, re-rendering with reinforcement across
                  the repair, and only then repainting. Filler and a coat of
                  masonry paint over a live crack will look correct for one
                  winter.
                </p>
                <p>
                  It is also worth being clear about what render repair does not
                  do. If water is entering the building from a failed roof
                  membrane, a balcony with no fall or an untanked foundation,
                  the wall will keep getting wet from behind and the new render
                  will blow off again. Where we find that at the survey we say
                  so, and the sequence becomes{" "}
                  <Link
                    href="/en/services/waterproofing"
                    className="text-gold-primary hover:underline font-medium"
                  >
                    waterproofing first, facade second
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mantolama / EWI */}
        <section className="py-16 bg-navy-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-white mb-6">
                External wall insulation
              </h2>
              <div className="prose prose-lg max-w-none text-white/80 prose-strong:text-white">
                <p>
                  External wall insulation is the single most effective thing
                  you can do to a property here to make it cheaper to run.
                  Insulation board is bonded and mechanically fixed to the
                  outside of the wall, covered with a reinforced basecoat and
                  finished with a render, so the whole building sits inside a
                  continuous thermal jacket.
                </p>
                <p>
                  In Britain the argument for it is about heating. Here it is
                  mostly about cooling. An uninsulated south-facing wall reaches
                  around 60°C at the surface on a summer afternoon and radiates
                  that heat inwards well into the evening; with insulation the
                  same surface sits at roughly 35°C. Indoors that is a
                  difference of 4 to 8°C, and it takes something like 30 to 45
                  per cent off the annual energy bill. On a typical 5 cm EPS
                  system, that generally means a payback of five to eight years,
                  shortening as electricity prices rise.
                </p>
                <p>
                  The winter benefit is different but just as valuable to anyone
                  who has fought mould in a Cyprus villa: keeping the inner
                  surface of the wall warm stops humid indoor air condensing on
                  it. A great deal of the damp and mould we are called to look
                  at in January is condensation on cold external walls, not
                  water getting in.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="font-heading text-xl font-bold text-white mb-3">
                    EPS
                  </h3>
                  <ul className="space-y-2 text-white/75 text-sm">
                    <li>Around 20 to 35 per cent cheaper than mineral wool</li>
                    <li>Light and straightforward to work with</li>
                    <li>
                      Does not absorb moisture, which suits coastal properties
                    </li>
                    <li>
                      Needs fire barriers on buildings above four storeys
                    </li>
                  </ul>
                  <p className="text-gold-primary text-sm font-medium mt-4">
                    Suits: houses, villas and blocks of one to four storeys
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="font-heading text-xl font-bold text-white mb-3">
                    Mineral wool
                  </h3>
                  <ul className="space-y-2 text-white/75 text-sm">
                    <li>Fire classification A1 — non-combustible</li>
                    <li>Considerably better acoustic performance</li>
                    <li>Vapour-open, so the wall keeps breathing</li>
                    <li>Around 25 to 40 per cent more expensive than EPS</li>
                  </ul>
                  <p className="text-gold-primary text-sm font-medium mt-4">
                    Suits: hotels, commercial buildings, five storeys and above
                  </p>
                </div>
              </div>

              <p className="text-white/70 mt-8">
                On thickness: 3 cm gives basic protection, 5 cm is the standard
                we recommend for most properties in North Cyprus, and 8 to 10 cm
                gives maximum benefit. The saving and the payback improve in
                proportion, so the right answer depends on the building and what
                you currently spend keeping it comfortable.
              </p>
            </div>
          </div>
        </section>

        {/* Sistem adımları */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy-dark mb-4">
                How the system goes on
              </h2>
              <p className="text-gray-text text-lg mb-10">
                External wall insulation is a system of six interdependent
                layers, not a product. Leave one of them out and the whole thing
                ages early — which is exactly what has happened on a number of
                buildings here that were insulated cheaply.
              </p>

              <ol className="space-y-4">
                {insulationSteps.map((item) => (
                  <li
                    key={item.step}
                    className="flex items-start gap-4 bg-gray-50 rounded-lg p-5 border border-gray-100"
                  >
                    <span className="flex-shrink-0 w-9 h-9 bg-gold-primary text-navy-dark rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-heading font-bold text-navy-dark mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-text text-sm leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Boya */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-navy-dark mb-10 text-center">
                Painting, inside and out
              </h2>

              <div className="space-y-12">
                <div className="border-l-4 border-gold-primary pl-6">
                  <h3 className="text-2xl font-heading font-bold text-navy-dark mb-4">
                    Exterior painting
                  </h3>
                  <div className="prose prose-lg max-w-none text-gray-text">
                    <p>
                      An exterior coating here has four jobs: resist UV, shed
                      water, let the wall breathe so trapped moisture can get
                      out, and hold its colour. Coatings that manage the first
                      three and fail the fourth are common, which is why so many
                      villas around Kyrenia look tired within five years.
                    </p>
                    <p>
                      We use acrylic and silicone-based systems with high UV
                      resistance and water repellency, applied over primer in a
                      minimum of two coats. Properly prepared and applied, that
                      should give you 8 to 12 years before it needs doing again.
                      Lighter colours are worth considering: they absorb less
                      heat, which reduces both the thermal stress on the render
                      and the cooling load inside.
                    </p>
                    <p>
                      Most of the labour on a repaint is preparation — washing
                      down, removing everything that has blown, cutting out and
                      filling cracks, priming bare areas. It is the part that
                      decides how long the result lasts, and the part that gets
                      cut when a price looks surprisingly good.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-gold-primary pl-6">
                  <h3 className="text-2xl font-heading font-bold text-navy-dark mb-4">
                    Interior painting and plastering
                  </h3>
                  <div className="prose prose-lg max-w-none text-gray-text">
                    <p>
                      Interior walls and ceilings in matt, mid-sheen or satin
                      finishes, plastering and skimming, and mould-resistant,
                      anti-bacterial paints where they earn their place — in
                      bathrooms, kitchens and any room that has had a
                      condensation problem. The process is unglamorous and
                      fixed: clean down, fill, sand, prime, then a minimum of
                      two coats.
                    </p>
                    <p>
                      On an interior repaint we can normally work room by room
                      so you can stay in the property. On a full refurbishment
                      it is usually easier not to, and that sits alongside our{" "}
                      <Link
                        href="/en/services/renovation"
                        className="text-gold-primary hover:underline font-medium"
                      >
                        renovation and refurbishment
                      </Link>{" "}
                      work.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-gold-primary pl-6">
                  <h3 className="text-2xl font-heading font-bold text-navy-dark mb-4">
                    Decorative and textured finishes
                  </h3>
                  <div className="prose prose-lg max-w-none text-gray-text">
                    <p>
                      Venetian plaster, stone-effect and concrete-effect
                      textures, metallic finishes and rustic textured renders.
                      These are three-dimensional finishes rather than paint
                      colours, and they change how a wall reads under light —
                      which is why they tend to be used on feature walls, hotel
                      and restaurant interiors, reception areas and villa living
                      spaces rather than everywhere.
                    </p>
                  </div>
                </div>
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
          title="Facades, Rendering & Insulation: Frequently Asked Questions"
          subtitle="What property owners in Kyrenia and across North Cyprus ask us most"
          faqs={faqs}
          schemaId={`${SITE_URL}/en/services/facades-and-rendering#faq`}
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
          title="Get a written quotation for"
          highlightedText="your facade"
          description="Send us a photograph of what the walls are doing, or ask us to come and look. The survey is free, the quotation is written, and if we think the real problem is water rather than the render we will tell you that instead. Kyrenia, Nicosia, Famagusta, İskele and Güzelyurt."
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
