"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/gtag";

// Site genelindeki tel:/wa.me/mailto tıklamalarını tek noktadan yakalar.
// Linkler ~24 dosyaya dağılmış durumda; komponentleri tek tek client'a
// çevirmek yerine capture fazında global dinleyici kullanıyoruz.
export default function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { link_url: href });
      } else if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        trackEvent("whatsapp_click", { link_url: href });
      } else if (href.startsWith("mailto:")) {
        trackEvent("email_click", { link_url: href });
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
