import Image from "next/image";
import Link from "next/link";
import {
  storyHref,
  storyMonth,
  type ProjectStory,
} from "@/lib/project-stories";
import type { Locale } from "@/lib/i18n";

export default function StoryCard({
  story,
  locale,
  featured = false,
}: {
  story: ProjectStory;
  locale: Locale;
  featured?: boolean;
}) {
  const photo = story.photos[story.cover];
  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-gray-200 bg-white ${featured ? "grid lg:grid-cols-[1.15fr_1fr]" : ""}`}
    >
      <Link
        href={storyHref(story.slug, locale)}
        aria-label={story.title}
        className={`relative block overflow-hidden bg-gray-100 ${featured ? "min-h-[360px] sm:min-h-[460px]" : "aspect-[4/3]"}`}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={featured}
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 55vw"
              : "(max-width: 768px) 100vw, 33vw"
          }
          className="object-cover object-[center_45%] transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-navy-dark">
          {story.category}
        </span>
      </Link>
      <div
        className={
          featured ? "flex flex-col justify-center p-7 md:p-12" : "p-6"
        }
      >
        <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
          <span>{story.location}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={story.completedAt}>
            {storyMonth(story.completedAt, locale)}
          </time>
        </div>
        <h2
          className={`font-heading font-bold leading-tight text-navy-dark ${featured ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl"}`}
        >
          <Link
            href={storyHref(story.slug, locale)}
            className="hover:text-gold-dark transition-colors"
          >
            {story.title}
          </Link>
        </h2>
        <p className="mt-5 leading-relaxed text-gray-text">{story.excerpt}</p>
        {featured && (
          <ul className="mt-7 flex flex-wrap gap-2">
            {story.systems.map((system) => (
              <li
                key={system}
                className="rounded-md bg-gray-50 px-3 py-2 text-xs text-gray-600"
              >
                {system}
              </li>
            ))}
          </ul>
        )}
        <Link
          href={storyHref(story.slug, locale)}
          className="mt-8 inline-flex w-fit items-center gap-4 border-b-2 border-gold-primary pb-2 font-semibold text-navy-dark hover:text-gold-dark"
        >
          {locale === "tr" ? "Projeyi incele" : "Explore the project"}
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
