import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Metadata } from "next";
import { alternatesFor, projectPair, SITE_URL, type Locale } from "./i18n";
import { projects as legacyProjects } from "./projects-data";

export interface StoryPhoto {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  label?: string;
}

export interface ProjectStory {
  slug: string;
  title: string;
  client: string;
  excerpt: string;
  category: string;
  location: string;
  completedAt: string;
  updatedAt: string;
  publishedAt?: string;
  cover: string;
  systems: string[];
  services: { title: string; href: string }[];
  photos: Record<string, StoryPhoto>;
  legacyProject?: string;
  relatedBlogs?: { title: string; href: string }[];
  content: string;
}

function directory(locale: Locale) {
  return path.join(
    process.cwd(),
    "content",
    locale === "tr" ? "projects" : "projects-en",
  );
}

export function getProjectStory(
  slug: string,
  locale: Locale = "tr",
): ProjectStory | undefined {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return undefined;
  const file = path.join(directory(locale), `${slug}.mdx`);
  if (!fs.existsSync(file)) return undefined;
  if (legacyProjects.some((project) => project.slug === slug))
    throw new Error(`${file}: slug already belongs to an archived project`);
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  if (data.draft === true) return undefined;

  const fail = (field: string): never => {
    throw new Error(`${file}: invalid or missing ${field}`);
  };
  for (const key of [
    "title",
    "client",
    "excerpt",
    "category",
    "location",
    "completedAt",
    "updatedAt",
    "cover",
  ]) {
    if (typeof data[key] !== "string" || !data[key].trim()) fail(key);
  }
  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(data.completedAt))
    fail("completedAt (YYYY-MM)");
  for (const key of ["updatedAt", "publishedAt"]) {
    if (
      data[key] !== undefined &&
      (!/^\d{4}-\d{2}-\d{2}$/.test(data[key]) ||
        Number.isNaN(Date.parse(data[key])) ||
        new Date(data[key]).toISOString().slice(0, 10) !== data[key])
    )
      fail(key);
  }
  if (
    !Array.isArray(data.systems) ||
    !data.systems.length ||
    data.systems.some((s: unknown) => typeof s !== "string")
  )
    fail("systems");
  if (!Array.isArray(data.services) || !data.services.length) fail("services");
  if (data.relatedBlogs !== undefined && !Array.isArray(data.relatedBlogs))
    fail("relatedBlogs");
  for (const link of [...data.services, ...(data.relatedBlogs ?? [])]) {
    if (
      !link ||
      typeof link.title !== "string" ||
      typeof link.href !== "string" ||
      !/^\/(?!\/)/.test(link.href) ||
      link.href.includes("..")
    )
      fail("internal links");
  }
  if (!data.photos || !data.photos[data.cover]) fail("cover photo");
  for (const [id, value] of Object.entries(data.photos)) {
    const photo = value as StoryPhoto;
    if (!photo.src?.startsWith("/images/projects/") || photo.src.includes(".."))
      fail(`photos.${id}.src`);
    if (!fs.existsSync(path.join(process.cwd(), "public", photo.src)))
      fail(`photos.${id}: image file`);
    if (
      !photo.alt ||
      !photo.caption ||
      !(photo.width > 0) ||
      !(photo.height > 0)
    )
      fail(`photos.${id}: description/dimensions`);
  }
  if (!content.trim()) fail("content");
  return { ...data, slug, content } as ProjectStory;
}

export function getProjectStories(locale: Locale = "tr"): ProjectStory[] {
  if (!fs.existsSync(directory(locale))) return [];
  return fs
    .readdirSync(directory(locale))
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => getProjectStory(file.slice(0, -4), locale))
    .filter((story): story is ProjectStory => !!story)
    .map((story) => {
      // The site's language switcher uses the same slug in both languages.
      if (!getProjectStory(story.slug, locale === "tr" ? "en" : "tr"))
        throw new Error(
          `${story.slug}: both language versions must be ready before publication`,
        );
      return story;
    })
    .sort(
      (a, b) =>
        b.completedAt.localeCompare(a.completedAt) ||
        b.updatedAt.localeCompare(a.updatedAt) ||
        a.slug.localeCompare(b.slug),
    );
}

export function storyHref(slug: string, locale: Locale = "tr") {
  return projectPair(slug)[locale];
}

export function storyMonth(month: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-GB", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${month}-01T12:00:00Z`));
}

export function storyMetadata(story: ProjectStory, locale: Locale): Metadata {
  const counterpart = getProjectStory(
    story.slug,
    locale === "tr" ? "en" : "tr",
  );
  const photo = story.photos[story.cover];
  const url = storyHref(story.slug, locale);
  return {
    title: `${story.title} | Düzkar Dizayn`,
    description: story.excerpt,
    alternates: alternatesFor(
      url,
      counterpart ? projectPair(story.slug) : undefined,
    ),
    openGraph: {
      title: story.title,
      description: story.excerpt,
      url: `${SITE_URL}${url}`,
      type: "article",
      locale: locale === "tr" ? "tr_TR" : "en_GB",
      modifiedTime: story.updatedAt,
      ...(story.publishedAt ? { publishedTime: story.publishedAt } : {}),
      images: [
        {
          url: photo.src,
          width: photo.width,
          height: photo.height,
          alt: photo.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: story.title,
      description: story.excerpt,
      images: [photo.src],
    },
  };
}

export function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
