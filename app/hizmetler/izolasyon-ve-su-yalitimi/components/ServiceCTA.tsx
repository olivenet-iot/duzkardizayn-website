"use client";

import { useEffect, useRef } from "react";

export default function ServiceCTA() {
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
    <section ref={sectionRef} className="py-20 bg-navy-dark relative overflow-hidden">
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gold accent glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-primary/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 reveal">
            Tecrübe ve Kalite <span className="text-gold-primary">Bir Arada</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10 reveal" style={{ transitionDelay: "0.1s" }}>
            Kıbrıs&apos;ta su yalıtımı, izolasyon, cephe kaplamaları ve yenileme işlerinizde
            güvenilir çözüm ortağınız. Detaylı bilgi ve fiyat teklifi almak için bizimle
            iletişime geçin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal" style={{ transitionDelay: "0.2s" }}>
            <a
              href="/#iletisim"
              className="bg-white text-navy-dark font-semibold px-10 py-4 rounded-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
            >
              Ücretsiz Teklif Al
            </a>
            <a
              href="tel:+905488888503"
              className="border-2 border-gold-primary text-gold-primary font-semibold px-10 py-4 rounded-md hover:bg-gold-primary hover:text-navy-dark transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +90 548 888 85 03
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 reveal" style={{ transitionDelay: "0.3s" }}>
            <div className="flex items-center gap-2 text-white/60">
              <svg className="w-5 h-5 text-gold-primary" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">25+ Yıl Deneyim</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <svg className="w-5 h-5 text-gold-primary" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">5 Yıl Garanti</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <svg className="w-5 h-5 text-gold-primary" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">Ücretsiz Keşif</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
