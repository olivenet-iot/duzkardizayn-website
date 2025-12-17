"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProjectCard } from "@/components/projects";
import { projects, Project } from "@/lib/projects-data";
import { CTASection } from "@/components/services";

const filterOptions = [
  { value: "all", label: "Tüm Projeler" },
  { value: "konut", label: "Konut Projeleri" },
  { value: "otel", label: "Otel Projeleri" },
  { value: "karma", label: "Karma Projeler" },
];

export default function ProjelerPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.type === activeFilter));
    }
  }, [activeFilter]);

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
  }, [filteredProjects]);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark relative overflow-hidden">
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Glow effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-primary/5 rounded-full blur-2xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                PROJELERİMİZ
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed">
                25 yıllık deneyimimizle Kuzey Kıbrıs&apos;ın önde gelen inşaat
                firmaları ve otel zincirleriyle gerçekleştirdiğimiz başarılı
                projeler
              </p>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setActiveFilter(option.value)}
                  className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
                    activeFilter === option.value
                      ? "bg-gold-primary text-navy-dark"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section ref={sectionRef} className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">
                  Bu kategoride proje bulunamadı.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Projeniz İçin"
          highlightedText="Bizimle İletişime Geçin"
          description="25 yıllık tecrübemizle sizin projenizde de kaliteli ve güvenilir çözümler sunmak için hazırız."
          primaryButtonText="Ücretsiz Keşif İsteyin"
          primaryButtonHref="/#iletisim"
          secondaryButtonText="+90 548 888 85 03"
          secondaryButtonHref="tel:+905488888503"
          trustBadges={[
            { text: "25+ Yıl Deneyim" },
            { text: "Ücretsiz Keşif" },
            { text: "Garantili İşçilik" },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
