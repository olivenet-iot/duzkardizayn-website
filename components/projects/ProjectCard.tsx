"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/projects-data";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <Link
      href={`/projeler/${project.slug}`}
      className="group block reveal"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
        {/* Cover Image */}
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
          unoptimized
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-navy-dark/30 group-hover:bg-navy-dark/50 transition-all duration-500" />

        {/* Type badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-gold-primary text-navy-dark text-xs font-bold px-3 py-1.5 rounded-full">
            {project.typeLabel}
          </span>
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-dark/95 via-navy-dark/70 to-transparent">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-gold-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-white/70 text-sm mb-3">
            {project.client} - {project.location}
          </p>

          {/* Description - visible on hover */}
          <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Arrow indicator */}
          <div className="flex items-center gap-2 mt-4 text-gold-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm font-medium">Detayları Gör</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
          </div>
        </div>
      </div>
    </Link>
  );
}
