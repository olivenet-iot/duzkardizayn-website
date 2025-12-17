"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const membranProducts = [
  {
    id: 1,
    title: "Bitüm Esaslı Membran Sistemleri",
    description:
      "3.5mm kalınlığında elastomerik bitüm esaslı su yalıtım membranı. Koruyucu beton gerektirmeden demir bağlantısı yapılabilen ileri teknoloji sistemi.",
    image: "/images/services/izolasyon/qis-proof.jpg",
    whyTitle: "Neden Bitüm Membran?",
    whyItems: [
      "Koruyucu şap gerektirmez",
      "Demir bağlantısı mümkün",
      "Yüksek dayanım",
      "Hızlı uygulama",
    ],
    areasTitle: "Uygulama Alanları",
    areasItems: [
      "Radya temel izolasyonu",
      "Havuz radya uygulamaları",
      "Bodrum perde duvarları",
      "Temel altı su yalıtımı",
    ],
  },
  {
    id: 2,
    title: "Tekstil Membran Sistemleri",
    description:
      "3 katmanlı ıslak hacim tekstil membranı. Özel dokuma arası termoplastik katman ile %100 su geçirmez teknoloji.",
    image: "/images/services/izolasyon/qis-tekstil.jpg",
    whyTitle: "Neden Tekstil Membran?",
    whyItems: [
      "100% Su geçirmezlik",
      "Çift taraflı yapıştırma",
      "Yüksek esneklik",
      "Çok amaçlı kullanım",
    ],
    areasTitle: "Uygulama Alanları",
    areasItems: [
      "Teras şap üstü",
      "Bordex üstü kaplama",
      "Mutfak seramik altı",
      "Banyo, tuvalet, ıslak hacimler",
    ],
  },
];

export default function AdvancedTechnology() {
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
    <section ref={sectionRef} className="py-20 bg-gray-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-navy-dark mb-6 reveal">
          Profesyonel Membran Sistemleri
        </h2>
        <p className="text-center text-gray-text max-w-3xl mx-auto mb-16 reveal">
          Dünya standartlarında yüksek kaliteli membran sistemleri ile gelişmiş izolasyon çözümleri.
          25 yıllık deneyimimizle en son teknoloji ürünleri Kıbrıs&apos;ta uyguluyoruz.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {membranProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden reveal group"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Visual Header */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy-dark/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-navy-dark mb-3 group-hover:text-gold-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-text text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Why Section */}
                  <div>
                    <h4 className="font-heading text-sm font-bold text-navy-dark mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-gold-primary rounded-full"></span>
                      {product.whyTitle}
                    </h4>
                    <ul className="space-y-2">
                      {product.whyItems.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-text">
                          <svg
                            className="w-4 h-4 text-gold-primary flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Areas Section */}
                  <div>
                    <h4 className="font-heading text-sm font-bold text-navy-dark mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-gold-primary rounded-full"></span>
                      {product.areasTitle}
                    </h4>
                    <ul className="space-y-2">
                      {product.areasItems.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-text">
                          <svg
                            className="w-4 h-4 text-gold-primary flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="btn-secondary text-sm w-full md:w-auto">
                    Video Örnekleri İçin Tıklayın
                    <svg
                      className="w-4 h-4 ml-2 inline"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
