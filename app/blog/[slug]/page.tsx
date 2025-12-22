import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  BlogHero,
  BlogContent,
  BlogSidebar,
  RelatedPosts,
  InfoBox,
  ComparisonTable,
  CheckList,
  StepByStep,
} from '@/components/blog';
import { CTASection } from '@/components/services';
import { getBlogBySlug, getAllBlogPosts, getRelatedPosts } from '@/lib/blog';

// Static params for SSG
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: 'Yazı Bulunamadı | Düzkar Dizayn',
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags,
    alternates: {
      canonical: `https://duzkardizayn.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://duzkardizayn.com/blog/${post.slug}`,
      images: [{ url: post.coverImage }],
      locale: 'tr_TR',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.coverImage],
    },
  };
}

// Blog içerik bileşenleri - İlk yazı için
function BlogPostContent({ slug }: { slug: string }) {
  if (slug === 'kuzey-kibrista-izolasyonun-onemi') {
    return (
      <BlogContent>
        {/* Giriş */}
        <section id="giris">
          <h2>Giriş</h2>
          <p>
            <strong>Kuzey Kıbrıs&apos;ta izolasyon</strong>, yapıların uzun ömürlü olması ve yaşam konforunun sağlanması
            için kritik öneme sahiptir. Akdeniz ikliminin zorlu koşulları, özellikle yaz aylarındaki yoğun sıcaklar
            ve kış dönemindeki nem problemleri, binaları sürekli olarak olumsuz etkilemektedir.
          </p>
          <p>
            Bu kapsamlı rehberde, Kıbrıs ikliminin yapılara etkilerini, izolasyonsuz binalarda yaşanan sorunları,
            farklı izolasyon türlerini ve ev alırken dikkat edilmesi gereken noktaları detaylı olarak ele alacağız.
            25 yılı aşkın sektör deneyimimizle, sizlere pratik bilgiler ve uzman önerileri sunacağız.
          </p>
        </section>

        {/* Kıbrıs İklimi */}
        <section id="kibris-iklimi">
          <h2>Kıbrıs İkliminin Özellikleri</h2>
          <p>
            Kuzey Kıbrıs, tipik bir <strong>Akdeniz iklimine</strong> sahiptir. Yazları sıcak ve kurak, kışları ılık ve
            yağışlı geçer. Ancak bu genel tanımın ötesinde, yapıları etkileyen spesifik iklim özellikleri bulunmaktadır.
          </p>

          <h3>Yaz Aylarının Etkileri</h3>
          <p>
            Haziran&apos;dan Eylül&apos;e kadar süren yaz döneminde, sıcaklıklar sıklıkla 35-40°C&apos;ye ulaşır.
            Girne, Lefkoşa ve Gazimağusa gibi şehirlerde güneş ışınları, özellikle çatı ve teras yüzeylerini
            yoğun şekilde ısıtır. İzolasyonsuz çatılarda yüzey sıcaklığı 70°C&apos;yi geçebilir.
          </p>

          <h3>Kış Ayları ve Nem Problemi</h3>
          <p>
            Kasım&apos;dan Mart&apos;a kadar süren dönemde, yağış miktarı artar ve nem oranı %70-80 seviyelerine çıkar.
            Bu dönemde özellikle deniz kenarındaki yapılarda tuz etkisi de eklenince, izolasyon eksikliği ciddi
            sorunlara yol açar.
          </p>

          <ComparisonTable
            caption="Kıbrıs İklim Verileri (Aylık Ortalamalar)"
            headers={['Ay', 'Sıcaklık (°C)', 'Nem (%)', 'Yağış (mm)']}
            rows={[
              { cells: ['Ocak', '12', '75', '95'] },
              { cells: ['Şubat', '12', '72', '65'] },
              { cells: ['Mart', '14', '68', '45'] },
              { cells: ['Nisan', '18', '62', '20'] },
              { cells: ['Mayıs', '23', '58', '10'] },
              { cells: ['Haziran', '28', '52', '2'], highlight: true },
              { cells: ['Temmuz', '32', '48', '0'], highlight: true },
              { cells: ['Ağustos', '33', '50', '0'], highlight: true },
              { cells: ['Eylül', '29', '55', '5'] },
              { cells: ['Ekim', '24', '62', '25'] },
              { cells: ['Kasım', '18', '70', '55'] },
              { cells: ['Aralık', '14', '75', '90'] },
            ]}
          />

          <h3>Deniz Kenarı Tuz Etkisi</h3>
          <p>
            Girne sahil şeridi ve Gazimağusa kıyılarında, denizden gelen tuzlu hava yapı malzemelerini
            hızla aşındırır. Bu bölgelerde <Link href="/hizmetler/izolasyon-ve-su-yalitimi">profesyonel izolasyon</Link>
            {' '}uygulaması, yapının ömrünü uzatmak için zorunludur.
          </p>
        </section>

        {/* İzolasyonsuz Sorunlar */}
        <section id="izolasyonsuz-sorunlar">
          <h2>İzolasyonsuz Binalarda Yaşanan Sorunlar</h2>
          <p>
            İzolasyon yapılmamış veya yetersiz izolasyona sahip binalarda zamanla ciddi problemler ortaya çıkar.
            Bu sorunlar hem yapısal hasarlara hem de sağlık problemlerine yol açabilir.
          </p>

          <h3>Nem ve Küf Oluşumu</h3>
          <p>
            Kış aylarında dış ortam ile iç ortam arasındaki sıcaklık farkı, yoğuşmaya neden olur.
            Duvar yüzeylerinde biriken nem, küf ve mantar oluşumuna zemin hazırlar. Bu durum özellikle
            yatak odaları ve banyolarda sık görülür.
          </p>

          <h3>Su Sızıntıları</h3>
          <p>
            Çatı ve teras izolasyonu yapılmamış binalarda, yağmur suları yapı içine sızar. Bu sızıntılar
            başlangıçta küçük lekeler şeklinde görünse de, zamanla ciddi yapısal hasarlara dönüşür.
          </p>

          <h3>Enerji Kaybı</h3>
          <p>
            İzolasyonsuz binalarda yazın klima, kışın ısıtma maliyetleri yükselir. Yapılan araştırmalar,
            doğru izolasyon uygulamasının enerji maliyetlerini %30-50 oranında düşürdüğünü göstermektedir.
          </p>

          <h3>Yapısal Hasarlar</h3>
          <p>
            Uzun süre nem etkisinde kalan betonarme yapılarda, demir donatılar paslanır ve beton çatlar.
            Bu durum, yapının taşıyıcı sistemini zayıflatarak güvenlik riski oluşturur.
          </p>

          <CheckList
            title="Evinizdeki İzolasyon Sorunlarını Tespit Edin"
            variant="warning"
            items={[
              'Duvarlarda nem lekeleri veya renk değişimi var mı?',
              'Köşelerde veya pencerelere yakın bölgelerde küf oluşumu görülüyor mu?',
              'Kış aylarında duvarlar dokunulduğunda soğuk mu hissediliyor?',
              'Çatı altındaki odalar yazın çok mu sıcak?',
              'Pencere çevrelerinde su birikintileri oluşuyor mu?',
              'Tavan veya duvarlarda boya kabarmları var mı?',
              'Elektrik faturanız komşulara göre yüksek mi?',
              'Evde küf kokusu hissediliyor mu?',
            ]}
          />
        </section>

        {/* İzolasyon Türleri */}
        <section id="izolasyon-turleri">
          <h2>İzolasyon Türleri ve Uygulama Alanları</h2>
          <p>
            Farklı yapı bölümleri, farklı izolasyon tekniklerini gerektirir. Kıbrıs iklim koşullarına uygun
            başlıca izolasyon türlerini ve uygulama alanlarını inceleyelim.
          </p>

          <h3>Temel İzolasyonu</h3>
          <p>
            Binanın temelinden gelen yeraltı suyunun yapıya zarar vermesini önler. Özellikle Girne&apos;nin
            belirli bölgelerinde yeraltı su seviyesi yüksektir ve temel izolasyonu kritik önem taşır.
          </p>

          <h3>Çatı ve Teras İzolasyonu</h3>
          <p>
            Kıbrıs&apos;ta binaların büyük çoğunluğu düz çatılıdır. Bu çatılar hem yağmur suyuna hem de güneş
            ışınlarına doğrudan maruz kalır. Profesyonel çatı izolasyonu, hem su yalıtımı hem de ısı
            yalıtımı sağlamalıdır.
          </p>

          <h3>Balkon İzolasyonu</h3>
          <p>
            Balkonlar, su sızıntısı riskinin en yüksek olduğu bölümlerdir. Yanlış eğim, yetersiz drenaj veya
            izolasyon eksikliği, alt kattaki dairelerde ciddi hasarlara yol açar.
          </p>

          <h3>Islak Hacim İzolasyonu</h3>
          <p>
            Banyo, mutfak ve tuvalet gibi su kullanılan mekanlar, özel izolasyon gerektiren bölümlerdir.
            Bu alanlarda su yalıtımı yapılmazsa, komşu odalara ve alt katlara sızıntı kaçınılmazdır.
          </p>

          <h3>Mantolama (Dış Cephe Isı Yalıtımı)</h3>
          <p>
            Binanın dış yüzeyine uygulanan ısı yalıtım sistemidir. Yazın serin, kışın sıcak tutarak
            hem konforu artırır hem de enerji tasarrufu sağlar. <Link href="/hizmetler/ic-ve-dis-cephe-uygulamalari">Cephe uygulamaları</Link>
            {' '}hakkında daha fazla bilgi alabilirsiniz.
          </p>

          <ComparisonTable
            caption="İzolasyon Türleri Karşılaştırması"
            headers={['İzolasyon Türü', 'Uygulama Alanı', 'Koruma', 'Önem Derecesi']}
            rows={[
              { cells: ['Temel İzolasyonu', 'Bodrum, Temel', 'Yeraltı suyu', 'Çok Yüksek'], highlight: true },
              { cells: ['Çatı İzolasyonu', 'Çatı, Teras', 'Yağmur, Güneş', 'Çok Yüksek'], highlight: true },
              { cells: ['Balkon İzolasyonu', 'Balkonlar', 'Yağmur suyu', 'Yüksek'] },
              { cells: ['Islak Hacim', 'Banyo, Mutfak', 'Kullanım suyu', 'Yüksek'] },
              { cells: ['Mantolama', 'Dış Cephe', 'Isı transferi', 'Orta-Yüksek'] },
              { cells: ['Havuz İzolasyonu', 'Havuz', 'Havuz suyu', 'Çok Yüksek'] },
            ]}
          />
        </section>

        {/* İzolasyon Malzemeleri */}
        <section id="izolasyon-malzemeleri">
          <h2>İzolasyon Malzemeleri</h2>
          <p>
            Doğru malzeme seçimi, izolasyonun başarısını doğrudan etkiler. Kıbrıs iklimi için uygun
            malzemeler ve özellikleri hakkında bilgi sahibi olmak önemlidir.
          </p>

          <h3>Bitüm Esaslı Membranlar</h3>
          <p>
            En yaygın kullanılan su yalıtım malzemesidir. Şalümeli (torch-on) veya yapışmalı olarak
            uygulanabilir. Çatı, teras ve temel izolasyonunda tercih edilir. Elastikiyeti sayesinde
            yapıdaki küçük hareketlere uyum sağlar.
          </p>

          <h3>Likit (Sıvı) Membranlar</h3>
          <p>
            Fırça veya rulo ile uygulanan tek veya çift bileşenli su yalıtım malzemeleridir.
            Karmaşık detaylarda ve köşelerde kolaylık sağlar. Özellikle balkon ve teras izolasyonunda
            tercih edilir.
          </p>

          <h3>Poliüretan Köpük</h3>
          <p>
            Hem su yalıtımı hem de ısı yalıtımı sağlayan çok fonksiyonlu bir malzemedir. Püskürtme
            tekniğiyle uygulanır ve yüzeye tam yapışarak derzsiz bir kaplama oluşturur.
          </p>

          <h3>EPS/XPS Levhalar</h3>
          <p>
            Isı yalıtımı için kullanılan köpük plastik levhalardır. Mantolama sistemlerinde ve
            çatı ısı yalıtımında yaygın olarak kullanılır. XPS levhalar, nem direnci sayesinde
            zemine temas eden uygulamalarda tercih edilir.
          </p>

          <InfoBox type="tip" title="Doğru Malzeme Seçimi">
            <p>
              Her uygulama alanı için farklı malzemeler idealdir. Örneğin, temel izolasyonunda su basıncına
              dayanıklı malzemeler şart iken, çatıda UV dayanımı önemlidir. Profesyonel bir keşif ve
              değerlendirme ile uygulamanız için en doğru malzeme belirlenmelidir.
            </p>
          </InfoBox>
        </section>

        {/* Ev Alırken Kontrol */}
        <section id="ev-alirken-kontrol">
          <h2>Kıbrıs&apos;ta Ev Alırken İzolasyon Kontrolü</h2>
          <p>
            Kuzey Kıbrıs&apos;ta emlak yatırımı yaparken, izolasyon durumunu değerlendirmek kritik öneme sahiptir.
            Özellikle ikinci el konutlarda, izolasyon sorunları ciddi maliyetlere yol açabilir.
          </p>

          <h3>Kontrol Edilecek Alanlar</h3>
          <p>
            Bir evi satın almadan önce mutlaka şu bölümleri detaylıca inceleyin: çatı ve teras yüzeyleri,
            bodrum kat (varsa), balkonlar, banyo ve mutfak döşemeleri, dış cephe ve duvar köşeleri.
          </p>

          <StepByStep
            title="Ev Alırken İzolasyon Kontrol Rehberi"
            steps={[
              {
                title: 'Görsel İnceleme Yapın',
                description: 'Duvar ve tavanlarda nem lekeleri, boya kabarmları, küf izleri olup olmadığını kontrol edin. Pencere çevrelerini özellikle inceleyin.',
              },
              {
                title: 'Çatıyı Kontrol Edin',
                description: 'Mümkünse çatıya çıkarak membran durumunu gözlemleyin. Çatlaklar, kabarmalar veya yırtıklar varsa not alın.',
              },
              {
                title: 'Balkonları İnceleyin',
                description: 'Balkon döşemesinde çatlaklar, derzlerde boşluklar ve süzgeç çevresinde sorun olup olmadığını kontrol edin.',
              },
              {
                title: 'Alt Katı Gözlemleyin',
                description: 'Eğer mümkünse alt kattaki dairenin tavanını görün. Üst kattan sızıntı izleri olabilir.',
              },
              {
                title: 'Belge Talep Edin',
                description: 'Yapılan izolasyon çalışmalarına dair garanti belgeleri ve uygulama raporlarını isteyin.',
              },
              {
                title: 'Uzman Görüşü Alın',
                description: 'Satın alma öncesinde profesyonel bir izolasyon firmasından ücretsiz keşif talep edin.',
              },
            ]}
          />
        </section>

        {/* Ne Zaman Yaptırmalı */}
        <section id="ne-zaman-yaptirmali">
          <h2>Ne Zaman İzolasyon Yaptırmalısınız?</h2>
          <p>
            İzolasyon uygulamasının zamanlaması, hem sonuçların kalitesini hem de maliyetleri etkiler.
            Doğru zamanlamayı bilmek önemlidir.
          </p>

          <h3>Yeni İnşaat Aşamasında</h3>
          <p>
            En ideal senaryo, izolasyonun inşaat aşamasında yapılmasıdır. Temel, çatı ve ıslak hacim
            izolasyonları, yapım esnasında uygulandığında hem daha ekonomik hem de daha etkilidir.
            Kıbrıs&apos;ta inşaat yaptırıyorsanız, izolasyonu projenin başından planlayın.
          </p>

          <h3>Mevcut Binalarda</h3>
          <p>
            Mevcut binalarda sorun tespit edildiğinde hemen müdahale edilmelidir. Küçük bir nem lekesi,
            zamanla büyük hasarlara dönüşebilir. <Link href="/projeler">Tamamladığımız projelerde</Link>
            {' '}gördüğümüz üzere, erken müdahale maliyetleri önemli ölçüde düşürür.
          </p>

          <h3>Mevsimsel Faktörler</h3>
          <p>
            Kıbrıs&apos;ta izolasyon çalışmaları için en uygun dönemler ilkbahar (Mart-Mayıs) ve
            sonbahar (Eylül-Kasım) aylarıdır. Bu dönemlerde hava koşulları, malzemelerin düzgün
            kuruyup yapışmasına izin verir.
          </p>

          <InfoBox type="warning" title="Gecikmenin Riskleri">
            <p>
              İzolasyon sorunlarını ertelemek, maliyetleri katlar. Örneğin, çatıdan sızan su sadece
              izolasyonu değil, alçı, boya, elektrik tesisatı ve mobilyaları da hasara uğratır.
              Bir nem lekesi gördüğünüzde, sorunu hemen araştırmanız önerilir.
            </p>
          </InfoBox>
        </section>

        {/* Sonuç */}
        <section id="sonuc">
          <h2>Sonuç ve Öneriler</h2>
          <p>
            Kuzey Kıbrıs&apos;ın iklim koşulları, yapılarda izolasyonu zorunlu kılmaktadır. Yaz sıcakları,
            kış yağışları ve deniz kenarı tuz etkisi, izolasyonsuz binaları hızla yıpratır.
          </p>
          <p>
            Bu rehberde ele aldığımız konuları özetleyecek olursak:
          </p>
          <ul>
            <li>Kıbrıs iklimi, yapılar için zorlu koşullar oluşturur</li>
            <li>İzolasyonsuz binalarda nem, küf ve yapısal hasarlar kaçınılmazdır</li>
            <li>Farklı bölümler için farklı izolasyon türleri gereklidir</li>
            <li>Doğru malzeme seçimi, uzun vadeli başarıyı belirler</li>
            <li>Ev alırken izolasyon kontrolü kritik önem taşır</li>
            <li>Sorunlara erken müdahale maliyetleri düşürür</li>
          </ul>
          <p>
            Düzkar Dizayn olarak, 25 yılı aşkın deneyimimizle Girne, Lefkoşa, Gazimağusa ve
            tüm Kuzey Kıbrıs genelinde profesyonel izolasyon hizmetleri sunuyoruz.
            Ücretsiz keşif ve danışmanlık için bizimle iletişime geçebilirsiniz.
          </p>

          <CheckList
            title="Profesyonel İzolasyonda Aradığınız Özellikler"
            items={[
              'Deneyimli ve referanslı firma',
              'Kaliteli ve garantili malzemeler',
              'Yazılı sözleşme ve garanti belgesi',
              'Uygulama sonrası destek',
              'Şeffaf iletişim ve raporlama',
            ]}
          />
        </section>
      </BlogContent>
    );
  }

  // Diğer blog yazıları için default content
  return (
    <BlogContent>
      <p>İçerik yüklenirken bir sorun oluştu.</p>
    </BlogContent>
  );
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <>
      <Header />

      {/* Hero */}
      <BlogHero post={post} />

      {/* İçerik */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Ana İçerik */}
            <div className="lg:col-span-2">
              <BlogPostContent slug={slug} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar post={post} />
            </div>
          </div>
        </div>
      </section>

      {/* İlgili Yazılar */}
      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}

      {/* CTA */}
      <CTASection
        title="Profesyonel İzolasyon Hizmeti"
        highlightedText="Almak İster Misiniz?"
        description="25 yılı aşkın deneyimimizle Kuzey Kıbrıs genelinde izolasyon, su yalıtımı ve cephe uygulamaları sunuyoruz. Ücretsiz keşif için hemen iletişime geçin."
        primaryButtonText="Ücretsiz Keşif Talep Et"
        primaryButtonHref="/#iletisim"
        secondaryButtonText="Hemen Ara"
        secondaryButtonHref="tel:+905488888503"
        trustBadges={[
          { text: "25+ Yıl Deneyim" },
          { text: "5 Yıl Garanti" },
          { text: "Ücretsiz Keşif" },
        ]}
      />

      <Footer />
    </>
  );
}
