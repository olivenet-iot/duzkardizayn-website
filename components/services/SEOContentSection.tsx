import Link from "next/link";

interface SEOContentSectionProps {
  title: string;
  content: React.ReactNode;
  backgroundColor?: "white" | "gray";
}

export default function SEOContentSection({
  title,
  content,
  backgroundColor = "white",
}: SEOContentSectionProps) {
  const bgClass = backgroundColor === "white" ? "bg-white" : "bg-gray-50";

  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-navy-dark mb-8">
            {title}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-text prose-headings:text-navy-dark prose-strong:text-navy-dark prose-a:text-gold-primary prose-a:no-underline hover:prose-a:underline prose-li:marker:text-gold-primary">
            {content}
          </div>
        </div>
      </div>
    </section>
  );
}

// Internal Link Component for SEO-friendly linking
interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function InternalLink({ href, children, className = "" }: InternalLinkProps) {
  return (
    <Link
      href={href}
      className={`text-gold-primary hover:underline font-medium ${className}`}
    >
      {children}
    </Link>
  );
}
