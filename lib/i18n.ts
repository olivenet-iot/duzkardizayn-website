// İki dilli site altyapısı — TR (kök) ve EN (/en) route group'ları için ortak tanımlar.
// hreflang etiketleri, dil değiştirici ve sitemap hep bu tablodan üretilir ki
// yeni sayfa eklendiğinde tek yerden güncellensin.

export const SITE_URL = "https://duzkardizayn.com";

export type Locale = "tr" | "en";

/**
 * Birebir karşılığı olan sayfa çiftleri. Blog yazıları bilerek burada değil:
 * İngilizce yazılar Türkçe yazıların çevirisi değil, o kitleye özel içerik.
 * Çeviri ilişkisi olmayan sayfalara hreflang vermek Google'a yanlış sinyal olur.
 */
export const routePairs: { tr: string; en: string }[] = [
  { tr: "/", en: "/en" },
  { tr: "/hizmetler", en: "/en/services" },
  { tr: "/hizmetler/izolasyon-ve-su-yalitimi", en: "/en/services/waterproofing" },
  { tr: "/hizmetler/ic-ve-dis-cephe-uygulamalari", en: "/en/services/facades-and-rendering" },
  { tr: "/hizmetler/genel-yenileme-ve-tadilat", en: "/en/services/renovation" },
  { tr: "/projeler", en: "/en/projects" },
  { tr: "/hakkimizda", en: "/en/about" },
  { tr: "/sss", en: "/en/faq" },
  { tr: "/blog", en: "/en/blog" },
];

/** Proje detay sayfaları iki dilde de aynı slug'ı kullanıyor. */
export function projectPair(slug: string) {
  return { tr: `/projeler/${slug}`, en: `/en/projects/${slug}` };
}

/**
 * Bir sayfanın canonical + hreflang bloğunu üretir.
 *
 * Next.js metadata'yı üst seviye alan bazında sığ birleştirir: sayfa kendi
 * `alternates` nesnesini verdiğinde layout'taki `alternates` tamamen ezilir.
 * Bu yüzden hreflang'i layout'a bir kez koymak yetmiyor — her sayfa bunu çağırmalı.
 */
export function alternatesFor(path: string, pair?: { tr: string; en: string }) {
  const canonical = `${SITE_URL}${path}`;
  const match = pair ?? routePairs.find((p) => p.tr === path || p.en === path);

  if (!match) return { canonical };

  return {
    canonical,
    languages: {
      tr: `${SITE_URL}${match.tr}`,
      en: `${SITE_URL}${match.en}`,
      // Türkçe ana pazar olduğu için eşleşmeyen diller Türkçeye düşsün.
      "x-default": `${SITE_URL}${match.tr}`,
    },
  };
}

/** Dil değiştirici için karşı dildeki URL; karşılığı yoksa o dilin ana sayfası. */
export function counterpartUrl(pathname: string, target: Locale): string {
  const clean = pathname.replace(/\/$/, "") || "/";

  const pair = routePairs.find((p) => p.tr === clean || p.en === clean);
  if (pair) return pair[target];

  // Proje detayları: slug ortak
  const projectMatch = clean.match(/^\/(?:en\/projects|projeler)\/(.+)$/);
  if (projectMatch) {
    const { tr, en } = projectPair(projectMatch[1]);
    return target === "tr" ? tr : en;
  }

  // Blog yazıları çeviri değil — karşı dilin blog listesine gönder.
  if (/^\/(?:en\/)?blog\//.test(clean)) {
    return target === "tr" ? "/blog" : "/en/blog";
  }

  return target === "tr" ? "/" : "/en";
}

export function localeFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "tr";
}
