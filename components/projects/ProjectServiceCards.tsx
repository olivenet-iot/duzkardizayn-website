"use client";

import { useEffect, useRef } from "react";

interface Service {
  title: string;
  description: string;
}

interface ProjectServiceCardsProps {
  services: Service[];
}

export default function ProjectServiceCards({
  services,
}: ProjectServiceCardsProps) {
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
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark mb-3 reveal">
            Uygulanan Hizmetler
          </h2>
          <div className="w-16 h-1 bg-gold-primary reveal" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md reveal group hover:shadow-lg transition-shadow"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Gold top border */}
              <div className="w-full h-1 bg-gold-primary rounded-t-xl -mt-6 -mx-6 mb-6 group-hover:h-1.5 transition-all" style={{ width: 'calc(100% + 3rem)' }} />

              <h3 className="font-heading text-lg font-bold text-navy-dark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-text text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
