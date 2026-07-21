import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CTASection, FAQSection } from "@/components/services";
import { alternatesFor, SITE_URL } from "@/lib/i18n";

export const metadata: Metadata = {
  title:
    "FAQs | Waterproofing, Damp & Building Work in North Cyprus | Düzkar Dizayn",
  description:
    "Answers to the questions property owners in North Cyprus ask us: leaking flat roofs, damp and mould, pool leaks, quotations, guarantees, timing, and having work done while you are out of the country.",
  keywords: [
    "waterproofing questions north cyprus",
    "damp problems cyprus",
    "flat roof leak kyrenia",
    "builders north cyprus faq",
    "english speaking builders kyrenia",
    "pool leak north cyprus",
  ],
  openGraph: {
    title: "Frequently Asked Questions | Düzkar Dizayn, North Cyprus",
    description:
      "Leaking roofs, damp and mould, pool leaks, quotations, guarantees and working with a contractor in North Cyprus as a foreign property owner.",
    url: `${SITE_URL}/en/faq`,
    type: "website",
    locale: "en_GB",
  },
  alternates: alternatesFor("/en/faq"),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
    { "@type": "ListItem", position: 2, name: "Frequently Asked Questions" },
  ],
};

// Tek bir FAQSection kullanılıyor: sayfada birden fazla FAQPage düğümü olmasın,
// tüm sorular tek şema altında toplansın diye.
const faqs = [
  {
    question: "Do you work in English?",
    answer:
      "Yes, and it is one of the main reasons foreign owners come to us. You are never agreeing to a scope of work you have only half understood, and you do not need to find someone to explain a problem back to us six months later. We work in Turkish as well, so suppliers and anything local sit with us rather than with you.",
  },
  {
    question: "Will I get a written quotation before any work starts?",
    answer:
      "Always, and it is a document rather than a figure in a message. It names the system we intend to use, not just the word waterproofing, so it can be compared with another firm's price on the same basis. It also gives the duration and the payment terms. Query anything in it before you agree to it rather than afterwards.",
  },
  {
    question: "Is the survey free, and am I committed to anything?",
    answer:
      "The survey is free and there is no call-out charge anywhere we cover. Having us look costs you nothing and commits you to nothing. If we think the job is smaller than you feared, or that the cause is something other than what you called about, we will say so at that point rather than after the scaffolding is up.",
  },
  {
    question:
      "I only live in Cyprus part of the year. Can you carry out the work while I am in the UK?",
    answer:
      "Yes. We survey the property, send the quotation wherever you are and agree the scope by email or phone before anything starts. Photographs follow as each stage is completed, so the job is documented rather than described. If you fly in twice a year, the work happens between the visits instead of during them.",
  },
  {
    question: "What should I look for when taking on a builder in North Cyprus?",
    answer:
      "A written quotation with the scope and the system named in it, a company that will still be trading when the guarantee is called on, and someone you can hold a conversation with in your own language. If a price is only ever given verbally, there is nothing to hold anyone to.",
  },
  {
    question: "How much does waterproofing cost in North Cyprus?",
    answer:
      "There is no useful rate per square metre, which is why we will not give one over the phone. The price turns on how much of the existing build-up has to come off, whether the falls run to the outlet or away from it, and how many details the membrane has to be dressed around. Two terraces of the same size can differ substantially on that basis alone.",
  },
  {
    question: "How do I know the price will not change halfway through?",
    answer:
      "The quotation states what is included. The one thing that can move a waterproofing price is what we find when the old covering comes off — a saturated screed, or falls running away from the outlet. If that happens we stop, tell you what has been found and price the extra work before carrying on.",
  },
  {
    question: "What guarantee do you give?",
    answer:
      "Waterproofing we install carries a 5-year workmanship guarantee. The materials carry the manufacturer's own warranty on top of that, which is a separate thing and worth understanding: a material warranty is no help to you if the installation is what failed. We have been at the same address in Alsancak since 1999, which is what decides whether a guarantee means anything.",
  },
  {
    question:
      "What happens if the same problem comes back within the guarantee period?",
    answer:
      "You call us and we come back and put it right. That is what a workmanship guarantee is for. It covers our installation; it does not cover a membrane later cut into by another trade, or damage from alterations made after we finished.",
  },
  {
    question: "Which areas of North Cyprus do you cover?",
    answer:
      "The whole of the north. We are in Alsancak, so the Kyrenia coastal strip is where most of our work is — Lapta, Karaoğlanoğlu, Karşıyaka, Çatalköy, Esentepe, Ozanköy and Bellapais — and we also work in Nicosia, Famagusta, İskele, Boğaz and Güzelyurt. There is no call-out charge for the survey wherever you are.",
  },
  {
    question: "What actually happens on a survey?",
    answer:
      "We walk the property with you and look at the affected area and at the places water is most likely to be getting in: the falls, the outlets, the parapets, the pipe penetrations and the junction between balcony and wall. We tell you what we think is happening, and the quotation follows in writing.",
  },
  {
    question: "My villa is only a few years old. Why is it already leaking?",
    answer:
      "Age is not much of a guide. What decides how long a roof or terrace lasts is the number and thickness of the membrane layers, whether the falls genuinely take water to the outlet, and how carefully the membrane was dressed into the parapets and around the pipes. Where those were rushed, two winters pass and the third one finds it.",
  },
  {
    question: "My flat roof only leaks in heavy rain. Can you just patch it?",
    answer:
      "Sometimes, if the membrane is otherwise sound and the failure is at a single detail. Often not: a roof that leaks only in heavy rain is usually one where water stands instead of draining, and patching the point it comes through does not stop it standing. The survey tells you which of the two you have.",
  },
  {
    question: "Do you have to strip the old membrane off first?",
    answer:
      "Not always. Where the existing layer is sound and well bonded, a new system can go over it. Where it is blistered or split, or there is water trapped underneath, covering it over only hides the problem and the new work fails from below. We tell you which case you are in before we quote.",
  },
  {
    question: "Can you waterproof over existing tiles on a terrace?",
    answer:
      "Yes. Elastic systems can be applied over sound ceramic surfaces, which avoids stripping the terrace out and re-laying it. We have used this approach on hotel terraces in Kyrenia. Whether it suits yours depends on the condition of the tiling and what sits underneath it.",
  },
  {
    question:
      "Water is coming through from the balcony above mine. Can that be dealt with?",
    answer:
      "Yes, but the work is on the balcony above, not on your ceiling. Sealing or repainting from below hides it for a season at most. The repair is normally under-screed waterproofing on the balcony above, carried up the wall at the junction, with the falls corrected so water reaches the outlet.",
  },
  {
    question: "Do you work on foundations and retaining walls as well?",
    answer:
      "Yes. Raft foundation and retaining wall waterproofing is a large part of what we do on new developments, and we also deal with it on existing buildings where ground moisture is coming through below ground level.",
  },
  {
    question: "My swimming pool is losing water. Is that a leak or evaporation?",
    answer:
      "Evaporation here is real but steady, and it does not come and go. A level that keeps dropping faster than that, wet ground around the surround, or cracking in the render or tiling all point at the shell rather than the weather. We look at the structure and at the pipe penetrations to establish which it is.",
  },
  {
    question:
      "I get black mould in the bedrooms every winter. Is that a waterproofing problem?",
    answer:
      "It may be, or it may be condensation. Water tracking in through a wall and moisture condensing on a cold internal surface look similar and need entirely different work. Establishing which one you have decides whether the answer is waterproofing, insulation or ventilation, and it is worth doing before spending anything.",
  },
  {
    question: "Will repainting the wall get rid of the damp patch?",
    answer:
      "No. Paint over a damp wall lifts again, usually within a season, and the mould comes back through it. The patch is a symptom. Until the water is stopped where it is getting in, redecorating is a cost you will simply repeat.",
  },
  {
    question:
      "The property is closed up for months while we are away. Does that make damp worse?",
    answer:
      "It does not create a leak, but it makes the consequences worse. A closed, unventilated property holds moisture through the winter, so a small amount of ingress turns into mould and the musty smell that greets you on the way in. It also means nobody notices a leak for months.",
  },
  {
    question: "When is the best time of year to have waterproofing work done?",
    answer:
      "Between late spring and early autumn. A membrane will not bond to a damp deck, so once the rains have set in the work waits for a genuinely dry spell, and those get shorter as the winter goes on. The practical consequence is that a leak appearing in November may have to wait for a dry window before a permanent repair can go down.",
  },
  {
    question: "How long will the work take?",
    answer:
      "It depends on the area and on how much has to come off before the new work goes down. The written quotation gives the expected duration for your job before you commit to it, and if weather or a delivery moves the dates you hear it from us rather than working it out yourself.",
  },
  {
    question: "Can we stay in the property while the work is being done?",
    answer:
      "For external work — roofs, terraces, balconies and facades — usually yes. Internal work is more disruptive: a bathroom being tanked and re-tiled is out of use for the duration. We set out what to expect at the quotation stage rather than on the first morning.",
  },
  {
    question: "Do you only work on hotels and developments?",
    answer:
      "No. Alongside residential developments and hotels, a large part of our work is private villas and apartments for individual owners. A single leaking balcony is a job we will come out and survey.",
  },
];

