"use client";

import { useEffect, useRef, ReactNode } from "react";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

interface FeatureCardsProps {
  title: string;
  features: Feature[];
  variant?: "gold" | "dark" | "minimal";
}

export default function FeatureCards({
  title,
  features,
  variant = "gold",
}: FeatureCardsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".reveal");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const isGold = variant === "gold";
  const isMinimal = variant === "minimal";

  // Minimal variant - clean, professional design
  if (isMinimal) {
    return (
      <section ref={sectionRef} className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy-dark mb-4 reveal">
            {title}
          </h2>
          <div className="w-16 h-1 bg-gold-primary mx-auto mb-12 reveal" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="text-center p-6 reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-primary/10 flex items-center justify-center text-gold-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-text text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Gold and Dark variants
  return (
    <section
      ref={sectionRef}
      className={`py-20 ${isGold ? "bg-gold-primary" : "bg-gray-light"}`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center uppercase tracking-wide mb-4 reveal ${
            isGold ? "text-navy-dark" : "text-gold-primary"
          }`}
        >
          {title}
        </h2>
        <div
          className={`w-20 h-1 mx-auto mb-16 reveal ${
            isGold ? "bg-navy-dark" : "bg-gold-primary"
          }`}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`rounded-xl p-8 text-center reveal transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                isGold ? "bg-navy-dark" : "bg-white shadow-lg"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  isGold
                    ? "bg-gold-primary/20 text-gold-primary"
                    : "bg-gold-primary/10 text-gold-primary"
                }`}
              >
                {feature.icon}
              </div>
              <h3
                className={`font-heading text-xl font-bold mb-4 ${
                  isGold ? "text-white" : "text-navy-dark"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  isGold ? "text-white/70" : "text-gray-text"
                }`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
