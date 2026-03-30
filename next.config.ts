import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Enable static export for Vercel
  output: "standalone",
  async redirects() {
    return [
      // Hizmet sayfaları — eski URL'ler
      {
        source: '/izolasyon-ve-su-yalitimi',
        destination: '/hizmetler/izolasyon-ve-su-yalitimi',
        permanent: true,
      },
      {
        source: '/ic-ve-dis-cephe-uygulamalari',
        destination: '/hizmetler/ic-ve-dis-cephe-uygulamalari',
        permanent: true,
      },
      {
        source: '/genel-yenileme-ve-tadilat',
        destination: '/hizmetler/genel-yenileme-ve-tadilat',
        permanent: true,
      },
      {
        source: '/genel-yenileme-ve-tasdilat',
        destination: '/hizmetler/genel-yenileme-ve-tadilat',
        permanent: true,
      },
      // Proje sayfaları — eski URL'ler
      {
        source: '/proje-west-park',
        destination: '/projeler/emtan-west-park',
        permanent: true,
      },
      {
        source: '/proje-girne-izolasyon-cephe-westpark',
        destination: '/projeler/emtan-west-park',
        permanent: true,
      },
      {
        source: '/proje-girne-izolasyon-meritpremium',
        destination: '/projeler/merit-royal-premium',
        permanent: true,
      },
      {
        source: '/proje-girne-izolasyon-cephe-quattro',
        destination: '/projeler/emtan-quattro',
        permanent: true,
      },
      {
        source: '/proje-girne-izolasyon-meritpark',
        destination: '/projeler/merit-park-hotel',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
