import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { FAQSection } from "@/components/services";
import { projects } from "@/lib/projects-data";
import { alternatesFor, SITE_URL } from "@/lib/i18n";

export const metadata: Metadata = {
  title:
    "Waterproofing & Damp Proofing in North Cyprus | Kyrenia | Düzkar Dizayn",
  description:
    "Leaking flat roof, damp walls or a pool losing water? English-speaking waterproofing specialists in Kyrenia, North Cyprus since 1999. Free survey, written quotation, 5-year guarantee.",
  alternates: alternatesFor("/en"),
};

// Aramada kullanılan İngilizce ifadelerle birebir eşleşsin diye başlıklar
// "damp", "leak", "render" gibi kelimelerle kuruldu.
const problems = [
  {
    title: "Flat roof leaking",
    body: "Water coming through the ceiling after heavy rain, blistered or split membrane, ponding water that never drains away.",
    href: "/en/services/waterproofing",
  },
  {
    title: "Damp and mould on walls",
    body: "Black mould in bedrooms over winter, patches on the inside of exterior walls, a musty smell when you return to a closed-up property.",
    href: "/en/services/waterproofing",
  },
  {
    title: "Balcony or terrace leaking below",
    body: "Water staining the ceiling of the apartment underneath, damp showing where the balcony meets the wall.",
    href: "/en/services/waterproofing",
  },
  {
    title: "Swimming pool losing water",
    body: "Level dropping faster than evaporation explains, cracked render or tiling, wet ground around the pool surround.",
    href: "/en/services/waterproofing",
  },
  {
    title: "Cracked or stained render",
    body: "Hairline cracks across the facade, paint blowing off, streaked and faded walls after a few summers of UV.",
    href: "/en/services/facades-and-rendering",
  },
  {
    title: "Rooms that cost a fortune to cool",
    body: "Air conditioning running constantly and still not coping, walls hot to the touch in the evening, no external wall insulation.",
    href: "/en/services/facades-and-rendering",
  },
];

const services = [
  {
    title: "Waterproofing & Damp Proofing",
    href: "/en/services/waterproofing",
    body: "Flat roofs, terraces, balconies, foundations, wet rooms and swimming pools. Torch-on membrane and cementitious tanking systems.",
    image: "/images/services/izolasyon/hero.jpg",
  },
  {
    title: "Facades, Rendering & Insulation",
    href: "/en/services/facades-and-rendering",
    body: "External wall insulation, render repair, UV-stable exterior coatings, interior decorating and decorative finishes.",
    image: "/images/services/cephe/hero.jpg",
  },
  {
    title: "Renovation & Refurbishment",
    href: "/en/services/renovation",
    body: "Full property refurbishment, bathroom and kitchen refits, suspended ceilings, flooring and stone cladding.",
    image: "/images/services/tadilat/hero.jpg",
  },
];

// Bu liste İngilizce yer adlarıyla yerel aramada görünmek için kritik:
// İngiliz mülk sahipleri "Girne" değil "Kyrenia" yazarak arıyor.
const areas = [
  "Kyrenia (Girne)",
  "Alsancak",
  "Lapta (Lapithos)",
  "Karaoğlanoğlu",
  "Karşıyaka",
  "Çatalköy",
  "Esentepe",
  "Ozanköy",
  "Bellapais",
  "Nicosia (Lefkoşa)",
  "Famagusta (Gazimağusa)",
  "İskele / Long Beach",
  "Boğaz",
  "Güzelyurt",
];

const faqs = [
  {
    question: "Does your team speak English?",
    answer:
      "Yes. You can discuss the job, receive your quotation and get progress updates in English throughout. This is one of the main reasons British and other foreign property owners in the Kyrenia area come to us.",
  },
  {
    question: "Will I get a written quotation before any work starts?",
    answer:
      "Always. After the free survey you receive a written quotation setting out the scope of work, the materials and system being used, the price and the expected duration. We do not start work on a verbal figure.",
  },
  {
    question:
      "I only live in Cyprus part of the year. Can you manage the work while I am in the UK?",
    answer:
      "Yes, we do this regularly. We survey the property, agree the scope with you remotely, and send photographs at each stage so you can see what has been done. Many of our clients are absent owners who return to a finished job.",
  },
  {
    question: "My villa is only a few years old. Why is it already leaking?",
    answer:
      "It is very common here. On a lot of newer developments the waterproofing is a single thin membrane layer, the falls to the drainage outlets are too shallow, and details around parapets and pipe penetrations are rushed. It survives the first couple of winters and then fails. The fix is to correct the falls and lay a properly detailed membrane system, not to patch the leak.",
  },
  {
    question: "When is the best time of year to have waterproofing work done?",
    answer:
      "Late spring through to early autumn. The surface has to be genuinely dry before a membrane goes down, so work booked once the winter rains have started often has to wait. If you have a leak, the sensible time to deal with it is during the dry months, before the rains return in the autumn.",
  },
  {
    question: "How much does waterproofing cost in North Cyprus?",
    answer:
      "It depends on the area involved, the condition of the existing surface and whether the falls need correcting. A balcony is a very different job to a 200 m² roof terrace that needs stripping back. We survey the property free of charge and give you a fixed written price rather than a rate over the phone.",
  },
  {
    question: "What guarantee do you provide?",
    answer:
      "We provide a 5-year workmanship guarantee on our waterproofing installations, alongside the manufacturer's warranty on the materials used. The company has been trading since 1999 and is based in Alsancak, so we are still here if you need us.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We are based in Alsancak, just outside Kyrenia, and work across the whole of North Cyprus, including Lapta, Karşıyaka, Çatalköy, Esentepe, Ozanköy, Bellapais, Nicosia, Famagusta, İskele and Güzelyurt.",
  },
];

