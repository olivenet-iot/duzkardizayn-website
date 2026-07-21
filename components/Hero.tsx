"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { localeFromPathname, type Locale } from "@/lib/i18n";

const content: Record<Locale, {
  sectionId: string;
  contactId: string;
  servicesId: string;
  imageAlt: string;
  heading: string;
  subheading: string;
  primaryCta: string;
  secondaryCta: string;
}> = {
  tr: {
    sectionId: "anasayfa",
    contactId: "iletisim",
    servicesId: "hizmetler",
    imageAlt: "Düzkar Dizayn - Profesyonel İzolasyon ve Cephe Çözümleri, Girne KKTC",
    heading: "Profesyonel İzolasyon ve Cephe Çözümleri",
    subheading: "Girne, Lefkoşa, Gazimağusa ve KKTC Genelinde 25 Yıllık Deneyim",
    primaryCta: "Ücretsiz Keşif İsteyin",
    secondaryCta: "Hizmetlerimiz",
  },
  en: {
    sectionId: "home",
    contactId: "contact",
    servicesId: "services",
    imageAlt: "Düzkar Dizayn - waterproofing and rendering contractors in Kyrenia, North Cyprus",
    heading: "Waterproofing & Damp Specialists in North Cyprus",
    subheading: "Leaking flat roofs, damp walls and pool leaks put right properly. Working across Kyrenia, Nicosia and Famagusta since 1999.",
    primaryCta: "Request a Free Survey",
    secondaryCta: "Our Services",
  },
};

export default function Hero() {
  const pathname = usePathname();
  const t = content[localeFromPathname(pathname)];

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(t.contactId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id={t.sectionId} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Background image */}
        <Image
          src="/images/hero-bg.jpg"
          alt={t.imageAlt}
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/85 to-navy-dark/70" />

        {/* Gold accent glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gold-primary/5 rounded-full blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase leading-tight mb-6 animate-fade-in-up">
            {t.heading}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {t.subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href={`#${t.contactId}`}
              onClick={handleScrollToContact}
              className="btn-primary text-center"
            >
              {t.primaryCta}
            </a>
            <a
              href={`#${t.servicesId}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(t.servicesId)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-secondary text-center"
            >
              {t.secondaryCta}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gold-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
