/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  output: "standalone",
  async redirects() {
    return [
      // Hizmet sayfaları — eski URL'ler
      {
        source: '/izolasyon-ve-su-yalitimi',
        destination: '/hizmetler/izolasyon-ve-su-yalitimi',
        statusCode: 301,
      },
      {
        source: '/ic-ve-dis-cephe-uygulamalari',
        destination: '/hizmetler/ic-ve-dis-cephe-uygulamalari',
        statusCode: 301,
      },
      {
        source: '/genel-yenileme-ve-tadilat',
        destination: '/hizmetler/genel-yenileme-ve-tadilat',
        statusCode: 301,
      },
      {
        source: '/genel-yenileme-ve-tasdilat',
        destination: '/hizmetler/genel-yenileme-ve-tadilat',
        statusCode: 301,
      },
      // QIS ürün sayfası — konu eşleşmesi için izolasyon sayfasına
      {
        source: '/qis-uygulamalar',
        destination: '/hizmetler/izolasyon-ve-su-yalitimi',
        statusCode: 301,
      },
      // Proje sayfaları — eski URL'ler
      {
        source: '/proje-west-park',
        destination: '/projeler/emtan-west-park',
        statusCode: 301,
      },
      {
        source: '/proje-girne-izolasyon-cephe-westpark',
        destination: '/projeler/emtan-west-park',
        statusCode: 301,
      },
      {
        source: '/proje-girne-izolasyon-meritpremium',
        destination: '/projeler/merit-royal-premium',
        statusCode: 301,
      },
      {
        source: '/proje-girne-izolasyon-cephe-quattro',
        destination: '/projeler/emtan-quattro',
        statusCode: 301,
      },
      {
        source: '/proje-girne-izolasyon-meritpark',
        destination: '/projeler/merit-park-hotel',
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
