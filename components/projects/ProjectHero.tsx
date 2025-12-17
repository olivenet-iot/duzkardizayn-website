"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/projects-data";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] max-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/30" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-12">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-white/60 hover:text-gold-primary transition-colors"
              >
                Anasayfa
              </Link>
            </li>
            <li className="text-white/40">/</li>
            <li>
              <Link
                href="/projeler"
                className="text-white/60 hover:text-gold-primary transition-colors"
              >
                Projeler
              </Link>
            </li>
            <li className="text-white/40">/</li>
            <li className="text-white font-medium">{project.title}</li>
          </ol>
        </nav>

        {/* Badge and Title */}
        <span className="inline-block bg-gold-primary text-navy-dark text-sm font-bold px-4 py-2 rounded-full mb-4 w-fit">
          {project.typeLabel}
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          {project.title}
        </h1>
      </div>
    </section>
  );
}
