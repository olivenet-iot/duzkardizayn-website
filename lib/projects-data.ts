export interface Project {
  slug: string;
  title: string;
  type: "konut" | "otel" | "karma";
  typeLabel: string;
  client: string;
  location: string;
  year?: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  services: {
    title: string;
    description: string;
  }[];
  gallery?: string[];
}

// Proje base data (gallery hariç - client-side'da kullanılabilir)
export const projects: Project[] = [
  {
    slug: "emtan-west-park",
    title: "Emtan West Park",
    type: "konut",
    typeLabel: "Konut Projesi",
    client: "Emtan Group",
    location: "Alsancak/Girne",
    shortDescription:
      "Prestijli konut kompleksinde kapsamlı izolasyon ve boya çalışmaları",
    fullDescription: `Emtan Group'un Kıbrıs Girne Alsancak bölgesindeki prestijli West Park konut projesinde, Düzkar Dizayn olarak kapsamlı su yalıtımı ve izolasyon hizmetleri sunduk. Girne'nin önde gelen izolasyon firması olarak perde duvar, çatı, teras ve balkon izolasyonu uygulamalarını başarıyla tamamladık. İç ve dış cephe boya işlerinde de profesyonel çözümler sunarak projeyi zamanında teslim ettik.`,
    coverImage: "/images/projects/emtan-west-park/cover.jpg",
    services: [
      {
        title: "Perde Duvar İzolasyonu",
        description:
          "Bina temelinde ve perde duvarlarda profesyonel izolasyon uygulamaları gerçekleştirdik. Kıbrıs'ın nemli iklim koşullarına karşı, yapının zemin altı bölümlerini bitüm esaslı izolasyon malzemeleriyle uzun süreli korumasını sağladık.",
      },
      {
        title: "Balkon ve Islak Hacim İzolasyonu",
        description:
          "Banyo, tuvalet gibi ıslak hacimlerde ve balkonlarda özel izolasyon sistemleri uyguladık. Kıbrıs'ta izolasyon deneyimimizle, dairelerin iç mekanlarını su sızıntılarına karşı korur ve alt katlara su geçişini önleyen kalıcı çözümler sunduk.",
      },
      {
        title: "Teras ve Çatı İzolasyonu",
        description:
          "West Park Girne projesinde bitüm esaslı izolasyon malzemeleri ile çatı ve teras su yalıtımı uygulamaları yaptık. Kıbrıs'ın değişken hava koşullarına dayanıklı, UV ışınlarına ve yağmur suyuna karşı tam koruma sağlayan profesyonel izolasyon çözümleri geliştirdik.",
      },
      {
        title: "İç Mekan Boya Hazırlıkları",
        description:
          "Girne West Park dairelerinde duvar altyapılarını hazırlanması, sıva, saten alçı ve astar uygulamalarını titizlikle gerçekleştirdik. Kıbrıs'taki izolasyon ve boya projelerimizde iç mekanlarda kusursuz bir yüzey hazırlığı için gerekli tüm işlemleri tamamladık.",
      },
      {
        title: "Dış Cephe Çalışmaları",
        description:
          "West Park Girne projesinde hava koşullarına dayanıklı, yüksek kaliteli dış cephe boyası uygulaması yaptık. Kıbrıs ikliminde UV ışınlarına ve nem değişkenliklerine karşı dirençli, özel dış cephe boyaları kullanarak binanın görünümünü uzun yıllar koruduk.",
      },
    ],
  },
  {
    slug: "merit-park-hotel",
    title: "Merit Park Hotel",
    type: "otel",
    typeLabel: "Otel Projesi",
    client: "Merit International Hotels",
    location: "Girne",
    shortDescription:
      "Lüks otel tesisinde kapsamlı izolasyon ve su yalıtımı çalışmaları",
    fullDescription: `Kuzey Kıbrıs'ın prestijli otel zinciri Merit Oteller grubunun Girne'deki lüks tesisi Merit Park Hotel'de kapsamlı izolasyon ve su yalıtımı çalışmaları gerçekleştirdik. Havuz radya temel izolasyonundan özel zemin uygulamalarına, arduaz taşlı izolasyondan tekstil membran uygulamalarına kadar kaliteli malzemelerle uzman ekibimiz tarafından tamamlanan bu projede, otel misafirlerine sorunsuz ve konforlu bir konaklama deneyimi sunulmasına katkıda bulunduk.`,
    coverImage: "/images/projects/merit-park-hotel/cover.jpg",
    services: [
      {
        title: "Radya Temel İzolasyonu",
        description:
          "Merit Park Hotel'in havuz temel sisteminde Girne'nin nemli iklim koşullarına karşı bitüm esaslı radya temel izolasyonu uyguladık. Kıbrıs'ta otel projelerinde uzman ekibimizle, yapının temelini su ve nem sorunlarına karşı güçlendirerek uzun yıllar dayanıklılık sağladık.",
      },
      {
        title: "Havuz İzolasyonu",
        description:
          "Girne Merit Park Hotel'in havuz sistemlerinde özel su yalıtım çözümleri uyguladık. Profesyonel havuz izolasyonu ile su sızdırmazlığını maksimum seviyede sağlayarak, Kıbrıs'ın turizm sektöründe misafir memnuniyetine katkıda bulunduk.",
      },
      {
        title: "Self Leveling Uygulaması",
        description:
          "Otel zeminlerinde profesyonel self leveling uygulaması yaptık. Girne'deki bu prestijli otel projesinde pürüzsüz, düzgün ve dayanıklı zemin yüzeyleri oluşturarak üst kaplama için ideal altyapı hazırladık.",
      },
      {
        title: "Arduaz Taşlı İzolasyon",
        description:
          "Merit Park Hotel'de dış mekanlarda arduaz taşlı izolasyon uygulaması ile hem estetik hem de yüksek koruma sağlayan çözümler sunduk. Kıbrıs ikliminde dayanıklılığını artırırken görsel açıdan da kalite katmaktadır.",
      },
      {
        title: "Tekstil Membran Uygulaması",
        description:
          "Bordex üstü kaplama öncesi tekstil membran uygulaması ile yapısal bütünlük sağladık. Girne'deki otel projemizde her zemine uygun izolasyon çözümü sunarak uzun ömürlü koruma garantisi verdik.",
      },
    ],
  },
  {
    slug: "emtan-quattro",
    title: "Emtan Quattro",
    type: "karma",
    typeLabel: "Karma Proje",
    client: "Emtan Group",
    location: "Girne",
    shortDescription:
      "Prestijli konut ve ticari projede kapsamlı izolasyon ve cephe uygulamaları",
    fullDescription: `Emtan Group'un Kuzey Kıbrıs Girne'de geliştirdiği prestijli Quattro konut ve ticari projesi için kapsamlı izolasyon ve cephe uygulamaları gerçekleştirdik. Kuzey Kıbrıs'ın en köklü ve sağlam firmalarından biri olan Emtan Construction'ın tercih ettiği uzman ekibimiz, şap altı izolasyondan çatı yalıtımına, ıslak hacim uygulamalarından iç ve dış cephe boyalarına kadar projenin her aşamasında kalite ve titizlikle çalışmalarını tamamladı.`,
    coverImage: "/images/projects/emtan-quattro/cover.jpg",
    services: [
      {
        title: "Şap Altı İzolasyon",
        description:
          "Quattro Girne projesinde balkonlarda ve dış mekanlarda şap altı su yalıtımı ve koruyucu keçe uygulaması gerçekleştirdik. Kıbrıs'ın değişken iklim koşullarında bu uygulama, yapının uzun yıllar su ve nem sorunlarından korunmasını sağlayarak dayanıklılığını artırmaktadır.",
      },
      {
        title: "Perde Duvar İzolasyonu",
        description:
          "Emtan Quattro'nun bina temelinde ve perde duvarlarda profesyonel su yalıtımı uygulamaları gerçekleştirdik. Girne'nin nemli havasına karşı, yapının zemin altı bölümlerinin su ve nem sorunlarına karşı uzun süreli korunmasını sağladık.",
      },
      {
        title: "Çatı İzolasyonu",
        description:
          "Bitüm esaslı izolasyon uygulamaları ile Quattro projesinin çatı yüzeyinde su sızıntılarına karşı tam koruma sağladık. Kıbrıs Girne'de su geçirmez bir katman oluşturarak yapısal sorunların önüne geçtik.",
      },
      {
        title: "Islak Hacim ve Balkon İzolasyonu",
        description:
          "Girne Quattro dairelerinde banyo, tuvalet ve balkon alanlarında profesyonel izolasyon uygulamaları gerçekleştirdik. Kıbrıs'taki izolasyon projelerimizde iç mekanlarda su sızıntılarına karşı tam koruma sağladık.",
      },
      {
        title: "İç Cephe Uygulamaları",
        description:
          "Girne Quattro projesi ön dükkanlar dahil olmak üzere iç mekanlarda titizlikle saten alçı uygulamaları yaptık. Pürüzsüz ve kaliteli yüzeyler elde ederek, mükemmel bir boya alt yapısı hazırladık.",
      },
      {
        title: "Dış Cephe Uygulamaları",
        description:
          "Quattro Girne'de dış cephe astarlaması ile binanın uzun ömürlü ve estetik bir görünüme kavuşması için profesyonel uygulama teknikleri kullandık. Kıbrıs ikliminde hava koşullarına dayanıklı, yüksek kaliteli malzemelerle çalıştık.",
      },
    ],
  },
  {
    slug: "merit-royal-premium",
    title: "Merit Royal Premium",
    type: "otel",
    typeLabel: "Otel Projesi",
    client: "Merit International Hotels",
    location: "Girne",
    shortDescription:
      "Lüks otel tesisinde havuz ve teras izolasyonu çalışmaları",
    fullDescription: `Kuzey Kıbrıs'ın prestijli otel zinciri Merit Oteller grubunun Girne'deki lüks tesisi Merit Royal Premium Hotel'de kapsamlı izolasyon ve su yalıtımı çalışmaları gerçekleştirdik. Havuz izolasyonundan teras seramik üstü uygulamalara, nem bariyer astar çalışmalarından özel elastik izolasyon sistemlerine kadar kaliteli malzemeler ve uzman ekibimizle tamamlanan bu projede, otel misafirlerine uzun ömürlü ve sorunsuz bir konaklama deneyimi sunulmasına katkıda bulunduk.`,
    coverImage: "/images/projects/merit-royal-premium/cover.jpg",
    services: [
      {
        title: "Havuz İzolasyonu",
        description:
          "Merit Royal Premium Hotel'in Girne'deki tesisinde havuz sistemlerinde nem bariyer astar uygulaması ve profesyonel su yalıtım çözümleri gerçekleştirdik. Kıbrıs'ın önde gelen otel projelerinde özel izolasyon tekniklerimizle havuzun uzun ömürlü kullanımını sağladık.",
      },
      {
        title: "Seramik Üstü Elastik İzolasyon",
        description:
          "Teras ve diğer alanlarda mevcut seramik yüzeyler üzerine Qis UVi elastik izolasyon sistemleri uyguladık. Girne'deki bu prestijli otelde serex astar ve tam elastik çözümlerle hem estetik görünümü koruyor hem de maksimum su geçirmezlik sağlıyoruz.",
      },
      {
        title: "Epoksi Astar ve Elastik İzolasyon",
        description:
          "Merit Royal Premium Girne'de epoksi astar uygulaması sonrası 2000 elastik izolasyon sistemiyle yüksek dayanıklılık ve esneklik sağlayan profesyonel çözümler sunduk. Kıbrıs iklim koşullarına uygun bu sistem ile otelin yapısal bütünlüğünü koruyoruz.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getOtherProjects(currentSlug: string): Project[] {
  return projects.filter((p) => p.slug !== currentSlug);
}

export function getProjectsByType(type: string): Project[] {
  if (type === "all") return projects;
  return projects.filter((p) => p.type === type);
}
