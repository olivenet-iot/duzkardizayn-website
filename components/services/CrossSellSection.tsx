import Link from "next/link";

interface CrossSellItem {
  href: string;
  title: string;
  description: string;
}

interface CrossSellSectionProps {
  title: string;
  description: string;
  items: CrossSellItem[];
  /** Kart altındaki link etiketi — EN sayfalarda "Find out more" gibi geçilebilir. */
  linkLabel?: string;
}

// "İş bitti, sırada ne var?" bölümü: izolasyon sayfası ve izolasyon konulu blog
// yazılarının altında, tamir sonrası devam işlerini (boya, mantolama, tadilat)
// tek elden sunduğumuzu anlatan çapraz satış bloğu.
export default function CrossSellSection({
  title,
  description,
  items,
  linkLabel = "Detaylı Bilgi",
}: CrossSellSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-dark mb-4">
              {title}
            </h2>
            <p className="text-gray-text max-w-3xl mx-auto">{description}</p>
          </div>

          <div
            className={`grid grid-cols-1 gap-6 ${
              items.length === 2
                ? "md:grid-cols-2 max-w-3xl mx-auto"
                : "md:grid-cols-3"
            }`}
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border-t-4 border-gold-primary"
              >
                <h3 className="font-heading font-bold text-lg text-navy-dark mb-2 group-hover:text-gold-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-text text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-2 text-gold-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  {linkLabel}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
