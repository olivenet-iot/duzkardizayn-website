import { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";
import { getAllEnBlogPosts } from "@/lib/blog-en";
import { projects } from "@/lib/projects-data";
import { SITE_URL, routePairs, projectPair } from "@/lib/i18n";

/**
 * Karşılığı olan sayfalar için tek girdi yerine iki girdi üretir ve her ikisine de
 * xhtml:link hreflang anotasyonu ekler. Google çok dilli siteler için sitemap
 * üzerinden verilen bu anotasyonu head'deki link etiketlerine tercih ediyor.
 */
function bilingualEntries(
  pair: { tr: string; en: string },
  options: {
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
    lastModified?: Date;
  }
): MetadataRoute.Sitemap {
  const languages = {
    tr: `${SITE_URL}${pair.tr}`,
    en: `${SITE_URL}${pair.en}`,
    "x-default": `${SITE_URL}${pair.tr}`,
  };
  const lastModified = options.lastModified ?? new Date();

  return [pair.tr, pair.en].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: options.changeFrequency,
    priority: options.priority,
    alternates: { languages },
  }));
}

// Sayfa türüne göre öncelik. routePairs tek kaynak olduğu için yeni bir
// sayfa çifti eklendiğinde sitemap kendiliğinden güncelleniyor.
const priorities: Record<string, { priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = {
  "/": { priority: 1, changeFrequency: "weekly" },
  "/hizmetler": { priority: 0.9, changeFrequency: "monthly" },
  "/hizmetler/izolasyon-ve-su-yalitimi": { priority: 0.9, changeFrequency: "monthly" },
  "/hizmetler/ic-ve-dis-cephe-uygulamalari": { priority: 0.9, changeFrequency: "monthly" },
  "/hizmetler/genel-yenileme-ve-tadilat": { priority: 0.9, changeFrequency: "monthly" },
  "/projeler": { priority: 0.8, changeFrequency: "weekly" },
  "/blog": { priority: 0.8, changeFrequency: "weekly" },
  "/sss": { priority: 0.7, changeFrequency: "monthly" },
  "/hakkimizda": { priority: 0.6, changeFrequency: "monthly" },
};

export default function sitemap(): MetadataRoute.Sitemap {
  // Karşılığı olan tüm sayfalar (TR + EN, hreflang anotasyonlu)
  const pairedUrls = routePairs.flatMap((pair) =>
    bilingualEntries(pair, priorities[pair.tr] ?? { priority: 0.7, changeFrequency: "monthly" })
  );

  // EN karşılığı olmayan TR sayfalar — çeviri ilişkisi olmadığı için hreflang bilerek yok.
  const trOnlyUrls: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/hizmetler/mantolama`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Proje detayları — iki dilde aynı slug
  const projectUrls = projects.flatMap((project) =>
    bilingualEntries(projectPair(project.slug), {
      priority: 0.7,
      changeFrequency: "monthly",
    })
  );

  // Blog yazıları çeviri değil, her dilde özgün içerik. Bu yüzden hreflang
  // eşleştirmesi yapılmıyor — yanlış eşleştirme Google'a hatalı sinyal olurdu.
  const trBlogUrls: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const enBlogUrls: MetadataRoute.Sitemap = getAllEnBlogPosts().map((post) => ({
    url: `${SITE_URL}/en/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pairedUrls, ...trOnlyUrls, ...projectUrls, ...trBlogUrls, ...enBlogUrls];
}
