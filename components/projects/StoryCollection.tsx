import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects-data";
import { projectsEn } from "@/lib/projects-data-en";
import { getProjectStories, jsonLd, storyHref } from "@/lib/project-stories";
import { SITE_URL, type Locale } from "@/lib/i18n";
import StoryCard from "./StoryCard";

export default function StoryCollection({ locale }: { locale: Locale }) {
  const tr = locale === "tr";
  const stories = getProjectStories(locale);
  const [featured, ...rest] = stories;
  const archive = tr ? projects : projectsEn;
  const base = tr ? "/projeler" : "/en/projects";
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}${base}#collection`,
    name: tr ? "Düzkar Dizayn saha projeleri" : "Düzkar Dizayn project stories",
    url: `${SITE_URL}${base}`,
    inLanguage: tr ? "tr-TR" : "en-GB",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: stories.length,
      itemListElement: stories.map((story, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: story.title,
        url: `${SITE_URL}${storyHref(story.slug, locale)}`,
      })),
    },
  };
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
        />
        <section className="bg-navy-dark pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-4">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-gold-primary">
              {tr ? "Düzkar Dizayn / Projeler" : "Düzkar Dizayn / Projects"}
            </p>
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
              <h1 className="max-w-3xl font-heading text-4xl font-bold leading-[1.15] text-white md:text-6xl">
                {tr ? (
                  <>
                    Yaptığımız iş,
                    <br />
                    <span className="text-gold-primary">sahadaki hâliyle.</span>
                  </>
                ) : (
                  <>
                    Our work,
                    <br />
                    <span className="text-gold-primary">from the site.</span>
                  </>
                )}
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-white/70">
                {tr
                  ? "Su yalıtımı, cephe ve yenileme projelerimiz. Başlangıç koşulları, uygulama adımları ve sonuçlar; kendi saha fotoğraflarımızla."
                  : "Waterproofing, facade and renovation projects in North Cyprus. The starting condition, the work carried out and the finished details, documented with our own site photographs."}
              </p>
            </div>
          </div>
        </section>
        <section className="bg-[#f7f7f4] py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-gold-primary" />
              <p className="text-sm font-semibold text-gray-600">
                {tr ? "Sahadan son çalışma" : "Latest from site"}
              </p>
            </div>
            {featured ? (
              <StoryCard story={featured} locale={locale} featured />
            ) : (
              <p className="text-gray-text">
                {tr
                  ? "Proje çalışmalarımıza aşağıdaki arşivden ulaşabilirsiniz."
                  : "Explore our earlier work in the archive below."}
              </p>
            )}
            {rest.length > 0 && (
              <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((story) => (
                  <StoryCard key={story.slug} story={story} locale={locale} />
                ))}
              </div>
            )}
            <details className="mt-16 border-y border-gray-200 py-6">
              <summary className="cursor-pointer text-lg font-semibold text-navy-dark">
                {tr ? "Önceki proje arşivi" : "Earlier project archive"}
              </summary>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {archive.map((project) => (
                  <li key={project.slug}>
                    <Link
                      className="block rounded-lg border border-gray-200 bg-white p-5 hover:border-gold-primary"
                      href={storyHref(project.slug, locale)}
                    >
                      <span className="block font-semibold text-navy-dark">
                        {project.title}
                      </span>
                      <span className="mt-1 block text-sm text-gray-500">
                        {project.location} ↗
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="container mx-auto flex flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-dark md:text-3xl">
                {tr
                  ? "Sizin yapınızda neye ihtiyaç var?"
                  : "What does your property need?"}
              </h2>
              <p className="mt-3 max-w-2xl text-gray-text">
                {tr
                  ? "Her yüzeyin ve birleşimin ihtiyacı farklı. Yapınızı yerinde inceleyip uygun uygulama kapsamını birlikte belirleyelim."
                  : "Every roof and junction is different. A site survey lets us define the right scope for your property."}
              </p>
            </div>
            <Link
              href={tr ? "/#iletisim" : "/en#contact"}
              className="btn-primary shrink-0 text-center"
            >
              {tr ? "Ücretsiz keşif isteyin" : "Request a free survey"}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
