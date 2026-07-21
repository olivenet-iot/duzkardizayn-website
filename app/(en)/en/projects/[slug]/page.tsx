import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CTASection } from "@/components/services";
import {
  getAllProjectEnSlugs,
  getOtherProjectsEn,
  getProjectEnBySlug,
} from "@/lib/projects-data-en";
import { getGalleryImages } from "@/lib/projects";
import { alternatesFor, projectPair, SITE_URL } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectEnSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectEnBySlug(slug);

  if (!project) {
    return { title: "Project not found | Düzkar Dizayn" };
  }

  return {
    title: `${project.title} | ${project.location} | Düzkar Dizayn Projects`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Düzkar Dizayn`,
      description: project.shortDescription,
      url: `${SITE_URL}/en/projects/${slug}`,
      type: "article",
      locale: "en_GB",
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: `${project.title} — ${project.typeLabel} in ${project.location}, North Cyprus`,
        },
      ],
    },
    alternates: alternatesFor(`/en/projects/${slug}`, projectPair(slug)),
  };
}

export default async function EnProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectEnBySlug(slug);

  if (!project) {
    notFound();
  }

  // Görseller Türkçe tarafla ortak klasörden okunuyor, yollar burada tekrarlanmıyor.
  const gallery = getGalleryImages(slug);
  const otherProjects = getOtherProjectsEn(slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${SITE_URL}/en/projects`,
      },
      { "@type": "ListItem", position: 3, name: project.title },
    ],
  };

  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] max-h-[600px]">
          <div className="absolute inset-0">
            <Image
              src={project.coverImage}
              alt={`${project.title} — ${project.typeLabel} in ${project.location}, North Cyprus`}
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/30" />
          </div>

          <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-12">
            <nav className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-sm">
                <li>
                  <Link
                    href="/en"
                    className="text-white/60 hover:text-gold-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-white/40">/</li>
                <li>
                  <Link
                    href="/en/projects"
                    className="text-white/60 hover:text-gold-primary transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li className="text-white/40">/</li>
                <li className="text-white font-medium">{project.title}</li>
              </ol>
            </nav>

            <span className="inline-block bg-gold-primary text-navy-dark text-sm font-bold px-4 py-2 rounded-full mb-4 w-fit">
              {project.typeLabel}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {project.title}
            </h1>
          </div>
        </section>

        {/* Açıklama + bilgi kutusu */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark mb-6">
                  About this project
                </h2>
                <p className="text-gray-text text-lg leading-relaxed">
                  {project.fullDescription}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <span className="text-gray-500 text-sm">
                    Related services:
                  </span>
                  <Link
                    href="/en/services/waterproofing"
                    className="text-gold-primary hover:text-gold-dark text-sm font-medium transition-colors"
                  >
                    Waterproofing &amp; Damp Proofing
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link
                    href="/en/services/facades-and-rendering"
                    className="text-gold-primary hover:text-gold-dark text-sm font-medium transition-colors"
                  >
                    Facades, Rendering &amp; Insulation
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 lg:sticky lg:top-24">
                  <h3 className="font-heading text-lg font-bold text-navy-dark mb-6 pb-4 border-b border-gray-200">
                    Project details
                  </h3>

                  <dl className="space-y-5">
                    <div>
                      <dt className="text-xs text-gray-500 uppercase tracking-wider">
                        Client
                      </dt>
                      <dd className="font-medium text-navy-dark">
                        {project.client}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-500 uppercase tracking-wider">
                        Location
                      </dt>
                      <dd className="font-medium text-navy-dark">
                        {project.location}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-500 uppercase tracking-wider">
                        Project type
                      </dt>
                      <dd className="font-medium text-navy-dark">
                        {project.typeLabel}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-500 uppercase tracking-wider">
                        Work packages
                      </dt>
                      <dd className="font-medium text-navy-dark">
                        {project.services.length}
                      </dd>
                    </div>
                  </dl>

                  <a
                    href="/en#contact"
                    className="block w-full mt-8 bg-gold-primary text-navy-dark font-semibold text-center py-4 rounded-lg hover:bg-gold-light transition-colors"
                  >
                    Request a free survey
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Uygulanan işler */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark mb-3">
                Work carried out
              </h2>
              <div className="w-16 h-1 bg-gold-primary" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-xl p-6 shadow-sm border-t-4 border-gold-primary"
                >
                  <h3 className="font-heading text-lg font-bold text-navy-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galeri */}
        {gallery.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="mb-10">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark mb-3">
                  Photographs from site
                </h2>
                <div className="w-16 h-1 bg-gold-primary" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {gallery.map((image, index) => (
                  <div
                    key={image}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100"
                  >
                    <Image
                      src={image}
                      alt={`${project.title}, ${project.location} — site photograph ${index + 1}`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Diğer projeler */}
        {otherProjects.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="mb-10">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark mb-3">
                  Other projects
                </h2>
                <div className="w-16 h-1 bg-gold-primary" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherProjects.slice(0, 3).map((other) => (
                  <Link
                    key={other.slug}
                    href={`/en/projects/${other.slug}`}
                    className="group block"
                  >
                    <div className="relative h-64 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                      <Image
                        src={other.coverImage}
                        alt={`${other.title} — ${other.typeLabel} in ${other.location}, North Cyprus`}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-navy-dark/20 group-hover:bg-navy-dark/40 transition-all duration-300" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gold-primary text-navy-dark text-xs font-bold px-3 py-1 rounded-full">
                          {other.typeLabel}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-navy-dark/90 to-transparent">
                        <h3 className="font-heading text-lg font-bold text-white mb-1 group-hover:text-gold-primary transition-colors">
                          {other.title}
                        </h3>
                        <p className="text-white/60 text-sm">
                          {other.location}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link
                  href="/en/projects"
                  className="inline-flex items-center gap-2 text-gold-primary font-semibold hover:gap-3 transition-all"
                >
                  View all projects
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        )}

        <CTASection
          title="Talk to us about"
          highlightedText="your own property"
          description="The same systems and the same detailing apply to a villa roof or a single balcony. We survey the property free of charge and give you a written quotation before anything starts."
          primaryButtonText="Request a free survey"
          primaryButtonHref="/en#contact"
          secondaryButtonText="+90 533 831 14 32"
          secondaryButtonHref="tel:+905338311432"
          trustBadges={[
            { text: "Trading since 1999" },
            { text: "English-speaking team" },
            { text: "5-year workmanship guarantee" },
          ]}
        />
      </main>

      <Footer />
    </>
  );
}
