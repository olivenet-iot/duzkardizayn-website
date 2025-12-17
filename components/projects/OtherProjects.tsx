"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/projects-data";

interface OtherProjectsProps {
  projects: Project[];
}

export default function OtherProjects({ projects }: OtherProjectsProps) {
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
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark mb-3 reveal">
            Diğer Projelerimiz
          </h2>
          <div className="w-16 h-1 bg-gold-primary reveal" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <Link
              key={project.slug}
              href={`/projeler/${project.slug}`}
              className="group reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                {/* Cover Image */}
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy-dark/20 group-hover:bg-navy-dark/40 transition-all duration-300" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gold-primary text-navy-dark text-xs font-bold px-3 py-1 rounded-full">
                    {project.typeLabel}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-navy-dark/90 to-transparent">
                  <h3 className="font-heading text-lg font-bold text-white mb-1 group-hover:text-gold-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {project.client} - {project.location}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10 reveal">
          <Link
            href="/projeler"
            className="inline-flex items-center gap-2 text-gold-primary font-semibold hover:gap-3 transition-all"
          >
            Tüm Projeleri Gör
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
