import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ProjectHero,
  ProjectInfo,
  ProjectServiceCards,
  ProjectGallery,
  OtherProjects,
} from "@/components/projects";
import { CTASection } from "@/components/services";
import {
  getAllProjectSlugs,
  getProjectWithGallery,
  getOtherProjects
} from "@/lib/projects";
import { getProjectBySlug } from "@/lib/projects-data";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proje Bulunamadı | Düzkar Dizayn",
    };
  }

  return {
    title: `${project.title} | Düzkar Dizayn Projeler`,
    description: project.shortDescription,
    alternates: {
      canonical: `https://duzkardizayn.com/projeler/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Düzkar Dizayn`,
      description: project.shortDescription,
      type: "website",
      locale: "tr_TR",
      images: project.coverImage ? [{ url: project.coverImage }] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectWithGallery(slug);

  if (!project) {
    notFound();
  }

  const otherProjects = getOtherProjects(slug);

  return (
    <>
      <Header />
      <main>
        <ProjectHero project={project} />

        {/* Project Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark mb-6">
                  Proje Hakkında
                </h2>
                <div className="prose prose-lg max-w-none text-gray-text leading-relaxed">
                  <p>{project.fullDescription}</p>
                </div>

                {/* Service links */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="text-gray-500 text-sm">İlgili Hizmetler:</span>
                  <Link
                    href="/hizmetler/izolasyon-ve-su-yalitimi"
                    className="text-gold-primary hover:text-gold-dark text-sm font-medium transition-colors"
                  >
                    Su Yalıtımı ve İzolasyon
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link
                    href="/hizmetler/ic-ve-dis-cephe-uygulamalari"
                    className="text-gold-primary hover:text-gold-dark text-sm font-medium transition-colors"
                  >
                    İç ve Dış Cephe Boya
                  </Link>
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="lg:col-span-1">
                <ProjectInfo project={project} />
              </div>
            </div>
          </div>
        </section>

        <ProjectServiceCards services={project.services} />

        <ProjectGallery images={project.gallery} projectTitle={project.title} />

        <OtherProjects projects={otherProjects} />

        <CTASection
          title="Projeniz İçin"
          highlightedText="Bizimle İletişime Geçin"
          description="25 yıllık tecrübemizle sizin projenizde de kaliteli ve güvenilir çözümler sunmak için hazırız."
          primaryButtonText="Ücretsiz Keşif İsteyin"
          primaryButtonHref="/#iletisim"
          secondaryButtonText="+90 548 888 85 03"
          secondaryButtonHref="tel:+905488888503"
          trustBadges={[
            { text: "25+ Yıl Deneyim" },
            { text: "Ücretsiz Keşif" },
            { text: "Garantili İşçilik" },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