export default function EnFaqPage() {
  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main>
        {/* Hero */}
        <section className="bg-navy-dark pt-32 pb-16 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-primary/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
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
                  <li className="text-gold-primary">FAQ</li>
                </ol>
              </nav>

              <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                Frequently Asked Questions About Building Work in North Cyprus
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                These are the questions we are actually asked, mostly by British
                and other foreign owners with a property in the Kyrenia area.
                They cover leaking roofs and terraces, damp and mould, pools,
                quotations and guarantees, and how work gets done when you are
                not on the island to watch it.
              </p>
            </div>
          </div>
        </section>

        <FAQSection
          title="Questions and Answers"
          subtitle="If yours is not here, ring us or send it through the contact form — we would rather answer it before you commit to anything."
          faqs={faqs}
          schemaId={`${SITE_URL}/en/faq#faq`}
        />

        {/* Yönlendirme kartları */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark mb-4">
                Where to go next
              </h2>
              <p className="text-gray-text leading-relaxed">
                More detail on the work itself, on the company behind it, and on
                the projects we have completed in and around Kyrenia.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Waterproofing & Damp Proofing",
                  href: "/en/services/waterproofing",
                  body: "Flat roofs, terraces, balconies, foundations, wet rooms and swimming pools, and the systems we use on each.",
                },
                {
                  title: "About Düzkar Dizayn",
                  href: "/en/about",
                  body: "Trading from Alsancak since 1999. Who we are, how a job runs from survey to handover, and where we work.",
                },
                {
                  title: "Our Projects",
                  href: "/en/projects",
                  body: "Waterproofing and facade work on hotels and residential developments around Kyrenia.",
                },
              ].map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group block bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-gold-primary/40 hover:shadow-md transition-all"
                >
                  <h3 className="font-heading text-lg font-bold text-navy-dark mb-3 group-hover:text-gold-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed">
                    {card.body}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Question not answered here?"
          highlightedText="Ask us directly"
          description="Describe what the property is doing and we will tell you what we think is going on. If it needs looking at, the survey is free and the quotation comes in writing."
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
