import Image from "next/image";
import { getProjectStory } from "@/lib/project-stories";
import type { Locale } from "@/lib/i18n";

export default function ProjectPhotoPair({
  slug,
  first,
  second,
  locale = "tr",
}: {
  slug: string;
  first: string;
  second: string;
  locale?: Locale;
}) {
  const story = getProjectStory(slug, locale);
  if (!story || !story.photos[first] || !story.photos[second]) {
    throw new Error(`Missing project photos: ${locale}/${slug}`);
  }

  return (
    <div className="not-prose my-8 grid gap-5 sm:grid-cols-2">
      {[first, second].map((id) => {
        const photo = story.photos[id];
        return (
          <figure key={id} className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <a
              href={photo.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${photo.alt} — ${locale === "tr" ? "Fotoğrafı yeni sekmede aç" : "Open photo in a new tab"}`}
              className="block bg-gray-100"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 400px"
                className="!m-0 h-auto w-full !rounded-none"
              />
            </a>
            <figcaption className="p-4 text-sm leading-relaxed text-gray-600">
              <span className="mb-1 block font-semibold text-navy-dark">{photo.label}</span>
              {photo.caption}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
