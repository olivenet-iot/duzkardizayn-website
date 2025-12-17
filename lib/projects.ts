// Server-side only - gallery okuma fonksiyonları
import fs from "fs";
import path from "path";
import { projects as baseProjects, Project } from "./projects-data";

export type { Project } from "./projects-data";
export { getProjectBySlug, getOtherProjects, getProjectsByType } from "./projects-data";

// Klasördeki görselleri otomatik bul (server-side only)
export function getGalleryImages(slug: string): string[] {
  const galleryPath = path.join(process.cwd(), "public/images/projects", slug);

  try {
    const files = fs.readdirSync(galleryPath);
    return files
      .filter((file) => /^\d+\.(jpg|jpeg|png)$/i.test(file)) // 1.jpg, 2.png formatında
      .sort((a, b) => parseInt(a) - parseInt(b)) // Numaraya göre sırala
      .map((file) => `/images/projects/${slug}/${file}`);
  } catch {
    return [];
  }
}

// Proje ile birlikte gallery'yi döndür (server-side only)
export function getProjectWithGallery(slug: string): (Project & { gallery: string[] }) | undefined {
  const project = baseProjects.find((p) => p.slug === slug);
  if (!project) return undefined;

  return {
    ...project,
    gallery: getGalleryImages(slug),
  };
}

// Tüm projeleri gallery ile döndür (server-side only)
export function getAllProjectsWithGallery(): (Project & { gallery: string[] })[] {
  return baseProjects.map((project) => ({
    ...project,
    gallery: getGalleryImages(project.slug),
  }));
}

// Diğer projeleri gallery ile döndür (server-side only)
export function getOtherProjectsWithGallery(currentSlug: string): (Project & { gallery: string[] })[] {
  return baseProjects
    .filter((p) => p.slug !== currentSlug)
    .map((project) => ({
      ...project,
      gallery: getGalleryImages(project.slug),
    }));
}

// Static params için slug listesi
export function getAllProjectSlugs(): string[] {
  return baseProjects.map((p) => p.slug);
}

// Re-export projects for backwards compatibility (sadece server components için)
export const projects = baseProjects;
