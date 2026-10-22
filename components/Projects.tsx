import Link from "next/link";
import { getProjectStories } from "@/lib/project-stories";
import type { Locale } from "@/lib/i18n";
import StoryCard from "./projects/StoryCard";

export default function Projects({ locale = "tr" }: { locale?: Locale }) {
  const stories = getProjectStories(locale).slice(0, 3);
  if (!stories.length) return null;
  const tr = locale === "tr";
  return (
    <section id="projeler" className="bg-[#f7f7f4] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
              {tr ? "Sahadan" : "From site"}
            </p>
            <h2 className="font-heading text-3xl font-bold text-navy-dark">
              {tr ? "Son projelerimiz" : "Our latest projects"}
            </h2>
          </div>
          <Link
            href={tr ? "/projeler" : "/en/projects"}
            className="border-b border-gold-primary pb-1 font-semibold text-navy-dark"
          >
            {tr ? "Tüm projeler" : "All projects"} ↗
          </Link>
        </div>
        {stories.length === 1 ? (
          <StoryCard story={stories[0]} locale={locale} featured />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <StoryCard key={story.slug} story={story} locale={locale} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
