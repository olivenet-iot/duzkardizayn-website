"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const references = [
  { name: "Emtan Construction Ltd.", logo: "/images/references/emtan.png" },
  { name: "Merit International Hotels", logo: "/images/references/merit.png" },
  { name: "Öz-En İnşaat", logo: "/images/references/ozen.png" },
  { name: "Özmerhan Construction", logo: "/images/references/ozmerhan.png" },
  { name: "Kurucuoğlu İnşaat", logo: "/images/references/kurucuoglu.png" },
  { name: "QIS Kıbrıs", logo: "/images/references/qis.png" },
];

export default function References() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Auto-scroll animation
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollElement.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollElement.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation after a delay
    const timeoutId = setTimeout(() => {
      animationId = requestAnimationFrame(animate);
    }, 1000);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollElement.addEventListener("mouseenter", handleMouseEnter);
    scrollElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationId);
      scrollElement.removeEventListener("mouseenter", handleMouseEnter);
      scrollElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="referanslar" ref={sectionRef} className="py-12 bg-navy-medium">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="section-title text-white mb-10 reveal">
          Referanslar
        </h2>

        {/* Logo Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden py-4 reveal"
          style={{ transitionDelay: "0.1s" }}
        >
          {/* Duplicate for infinite scroll effect */}
          {[...references, ...references].map((ref, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-16 bg-white rounded-lg flex items-center justify-center px-4 hover:shadow-lg transition-shadow"
            >
              <Image
                src={ref.logo}
                alt={ref.name}
                width={120}
                height={48}
                className="object-contain h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