export default function EnHome() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* Güven şeridi */}
        <section className="bg-navy-dark py-10">
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

        {/* Sorun odaklı bölüm — arama sorgularıyla birebir eşleşiyor */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-12">
              <h2 className="section-title text-navy-dark mb-4">
                What we get called out for
              </h2>
              <p className="text-gray-text text-lg">
                The Cypriot climate is harder on buildings than most people
                expect. Months of intense UV and heat open up cracks and split
                membranes, then the winter rain arrives all at once and finds
                every one of them. These are the problems we deal with most.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((problem) => (
                <Link
                  key={problem.title}
                  href={problem.href}
                  className="group block bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-gold-primary/40 hover:shadow-md transition-all"
                >
                  <h3 className="font-heading text-lg font-bold text-navy-dark mb-3 group-hover:text-gold-primary transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed">
                    {problem.body}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Hizmetler */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-navy-dark mb-4">Our Services</h2>
            <p className="text-gray-text text-lg max-w-3xl mb-12">
              Three connected trades under one roof, which matters more than it
              sounds: a render job over a wall that is still damp will fail, and
              a bathroom refit without proper tanking underneath will leak into
              the room below.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-navy-dark mb-3 group-hover:text-gold-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-text text-sm leading-relaxed mb-4">
                      {service.body}
                    </p>
                    <span className="text-gold-primary text-sm font-semibold">
                      Read more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Yabancı mülk sahiplerine özel güven bölümü */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title text-navy-dark mb-8">
                Why foreign property owners come to us
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "You get a written quotation",
                    body: "A document setting out the scope, the system, the price and the timescale — not a number over the phone that changes halfway through.",
                  },
                  {
                    title: "We turn up when we say we will",
                    body: "If the dates move because of weather or materials, you hear it from us first. This is the single most common complaint owners have about building work here, and it is the easiest one to get right.",
                  },
                  {
                    title: "We work in English",
                    body: "Surveys, quotations, questions midway through the job and the final handover — all in English, without a relative translating.",
                  },
                  {
                    title: "We work for absent owners",
                    body: "Photographs at each stage so you can follow the job from the UK. A large share of our work is for owners who are not on the island while it happens.",
                  },
                  {
                    title: "We survey before we price",
                    body: "Free of charge, and we will tell you if the real problem is something other than what you called us about. A ceiling stain is not always a roof failure.",
                  },
                  {
                    title: "We are still here afterwards",
                    body: "Trading from Alsancak since 1999, with a 5-year workmanship guarantee. Firms that came and went do not have that record.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <svg
                      className="w-6 h-6 text-gold-primary flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-heading font-bold text-navy-dark mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-text text-sm leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hizmet bölgeleri — İngilizce yer adlarıyla yerel SEO */}
        <section className="py-20 bg-navy-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="section-title text-white mb-4">
                Areas We Cover in North Cyprus
              </h2>
              <p className="text-white/70 mb-10">
                Based in Alsancak, a few minutes west of Kyrenia. We cover the
                whole of the north, and there is no call-out charge for a survey.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projeler */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-navy-dark mb-4">Recent Projects</h2>
            <p className="text-gray-text text-lg max-w-3xl mb-12">
              Alongside private villas and apartments, we carry out
              waterproofing and facade work on hotels and residential
              developments across the Kyrenia region.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/en/projects/${project.slug}`}
                  className="group block rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="relative h-48">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <div className="p-4 bg-gray-50">
                    <h3 className="font-heading font-bold text-navy-dark group-hover:text-gold-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-text text-sm mt-1">
                      {project.location.replace("Girne", "Kyrenia")}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/en/projects" className="btn-primary">
                View all projects
              </Link>
            </div>
          </div>
        </section>

        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Common questions from property owners in North Cyprus"
          faqs={faqs}
          schemaId={`${SITE_URL}/en#faq`}
        />

        <Contact />
      </main>
      <Footer />
    </>
  );
}
