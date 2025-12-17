"use client";

import Link from "next/link";
import Image from "next/image";

export default function IzolasyonHero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-br from-gray-light via-white to-gray-light relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1f2e' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-text">
            <li>
              <Link href="/" className="hover:text-gold-primary transition-colors">
                Anasayfa
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/#hizmetler" className="hover:text-gold-primary transition-colors">
                Hizmetler
              </Link>
            </li>
            <li>/</li>
            <li className="text-navy-dark font-medium">İzolasyon ve Su Yalıtımı</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Visual */}
          <div className="relative h-80 lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <Image
              src="/images/services/izolasyon/hero.jpg"
              alt="İzolasyon ve Su Yalıtımı"
              fill
              className="object-cover"
              priority
              unoptimized
            />
            {/* Dark overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent" />
            {/* Gold accent corners */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-gold-primary/70" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-gold-primary/70" />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block bg-gold-primary/10 text-gold-dark px-4 py-2 rounded-full text-sm font-medium mb-4">
              Profesyonel Hizmet
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy-dark mb-6 leading-tight">
              İzolasyon ve <span className="text-gold-primary">Su Yalıtımı</span>
            </h1>
            <p className="text-gray-text text-lg leading-relaxed mb-8">
              25 yıllık deneyimimizle temel, çatı, teras, havuz ve ıslak hacim izolasyonu
              uygulamalarında uzman ekibimiz, yüksek kaliteli malzemeler kullanarak
              yapılarınızı su ve nem sorunlarına karşı güvenle korur. Tüm izolasyon
              hizmetlerimizde profesyonel işçilik ve garanti sunuyoruz.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-gold-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-navy-dark">5 Yıl Garanti</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-gold-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-navy-dark">Ücretsiz Keşif</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-gold-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-navy-dark">25+ Yıl Deneyim</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#iletisim"
                className="btn-primary text-center"
              >
                Ücretsiz Teklif Al
              </a>
              <a
                href="tel:+905488888503"
                className="btn-secondary text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
