"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const izolasyonTypes = [
  {
    id: 1,
    title: "Radya Temel İzolasyonu",
    description:
      "Binanızın temelini su ve nem sorunlarından koruyoruz. Radya temel izolasyonu, yapının zemin suları ve nemden etkilenmesini engelleyerek uzun ömürlü ve sağlam bir yapı temelini garanti eder.",
    image: "/images/services/izolasyon/radya-temel.jpg",
  },
  {
    id: 2,
    title: "Perde Duvar İzolasyonu",
    description:
      "Bodrum katlarınızı ve zemin altı yapıları toprak basıncı ve yeraltı sularına karşı koruyoruz. Perde duvar izolasyonu, bodrum katlarında su ve nem sorunlarını önleyerek yaşam alanlarınızı güvence altına alır.",
    image: "/images/services/izolasyon/perde-duvar.jpg",
  },
  {
    id: 3,
    title: "Teras ve Çatı İzolasyonu",
    description:
      "Binanızın en üst noktasını yağmur, kar ve diğer hava koşullarına karşı koruyoruz. Teras ve çatı izolasyonu, su sızıntılarını önleyerek yapınızın iç kısımlarını koruyan hayati bir uygulamadır.",
    image: "/images/services/izolasyon/teras-cati.jpg",
  },
  {
    id: 4,
    title: "Balkon İzolasyonu",
    description:
      "Açık alan ve balkonlarda su yalıtımı ile alt katlara su sızmasını engelliyoruz. Balkon izolasyonu, yağmur sularının bina içine girmesini önleyerek yapısal hasarları engeller.",
    image: "/images/services/izolasyon/balkon.jpg",
  },
  {
    id: 5,
    title: "Islak Hacim İzolasyonu",
    description:
      "Banyo, mutfak ve tuvalet gibi su kullanılan alanlarda özel izolasyon çözümleri sunuyoruz. Islak hacim izolasyonu, seramik altı su sızıntılarını ve küf oluşumunu önler.",
    image: "/images/services/izolasyon/islak-hacim.jpg",
  },
  {
    id: 6,
    title: "Havuz İzolasyonu",
    description:
      "Havuzlarınızın iç ve dış yüzeylerinde su sızdırmazlığı sağlıyoruz. Havuz izolasyonu, su kaçaklarını önleyerek enerji tasarrufu sağlar ve havuzun kullanım ömrünü uzatır.",
    image: "/images/services/izolasyon/havuz.jpg",
  },
];

export default function IzolasyonTypes() {
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
          İzolasyon Çeşitleri
        </h2>
        <p className="text-center text-gray-text max-w-3xl mx-auto mb-16 reveal">
          25 yıllık deneyimimizle Kıbrıs&apos;ın önde gelen izolasyon firması olarak,
          temel, çatı, teras, havuz ve ıslak hacim izolasyonu hizmetlerinde kaliteli
          malzemeler kullanarak yapılarınızı güvenle koruyoruz.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {izolasyonTypes.map((type, index) => (
            <div
              key={type.id}
              className="card reveal group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={type.image}
                  alt={type.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy-dark/20 to-transparent" />
                {/* Bottom gold accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-navy-dark mb-3 group-hover:text-gold-primary transition-colors">
                  {type.title}
                </h3>
                <p className="text-gray-text text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
