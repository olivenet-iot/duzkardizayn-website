import Image from "next/image";
import Link from "next/link";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, type Locale } from "@/lib/i18n";
import {
  jsonLd,
  storyHref,
  storyMonth,
  type ProjectStory,
} from "@/lib/project-stories";

export default async function StoryDetail({
  story,
  locale,
}: {
  story: ProjectStory;
  locale: Locale;
}) {
  const tr = locale === "tr";
  const cover = story.photos[story.cover];
  const url = `${SITE_URL}${storyHref(story.slug, locale)}`;
  function ProjectPhoto({ id }: { id: string }) {
    const photo = story.photos[id];
    if (!photo) throw new Error(`${story.slug}: unknown photograph ${id}`);
    return (
      <figure className="my-0 overflow-hidden rounded-xl border border-gray-200 bg-white">
        <a
          href={photo.src}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-primary"
          aria-label={`${tr ? "Fotoğrafı büyüt" : "View full photograph"}: ${photo.alt}`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-auto max-h-[580px] w-full object-contain"
          />
          {photo.label && (
            <span className="absolute top-4 left-4 rounded bg-navy-dark/90 px-3 py-1.5 text-xs font-bold text-white">
              {photo.label}
            </span>
          )}
        </a>
        <figcaption className="px-5 py-4 text-sm leading-relaxed text-gray-600">
          {photo.caption}
        </figcaption>
      </figure>
    );
  }
  function PhotoPair({ first, second }: { first: string; second: string }) {
    return (
      <div className="my-10 grid items-start gap-5 sm:grid-cols-2">
        <ProjectPhoto id={first} />
        <ProjectPhoto id={second} />
      </div>
    );
  }
  const { default: Content } = await evaluate(story.content, { ...runtime });
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: story.title,
        description: story.excerpt,
        image: Object.values(story.photos).map(
          (photo) => `${SITE_URL}${photo.src}`,
        ),
        dateModified: story.updatedAt,
        ...(story.publishedAt ? { datePublished: story.publishedAt } : {}),
        author: {
          "@type": "Organization",
          name: "Düzkar Dizayn",
          url: `${SITE_URL}${tr ? "/hakkimizda" : "/en/about"}`,
        },
        publisher: { "@id": SITE_URL },
        mainEntityOfPage: url,
        inLanguage: tr ? "tr-TR" : "en-GB",
        articleSection: story.category,
        contentLocation: { "@type": "Place", name: story.location },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: tr ? "Ana sayfa" : "Home",
            item: `${SITE_URL}${tr ? "/" : "/en"}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: tr ? "Projeler" : "Projects",
            item: `${SITE_URL}${tr ? "/projeler" : "/en/projects"}`,
          },
          { "@type": "ListItem", position: 3, name: story.title, item: url },
        ],
      },
    ],
  };
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
        />
        <article>
          <header className="bg-navy-dark pt-28 pb-12 md:pt-36 md:pb-20">
            <div className="container mx-auto px-4">
              <nav
                aria-label={tr ? "Sayfa yolu" : "Breadcrumb"}
                className="mb-10 text-sm text-white/60"
              >
                <Link
                  href={tr ? "/projeler" : "/en/projects"}
                  className="hover:text-white"
                >
                  ← {tr ? "Tüm projeler" : "All projects"}
                </Link>
              </nav>
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                  <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gold-primary">
                    {story.category} / {story.location}
                  </p>
                  <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl">
                    {story.title}
                  </h1>
                  <p className="mt-6 text-lg leading-relaxed text-white/75">
                    {story.excerpt}
                  </p>
                  <dl className="mt-9 grid grid-cols-2 gap-5 border-t border-white/15 pt-6 text-sm">
                    <div>
                      <dt className="text-white/50">
                        {tr ? "Uygulama dönemi" : "Work completed"}
                      </dt>
                      <dd className="mt-2 text-white">
                        <time dateTime={story.completedAt}>
                          {storyMonth(story.completedAt, locale)}
                        </time>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-white/50">
                        {tr ? "Uygulama" : "Contractor"}
                      </dt>
                      <dd className="mt-2 text-white">Düzkar Dizayn</dd>
                    </div>
                  </dl>
                </div>
                <figure>
                  <Image
                    src={cover.src}
                    alt={cover.alt}
                    width={cover.width}
                    height={cover.height}
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="max-h-[580px] w-full rounded-xl object-cover object-center"
                  />
                  <figcaption className="mt-3 text-sm text-white/60">
                    {cover.caption}
                  </figcaption>
                </figure>
              </div>
            </div>
          </header>
          <div className="container mx-auto grid gap-12 px-4 py-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:py-20">
            <div className="min-w-0 text-gray-700 leading-relaxed">
              <Content
                components={{
                  PhotoPair,
                  ProjectPhoto,
                  h2: ({ children }) => (
                    <h2 className="mt-14 mb-5 font-heading text-2xl font-bold text-navy-dark first:mt-0 md:text-3xl">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="mt-8 mb-3 font-heading text-xl font-bold text-navy-dark">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="my-5 text-base leading-8 md:text-lg">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="my-5 list-disc space-y-3 pl-6">
                      {children}
                    </ul>
                  ),
                  a: ({ href, children }) => (
                    <Link
                      href={href ?? "#"}
                      className="font-medium text-gold-dark underline underline-offset-4"
                    >
                      {children}
                    </Link>
                  ),
                }}
              />
              <div className="mt-12 border-t border-gray-200 pt-6 text-sm text-gray-500">
                {tr
                  ? "Saha fotoğrafları ve uygulama anlatımı: Düzkar Dizayn."
                  : "Site photographs and account of the work: Düzkar Dizayn."}{" "}
                <span className="block mt-1">
                  {tr ? "İçerik güncellemesi" : "Content updated"}:{" "}
                  <time dateTime={story.updatedAt}>
                    {new Intl.DateTimeFormat(tr ? "tr-TR" : "en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      timeZone: "UTC",
                    }).format(new Date(story.updatedAt))}
                  </time>
                </span>
              </div>
            </div>
            <aside>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:sticky lg:top-28">
                <h2 className="font-heading text-lg font-bold text-navy-dark">
                  {tr ? "Uygulamanın özeti" : "At a glance"}
                </h2>
                <p className="mt-4 text-sm text-gray-500">
                  {story.client} · {story.location}
                </p>
                <ul className="my-6 space-y-3 text-sm text-gray-700">
                  {story.systems.map((system) => (
                    <li
                      key={system}
                      className="border-l-2 border-gold-primary pl-3"
                    >
                      {system}
                    </li>
                  ))}
                </ul>
                <h3 className="border-t border-gray-200 pt-5 text-sm font-bold text-navy-dark">
                  {tr ? "İlgili hizmet" : "Related service"}
                </h3>
                {story.services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="mt-3 block text-sm font-medium text-gold-dark hover:underline"
                  >
                    {service.title} ↗
                  </Link>
                ))}
                {story.relatedBlogs && story.relatedBlogs.length > 0 && (
                  <>
                    <h3 className="mt-6 text-sm font-bold">
                      {tr ? "Konuyu derinleştirin" : "Further reading"}
                    </h3>
                    {story.relatedBlogs.map((blog) => (
                      <Link
                        key={blog.href}
                        href={blog.href}
                        className="mt-3 block text-sm text-gold-dark hover:underline"
                      >
                        {blog.title} ↗
                      </Link>
                    ))}
                  </>
                )}
                <Link
                  href={tr ? "/#iletisim" : "/en#contact"}
                  className="mt-7 block rounded-lg bg-gold-primary px-4 py-3 text-center text-sm font-bold text-navy-dark hover:bg-gold-light"
                >
                  {tr ? "Yapınız için keşif isteyin" : "Arrange a site survey"}
                </Link>
              </div>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
