"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "İzolasyon ve Su Yalıtımı",
    href: "/hizmetler/izolasyon-ve-su-yalitimi",
    image: "/images/services/izolasyon.jpg",
    description:
      "Temel, perde, teras, çatı ve havuz izolasyonu konularında 25 yıllık deneyimimizle, her türlü yapı için en uygun izolasyon çözümlerini sunuyoruz. Isı ve ses izolasyonu çözümlerimizle enerji tasarrufu sağlıyor ve yaşam konforunuzu artırıyoruz. Tüm izolasyon uygulamalarımız için 5 yıl garanti veriyoruz.",
  },
  {
    id: 2,
    title: "İç ve Dış Cephe Uygulamaları",
    href: "/hizmetler/ic-ve-dis-cephe-uygulamalari",
    image: "/images/services/cephe.jpg",
    description:
      "İç ve dış cephelerde profesyonel boya, sıva ve mantolama çözümleri sunuyoruz. Dekoratif sıva, tekstürlü boya uygulamaları, dış cephe mantolama ve su bazlı boyalarla mekanlarınıza estetik ve dayanıklılık katıyoruz.",
  },
  {
    id: 3,
    title: "Genel Yenileme ve Tadilat",
    href: "/hizmetler/genel-yenileme-ve-tadilat",
    image: "/images/services/tadilat.jpg",
    description:
      "Komple daire tadilatından, mutfak-banyo yenilemesine, asma tavan sistemlerinden zemin kaplama çözümlerine kadar tüm yenileme ihtiyaçlarınızı karşılıyoruz. Seramik döşeme, alçıpan bölme duvarlar ve özel tasarım uygulamalarıyla yaşam alanlarınızı yeniden tasarlıyoruz.",
  },
];

export default function Services() {
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
    <section id="hizmetler" ref={sectionRef} className="py-20 bg-gray-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-navy-dark mb-16 reveal">
          Hizmetlerimiz
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="card reveal group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/30 to-transparent" />
                {/* Gold top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gold-primary" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-navy-dark mb-3 group-hover:text-gold-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-text text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-gold-primary font-semibold text-sm hover:text-gold-dark transition-colors group/link"
                >
                  Detaylar
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
