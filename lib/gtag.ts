type GtagParams = Record<string, string | number | undefined>;

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

// GA4 özel event gönderimi. gtag yüklenmemişse (ad-blocker, script hatası)
// sessizce atlar; site işlevi analytics'e bağımlı olmamalı.
export function trackEvent(name: string, params?: GtagParams) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, {
    page_path: window.location.pathname,
    ...params,
  });
}
