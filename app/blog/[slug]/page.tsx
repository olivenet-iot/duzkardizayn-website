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

  // Radya Temel İzolasyonu yazısı
  if (slug === 'radya-temel-izolasyonu-kibrista-neden-onemli') {
    return (
      <BlogContent>
        {/* Giriş */}
        <section id="giris">
          <h2>Giriş</h2>
          <p>
            <strong>Kuzey Kıbrıs&apos;ta radya temel izolasyonu</strong>, son yıllarda inşaat sektörünün en çok
            konuşulan konularından biri haline geldi. Ada genelinde yaşanan inşaat patlaması, beraberinde
            kalite bilincini de getirdi. Artık ev sahipleri ve yatırımcılar, yapılarının temelinden çatısına
            kadar her detayı sorguluyor.
          </p>
          <p>
            Bu kapsamlı rehberde, radya temel izolasyonunun ne olduğunu, Kıbrıs&apos;ta neden bu kadar kritik
            önem taşıdığını, uygulama tekniklerini ve dikkat edilmesi gereken noktaları detaylıca ele alacağız.
            25 yılı aşkın saha deneyimimizle, size pratik ve uygulanabilir bilgiler sunacağız.
          </p>
        </section>

        {/* Radya Temel Nedir */}
        <section id="radya-temel-nedir">
          <h2>Radya Temel Nedir?</h2>
          <p>
            <strong>Radya temel</strong> (İngilizce: raft foundation veya mat foundation), yapının tüm tabanını
            kaplayan tek parça betonarme plak şeklinde tasarlanan temel sistemidir. Geleneksel münferit (tekil)
            veya sürekli (şerit) temelden farklı olarak, bina yükünü geniş bir alana yayar.
          </p>
          <p>
            Bu temel tipi, özellikle zayıf zeminlerde, yüksek yeraltı suyu seviyesine sahip bölgelerde ve
            bodrum kat yapılacak projelerde tercih edilir. Girne, Gazimağusa ve Güzelyurt gibi kıyı
            bölgelerinde yaygın olarak kullanılmaktadır.
          </p>

          <InfoBox type="info" title="Radya Temel vs Münferit Temel">
            <p>
              <strong>Radya temel:</strong> Yapının tüm tabanını kaplayan tek parça betonarme plaktır.
              Yük dağılımı eşit, çökme riski düşüktür.
            </p>
            <p>
              <strong>Münferit temel:</strong> Her kolon altında ayrı temel bloğu bulunur. Sağlam zeminlerde
              ekonomiktir ancak farklı çökmelere karşı hassastır.
            </p>
            <p>
              Kıbrıs&apos;ın değişken zemin yapısında, özellikle bodrum katlı yapılarda radya temel daha güvenlidir.
            </p>
          </InfoBox>

          <h3>Radya Temelin Yapısal Avantajları</h3>
          <ul>
            <li>Yükü geniş alana yayarak zemin basıncını azaltır</li>
            <li>Farklı çökmeleri (differential settlement) minimize eder</li>
            <li>Bodrum kat için su yalıtımına uygun düz yüzey sağlar</li>
            <li>Deprem yüklerini daha iyi dağıtır</li>
            <li>Zayıf zeminlerde güvenli taşıma kapasitesi sunar</li>
          </ul>
        </section>

        {/* Neden Zorunlu */}
        <section id="neden-zorunlu">
          <h2>Kıbrıs&apos;ta Radya Temel İzolasyonu Neden Zorunlu Hale Geldi?</h2>
          <p>
            Son 10-15 yıl içinde Kuzey Kıbrıs&apos;ta inşaat anlayışı köklü bir değişim geçirdi. Eskiden
            &quot;nasıl olsa yapılır&quot; mantığıyla atlatılan temel izolasyonu, bugün bilinçli tüketiciler
            ve profesyonel müteahhitler için vazgeçilmez bir uygulama haline geldi.
          </p>

          <h3>Değişimin Nedenleri</h3>
          <p>
            Geçmişte izolasyonsuz yapılan binalarda yaşanan ciddi sorunlar, sektörde farkındalık yarattı.
            Bodrum katlarında biriken sular, küf oluşumu, zemin kaplamalarında kabarma ve hatta yapısal
            hasarlar, maliyetli onarımlara neden oldu.
          </p>
          <p>
            Uluslararası standartlara uyum çabaları ve yabancı yatırımcıların beklentileri de bu değişimi
            hızlandırdı. Bugün Girne&apos;de satılan lüks dairelerin neredeyse tamamında temel izolasyonu
            standart uygulama haline geldi.
          </p>

          <h3>Yasal Düzenleme Beklentisi</h3>
          <p>
            Henüz zorunlu bir mevzuat bulunmasa da, sektör profesyonelleri yakın gelecekte temel izolasyonunun
            yasal zorunluluk haline geleceğini öngörüyor. Bilinçli müteahhitler, bu beklentiyi karşılamak için
            şimdiden standartlarını yükseltti.
          </p>
        </section>

        {/* Tehdit Faktörleri */}
        <section id="tehdit-faktorleri">
          <h2>Radya Temeli Tehdit Eden Faktörler</h2>
          <p>
            Temel izolasyonu yapılmayan yapılarda, çeşitli faktörler ciddi hasarlara yol açar. Bu faktörleri
            anlamak, izolasyonun neden bu kadar kritik olduğunu kavramak için önemlidir.
          </p>

          <h3>Hidrostatik Basınç (Yeraltı Suyu Basıncı)</h3>
          <p>
            Yeraltı su seviyesi yüksek olan bölgelerde, su betona sürekli basınç uygular. Bu basınç,
            betonun gözeneklerinden suyun yapı içine sızmasına neden olur. Özellikle kış aylarında
            yükselen yeraltı suyu, izolasyonsuz temellerde ciddi sızıntılara yol açar.
          </p>

          <h3>Kılcal Nem Yükselişi</h3>
          <p>
            Topraktan gelen nem, kılcal damarlar gibi betonun içinden yükselir. Bu olay &quot;capillary rise&quot;
            olarak bilinir ve izolasyonsuz temellerde kaçınılmazdır. Yükselen nem, döşemelerde ıslaklık,
            duvarlarda tuz çiçeklenmesi ve boya dökülmelerine neden olur.
          </p>

          <h3>Tuzlu Su Etkisi</h3>
          <p>
            Girne, Gazimağusa ve İskele gibi kıyı bölgelerinde yeraltı suyundaki tuz oranı yüksektir.
            Tuzlu su, beton içindeki demir donatıları hızla paslandırır. Bu durum, betonun çatlamasına
            ve yapısal dayanımın azalmasına yol açar.
          </p>

          <InfoBox type="warning" title="Girne Kıyı Bölgeleri Özel Risk">
            <p>
              Alsancak, Lapta, Karaoğlanoğlu ve Çatalköy gibi denize yakın bölgelerde yeraltı su seviyesi
              çok yüksektir (1-3 metre). Bu alanlarda deniz suyu etkisi de eklendiğinde, standart izolasyon
              yeterli olmayabilir.
            </p>
            <p>
              <strong>Öneri:</strong> Bu bölgelerde polimer modifiyeli, çift kat membran uygulaması ve
              ek drenaj sistemleri kullanılmalıdır.
            </p>
          </InfoBox>

          <h3>Sıcaklık Değişimleri</h3>
          <p>
            Kıbrıs&apos;ın sert yaz sıcakları ve ılıman kışları, betonda genleşme-büzülme hareketlerine neden olur.
            Bu hareketler, izolasyon membranlarında gerilme yaratır. Kalitesiz malzeme veya hatalı uygulama,
            bu hareketlere dayanamaz ve yırtılır.
          </p>
        </section>

        {/* Kıbrıs Toprak ve İklim */}
        <section id="kibris-toprak-iklim">
          <h2>Kıbrıs Toprak ve İklim Koşulları</h2>
          <p>
            Kuzey Kıbrıs&apos;ın jeolojik yapısı ve iklim özellikleri, temel izolasyonu kararlarını doğrudan etkiler.
            Farklı bölgelerde farklı risk seviyeleri bulunur.
          </p>

          <h3>Bölgesel Zemin Özellikleri</h3>
          <p>
            Ada genelinde zemin yapısı oldukça değişkendir. Kıyı bölgelerinde kumlu ve kayalık zemin,
            iç kesimlerde killi ve kireçli toprak yapısı hakimdir. Bu farklılıklar, izolasyon stratejisini
            belirler.
          </p>

          <ComparisonTable
            caption="Bölgelere Göre Zemin ve Su Durumu"
            headers={['Bölge', 'Zemin Tipi', 'Yeraltı Su Seviyesi', 'Risk Düzeyi']}
            rows={[
              { cells: ['Girne Kıyı', 'Kumlu-Kayalık', 'Yüksek (1-3m)', 'Çok Yüksek'], highlight: true },
              { cells: ['Girne İç Kesim', 'Kireçli-Kayalık', 'Orta (3-6m)', 'Yüksek'] },
              { cells: ['Lefkoşa', 'Killi-Kireçli', 'Düşük (6-10m)', 'Orta'] },
              { cells: ['Gazimağusa Kıyı', 'Kumlu', 'Yüksek (1-4m)', 'Çok Yüksek'], highlight: true },
              { cells: ['Güzelyurt', 'Alüvyon', 'Değişken', 'Yüksek'] },
              { cells: ['İskele', 'Kumlu-Killi', 'Yüksek (2-5m)', 'Yüksek'] },
            ]}
          />

          <h3>Mevsimsel Faktörler</h3>
          <p>
            Kış aylarında (Kasım-Mart) yağışlarla birlikte yeraltı su seviyesi yükselir. Bu dönemde
            izolasyonsuz temeller en fazla risk altındadır. Yaz aylarında ise buharlaşma nedeniyle
            seviye düşse de, kılcal nem yükselişi devam eder.
          </p>
        </section>

        {/* Uygulama Teknikleri */}
        <section id="uygulama-teknikleri">
          <h2>Radya Temel İzolasyonu Uygulama Teknikleri</h2>
          <p>
            Başarılı bir temel izolasyonu, doğru teknik ve dikkatli işçilik gerektirir. Her aşama,
            bir sonrakinin temelini oluşturur. Profesyonel ekipler, bu süreçte standartlara tam uyum sağlar.
          </p>

          <StepByStep
            title="Radya Temel İzolasyonu Uygulama Aşamaları"
            steps={[
              {
                title: 'Zemin Hazırlığı',
                description: 'Grobeton dökümü yapılır ve yüzey düzeltilir. Sivri noktalar, çıkıntılar ve boşluklar giderilir. Yüzey temizlenir ve tozdan arındırılır.',
              },
              {
                title: 'Astar Uygulaması',
                description: 'Bitüm esaslı soğuk astar (primer) tüm yüzeye fırça veya rulo ile uygulanır. Astar, membranın betona yapışmasını sağlar. Kuruma süresi: 4-6 saat.',
              },
              {
                title: 'Membran Serimi',
                description: 'Bitümlü membran ruloları açılır. Şaloma (gaz brülörü) ile alt yüzey eritilerek betona yapıştırılır. Sıcak uygulama, tam yapışma sağlar.',
              },
              {
                title: 'Bindirme Kaynatma',
                description: 'Membran ruloları arasında minimum 10 cm bindirme bırakılır. Bindirme noktaları şaloma ile kaynatılarak su geçirmez bağlantı sağlanır.',
              },
              {
                title: 'Detay Noktaları',
                description: 'Kolon dipleri, tesisat geçişleri ve köşeler özel bantlarla güçlendirilir. Bu noktalar, sızıntı riskinin en yüksek olduğu yerlerdir.',
              },
              {
                title: 'Kaynak Kontrolü',
                description: 'Tüm birleşim noktaları ve kenarlar kontrol edilir. Şüpheli bölgeler test edilir, gerekirse tamir yapılır.',
              },
              {
                title: 'Koruyucu Tabaka',
                description: 'Membran üzerine keçe veya koruyucu levha serilir. Bu tabaka, demir bağlama sırasında membranın zarar görmesini önler.',
              },
            ]}
          />

          <h3>Kritik Detay Noktaları</h3>
          <p>
            Temel izolasyonunda en sık sorun yaşanan noktalar, detay bölgeleridir. Kolon çevreleri,
            boru geçişleri ve temel-perde duvar birleşimleri özel dikkat gerektirir. Bu noktalarda
            ek bantlar ve takviye membranlar kullanılır.
          </p>
        </section>

        {/* Malzemeler */}
        <section id="malzemeler">
          <h2>Kullanılan Malzemeler</h2>
          <p>
            Temel izolasyonunda kullanılan malzemenin kalitesi, uygulamanın ömrünü doğrudan etkiler.
            Kıbrıs koşullarına uygun, dayanıklı ve esnek malzemeler tercih edilmelidir.
          </p>

          <ComparisonTable
            caption="Membran Türleri Karşılaştırması"
            headers={['Özellik', '3mm Membran', '4mm Membran', 'Polimer Modifiyeli']}
            rows={[
              { cells: ['Kalınlık', '3mm', '4mm', '4-5mm'] },
              { cells: ['Esneklik', 'Orta', 'İyi', 'Çok İyi'], highlight: true },
              { cells: ['Sıcaklık Dayanımı', '-5°C / +80°C', '-10°C / +90°C', '-20°C / +100°C'] },
              { cells: ['Uygulama Alanı', 'Standart', 'Yüksek su basıncı', 'Zorlu koşullar'], highlight: true },
              { cells: ['Tahmini Ömür', '15-20 yıl', '20-25 yıl', '25-30 yıl'] },
              { cells: ['Önerilen Bölge', 'İç kesimler', 'Genel kullanım', 'Kıyı bölgeleri'] },
            ]}
          />

          <h3>Bitüm Esaslı Membranlar</h3>
          <p>
            En yaygın kullanılan temel izolasyon malzemesidir. Okside bitüm veya polimer modifiyeli
            bitüm kaplı, polyester veya cam tülü taşıyıcılı olarak üretilir. Şaloma ile sıcak uygulama
            yapılır.
          </p>

          <h3>Polimer Modifiyeli Membranlar (SBS/APP)</h3>
          <p>
            SBS (Stiren Bütadien Stiren) veya APP (Ataktik Polipropilen) katkılı membranlar, standart
            bitümlü membranlara göre daha esnektir. Sıcaklık değişimlerine ve yapısal hareketlere daha
            iyi dayanır. Kıyı bölgelerinde tercih edilir.
          </p>

          <InfoBox type="tip" title="Doğru Membran Seçimi">
            <p>
              Her proje için tek bir &quot;en iyi&quot; membran yoktur. Seçim, zemin koşullarına, yeraltı su
              seviyesine ve bütçeye göre yapılmalıdır.
            </p>
            <p>
              <strong>Öneri:</strong> Girne kıyı bölgelerinde minimum 4mm, polimer modifiyeli membran
              kullanın. İç kesimlerde 3mm standart membran yeterli olabilir.
            </p>
          </InfoBox>

          <h3>Astar ve Yardımcı Malzemeler</h3>
          <ul>
            <li><strong>Bitüm Astar:</strong> Membranın betona yapışmasını sağlar</li>
            <li><strong>Köşe Bantları:</strong> İç ve dış köşelerde takviye sağlar</li>
            <li><strong>Boru Manşetleri:</strong> Tesisat geçişlerinde su geçirmezlik sağlar</li>
            <li><strong>Koruyucu Keçe:</strong> Membranı mekanik hasardan korur</li>
          </ul>
        </section>

        {/* İzolasyonsuz Sonuçlar */}
        <section id="izolasyonsuz-sonuclar">
          <h2>İzolasyonsuz Temelin Sonuçları</h2>
          <p>
            Temel izolasyonu yapılmamış yapılarda, kısa ve uzun vadede çeşitli sorunlar ortaya çıkar.
            Bu sorunlar, hem yaşam kalitesini düşürür hem de ciddi ekonomik kayıplara yol açar.
          </p>

          <h3>Kısa Vadeli Etkiler</h3>
          <ul>
            <li>Bodrum zemininde ıslaklık ve su birikintisi</li>
            <li>Duvar diplerinde nem halkaları</li>
            <li>Küf ve mantar kokusu</li>
            <li>Zemin kaplamalarında kabarma</li>
          </ul>

          <h3>Uzun Vadeli Yapısal Hasarlar</h3>
          <p>
            Sürekli nem etkisinde kalan betonarme elemanlarda, demir donatılar paslanmaya başlar.
            Paslanan demir genleşir ve betonu çatlatır. Bu süreç, yapının taşıma kapasitesini zayıflatır.
          </p>

          <h3>Sağlık Riskleri</h3>
          <p>
            Nemli ortamlar, küf ve mantar sporlarının üremesi için idealdir. Bu sporlar, solunum yolu
            hastalıklarına, alerjilere ve astım ataklarına neden olabilir. Özellikle çocuklar ve
            yaşlılar için ciddi sağlık riskleri oluşturur.
          </p>

          <CheckList
            title="Temelde İzolasyon Sorunu Belirtileri"
            variant="warning"
            items={[
              'Bodrum duvarlarda beyaz tuz lekeleri (efflorescence)',
              'Zemin kaplamada kabarma veya kalkma',
              'Küf ve mantar kokusu (özellikle kapalı alanlarda)',
              'Duvar diplerinde sürekli nem halkası',
              'Boyada kabartı, dökülme ve renk değişimi',
              'Metal elemanlarda (kapı kasaları, raflar) paslanma',
              'Ahşap mobilya ve döşemelerde çürüme',
              'Kış aylarında artan nem ve yoğuşma',
            ]}
          />
        </section>

        {/* Yeni İnşaat */}
        <section id="yeni-insaat">
          <h2>Yeni İnşaatta Dikkat Edilmesi Gerekenler</h2>
          <p>
            Yeni bir inşaat projesinde temel izolasyonu, projenin başından itibaren planlanmalıdır.
            Doğru planlama ve takip, uzun vadede sorunsuz bir yapı garantisi sağlar.
          </p>

          <h3>Proje Aşamasında</h3>
          <p>
            Zemin etüdü raporlarını inceleyin. Yeraltı su seviyesi, zemin cinsi ve taşıma kapasitesi
            bilgileri, izolasyon stratejisini belirler. Mimar ve mühendislerle izolasyon detaylarını
            tartışın.
          </p>

          <h3>Müteahhit Seçimi</h3>
          <p>
            Temel izolasyonu deneyimi olan, referanslı müteahhitlerle çalışın.
            <Link href="/projeler">Tamamladığımız projelerde</Link> olduğu gibi, izolasyon
            uygulamalarını belgeleme alışkanlığı olan firmalar tercih edilmelidir.
          </p>

          <CheckList
            title="İnşaat Takip Listesi"
            items={[
              'Temel kazısı sonrası drenaj durumu kontrol edildi mi?',
              'Grobeton yüzey düzgün ve temiz mi?',
              'Astar uygulaması tam kurudu mu?',
              'Membran bindirmeleri minimum 10cm mi?',
              'Kaynak noktaları düzgün yapıldı mı?',
              'Detay noktaları (kolonlar, borular) takviye edildi mi?',
              'Koruyucu tabaka uygulandı mı?',
              'Demir bağlama öncesi hasar kontrolü yapıldı mı?',
              'Uygulama fotoğrafları çekildi mi?',
            ]}
          />
        </section>

        {/* Mevcut Binalar */}
        <section id="mevcut-binalar">
          <h2>Mevcut Binalarda Temel İzolasyonu</h2>
          <p>
            İnşaat aşamasında izolasyon yapılmamış binalarda, sonradan müdahale mümkün mü?
            Bu soru, birçok ev sahibinin aklını meşgul ediyor. Cevap karmaşık ama umut var.
          </p>

          <h3>Sonradan Müdahale Yöntemleri</h3>
          <p>
            Mevcut binalarda temel izolasyonu, dışarıdan klasik membran uygulaması gibi yapılamaz.
            Ancak alternatif çözümler mevcuttur:
          </p>
          <ul>
            <li><strong>Enjeksiyon Yöntemi:</strong> Duvar ve döşeme içine su itici kimyasallar enjekte edilir</li>
            <li><strong>İç Mekan Drenajı:</strong> Bodrum çevresine drenaj kanalları ve pompa sistemi kurulur</li>
            <li><strong>Negatif Yönlü İzolasyon:</strong> Suyla temas eden iç yüzeye özel sıvalar uygulanır</li>
          </ul>

          <InfoBox type="tip" title="Sonradan Müdahale Seçenekleri">
            <p>
              Mevcut binalarda yapılan uygulamalar, tam bir çözüm olmaktan çok semptom tedavisidir.
              Enjeksiyon ve iç izolasyon yöntemleri, sorunu kontrol altına alabilir ancak
              orijinal izolasyonun yerini tutmaz.
            </p>
            <p>
              <strong>En etkili çözüm:</strong> Yeni inşaatta, temel aşamasında profesyonel izolasyon
              uygulaması yaptırmaktır. Bu nedenle <Link href="/blog/kuzey-kibrista-izolasyonun-onemi">
              izolasyonun önemi</Link> konusundaki rehberimizi de incelemenizi öneririz.
            </p>
          </InfoBox>

          <h3>Beklentileri Yönetmek</h3>
          <p>
            Sonradan yapılan müdahalelerin sınırları vardır. Tam bir kuruluk sağlanamayabilir,
            ancak sorun önemli ölçüde azaltılabilir. Profesyonel değerlendirme, gerçekçi
            beklentiler oluşturmanıza yardımcı olur.
          </p>
        </section>

        {/* Profesyonel Uygulama */}
        <section id="profesyonel-uygulama">
          <h2>Profesyonel Uygulama Neden Önemli?</h2>
          <p>
            Temel izolasyonu, &quot;kendin yap&quot; projesi değildir. Bu kritik uygulama, deneyimli ustalar
            ve profesyonel ekipman gerektirir. Hatalı uygulama, hiç yapmamaktan daha kötü sonuçlar
            doğurabilir.
          </p>

          <h3>DIY Riskleri</h3>
          <ul>
            <li>Yetersiz yüzey hazırlığı nedeniyle yapışma sorunları</li>
            <li>Hatalı bindirme ve kaynak, sızıntı noktaları oluşturur</li>
            <li>Detay noktalarının atlanması</li>
            <li>Şaloma kullanımında güvenlik riskleri</li>
            <li>Garanti ve sigorta kapsamı dışında kalma</li>
          </ul>

          <h3>Profesyonel Ekibin Avantajları</h3>
          <p>
            Deneyimli bir <Link href="/hizmetler/izolasyon-ve-su-yalitimi">izolasyon firması</Link>,
            sadece uygulama yapmaz; projeyi değerlendirir, doğru malzemeyi seçer ve garantili
            iş teslim eder.
          </p>
          <ul>
            <li>Zemin ve su koşullarına uygun malzeme seçimi</li>
            <li>Standartlara uygun uygulama teknikleri</li>
            <li>Kalite kontrol ve test prosedürleri</li>
            <li>Yazılı garanti ve belgeleme</li>
            <li>Uygulama sonrası destek</li>
          </ul>
        </section>

        {/* Sonuç */}
        <section id="sonuc">
          <h2>Sonuç</h2>
          <p>
            <strong>Kuzey Kıbrıs&apos;ta radya temel izolasyonu</strong>, artık lüks değil zorunluluktur.
            Adanın jeolojik yapısı, yüksek yeraltı su seviyeleri ve iklim koşulları, bu uygulamayı
            vazgeçilmez kılmaktadır.
          </p>
          <p>
            Bu rehberde ele aldığımız ana noktaları özetleyelim:
          </p>
          <ul>
            <li>Radya temel, özellikle bodrum katlı yapılarda tercih edilen güvenli bir temel sistemidir</li>
            <li>Kıbrıs&apos;ın kıyı bölgelerinde yeraltı suyu ve tuz etkisi, temel izolasyonunu zorunlu kılar</li>
            <li>Doğru malzeme seçimi ve profesyonel uygulama, 25-30 yıl sorunsuz koruma sağlar</li>
            <li>İzolasyonsuz temeller, yapısal hasarlara ve sağlık sorunlarına yol açar</li>
            <li>Yeni inşaatta baştan planlama, mevcut binalarda ise profesyonel değerlendirme şarttır</li>
          </ul>
          <p>
            Düzkar Dizayn olarak, 25 yılı aşkın deneyimimizle Girne, Lefkoşa, Gazimağusa ve tüm
            Kuzey Kıbrıs genelinde profesyonel temel izolasyonu hizmetleri sunuyoruz. Yeni projeniz
            veya mevcut binanız için ücretsiz keşif ve danışmanlık almak isterseniz, bizimle
            iletişime geçebilirsiniz.
          </p>

          <CheckList
            title="Profesyonel Temel İzolasyonunda Aradığınız Özellikler"
            items={[
              'Sektörde uzun yıllara dayanan deneyim',
              'Tamamlanmış proje referansları',
              'Kaliteli ve garantili malzeme kullanımı',
              'Yazılı sözleşme ve garanti belgesi',
              'Uygulama fotoğrafları ve belgeleme',
              'Uygulama sonrası teknik destek',
            ]}
          />
        </section>
      </BlogContent>
    );
  }

  if (slug === 'kktcde-nem-sorunu-sebebi-ve-cozumu') {
    return (
      <BlogContent>
        {/* Giriş */}
        <section id="giris">
          <h2>Giriş</h2>
          <p>
            <strong>KKTC&apos;de nem sorunu</strong>, ev sahiplerinin en sık şikâyet ettiği yapı
            sorunlarının başında geliyor. Duvarda beliren sarımtırak lekeler, pencerelerin
            sürekli buğulanması, bodrum katta hissedilen o boğucu rutubet kokusu ya da tavanda
            yayılan siyah küf izleri — bunların hepsi aynı temele işaret ediyor: yapının neme
            karşı yeterince korunmamış olması.
          </p>
          <p>
            Şunu ilk başta açıkça söyleyelim: Kuzey Kıbrıs&apos;ta nem sorunu yaşıyorsanız
            yalnız değilsiniz. 25 yıldır bu sektörde çalışan bir ekip olarak, KKTC genelinde
            ziyaret ettiğimiz yapıların büyük çoğunluğunda bir şekilde nem sorunuyla
            karşılaşıyoruz. Kimi zaman küçük bir balkon sızıntısı, kimi zaman temelden yükselen
            kronik bir rutubet, kimi zaman da yıllardır fark edilmemiş teras hasarı.
          </p>
          <p>
            Pek çok ev sahibi bu sorunu yanlış teşhis ediyor ve geçici çözümlere başvuruyor.
            &quot;Havalandırmayı artırayım&quot;, &quot;bir nem giderici cihaz alayım&quot; ya da
            &quot;üstüne boya vurdurayım, geçer&quot; deniliyor. Oysa nem sorununu kalıcı olarak
            çözmenin tek yolu kaynağını doğru tespit edip profesyonel izolasyon uygulamaktır.
            Aksi takdirde problem büyümeye devam eder, onarım maliyeti her yıl katlanır ve en
            önemlisi, içinde yaşayan insanların sağlığı risk altına girer.
          </p>
          <p>
            Bu kapsamlı rehberde, KKTC&apos;deki binaların neden bu kadar sık nem problemiyle
            karşılaştığını, farklı nem türlerini nasıl ayırt edeceğinizi, evde uygulayabileceğiniz
            teşhis yöntemlerini ve her nem türü için kalıcı çözüm seçeneklerini ayrıntılı biçimde
            ele alıyoruz.
          </p>
        </section>

        {/* Nem Kaynakları */}
        <section id="nem-kaynaklari">
          <h2>KKTC&apos;de Nem Sorunlarının Temel Kaynakları</h2>
          <p>
            Kuzey Kıbrıs&apos;ta nem sorunları, diğer Akdeniz ülkelerine kıyasla daha yaygın ve
            yoğun yaşanır. Bu durumun arkasında birbirini besleyen birkaç temel neden yatmaktadır.
            Bu nedenleri anlamadan etkili bir çözüm geliştirmek mümkün değil.
          </p>

          <h3>1. Deniz İklimi ve Tuzlu Nem</h3>
          <p>
            Girne başta olmak üzere KKTC&apos;nin kıyı şeridindeki yapılar, denizden gelen tuzlu
            ve nemli hava akımına gün boyu maruz kalır. Bu durum, çok daha hızlı bir bozulma
            sürecini tetikler. Tuzlu nem betona ve sıvaya normal nemden çok daha agresif biçimde
            işler; boya dökülmelerine, sıva patlamalarına ve yapının iskeletini oluşturan
            demirde hızlı korozyona yol açar.
          </p>
          <p>
            Bu etki denize yakın yapılarda çok daha belirgin olmakla birlikte, denizden 500-1000
            metre mesafede bile gözlemlenebilir. Özellikle batı cephesi ve kuzey cephesi —
            hâkim rüzgârların geldiği yönler — bu açıdan en savunmasız noktalardır.
          </p>

          <h3>2. Kil Oranı Yüksek Toprak Yapısı</h3>
          <p>
            KKTC&apos;nin büyük bölümünde kil içeriği yüksek toprak yapısı hâkimdir. Kilin temel
            özelliği suyu emmesi ve uzun süre bünyesinde tutmasıdır — yani kil toprak,
            doğal bir nem deposu gibi davranır. Kış yağışlarının yoğun olduğu Kasım-Mart
            döneminde bu topraklar tamamen doygun hale gelir ve temel ile bodrum duvarlarına
            sürekli hidrostatik nem baskısı uygular.
          </p>
          <p>
            Profesyonel izolasyon yapılmamış bir temelde bu nem, zamanla beton gözeneklerinden
            sızarak içeriye ulaşır. İlk yıllarda fark edilmeyebilir; ancak 5-10 yıl sonra
            bodrum katında küf, tuz lekesi ve yapısal hasar olarak kendini gösterir.
          </p>

          <h3>3. Sıcaklık Farkları ve Genleşme-Büzülme Döngüsü</h3>
          <p>
            Kıbrıs&apos;ta yaz aylarında 40°C&apos;yi aşan sıcaklıklar, kışın 8-10°C&apos;ye kadar
            düşer. Bu yaklaşık 30 derecelik mevsimsel sıcaklık farkı, bina malzemelerinin sürekli
            genleşip büzülmesine neden olur. Beton, tuğla, sıva ve boya — her biri farklı
            genleşme katsayısına sahip bu malzemeler, farklı hızlarda hareket eder.
          </p>
          <p>
            Yıllar içinde bu mikro hareketler birikir ve gözle görülemeyen ince çatlaklar oluşur.
            Bu çatlaklar, su ve nem girişinin önündeki en önemli engeli ortadan kaldırır.
            Oluşan hasarı ne kadar erken fark ederseniz, müdahale maliyeti o kadar düşük olur.
          </p>

          <h3>4. Düz Çatı Geleneği</h3>
          <p>
            KKTC&apos;deki binaların ezici çoğunluğu düz çatı veya teras sistemine sahiptir.
            Mimaride yaygın olan bu tercih, su yönetimi açısından eğimli çatılara kıyasla çok
            daha büyük risk taşır. Eğimli bir çatıda yağmur suyu hızla akar gider; düz bir çatıda
            ise su yüzeyde bekler, birikir ve zamanla zayıf noktalara sızar.
          </p>
          <p>
            Doğru izolasyon yapılmamış veya izolasyonu eskimiş bir düz çatıda, yağmur suyu
            beton içine işler ve yıllarca fark edilmeden ilerlediği olur. Tavan boyasındaki küçük
            leke, aslında yıllardır birikmiş hasarın görünür hale gelmesidir.
          </p>

          <h3>5. Yaşlı Bina Stoku</h3>
          <p>
            1990&apos;lar ve öncesinde inşa edilen binaların büyük çoğunluğunda su yalıtımı ya
            hiç yapılmamış ya da günümüz standartlarının çok gerisinde kalmıştır. O dönemde
            kullanılan bitümlü malzemelerin ömrü 15-20 yıl civarındadır; dolayısıyla bu
            yapılarda mevcut izolasyon çoktan işlevini yitirmiştir. Bu binaların bir kısmında
            nem, artık kronik ve yapısal bir sorun haline gelmiştir.
          </p>
          <p>
            Yeni bir daire satın alıyorsanız veya kiralıyorsanız, binanın izolasyon geçmişini
            mutlaka sorgulayın. Özellikle 2005 öncesi yapılarda bu soru kritik öneme sahiptir.
          </p>

          <h3>6. Hatalı veya Eksik Uygulama</h3>
          <p>
            Son olarak ve belki de en önemli faktör: Deneyimsiz ekiplerce yapılan hatalı
            izolasyon uygulamaları. Membranın yeterli bindirme yapılmadan serilmesi, detay
            noktalarının (kolon dipleri, boru geçişleri, duvar-döşeme birleşimleri) atlanması,
            yüzeyin yeterince hazırlanmadan uygulama yapılması — bunların her biri, kısa sürede
            tekrar eden sızıntılara yol açar.
          </p>
          <p>
            &quot;İzolasyon yaptırdım ama bir yıl geçmeden yeniden sızdı&quot; diyenlerin büyük
            çoğunluğunda sorun malzemede değil, uygulamadadır.
          </p>
        </section>

        {/* Nem Çeşitleri */}
        <section id="nem-cesitleri">
          <h2>Nem Çeşitleri ve Nasıl Ayırt Edilir?</h2>
          <p>
            Nem sorunlarını çözmek için önce hangi nem türüyle karşı karşıya olduğunuzu doğru
            anlamak gerekir. Her nem türünün kaynağı farklıdır ve dolayısıyla çözümü de farklıdır.
            Yanlış teşhis, hem zaman hem para kaybına neden olur.
          </p>

          <h3>Yükselen Nem (Kapiler Nem)</h3>
          <p>
            Bu nem türü, topraktaki suyun kılcal kanallar aracılığıyla duvar malzemesinin
            içine emilmesi ve yukarı doğru çıkmasıyla oluşur. Kıbrıs&apos;ta özellikle kil
            topraklı bölgelerde çok yaygındır.
          </p>
          <p>
            <strong>Belirtileri:</strong> Zemin kattan başlayan ve duvarda 50-150 cm yüksekliğe
            kadar çıkabilen ıslak lekeler. Duvarda beyaz tuz birikintileri (eflorasan) ve boya
            kabarmalar. Sıva dökülmeleri. Bodrum veya zemin katta toprak ve rutubet kokusu.
          </p>
          <p>
            <strong>En belirgin özelliği:</strong> Mevsimden bağımsız olarak devam etmesidir.
            Yazın da, yağmursuz dönemlerde de ıslaklık gözlemleniyorsa, bu büyük ihtimalle
            yükselen nemdir.
          </p>

          <h3>Sızdırma Nemi (Lateral Nem)</h3>
          <p>
            Yağmur suyu veya dış ortam nemi, çatlak, derz veya yetersiz izolasyon noktasından
            yapı içine girer. Çatı, teras, balkon, dış duvar veya pencere çerçevelerinden
            kaynaklanabilir.
          </p>
          <p>
            <strong>Belirtileri:</strong> Yağmurla birlikte belirginleşen ve kuruyan lekeler.
            Pencere veya kapı kenarlarında ıslaklık. Balkon tavanında (alt daire için) su damlaması.
            Çatı ve tavanda yağmur sonrası ıslak izler.
          </p>
          <p>
            <strong>En belirgin özelliği:</strong> Yağmurla doğrudan korelasyon göstermesidir.
            Yağmur başladıktan 24-48 saat sonra ıslaklık beliriyorsa veya artıyorsa, sızdırma
            nemi kuvvetle muhtemeldir.
          </p>

          <h3>Kondansasyon (Yoğuşma) Nemi</h3>
          <p>
            İç mekândaki ılık ve nemli hava, soğuk bir yüzeyle temas ettiğinde o yüzeyde
            yoğuşur. Bu nem türü özellikle kış aylarında ve kötü havalandırılan mekânlarda
            yoğunlaşır.
          </p>
          <p>
            <strong>Belirtileri:</strong> Pencere camlarında ve çerçevelerinde yoğuşma.
            Dış köşelerde ve soğuk köprü oluşan noktalarda küf. Banyo ve mutfak tavanlarında
            sürekli ıslaklık. Sabahları belirginleşen, öğleden sonra azalan nem.
          </p>
          <p>
            <strong>En belirgin özelliği:</strong> Belli bölgelerde yoğunlaşması ve
            havalandırmayla kısmen azalmasıdır. Ancak köklü çözüm ısı yalıtımıdır;
            havalandırma geçici rahatlama sağlar.
          </p>

          <h3>Bodrum ve Temel Nemi (Hidrostatik Basınç)</h3>
          <p>
            Yeraltı suyu veya topraktan gelen nem, temel ve bodrum duvarlarına dışarıdan basınç
            uygular. Bu nem türü KKTC&apos;de en çok hasara yol açan türdür ve en pahalı
            onarımı gerektiren formdur.
          </p>
          <p>
            <strong>Belirtileri:</strong> Bodrum katında toprak kokusu ve zemin ıslaklığı.
            Duvarda 50-100 cm yüksekliğinde yatay su lekesi. Zemin ile duvar birleşim
            noktasında sızıntı. Beyaz eflorasan birikintileri. Kış aylarında belirginleşme.
          </p>
          <p>
            Bu nem türünde zaman kritiktir. Yeraltı suyu baskısıyla giren nem, beton içindeki
            demiri oksitler ve yapısal dayanım azalmaya başlar.
          </p>
        </section>

        {/* Sağlık Etkileri */}
        <section id="saglik-etkileri">
          <h2>Nemin Sağlığa ve Yapıya Etkileri</h2>
          <p>
            Çoğu kişi nem sorununu estetik bir mesele olarak değerlendiriyor: &quot;Biraz boyayı
            kaldırmış, görüntü kötü.&quot; Oysa nem, hem yaşayanların sağlığına hem de binanın
            yapısal bütünlüğüne çok daha derin zarar verir.
          </p>

          <h3>Sağlık Üzerindeki Etkileri</h3>
          <p>
            Nemli ortamlar, küf mantarlarının ve bakteri kolonilerinin üremesi için ideal
            koşullar sağlar. Bu mikroorganizmalar havaya spor salar ve solunum sistemi üzerinden
            vücuda girer. Etkiler, maruziyetin süresine ve kişinin bağışıklık durumuna göre
            değişir:
          </p>
          <ul>
            <li>
              <strong>Solunum yolu sorunları:</strong> Kronik öksürük, bronşit, hırıltılı
              nefes. Astım hastalarında atak sıklığının artması.
            </li>
            <li>
              <strong>Alerjik reaksiyonlar:</strong> Küf sporları güçlü bir alerjen kaynağıdır.
              Devamlı hapşırma, göz sulanması, burun akıntısı.
            </li>
            <li>
              <strong>Baş ağrısı ve yorgunluk:</strong> Uzun süre kapalı ve nemli ortamda
              kalmak, oksijen alımını olumsuz etkiler.
            </li>
            <li>
              <strong>Çocuklarda büyüme ve gelişme etkileri:</strong> Özellikle bebek ve
              küçük çocuklar solunum yolu enfeksiyonlarına karşı çok daha hassastır.
            </li>
            <li>
              <strong>Uzun vadeli immün sistem zayıflaması:</strong> Kronik küf maruziyeti,
              bağışıklık sistemini sürekli meşgul ederek genel direnci düşürür.
            </li>
          </ul>
          <p>
            Dünya Sağlık Örgütü (WHO), iç mekân küf sorununu ciddi bir halk sağlığı riski
            olarak tanımlamaktadır. Özellikle çocukları olan aileler, yaşlılar veya kronik
            hastalığı bulunan kişiler için nem sorunu yaşayan bir evde kalmak, gerçek bir
            sağlık tehdidi oluşturmaktadır.
          </p>

          <h3>Yapıya Etkileri ve Onarım Maliyetleri</h3>
          <p>
            Nem sorununu ertelemenin en somut sonucu, onarım maliyetinin katlanarak artmasıdır.
            Küçük bir çatı sızıntısının 1 yılda sebep olduğu hasar, erken müdahaleye kıyasla
            5-10 kat daha pahalıya onarılabilir hale gelir.
          </p>
          <ul>
            <li>
              <strong>Demir korozyonu:</strong> Beton içindeki donatı demiri paslandığında,
              oksit tabakası demirin hacmini artırır ve betonu içten çatlatır. Bu &quot;beton
              çürümesi&quot; olarak bilinen durum, yapısal taşıma kapasitesini ciddi ölçüde
              düşürür.
            </li>
            <li>
              <strong>Sıva ve boya hasarı:</strong> Islanan sıva önce kabarır, sonra dökülür.
              Her boya döngüsünde sorun derinleşir; alttaki nem giderilmeden yapılan boya
              3-6 ayda yeniden kabarmaya başlar.
            </li>
            <li>
              <strong>Ahşap bozulması:</strong> Parke, kapı kasaları, ahşap döşemeler ve
              çatı makasları nemin doğrudan hedefindedir. Çürüme ve mantar oluşumu
              başladığında ahşabı kurtarmak çoğu zaman mümkün olmaz.
            </li>
            <li>
              <strong>Isı yalıtımı performans kaybı:</strong> Mantolama sistemindeki EPS
              veya taş yünü levhalar ıslandığında ısı iletim katsayıları bozulur; enerji
              tasarrufunun büyük bölümü ortadan kalkar.
            </li>
            <li>
              <strong>Mülk değer kaybı:</strong> KKTC&apos;de gayrimenkul satın almadan önce
              nem kontrolü yapan alıcı sayısı giderek artıyor. Nem sorunlu bir daire veya
              villa, piyasa değerinin %15-25 altında satılmak zorunda kalabiliyor.
            </li>
          </ul>
        </section>

        {/* Teşhis */}
        <section id="teshis">
          <h2>Nem Kaynağını Nasıl Teşhis Edersiniz?</h2>
          <p>
            Doğru çözüme ulaşmak için önce nem kaynağını doğru tespit etmek gerekir.
            Profesyonel bir uzman her zaman yerinde inceleme yapmalıdır; ancak başvurmadan
            önce kendiniz de bir ön değerlendirme yapabilirsiniz.
          </p>

          <h3>Alüminyum Folyo Testi (Duvar Testi)</h3>
          <p>
            En pratik ve güvenilir ev testi budur. Nem gördüğünüz duvara yaklaşık 30x30 cm
            boyutunda alüminyum folyo yapıştırın, dört kenarını bant veya mastik ile hava
            almayacak şekilde kapatın. 48 saat bekleyin ve folyoyu kaldırın.
          </p>
          <ul>
            <li>
              <strong>Folio&apos;nun duvar tarafı ıslaksa:</strong> Nem duvarın içinden geliyor.
              Yükselen nem veya dışarıdan sızma söz konusu. İzolasyon müdahalesi gerekli.
            </li>
            <li>
              <strong>Folio&apos;nun oda tarafı ıslaksa:</strong> Nem havadan kaynaklanıyor.
              Kondansasyon problemi var. Önce havalandırma, ardından ısı yalıtımı değerlendirin.
            </li>
            <li>
              <strong>Her iki taraf da ıslaksa:</strong> Kombinasyon sorunu mevcut. Kesinlikle
              profesyonel değerlendirme gerekir.
            </li>
          </ul>

          <h3>Bağıl Nem Ölçümü (Higrometre)</h3>
          <p>
            Uygun fiyatlı bir dijital higrometre ile iç mekân nem düzeyini ölçebilirsiniz.
            İdeal iç mekân bağıl nem oranı %40-55 arasındadır.
          </p>
          <ul>
            <li>%55-65: Dikkat edilmesi gereken yüksek nem. Havalandırma artırılmalı.</li>
            <li>%65-75: Yüksek nem. Kondansasyon riski var; kalıcı önlem alınmalı.</li>
            <li>%75 üzeri: Kritik düzey. Küf oluşumu kaçınılmaz; acil müdahale gerekli.</li>
          </ul>

          <h3>Mevsimsel Gözlem Takibi</h3>
          <p>
            Nem sorununun mevsimsel değişimini takip etmek, kaynağı anlamak açısından çok
            değerlidir:
          </p>
          <ul>
            <li>
              <strong>Yalnızca yağmurla artıyorsa:</strong> Sızdırma nemi. Çatı, teras, balkon
              veya dış duvarda bir izolasyon açığı var.
            </li>
            <li>
              <strong>Her mevsim sabittir, yağmurla değişmiyorsa:</strong> Yükselen nem veya
              hidrostatik temel baskısı.
            </li>
            <li>
              <strong>Kışın artıyor, yazın azalıyorsa:</strong> Kondansasyon baskın olabilir;
              veya kış dönemindeki yağış ve yeraltı suyu yükselmesiyle temel nemi.
            </li>
          </ul>

          <h3>Tuz Lekesi (Eflorasan) Analizi</h3>
          <p>
            Duvarda beyaz, pudra benzeri birikintiler gördüğünüzde bu eflorasandır —
            suyun buharlaşmasıyla geride kalan mineral tuzları. Bu leke; suyun uzun süredir
            o duvardan geçtiğini, dolayısıyla aktif bir nem yolunun varlığını gösterir.
            Sadece yüzeyi silmek sorunu çözmez; nem yolu kesilmeden eflorasan tekrar oluşmaya
            devam eder.
          </p>
        </section>

        {/* Çözüm Yöntemleri */}
        <section id="cozum-yontemleri">
          <h2>Kalıcı Çözüm Yöntemleri</h2>
          <p>
            Her nem türünün çözümü farklıdır. Aşağıda en yaygın nem sorunları ve her biri için
            kalıcı çözüm yöntemlerini bulacaksınız.
          </p>

          <h3>Çatı ve Teras İzolasyonu</h3>
          <p>
            KKTC&apos;de en yaygın nem giriş noktası düz çatı ve teraslardır. Çözüm için
            temel adımlar şöyle sıralanır:
          </p>
          <ul>
            <li>
              <strong>Mevcut kaplama sökülür:</strong> Eski izolasyon, seramik veya şap
              kaldırılır. Altındaki hasar tespit edilir.
            </li>
            <li>
              <strong>Yüzey onarımı ve temizliği:</strong> Çatlaklar onarılır, toz ve kirler
              temizlenir. Astar uygulaması yapılır.
            </li>
            <li>
              <strong>Membran uygulaması:</strong> KKTC iklimi için UV dayanımlı, elastik
              bitüm esaslı membran serilir. Birleşim noktaları şaloma ile kaynaklanır.
              Minimum 10 cm bindirme yapılır.
            </li>
            <li>
              <strong>Detay noktaları:</strong> Duvar diplerine, bacalara, çatı çıkışlarına
              özel takviye uygulanır. Bu noktalar en çok zorlandığı yerlerdir.
            </li>
            <li>
              <strong>Koruyucu kaplama:</strong> Membran üzeri gezilir alanlarda şap veya
              seramikle, gezilmez alanlarda ise UV koruyucu boya ile kaplanır.
            </li>
          </ul>
          <p>
            Detaylı bilgi için{' '}
            <Link href="/hizmetler/izolasyon-ve-su-yalitimi">
              teras ve çatı izolasyonu hizmetlerimizi
            </Link>{' '}
            inceleyebilirsiniz.
          </p>

          <h3>Balkon ve Islak Hacim İzolasyonu</h3>
          <p>
            Çok katlı binalarda balkon sızıntısı, alt komşuyla en sık anlaşmazlık yaratan
            konuların başında gelir. Seramik altına elastik çift bileşenli su yalıtımı
            uygulaması, hem balkonda hem de banyo ve mutfak gibi ıslak hacimlerde kalıcı
            çözüm sağlar.
          </p>
          <p>
            Uygulama aşamaları: Mevcut seramik söküm → yüzey temizliği → astar → 2 kat
            elastik membran uygulaması (köşe ve drenaj detaylarıyla birlikte) → yeni seramik
            döşeme. Seramik sökmeden yapılan &quot;üst izolasyon&quot; geçici bir çözümdür;
            kalıcı sonuç için alttaki kaynağa ulaşmak gerekir.
          </p>

          <h3>Temel ve Perde Duvar İzolasyonu</h3>
          <p>
            Bu, en kritik ve en pahalı izolasyon müdahalesinin gerektiği alandır. Çözüm
            yaklaşımı binanın durumuna ve erişim imkânına göre farklılaşır:
          </p>
          <ul>
            <li>
              <strong>Dışarıdan uygulama (en etkili yöntem):</strong> Yapı etrafındaki
              zemin kazılır, temel duvarı açığa çıkarılır. Yüzey temizlenir, bitüm esaslı
              astar ve membran uygulanır. Drenaj levhası ve geotekstil keçe eklenir. Zemin
              geri doldurulur. Bu yöntem, suyu kaynağında keserek içeriye girişini engeller.
            </li>
            <li>
              <strong>İçeriden uygulama (alternatif):</strong> Kazı yapma imkânı olmayan
              durumlarda bodrum iç yüzeyine kristalize su yalıtımı sıvası uygulanır. Bu
              yöntem daha az etkili olmakla birlikte iyi bir alternatiftir.
            </li>
            <li>
              <strong>Enjeksiyon yöntemi:</strong> Çatlak ve derzlere basınçlı poliüretan
              veya epoksi enjeksiyonu yapılır. Aktif su sızıntısını durdurmak için kullanılır.
            </li>
          </ul>

          <h3>Dış Cephe ve Mantolama</h3>
          <p>
            Kondansasyon kaynaklı nem için en kalıcı çözüm ısı yalıtımıdır. Dış cepheye
            uygulanan mantolama sistemi, duvarın yüzey sıcaklığını artırarak soğuk köprüleri
            ortadan kaldırır ve iç yüzeyde yoğuşmayı önler.
          </p>
          <p>
            Buna ek olarak, dış cephe boyası seçimi de büyük önem taşır. Su itici, nefes
            alabilen (difüzyon açık) ve UV dayanımlı silikonlu cephe boyaları, nem geçişini
            önemli ölçüde azaltır. Ucuz akrilik boyalar ise kısa sürede çatlayarak nem
            girişine zemin hazırlar.{' '}
            <Link href="/hizmetler/ic-ve-dis-cephe-uygulamalari">
              Dış cephe uygulama hizmetlerimiz
            </Link>{' '}
            hakkında daha fazla bilgi alabilirsiniz.
          </p>

          <h3>Havalandırma ve Kullanım Alışkanlıkları</h3>
          <p>
            Kondansasyon kaynaklı nem için yapısal önlemlerin yanı sıra bazı pratik alışkanlıklar
            da önemlidir:
          </p>
          <ul>
            <li>Banyo ve mutfakta her kullanım sonrası en az 15 dakika havalandırın.</li>
            <li>Çamaşırları mümkünse dışarıda veya kurutucuda kuruyun, kapalı mekânda asmayın.</li>
            <li>Kış aylarında günde en az iki kez 5-10 dakika çapraz havalandırma yapın.</li>
            <li>Mobilyaları soğuk dış duvara yapıştırmayın; 5-10 cm boşluk bırakın.</li>
            <li>Klima iç ünitelerini düzenli temizletin — kirli filtreler nem ve küf yuvasına dönüşür.</li>
          </ul>
          <p>
            Bu önlemler tek başına ciddi bir nem sorununu çözmez; ancak izolasyon uygulaması
            sonrasında sorunun tekrarlanma riskini önemli ölçüde azaltır.
          </p>
        </section>

        {/* Ne Zaman Uzman */}
        <section id="ne-zaman-uzman">
          <h2>Ne Zaman Mutlaka Uzman Çağırmalısınız?</h2>
          <p>
            Bazı nem sorunları havalandırma ve kullanım alışkanlıklarıyla kontrol altına
            alınabilir. Ancak aşağıdaki belirtilerden herhangi biri varsa, profesyonel
            değerlendirmeyi ertelemeyin:
          </p>
          <ul>
            <li>
              Nem lekesi veya küf, boyama ve sıva tamiratından sonra 3-6 ay içinde yeniden
              çıkıyorsa — bu döngü, altta yatan sorunun çözülmediğinin en net göstergesidir.
            </li>
            <li>
              Bodrum veya zemin katta toprak kokusu, zemin ıslaklığı veya tuz birikintisi varsa.
            </li>
            <li>
              Duvarda kabarma, çatlak veya eflorasan birden fazla noktada gözlemleniyorsa.
            </li>
            <li>
              Yağmur sonrasında tavan veya duvarda aktif su damlaması ya da belirgin ıslak iz oluşuyorsa.
            </li>
            <li>
              Birden fazla odada aynı anda nem sorunu ortaya çıktıysa — bu yaygın hasar
              olduğuna işaret eder.
            </li>
            <li>
              Bina 20 yaşın üzerindeyse ve izolasyon geçmişi bilinmiyorsa — önleyici
              inceleme, büyük hasarın önüne geçer.
            </li>
          </ul>
          <p>
            Düzkar Dizayn olarak <strong>Girne, Lefkoşa, Gazimağusa ve tüm KKTC genelinde</strong>{' '}
            ücretsiz keşif hizmeti sunuyoruz. Uzmanlarımız yerinde inceleme yaparak nemin
            gerçek kaynağını tespit eder, kalıcı çözüm önerir ve maliyeti şeffaf biçimde
            açıklar. Hiçbir ek ücret olmadan.
          </p>
        </section>

        {/* Sonuç */}
        <section id="sonuc">
          <h2>Sonuç: Nemi Ertelemeyin</h2>
          <p>
            KKTC&apos;deki nem sorunları, adanın iklimi, toprak yapısı ve bina stoku
            göz önüne alındığında, yapısal bir gerçektir. Ancak &quot;her bina böyledir,
            alışmak gerekir&quot; yaklaşımı hem sağlığınızı hem de mülk değerinizi tehlikeye atar.
          </p>
          <p>
            Doğru teşhis ve kalıcı izolasyon uygulamasıyla nem sorunu tamamen çözülebilir.
            Bu rehberde ele aldığımız ana noktaları özetleyelim:
          </p>
          <ul>
            <li>
              KKTC&apos;de nem sorunlarının arkasında genellikle birden fazla kaynak yatar —
              deniz iklimi, kil toprak, düz çatı geleneği ve yaşlı bina stoku.
            </li>
            <li>
              Yükselen nem, sızdırma nemi, kondansasyon ve temel nemi farklı belirtiler
              gösterir; doğru teşhis için alüminyum folyo testi ve mevsimsel gözlem yapın.
            </li>
            <li>
              Nem sadece estetik değil, sağlık ve yapısal güvenlik sorunudur. Erken müdahale
              maliyeti, geç müdahalenin onda biri kadardır.
            </li>
            <li>
              Boya ve sıva tamiri geçici çözümdür; kalıcı sonuç için izolasyon kaynağa
              uygulanmalıdır.
            </li>
          </ul>
          <p>
            25 yılı aşkın deneyimimizle KKTC genelinde yüzlerce yapıda nem ve su sızıntısı
            sorununu kalıcı olarak çözdük. Merit Park Hotel, Merit Royal Premium, Emtan West
            Park gibi büyük ölçekli projelerden tek daire uygulamalarına kadar her
            ölçekte çalışıyoruz.
          </p>
          <p>
            Evinizde veya işyerinizde nem problemi yaşıyorsanız,{' '}
            <Link href="/#iletisim">
              bizimle iletişime geçin
            </Link>
            . Uzmanlarımız ücretsiz keşfe gelsin, gerçek kaynağı tespit etsin ve size
            dürüst, kalıcı bir çözüm önersin.
          </p>
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
