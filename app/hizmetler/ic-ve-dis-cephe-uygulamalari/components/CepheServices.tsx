"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "İç Cephe Boya Uygulamaları",
    description:
      "Yaşam alanlarınızın duvarlarına uzman ekibimizle renk katıyoruz. Yüksek kaliteli boyalar kullanarak her tür iç mekan duvarlarında pürüzsüz, dayanıklı ve estetik boya uygulamaları yapıyoruz.",
    image: "/images/services/cephe/ic-cephe-boya.jpg",
  },
  {
    id: 2,
    title: "Dış Cephe Boya Uygulamaları",
    description:
      "Binanızın dış cephesini güneş, yağmur ve hava kirliliğine karşı korurken estetik görünüm sağlıyoruz. UV dayanımlı, uzun ömürlü dış cephe boyaları ile yapınızın değerini artırıyoruz.",
    image: "/images/services/cephe/dis-cephe-boya.jpg",
  },
  {
    id: 3,
    title: "Sıva Alçı ve Saten Alçı Uygulamaları",
    description:
      "Duvarlarınızda pürüzsüz, düzgün yüzeyler elde etmenizi sağlıyoruz. Alçı ve saten alçı uygulamalarımız, hem boya öncesi mükemmel bir alt zemin hazırlıyor hem de mekanlarınıza derinlik katıyor.",
    image: "/images/services/cephe/siva-alci.jpg",
  },
  {
    id: 4,
    title: "Mantolama Sistemleri",
    description:
      "Binanızı ısı kaybına karşı koruyarak enerji tasarrufu sağlıyoruz. Profesyonel mantolama sistemleri ile hem ısınma maliyetlerinizi düşürüyor hem de yapınızı dış etkenlere karşı koruyoruz.",
    image: "/images/services/cephe/mantolama.jpg",
  },
  {
    id: 5,
    title: "Dekoratif Sıva ve Tekstür Boya",
    description:
      "Standart boyalardan farklı, özel dokulu yüzeyler oluşturuyoruz. Dekoratif sıva ve tekstürlü boya uygulamalarımız ile mekanlarınıza benzersiz bir karakter ve görsel zenginlik katıyoruz.",
    image: "/images/services/cephe/dekoratif-siva.jpg",
  },
];

export default function CepheServices() {
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

  // Split services: first 3 for top row, last 2 for bottom centered row
  const topRowServices = services.slice(0, 3);
  const bottomRowServices = services.slice(3);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-navy-dark mb-6 reveal">
          Cephe Hizmetlerimiz
        </h2>
        <p className="text-center text-gray-text max-w-3xl mx-auto mb-16 reveal">
          İç ve dış mekanlarda profesyonel boya, sıva ve mantolama çözümleri ile
          yapınıza değer katıyoruz.
        </p>

        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {topRowServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom row: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bottomRowServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: (typeof services)[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <div
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
  );
}
