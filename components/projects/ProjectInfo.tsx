"use client";

import { Project } from "@/lib/projects-data";

interface ProjectInfoProps {
  project: Project;
}

export default function ProjectInfo({ project }: ProjectInfoProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 shadow-lg sticky top-24">
      <h3 className="font-heading text-lg font-bold text-navy-dark mb-6 pb-4 border-b border-gray-200">
        Proje Bilgileri
      </h3>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-gold-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 text-gold-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <div>
            <span className="text-xs text-gray-500 uppercase tracking-wider">
              Müşteri
            </span>
            <p className="font-medium text-navy-dark">{project.client}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-gold-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 text-gold-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div>
            <span className="text-xs text-gray-500 uppercase tracking-wider">
              Konum
            </span>
            <p className="font-medium text-navy-dark">{project.location}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-gold-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 text-gold-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
          </div>
          <div>
            <span className="text-xs text-gray-500 uppercase tracking-wider">
              Proje Tipi
            </span>
            <p className="font-medium text-navy-dark">{project.typeLabel}</p>
          </div>
        </div>

        {project.year && (
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gold-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-gold-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <span className="text-xs text-gray-500 uppercase tracking-wider">
                Tamamlanma
              </span>
              <p className="font-medium text-navy-dark">{project.year}</p>
            </div>
          </div>
        )}
      </div>

      {/* CTA Button */}
      <a
        href="/#iletisim"
        className="block w-full mt-8 bg-gold-primary text-navy-dark font-semibold text-center py-4 rounded-lg hover:bg-gold-dark transition-colors"
      >
        Ücretsiz Keşif İsteyin
      </a>
    </div>
  );
}
