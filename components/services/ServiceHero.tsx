"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface Badge {
  text: string;
}

interface ServiceHeroProps {
  title: string;
  description: string;
  breadcrumb: {
    current: string;
  };
  badges?: Badge[];
  imageSrc?: string;
  imageAlt?: string;
}

export default function ServiceHero({
  title,
  description,
  breadcrumb,
  badges = [],
  imageSrc,
  imageAlt = "Service Image",
}: ServiceHeroProps) {
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
    <section
      ref={sectionRef}
      className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8 reveal">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gold-primary transition-colors">
                Anasayfa
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/#hizmetler" className="text-gray-500 hover:text-gold-primary transition-colors">
                Hizmetler
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-navy-dark font-medium">{breadcrumb.current}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Visual */}
          <div className="reveal order-2 lg:order-1">
            <div className="relative">
              {/* Main visual container */}
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                {imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                ) : (
                  <>
                    {/* Gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark" />
                    {/* Pattern overlay */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    />
                    {/* Center icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-32 h-32 text-gold-primary/30"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                  </>
                )}
                {/* Gold accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-primary/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-navy-dark/10 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-dark mb-6 reveal">
              {title}
            </h1>
            <p
              className="text-gray-text text-lg leading-relaxed mb-8 reveal"
              style={{ transitionDelay: "0.1s" }}
            >
              {description}
            </p>

            {/* Badges */}
            {badges.length > 0 && (
              <div
                className="flex flex-wrap gap-3 mb-8 reveal"
                style={{ transitionDelay: "0.2s" }}
              >
                {badges.map((badge, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 bg-navy-dark/5 text-navy-dark px-4 py-2 rounded-full text-sm font-medium"
                  >
                    <svg
                      className="w-4 h-4 text-gold-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {badge.text}
                  </span>
                ))}
              </div>
            )}

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 reveal"
              style={{ transitionDelay: "0.3s" }}
            >
              <a href="/#iletisim" className="btn-primary">
                Ücretsiz Keşif Talep Et
              </a>
              <a
                href="tel:+905488888503"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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
