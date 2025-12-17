"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    id: 1,
    value: 25,
    suffix: "+",
    label: "Yıl Deneyim",
    description: "Sektörde güvenilir hizmet",
  },
  {
    id: 2,
    value: 500,
    suffix: "+",
    label: "Tamamlanan Proje",
    description: "Başarıyla teslim edilen iş",
  },
  {
    id: 3,
    value: 20,
    suffix: "+",
    label: "Uzman Ekip",
    description: "Deneyimli profesyoneller",
  },
  {
    id: 4,
    value: 5,
    suffix: " Yıl",
    label: "Garanti",
    description: "Tüm işlerimizde güvence",
  },
];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [end, duration, start]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  description,
  isVisible,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  description: string;
  isVisible: boolean;
  delay: number;
}) {
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div
      className="text-center reveal"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="mb-2">
        <span className="font-heading text-5xl md:text-6xl font-bold text-gold-primary">
          {count}
        </span>
        <span className="font-heading text-3xl md:text-4xl font-bold text-gold-primary">
          {suffix}
        </span>
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{label}</h3>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-navy-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gold-primary rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              isVisible={isVisible}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent" />
    </section>
  );
}
