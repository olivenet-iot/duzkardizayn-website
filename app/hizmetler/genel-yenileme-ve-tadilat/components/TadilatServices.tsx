"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Asma Tavan Sistemleri",
    description:
      "Ev ve iş yerleriniz için özel tasarım asma tavan sistemleri uyguluyoruz. Spot aydınlatma, gizli ışık bantları ve modern tasarımlarla mekanlarınızı yeniliyoruz.",
    image: "/images/services/tadilat/asma-tavan.jpg",
  },
  {
    id: 2,
    title: "Zemin Kaplama Çözümleri",
    description:
      "Profesyonel self leveling ve brüt beton koruma uygulamalarımızla mekanlarınıza dayanıklı, pürüzsüz ve estetik zeminler sunuyoruz. Retro görünümlü beton yüzeylerden endüstriyel kaplamalara kadar çeşitli seçeneklerle, tüm zemin ihtiyaçlarınıza uzun ömürlü ve şık çözümler sağlıyoruz.",
    image: "/images/services/tadilat/zemin-kaplama.jpg",
  },
  {
    id: 3,
    title: "Taş Duvar Kaplama",
    description:
      "Mekanlarınıza estetik ve karakteristik bir görünüm kazandıran yerli üretim taş duvar kaplama çözümleri sunuyoruz. American style, retro tasarım gibi farklı konseptlerde, doğal taş görünümlü duvar kaplamalarımızla yaşam alanlarınıza sıcaklık ve zenginlik katıyoruz.",
    image: "/images/services/tadilat/tas-duvar.jpg",
  },
];

export default function TadilatServices() {
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
        <h2 className="section-title text-navy-dark mb-6 reveal">
          Tadilat Hizmetlerimiz
        </h2>
        <p className="text-center text-gray-text max-w-3xl mx-auto mb-16 reveal">
          Asma tavan sistemlerinden zemin kaplamalarına, taş duvar uygulamalarından
          komple tadilata kadar tüm ihtiyaçlarınız için profesyonel çözümler.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="card reveal group overflow-hidden"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Image area */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy-dark/20 to-transparent" />
                {/* Gold top border accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gold-primary group-hover:h-2 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-navy-dark mb-3 group-hover:text-gold-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-text text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
