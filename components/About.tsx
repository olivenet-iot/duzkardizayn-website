"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function About() {
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

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hakkimizda" ref={sectionRef} className="py-20 bg-gray-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-navy-dark mb-16 reveal">
          Hakkımızda
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="reveal">
            <p className="text-gray-text leading-relaxed mb-6">
              <strong className="text-navy-dark">Düzkar Dizayn</strong>, 1999 yılında kurulmuş,
              25 yıllık deneyimiyle Kıbrıs&apos;ın izolasyon ve yapı uygulamaları konusunda
              önde gelen firmalarından biridir.
            </p>
            <p className="text-gray-text leading-relaxed mb-6">
              Uzman kadromuz ve profesyonel ekipmanlarımızla, prestijli inşaat şirketleri
              ve oteller dahil yüzlerce başarılı projeye imza attık. Su yalıtımından
              cephe uygulamalarına, komple bina tadilatlarından zemin kaplamalarına
              kadar geniş bir yelpazede hizmet sunuyoruz.
            </p>
            <p className="text-gray-text leading-relaxed mb-8">
              <strong className="text-navy-dark">En kaliteli malzemeler ve kusursuz işçilik</strong> ilkemizdir.
              Tüm izolasyon uygulamalarımız için 5 yıl garanti veriyoruz. Misyonumuz,
              müşterilerimizin ihtiyaçlarına uygun, uzun ömürlü ve estetik çözümler sunmaktır.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-navy-dark">
                <svg className="w-5 h-5 text-gold-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Profesyonel Ekip</span>
              </div>
              <div className="flex items-center gap-2 text-navy-dark">
                <svg className="w-5 h-5 text-gold-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Kaliteli Malzeme</span>
              </div>
              <div className="flex items-center gap-2 text-navy-dark">
                <svg className="w-5 h-5 text-gold-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Zamanında Teslimat</span>
              </div>
              <div className="flex items-center gap-2 text-navy-dark">
                <svg className="w-5 h-5 text-gold-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">5 Yıl Garanti</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about/team.jpg"
                alt="Düzkar Dizayn Ekibi"
                fill
                className="object-cover object-center"
                unoptimized
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
              {/* Gold accent corners */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-gold-primary/50" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-gold-primary/50" />
              {/* Bottom quote */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-heading text-lg">
                  &ldquo;Kalite, güven ve müşteri memnuniyeti bizim için her şeyden önce gelir.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
