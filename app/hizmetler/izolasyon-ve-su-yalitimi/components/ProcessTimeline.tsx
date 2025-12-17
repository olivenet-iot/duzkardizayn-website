"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    id: 1,
    title: "Keşif ve Analiz",
    description:
      "Uzman ekibimiz, izolasyon gerektiren alanı ücretsiz olarak ziyaret eder. Yapının durumu ve sorunun kaynağı belirlenerek uygun çözüm önerileri sunulur.",
  },
  {
    id: 2,
    title: "Planlama ve Teklif",
    description:
      "Keşif sonrası, projenize özel planlama yapılır. Kullanılacak malzemeler ve uygulama yöntemi belirlenerek size şeffaf bir fiyat teklifi sunulur.",
  },
  {
    id: 3,
    title: "Uygulama",
    description:
      "Profesyonel ekibimiz, planlanan sürede ve kalite standartlarına uygun şekilde izolasyon uygulamasını titizlikle gerçekleştirir.",
  },
  {
    id: 4,
    title: "Kontrol ve Teslim",
    description:
      "Uygulama sonrası gerekli testler ve kontroller yapılarak işimizi güvenle teslim eder, uzun ömürlü bir izolasyon sağlarız.",
  },
];

export default function ProcessTimeline() {
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

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-navy-dark mb-16 reveal">
          Profesyonel İzolasyon Süreci
        </h2>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="reveal flex gap-6 md:gap-10 mb-8 last:mb-0"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Left: Step number */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gold-primary flex items-center justify-center text-navy-dark font-heading font-bold text-xl md:text-2xl shadow-lg">
                  {step.id}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full min-h-[80px] bg-gradient-to-b from-gold-primary to-gold-primary/20 mt-2" />
                )}
              </div>

              {/* Right: Content */}
              <div className="flex-1 pb-8">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-navy-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-text leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
