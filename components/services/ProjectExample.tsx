import Image from "next/image";
import Link from "next/link";
import { getProjectStory, storyHref } from "@/lib/project-stories";
import type { Locale } from "@/lib/i18n";

export default function ProjectExample({ slug, locale }: { slug: string; locale: Locale }) {
  const story = getProjectStory(slug, locale);
  if (!story) return null;
  const photo = story.photos[story.cover];
  const href = storyHref(slug, locale);
  const tr = locale === "tr";

  return (
    <section id="project-example" aria-labelledby="project-example-title" className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl border border-gray-200 bg-white md:grid-cols-2">
          <Link href={href} aria-label={story.title} className="relative block min-h-[360px] bg-gray-100">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover object-[center_45%]"
            />
          </Link>
          <div className="flex flex-col justify-center p-6 sm:p-10">
            <p className="mb-3 text-sm font-semibold text-gold-dark">
              {tr ? "Sahadan bir uygulama" : "From our project archive"}
            </p>
            <h2 id="project-example-title" className="font-heading text-2xl font-bold leading-tight text-navy-dark sm:text-3xl">
              {story.title}
            </h2>
            <p className="mt-4 leading-relaxed text-gray-text">{story.excerpt}</p>
            <Link href={href} className="mt-6 w-fit border-b-2 border-gold-primary pb-2 font-semibold text-navy-dark hover:text-gold-dark">
              {tr ? "Önce–sonra fotoğrafları ve uygulama detayları" : "Before-and-after photos and application details"} ↗
            </Link>
            {story.relatedBlogs?.map((blog) => (
              <Link key={blog.href} href={blog.href} className="mt-4 w-fit text-sm font-medium text-navy-dark underline decoration-gray-300 underline-offset-4 hover:text-gold-dark">
                {blog.title} ↗
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
