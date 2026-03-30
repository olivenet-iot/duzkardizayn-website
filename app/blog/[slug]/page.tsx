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

  // Mantolama rehberi
  if (slug === 'kktcde-mantolama-nedir-ve-neden-onemli') {
    return (
      <BlogContent>
        {/* Giriş */}
        <section id="giris">
          <h2>Giriş</h2>
          <p>
            <strong>Mantolama</strong>, son yıllarda Kuzey Kıbrıs&apos;ta giderek daha fazla konuşulan bir inşaat
            ve yenileme terimi haline geldi. Enerji faturalarının artması, iklim değişikliğinin hissedilir
            etkiler bırakması ve bina sahiplerinin uzun vadeli yatırım bilincinin gelişmesiyle birlikte,
            mantolama sistemleri KKTC&apos;de ciddi bir ilgi görmeye başladı. Ancak &quot;mantolama nedir,
            gerçekten işe yarıyor mu, benim binama uygun mu?&quot; sorularına net yanıt bulmak hâlâ zor.
          </p>
          <p>
            Bu rehberde mantolama sistemini teknik düzeyde ele alıyoruz: ne olduğunu, katmanlarını,
            KKTC iklimine neden özellikle uygun olduğunu, EPS ve taş yünü sistemleri arasındaki farkları,
            doğru uygulama adımlarını ve en sık yapılan hataları kapsamlı biçimde inceliyoruz.
            25 yılı aşkın saha deneyimimizle derlenmiş bu rehber, hem bina sahiplerine hem de
            uygulamayı düşünenlere pratik bir yol haritası sunmayı amaçlıyor.
          </p>
          <p>
            KKTC&apos;de mantolama henüz zorunluluk değil ama enerji verimliliği ve yapı ömrü açısından
            değerlendirildiğinde, mantolama yaptırmamak giderek daha pahalı bir tercih haline geliyor.
            Ada genelinde — özellikle Girne kıyı şeridinde, Lefkoşa&apos;nın güneye bakan cephelerinde ve
            yüksek katlı apartmanlarda — mantolama uygulamaları artık standart hale geliyor.
          </p>
        </section>

        {/* Mantolama Nedir */}
        <section id="mantolama-nedir">
          <h2>Mantolama Nedir?</h2>
          <p>
            Teknik adıyla <strong>ETICS</strong> (External Thermal Insulation Composite System — Dışarıdan
            Isı Yalıtım Kompozit Sistemi), Türkçede &quot;mantolama&quot; olarak yerleşmiş olan bu sistem,
            binanın dış duvarlarına ısı yalıtımlı bir kabuk giydirme işlemidir. Amaç; yazın dışarıdan
            gelen ısının duvarı geçmesini engellemek, kışın ise içerideki ısının dışarıya kaçmasını
            önlemektir.
          </p>
          <p>
            Mantolama, basit bir boya ya da sıva uygulaması değildir. Birden fazla katmanın belirli
            bir sıra ve teknikle uygulandığı, her katmanın bir öncekine bağımlı olduğu bütüncül bir
            sistemdir. Bir katmandaki hata tüm sistemin performansını düşürür. Bu nedenle uygulama
            kalitesi, malzeme kalitesi kadar — hatta daha fazla — önem taşır.
          </p>

          <h3>Sistemin Katmanları</h3>
          <p>
            Standart bir mantolama sisteminde dışarıdan içeriye doğru şu katmanlar bulunur:
          </p>

          <StepByStep
            title="Mantolama Sistem Katmanları (İçten Dışa)"
            steps={[
              {
                title: 'Yapıştırıcı Harç',
                description: 'Yalıtım levhasının mevcut duvara yapıştırılmasını sağlar. Çimento bazlı özel yapıştırıcılar kullanılır. Yüzeyin temiz, düz ve kuru olması şarttır. Yapıştırıcı hem çevre hem de nokta yöntemiyle uygulanabilir; yüzeyin en az %40\'ı ile temas sağlanmalıdır.',
              },
              {
                title: 'Yalıtım Levhası',
                description: 'EPS (genişletilmiş polistiren) veya taş yünü levhalardan oluşur. Bu katman sistemin ısı yalıtım performansını belirler. Levhalar birbirine derzli (kademeli) yerleştirilir; aynı hizada derz bırakılması ısı köprüsü oluşturur.',
              },
              {
                title: 'Mekanik Dübeller',
                description: 'Yapıştırıcıya ek olarak, levhalar plastik diskli çelik dübeller ile duvara mekanik olarak bağlanır. Dübel sayısı ve konumu, binanın yüksekliği ile rüzgar yüküne göre hesaplanır. Bu katman, sistemin rüzgar ve çekme kuvvetlerine karşı direncini sağlar.',
              },
              {
                title: 'Donatı Katmanı (File + Macun)',
                description: 'Cam elyaf donatı filesi, özel polimer bazlı macun içine gömülür. Bu katman sisteme mekanik dayanıklılık kazandırır; çatlaklara, darbelere ve sıcaklık genleşmesine karşı koruma sağlar. File bindirme payları en az 10 cm olmalı, köşe ve kenarlarda çift kat uygulanmalıdır.',
              },
              {
                title: 'Son Kat Kaplama (Dekoratif Sıva)',
                description: 'Astar üzerine uygulanan ince renkli dekoratif sıva veya boya, sistemin hem estetik hem de hava ve yağmur koruması sağlayan dış yüzeyidir. Kıbrıs ikliminde UV dayanımı yüksek, su itici ürünler tercih edilmelidir.',
              },
            ]}
          />

          <p>
            Bu beş katman bir arada düşünülmeli ve her biri doğru malzeme ile doğru teknikte uygulanmalıdır.
            Katmanlardan herhangi birinin atlanması veya yanlış uygulanması, sistemin ömrünü ciddi
            ölçüde kısaltır.
          </p>

          <InfoBox type="info" title="Mantolama ile Dış Cephe Boyası Farkı">
            <p>
              Sıradan dış cephe boyası sadece görsel koruma sağlar. Mantolama ise fiziksel bir yalıtım
              katmanı ekler. Dış cephe boyası ısı geçişini durduramaz; mantolama durdurur. İkisi birbirini
              tamamlayabilir ancak biri diğerinin yerini alamaz.
            </p>
          </InfoBox>
        </section>

        {/* KKTC İkliminde Mantolama */}
        <section id="kktcde-mantolama">
          <h2>KKTC İkliminde Mantolama</h2>
          <p>
            Kuzey Kıbrıs, mantolama sistemlerinin en verimli sonuç verdiği iklim tiplerinden birine sahiptir.
            Yazın aşırı ısı yükü, kışın nem ve nem kaynaklı yoğuşma problemi, sahil bölgelerinde deniz
            tuzu etkisi ve enerji maliyetleri — tüm bu faktörler mantolama uygulamasını KKTC özelinde
            özellikle anlamlı kılar.
          </p>

          <h3>Yaz Sıcağı ve Isı Yükü (40°C+)</h3>
          <p>
            Haziran&apos;dan Eylül&apos;e kadar sıcaklıklar sıklıkla 38-42°C arasında seyreder. Güneye
            bakan cephelerde yüzey sıcaklığı 60-70°C&apos;ye ulaşır. Bu yüzey ısısının duvarı geçerek
            iç mekana iletilmesi, klima yükünü dramatik biçimde artırır. Mantolama bu ısı transferini
            keserek yazın iç mekan sıcaklığını 4-8°C daha düşük tutar. Orta büyüklükte bir evde bu,
            yaz boyunca klima faturasında %30-45 tasarruf anlamına gelir.
          </p>

          <h3>Kış Nemi ve Yoğuşma Problemi</h3>
          <p>
            Kuzey Kıbrıs kışları Orta Avrupa&apos;ya göre ılıman görünse de, nem oranı %70-80&apos;e
            ulaşır. Isıtılmamış veya az ısıtılan binalarda duvar yüzeyleri soğur; iç mekandaki nem
            taşıyan hava bu soğuk yüzeye temas ettiğinde yoğuşur. Zamanla duvar nemi, küf ve sıva
            dökülmesi ortaya çıkar. Mantolama, duvar yüzeyinin sıcaklığını artırarak yoğuşma riskini
            ortadan kaldırır. Bu özellikle zemin kat dairelerde ve kuzey cephelerde belirleyici bir
            fark yaratır.
          </p>

          <h3>Deniz Tuzu ve Korozyon Etkisi</h3>
          <p>
            Girne kıyı şeridinde ve Gazimağusa çevresinde denizden gelen tuzlu hava, betonu ve
            metal donatıları hızla aşındırır. Mantolama sistemi, dış duvara koruyucu bir kabuk
            oluşturarak tuz ve nemin beton ile donatıya ulaşmasını engeller. Bu sayede yapının
            betonarme ömrü uzar, pas ve çürüme riski azalır. Sahil bölgelerinde mantolama sadece
            enerji tasarrufu değil, yapısal koruma açısından da kritik bir yatırımdır.
          </p>

          <h3>Enerji Tasarrufu ve Geri Dönüş Süresi</h3>
          <p>
            KKTC&apos;de elektrik fiyatları son yıllarda belirgin biçimde yükseldi. Standart kalınlıkta
            (5 cm EPS) bir mantolama uygulaması, ortalama Kıbrıs evinde yıllık enerji giderini
            %30-40 azaltır. 150 m² bir daire için yatırım maliyeti ve enerji tasarrufu
            hesaplandığında, geri ödeme süresi genellikle 5-8 yıl arasında gerçekleşir. Üstelik
            mantolama, binanın değerini artırır ve dış cepheye yeni estetik kazandırır.
          </p>

          <ComparisonTable
            caption="Mantolama Öncesi ve Sonrası Karşılaştırma (KKTC Koşulları)"
            headers={['Parametre', 'Mantolamasız', 'Mantolama Sonrası']}
            rows={[
              { cells: ['Yaz iç mekan sıcaklığı', '28-32°C (klima çalışırken)', '24-26°C (daha az klima)'] },
              { cells: ['Kış yoğuşma riski', 'Yüksek (özellikle kuzey cephe)', 'Çok düşük veya sıfır'] },
              { cells: ['Yıllık enerji maliyeti', 'Baz değer', '%30-45 daha düşük'], highlight: true },
              { cells: ['Tuz ve nem penetrasyonu', 'Beton doğrudan maruz', 'Koruyucu kabuk var'] },
              { cells: ['Boya yenileme sıklığı', 'Her 5-7 yılda bir', 'Her 10-15 yılda bir'] },
              { cells: ['Bina piyasa değeri', 'Baz değer', '%5-15 artış potansiyeli'] },
            ]}
          />
        </section>

        {/* Sistem Seçimi */}
        <section id="sistem-secimi">
          <h2>Sistem Seçimi: EPS mi Taş Yünü mü?</h2>
          <p>
            Mantolama uygulamalarında kullanılan iki ana yalıtım malzemesi vardır: <strong>EPS</strong>
            {' '}(Expanded Polystyrene — Genişletilmiş Polistiren, yaygın adıyla strafor) ve
            <strong> taş yünü</strong> (mineral yünü). Her ikisi de ETICS sisteminde kullanılabilir
            ancak fiziksel özellikleri, maliyetleri ve ideal uygulama koşulları birbirinden farklıdır.
          </p>

          <h3>EPS (Strafor) Sisteminin Özellikleri</h3>
          <p>
            EPS, dünyada en yaygın kullanılan mantolama malzemesidir. Hafif yapısı, işlenmesi kolay
            olması ve düşük maliyeti nedeniyle tercih edilir.
          </p>
          <CheckList
            title="EPS Sisteminin Avantajları"
            items={[
              'Hafif: İskele ve uygulama maliyetlerini düşürür',
              'Ekonomik: Taş yününe göre %20-35 daha uygun fiyatlı',
              'Suyu emmez: Nem geçirgenliği çok düşüktür',
              'Kolay işlenir: Kesme ve şekillendirme kolaylığı sağlar',
              'İyi termal direnç (λ ≈ 0.032-0.038 W/mK)',
              'Uzun ömürlü: Doğru uygulamada 30+ yıl dayanım',
            ]}
          />
          <CheckList
            title="EPS Sisteminin Dezavantajları"
            variant="warning"
            items={[
              'Yanabilir: A2 sınıfı yangın bariyerleri gerektirir (5 kat ve üzeri binalar)',
              'Ses yalıtımı zayıf: Akustik sorunlar için ek önlem gerekebilir',
              'Nem geçirgenliği düşük: Bazı yapı tipolojilerinde avantaj değil dezavantaj olabilir',
              'UV\'ya duyarlı: Uzun süre güneş altında kalırsa bozulur (kaplama olmadan)',
            ]}
          />

          <h3>Taş Yünü Sisteminin Özellikleri</h3>
          <p>
            Taş yünü, volkanik bazalt taşının yüksek sıcaklıkta işlenmesiyle elde edilen mineral
            elyaf yalıtım malzemesidir. EPS&apos;ye göre daha pahalı ama belirli durumlarda
            vazgeçilmez özellikler sunar.
          </p>
          <CheckList
            title="Taş Yününün Avantajları"
            items={[
              'Yangın sınıfı A1: Tamamen yanmaz, yangın yayılımını engeller',
              'Ses yalıtımı mükemmel: Akustik konfor için ideal',
              'Buhar geçirgen (nefes alabilir): Yapının nefes almasına izin verir',
              'Yüksek sıcaklık dayanımı: 700°C\'ye kadar dayanır',
              'Çevre dostu: Doğal kaynaklardan üretilir, geri dönüştürülebilir',
            ]}
          />
          <CheckList
            title="Taş Yününün Dezavantajları"
            variant="warning"
            items={[
              'Daha pahalı: EPS\'ye göre %25-40 daha yüksek malzeme maliyeti',
              'Ağır: Uygulama daha dikkat gerektirir, iskele yükü artar',
              'Nem yönetimi kritik: Islak uygulamadan kaçınılmalıdır',
              'Daha az yaygın: KKTC\'de tedariki EPS\'ye göre kısıtlı olabilir',
            ]}
          />

          <h3>KKTC İçin Hangisi Daha Uygun?</h3>
          <p>
            KKTC koşullarında genel tavsiye şu şekilde özetlenebilir:
          </p>
          <ComparisonTable
            caption="EPS vs Taş Yünü — KKTC Koşullarında Seçim Rehberi"
            headers={['Bina/Koşul', 'Önerilen Sistem', 'Gerekçe']}
            rows={[
              { cells: ['1-4 katlı villa, daire', 'EPS (5-8 cm)', 'Ekonomik, yeterli termal performans'] },
              { cells: ['5+ katlı apartman', 'EPS + yangın bariyeri veya tam taş yünü', 'Yangın yönetmelikleri'], highlight: true },
              { cells: ['Sahil bölgesi (Girne vb.)', 'EPS (buhar bariyersiz)', 'Nem geçirmez özellik avantajlı'] },
              { cells: ['Akustik sorun olan yapı', 'Taş yünü', 'Ses yalıtımı üstünlüğü'] },
              { cells: ['Otel, ticari bina', 'Taş yünü (yangın sınıfı)', 'Yangın güvenliği zorunluluğu'], highlight: true },
              { cells: ['Bütçe kısıtlı proje', 'EPS (3-5 cm)', 'Maliyet/performans dengesi'] },
            ]}
          />
          <p>
            Seçim yapmadan önce binanızın kat sayısını, bulunduğu lokasyonu (sahil/iç kesim),
            mevcut ses yalıtım durumunu ve bütçenizi değerlendirin. Profesyonel keşif, doğru
            sistem ve kalınlık kararı için şarttır.
          </p>
        </section>

        {/* Uygulama Adımları */}
        <section id="uygulama-adimlari">
          <h2>Uygulama Adımları</h2>
          <p>
            Mantolama uygulaması altı temel aşamadan oluşur. Her aşamanın doğru yapılması,
            bir sonraki aşamanın başarısını belirler. Adımları ve dikkat edilmesi gereken
            noktaları aşağıda açıklıyoruz.
          </p>

          <h3>1. Yüzey Hazırlığı</h3>
          <p>
            Mantolama uygulamasında en sık atlatılan ve en önemli adım yüzey hazırlığıdır.
            Mevcut duvarda dökülen boya, gevşek sıva, küf veya yağ kalıntısı varsa mutlaka
            temizlenmelidir. Duvardaki çatlaklar onarılmalı, çelik hasarlı bölümler işlenmelidir.
            Dış cephede boş kısmı olan sıvalar kaldırılıp yeniden yapılmalıdır.
          </p>
          <p>
            <strong>Dikkat:</strong> Yaş veya nemli yüzeye uygulama yapılmamalıdır. Yüzeyin en az
            2-3 hafta önceden kurumuş olması gerekir. Kıbrıs&apos;ta sonbahar yağmurları öncesinde
            bu kuruma süresini mutlaka hesaba katın.
          </p>

          <h3>2. Su Basman Çıtası (Başlangıç Profili)</h3>
          <p>
            Sistemin en alt noktasına, zemin seviyesinin yaklaşık 30-40 cm yukarısına alüminyum
            su basman çıtası (başlangıç profili) monte edilir. Bu profil hem sistemin düzgün
            başlangıç çizgisini belirler hem de alt kenardan su ve haşeratın sisteme girmesini
            engeller. Çıtanın su terazisiyle tam yatay konumda sabitlenmesi şarttır.
          </p>
          <p>
            <strong>Dikkat:</strong> Bu adım atlandığında alt kenar açıkta kalır, sistemin altından
            nem girerek yalıtım levhalarını deforme eder ve mantar oluşumuna neden olur.
          </p>

          <h3>3. Levha Yapıştırma ve Dübelleme</h3>
          <p>
            Yapıştırıcı harç, levhanın arka yüzüne çevre bandı ve en az 3 merkez nokta yöntemiyle
            uygulanır (toplam temas alanı ≥ %40). Levhalar alt sıradan başlanarak tuğla örgüsü
            düzeninde (kademeli derzli) yerleştirilir. Köşelerde levhalar birbirini geçecek şekilde
            monte edilir. Yapıştırma işleminden 24-48 saat sonra plastik diskli çelik dübeller
            (en az 6 adet/m²) ile mekanik bağlantı tamamlanır.
          </p>
          <p>
            <strong>Dikkat:</strong> Dübel sayısı binanın yüksekliği ve rüzgar bölgesine göre
            artırılmalıdır. KKTC&apos;de özellikle Girne kıyı şeridinde rüzgar yükü dikkate
            alınmalıdır. Köşe, kenar ve bölme bölgelerinde dübel sayısı iç alanlara göre
            en az %50 artırılır.
          </p>

          <h3>4. Köşe ve Kenar Profiller</h3>
          <p>
            Pencere ve kapı çevreleri, köşeler ile alınlık kenarları özel PVC veya alüminyum
            köşe profilleri ile kapatılır. Bu profiller hem donatı filesin köşelerde çalışmasını
            kolaylaştırır hem de sistemi darbelere ve su girişine karşı korur. Profiller
            yapıştırıcı içine gömülmeli ve levha yüzeyiyle aynı hizada olmalıdır.
          </p>

          <h3>5. Donatı Filesi ve Macun (Donatı Katmanı)</h3>
          <p>
            Polimer katkılı özel macun levha yüzeyine yaklaşık 3-4 mm kalınlığında uygulanır.
            Cam elyaf donatı filesi (160 g/m² veya üzeri) macun içine gömülür. Dosya bindirme payları
            en az 10 cm olmalı; köşe bölgelerinde çapraz takviye ile çift kat file uygulaması
            yapılmalıdır. Macunun kurumasına izin verildikten sonra zımparalama ile düzleştirme
            yapılır.
          </p>
          <p>
            <strong>Dikkat:</strong> Bu adım atlandığında veya yetersiz file uygulandığında,
            sistem ısıl genleşme sonucunda çatlar. Özellikle pencere köşelerinde 45° açılı
            takviye filesin atlanması, bu noktalarda &quot;köşe çatlağı&quot; olarak bilinen
            ve sık görülen hataya yol açar.
          </p>

          <h3>6. Astar ve Dekoratif Son Kat Sıva</h3>
          <p>
            Donatı katmanı tam kuruyunca astar uygulanır. Astar, son kat dekoratif sivanın
            yüzeye düzgün yapışmasını ve renginin homojen çıkmasını sağlar. Son kat olarak
            mineral bazlı, akrilik veya silikon sıvalar tercih edilebilir. KKTC&apos;nin
            yoğun güneşi göz önüne alındığında silikon sıvalar daha uzun ömürlü ve daha
            az kirlenme eğilimlidir. Renk seçiminde açık tonlar ısı emilimini azaltır.
          </p>
          <p>
            <strong>Dikkat:</strong> Son kat sıva sıcak ve güneşli günlerde uygulanmamalıdır
            — malzeme çok hızlı kuruyarak çatlak oluşturur. Kıbrıs&apos;ta yaz aylarında
            sabah erken saatlerde veya akşam üstü saatlerde, gölgeli cephelerde çalışmak
            doğru yaklaşımdır.
          </p>

          <InfoBox type="tip" title="KKTC İçin Uygulama Takvimi">
            <p>
              Kıbrıs ikliminde mantolama uygulaması için en ideal dönemler: <strong>İlkbahar
              (Mart - Mayıs)</strong> ve <strong>sonbahar (Eylül - Kasım)</strong> aylarıdır.
              Bu dönemlerde sıcaklık 15-28°C arasında, nem dengeli, yağış riski düşüktür.
              Temmuz-Ağustos&apos;ta aşırı sıcak ve Aralık-Şubat&apos;ta yağış ve nem, uygulama
              kalitesini olumsuz etkiler.
            </p>
          </InfoBox>
        </section>

        {/* Sık Yapılan Hatalar */}
        <section id="hatalar">
          <h2>Sık Yapılan Hatalar</h2>
          <p>
            Mantolama uygulamalarında karşılaştığımız sık tekrar eden hataların büyük çoğunluğu,
            maliyet düşürme kaygısı veya teknik bilgi eksikliğinden kaynaklanır. Uygulamayı
            yaptırmadan önce aşağıdaki hataların farkında olmak, doğru firmayı seçmenize
            ve kaliteli iş yaptırmanıza yardımcı olur.
          </p>

          <h3>1. Islak veya Nemli Yüzeye Uygulama</h3>
          <p>
            Kıbrıs&apos;ın kış yağmurları ve yüksek nem ortamında, yüzeyin ıslak olduğu dönemde
            uygulama yapılması hem yapıştırıcının hem de macunun bağ kuvvetini ciddi ölçüde
            düşürür. Sistem görünürde düzgün görünse de birkaç yıl içinde kabarma, dökülme
            ve ayrışma başlar. Doğru yol, uygulamadan önce duvara nem ölçeri ile kontrol
            yapılmasıdır.
          </p>

          <h3>2. Yetersiz Dübel Sayısı</h3>
          <p>
            Maliyet düşürmek amacıyla m² başına dübel sayısının azaltılması, rüzgar yükünde
            sistemin bütününün ya da bölümlerinin düşmesine yol açabilir. Özellikle çatı
            yakını, köşe ve kenar bölgelerinde yetersiz dübelleme çok tehlikelidir. Standart
            iç alan için minimum 6 adet/m², kenar ve köşe bölgelerinde 9 adet/m² önerilir.
          </p>

          <h3>3. Donatı Filesi Bindirme Yetersizliği</h3>
          <p>
            Levhalar arası derzler üzerine gelen file bindirmelerinin yetersiz bırakılması,
            derz boyunca çatlak oluşmasına neden olur. Sık görülen bir başka hata ise
            pencere köşelerinde köşegen takviye filesin uygulanmamasıdır. Bu noktalarda
            oluşan çatlaklar içeriden görmek güç olduğundan fark edilmeden büyür.
          </p>

          <h3>4. Hava Koşullarına Dikkat Edilmemesi</h3>
          <p>
            Kıbrıs&apos;ta yazın yoğun güneş altında, özellikle güney cephelerde, macun ve
            sıva uygulamalarının yapılması çok yaygın ama yanlış bir uygulamadır. Malzeme
            çok hızlı kuruyarak &quot;güneş çatlağı&quot; adı verilen ince ağ şeklinde
            çatlaklara yol açar. Bu çatlaklar sonradan boyayla kapatılsa da nem giriş
            yolunu kapatmaz.
          </p>

          <h3>5. Levhaların Düzgün Kademeli Yerleştirilmemesi</h3>
          <p>
            Yatay veya dikey derzlerin aynı hizada bırakılması, ısı köprüsü oluşturur.
            Özellikle köşe bölgelerinde levhaların üst üste geçiş yapmaması, sistemi
            zayıf noktalar bırakır. Tuğla örgüsü mantığıyla kademeli yerleştirme
            zorunludur.
          </p>

          <h3>6. Su Basman Çıtasının Atlanması</h3>
          <p>
            Bazı uygulamalarda hız kazanmak amacıyla alt başlangıç profili monte edilmeden
            doğrudan levha yapıştırılır. Bu durumda sistemin alt kenarı açık kalır; zemin
            rutubeti, su serpintisi ve böcekler sisteme kolayca girer. KKTC&apos;nin deniz
            seviyesi yakınındaki binalarında bu özellikle kritik bir hatadır.
          </p>

          <CheckList
            title="Mantolama Teklifi Alırken Sorulacak Sorular"
            items={[
              'Levha kalınlığı kaç cm? (Minimum 5 cm önerilir)',
              'Hangi marka ve sınıf dübel kullanılacak?',
              'Dübel sayısı m² başına kaç adet?',
              'File gramajı nedir? (160 g/m² ve üzeri)',
              'Hava koşullarına göre çalışma takvimi var mı?',
              'Son kat için hangi tür sıva? Silikon mu, akrilik mi?',
              'İşçilik ve malzeme için ayrı ayrı garanti var mı?',
            ]}
          />
        </section>

        {/* Sonuç */}
        <section id="sonuc">
          <h2>Sonuç</h2>
          <p>
            Mantolama, KKTC ikliminde sadece konfor değil; enerji tasarrufu, yapısal koruma
            ve bina değeri açısından da somut getirisi olan bir yatırımdır. Özellikle Girne,
            Lefkoşa ve Gazimağusa&apos;da yaz aylarında elektrik faturalarıyla boğuşan ev
            sahipleri ve mülk yöneticileri için mantolama, kısa vadede maliyetli görünse de
            orta ve uzun vadede kendini fazlasıyla öder.
          </p>
          <p>
            Bu rehberde özetlediklerimiz:
          </p>
          <ul>
            <li>Mantolama, çok katmanlı bir sistem olup uygulama kalitesi malzeme kadar önemlidir</li>
            <li>KKTC&apos;nin sıcak iklimi, deniz tuzu etkisi ve kış nemi mantolama uygulamasını özellikle değerli kılar</li>
            <li>EPS çoğu konut projesi için ekonomik ve yeterli performanslı seçenektir; taş yünü yangın güvenliği ve akustik konfor gerektiren yapılar için idealdir</li>
            <li>Altı adımlı uygulama sürecinde her katman kritiktir; hiçbir adım atlanamaz</li>
            <li>Sık yapılan hatalar — ıslak yüzey, az dübel, yetersiz file — sistemin ömrünü dramatik biçimde kısaltır</li>
          </ul>
          <p>
            <strong>Düzkar Dizayn</strong> olarak KKTC genelinde mantolama uygulamalarını
            25 yılı aşkın deneyimimizle gerçekleştiriyoruz. Girne, Lefkoşa ve Gazimağusa&apos;da
            tamamladığımız projeler, doğru uygulanan mantolama sisteminin ne kadar fark
            yarattığını somut olarak ortaya koyuyor.
          </p>
          <p>
            Binanıza uygun sistem, doğru kalınlık ve maliyet analizi için{' '}
            <Link href="/#iletisim">
              ücretsiz keşif talebinde bulunun
            </Link>
            . Uzmanlarımız yerinde inceleme yaparak size en uygun mantolama çözümünü önersin.
            Ayrıca{' '}
            <Link href="/hizmetler/ic-ve-dis-cephe-uygulamalari">
              cephe uygulamaları sayfamızı
            </Link>
            {' '}ziyaret ederek hizmetlerimiz hakkında daha fazla bilgi edinebilirsiniz.
          </p>
        </section>
      </BlogContent>
    );
  }

  if (slug === 'kktcde-havuz-izolasyonu-kapsamli-rehber') {
    return (
      <BlogContent>
        {/* Giriş */}
        <section id="giris">
          <p>
            Girne&apos;de denize nazır bir villada oturuyorsunuz. Yaz başında havuzu doldurdunuz, çocuklar
            sevinçle atladı suya. İki hafta geçmeden bodrum katında nem lekesi belirdi, duvarlar ıslandı.
            Havuzu boşalttınız, baktınız, görünürde bir çatlak yok. Peki su nereye gidiyor?
          </p>
          <p>
            Bu sahne KKTC&apos;de onlarca villa sahibinin yaşadığı tablodur. Havuz sızıntısı sadece su
            kaybından ibaret değil — bodrum hasar görür, temel etkilenir, tamir maliyeti yeni inşaattan
            pahalıya gelir. Ve asıl sorun çoğunlukla inşaat sırasında yapılan tek bir hatadan kaynaklanır:
            yanlış ya da eksik izolasyon sistemi.
          </p>
          <p>
            Bu rehberde KKTC ikliminin havuzlara özgü baskısını, sızıntının gerçek nedenlerini ve kalıcı
            çözümün nasıl uygulandığını adım adım açıklıyoruz.
          </p>
        </section>

        {/* KKTC İkliminin Havuza Etkisi */}
        <section id="iklim-etkisi">
          <h2>KKTC İkliminin Havuza Özgü Etkisi</h2>
          <p>
            Kıbrıs iklimi standart Akdeniz ikliminden daha sert. Havuzlar bu iklimde dört ayrı cepheden
            baskı altına girer:
          </p>

          <h3>1. Aşırı Sıcaklık Döngüsü</h3>
          <p>
            Girne&apos;de yaz aylarında hava sıcaklığı 38–42°C&apos;ye ulaşır. Gece ise 22–25°C&apos;ye
            düşer. Bu 15–20 derecelik günlük fark havuz betonunu sürekli genleştirip büzüştürür. Yılda
            yüzlerce kez tekrarlanan bu termal stres, izolasyon katmanlarında mikro çatlaklara zemin hazırlar.
          </p>

          <h3>2. Yoğun UV Radyasyonu</h3>
          <p>
            KKTC&apos;de Haziran–Ağustos ayları arasında UV indeksi 10–11&apos;e ulaşır. Avrupa&apos;nın
            kuzeyinde bu değer 5–6 civarındadır. UV&apos;ye dayanımsız yalıtım malzemeleri açıkta kalan
            yüzeylerde 2–3 yıl içinde bozulmaya başlar, esnekliğini kaybeder ve çatlar.
          </p>

          <h3>3. Deniz Tuzu ve Klorür İyonu</h3>
          <p>
            Girne kıyı şeridine 0–5 km mesafede konumlanan villaların büyük çoğunluğu deniz tuzlu havanın
            etkisi altındadır. Klorür iyonları zamanla beton içine nüfuz eder, donatıyı korozyona uğratır
            ve izolasyonu zayıflatır. Üstelik havuzun kendi klorüne ek olarak dışarıdan da tuz baskısı
            geldiğinde durum ikiye katlanır.
          </p>

          <h3>4. Kış Yağmurları ve Yeraltı Suyu Basıncı</h3>
          <p>
            Kasım–Şubat arasında yoğunlaşan kış yağmurları yeraltı su seviyesini yükseltir. Dıştan içe
            baskı yapan bu negatif su basıncı, sadece iç yüzeyi izole edilmiş havuzlarda sızıntıya yol açar.
          </p>

          <InfoBox type="warning" title="KKTC Havuzlarına Özel Risk">
            Kıbrıs&apos;ta havuz betonu hem içten (klor + sürekli su basıncı) hem dıştan (yeraltı suyu +
            deniz tuzu) çift yönlü baskı altındadır. Bu nedenle sadece iç yüzey izolasyonu yetmez —
            dış yüzey de mutlaka kapatılmalıdır.
          </InfoBox>
        </section>

        {/* Neden Sızar */}
        <section id="neden-sizlar">
          <h2>Havuz Neden Sızar? 5 Ana Neden</h2>

          <StepByStep
            steps={[
              {
                title: 'Tek Taraflı veya Eksik İzolasyon',
                description: 'En yaygın hata: iç yüzey izole edildi, dış yüzey atlandı. Ya da dış membran yapıldı ama iç yüzey havuz tipi ürünle değil standart banyo malzemesiyle yapıldı. Klor standart çimento esaslı yalıtımı 3–5 yılda bozar.',
              },
              {
                title: 'Dilatasyon Derzleri İhmal Edildi',
                description: 'Havuz betonu termal genleşme nedeniyle hareket eder. Dilatasyon derzi yoksa ya da esnek mastikle doldurulmamışsa çatlak kaçınılmazdır. KKTC\'nin sıcaklık farkları bu riski Avrupa\'ya kıyasla 2 katına çıkarır.',
              },
              {
                title: 'Skimmer ve Armatür Detayları Eksik',
                description: 'Skimmer kutusu ile havuz duvarı birleşimi, aydınlatma armatürleri ve boru geçişleri özel conta ve kristalize malzeme ile kapatılmazsa bu noktalardan sürekli sızıntı olur. Görünürde çatlak yoktur ama su kayıp devam eder.',
              },
              {
                title: 'Klora Dayanımsız Malzeme Seçimi',
                description: 'Banyo veya teras için üretilmiş yalıtım malzemeleri havuza uygun değildir. Havuz suyu pH 7.2–7.8, klor konsantrasyonu 1–3 ppm — bu kimyasal ortama özel, klor dayanımlı ürünler kullanılmalıdır.',
              },
              {
                title: 'Su Testi Yapılmadan Kaplama Geçildi',
                description: 'İzolasyon bittikten sonra en az 7 gün su testi yapılmadan seramik kaplama geçilirse sızıntı varsa tespit edilemez. Sonradan seramiğin sökülerek yeniden yapılması hem masraflı hem zaman kaybıdır.',
              },
            ]}
          />
        </section>

        {/* Doğru Sistem */}
        <section id="dogru-sistem">
          <h2>Doğru Sistem: İç + Dış Çift Katmanlı İzolasyon</h2>
          <p>
            KKTC koşullarında kalıcı havuz yalıtımı için iki sistem birlikte uygulanmalıdır:
          </p>

          <h3>İç Yüzey — Kristalize Sistem (QIS CRS PROMAX)</h3>
          <p>
            Kristalize yalıtım, normal membran veya sürme yalıtımdan farklı çalışır. Beton yüzeye
            uygulanan kristalize malzeme nem ile reaksiyona girerek beton gözenekleri içinde büyüyen
            kristaller oluşturur. Bu kristaller su geçişini mekanik olarak engeller ve beton ile
            adeta bütünleşir — soyulmaz, ayrılmaz.
          </p>
          <p>
            QIS CRS PROMAX bu sistemin KKTC&apos;de yaygın kullanılan temsilcisidir. 1.5–2 kg/m²
            sarfiyatla uygulanır, klorür ve sürekli su basıncına dayanıklıdır. Havuz iç yüzeyi
            için birincil tercih sebebi budur.
          </p>

          <h3>Dış Yüzey — Çift Kat Bitüm Membran (QIS BITUMAX 2K)</h3>
          <p>
            Havuzun dış yüzeyi — toprak ile temas eden kısım — yeraltı suyu ve nem basıncına karşı
            korunmalıdır. Bunun için soğuk astar (QIS Bitüm Astar) üzerine çift kat SBS polyester
            takviyeli bitüm membran uygulanır. Membran üzerine XPS levha koyularak geri dolgu
            sırasında mekanik hasar önlenir.
          </p>

          <InfoBox type="info" title="Neden İkisi Birden?">
            İç yüzey kristalize sistem havuz suyunun içten dışa geçişini engeller. Dış membran
            sistem ise yeraltı suyunun dıştan içe girişini keser. İkisi birlikte tam çift yönlü
            koruma sağlar. Sadece birini yapmak KKTC koşullarında yetersiz kalır.
          </InfoBox>

          <h3>Yardımcı Malzemeler</h3>
          <p>
            Sistemi tamamlayan diğer ürünler:
          </p>
          <ul>
            <li><strong>QIS PAH BANDI</strong> — tüm iç köşelerde takviye bandı</li>
            <li><strong>QIS QGLASS</strong> — cam elyaf file, zemin-duvar birleşimlerinde</li>
            <li><strong>QIS PLUG</strong> — aktif su kaçağı varsa anında durdurma</li>
            <li><strong>QIS MANŞON</strong> — boru geçişlerinde sızdırmazlık</li>
          </ul>
        </section>

        {/* Adım Adım */}
        <section id="adim-adim">
          <h2>Adım Adım Uygulama</h2>

          <StepByStep
            steps={[
              {
                title: 'Yüzey Hazırlığı',
                description: 'Beton minimum 28 gün kürlenmiş olmalıdır. Çatlaklar V kesim ile genişletilir, tamir harcı ile doldurulur. Tüm iç köşelerde kavis (paso) yapılır. Boru geçişleri ve skimmer montajı tamamlanmış olmalıdır. Kalıp yağı ve kir tamamen temizlenir.',
              },
              {
                title: 'Dış Yüzey — Membran Uygulaması',
                description: 'Kazı alanı hazırken dış yüzeye bitüm astar uygulanır, 4–6 saat beklenir. 1. kat 3mm membran şalümoyla uygulanır, 24 saat beklenir. 2. kat 4mm membran kaydırmalı eklenerek uygulanır. Köşe takviyeleri eklenir. XPS levhalarla membran korunarak geri dolgu yapılır.',
              },
              {
                title: 'İç Yüzey — Detay Noktaları',
                description: 'Skimmer kutusu çevresine, aydınlatma armatürlerine ve tüm boru geçişlerine QIS Manşon + kristalize malzeme ile özel detay uygulanır. Tüm iç köşelere QIS PAH BANDI yerleştirilir ve yalıtım harcı ile sabitlenir. Zemin-duvar birleşimine QIS QGLASS file konulur.',
              },
              {
                title: 'Kristalize Uygulama (QIS CRS PROMAX)',
                description: 'Beton yüzey tamamen ıslatılır — mat nemli, doygun olmalıdır (kuru yüzeye uygulanmaz). Kristalize harç hazırlanır. 1. kat yatay hareketlerle fırça ile sürülür. Kurumadan 2. kat dikey hareketlerle çapraz uygulanır. Toplam 2–3 mm kalınlık hedeflenir. Uygulama sonrası 3–5 gün yüzey nemli tutularak kür yapılır.',
              },
              {
                title: 'Su Testi',
                description: 'Havuz önce %50 dolulukta 3 gün beklenir, seviye kaybı ölçülür. Ardından tam dolulukta 7 gün daha beklenir. Kabul edilen maksimum kayıp: 0.5 cm/gün (buharlaşma hariç). Bu testi geçemeyen bir havuza seramik geçilmez.',
              },
              {
                title: 'Seramik Kaplama',
                description: 'Su testini geçen havuzda havuz tipi seramik yapıştırıcısı kullanılır — normal harç veya yapıştırıcı değil. Seramikler boşluk bırakmadan yapıştırılır. Derzler standart derz yerine epoksi derz dolgu (Fugapool veya benzeri) ile doldurulur. Su altı köşe detaylarına mastik uygulanır.',
              },
            ]}
          />
        </section>

        {/* Yeni mi Yenileme mi */}
        <section id="yeni-mi-yenileme">
          <h2>Yeni Havuz mu, Yenileme mi, Sızıntı Tamiri mi?</h2>
          <p>
            Her senaryonun maliyet ve karmaşıklığı farklıdır:
          </p>

          <ComparisonTable
            headers={['Senaryo', 'Avantaj', 'Dikkat Edilecek', 'Maliyet Etkisi']}
            rows={[
              { cells: ['Yeni İnşaat', 'Doğru sıra ve sistem kurulur, dıştan içe uygulanır', 'Beton kür süresi beklenmeli, aceleye getirilmemeli', 'En ekonomik — ilerleyen yıllarda sorun çıkmaz'] },
              { cells: ['Yenileme (mevcut çalışan)', 'Mevcut sistemi güçlendirme imkanı', 'Eski kaplama söküm maliyeti, zemin analizi gerekir', 'Orta — ek işçilik ve malzeme'] },
              { cells: ['Sızıntı Tamiri', 'Acil müdahale ile su kaybı durdurulur', 'Kaynağı bulmak zordur, seramik söküm gerekebilir', 'En yüksek — tamir + yeniden kaplama'], highlight: true },
            ]}
          />

          <InfoBox type="tip" title="En Pahalı Seçenek: Sızıntıyı Beklemek">
            Havuz sızıntısı başladıktan sonra müdahale maliyeti, baştan doğru yapmanın 3–5 katına
            ulaşabilir. Yeni inşaat veya yenileme sırasında doğru sistemi kurmak her zaman
            en akılcı tercihtir.
          </InfoBox>
        </section>

        {/* Hatalar */}
        <section id="hatalar">
          <h2>KKTC&apos;de Havuz İzolasyonunda Sık Yapılan Hatalar</h2>

          <CheckList
            title="Kaçınılacak Hatalar"
            variant="warning"
            items={[
              'Standart banyo yalıtımı kullanmak — klor dayanımsız malzemeler 3–5 yılda bozulur',
              'Sadece iç yüzeyi yapmak, dış membranı atlamak',
              'Skimmer ve aydınlatma armatürü detayını geçmek',
              'Kristalize uygulama sonrası kür süresini kısaltmak (minimum 3–5 gün nemli tutulmalı)',
              'Su testini 2–3 günde bitirmek — minimum 7 gün beklenmeli',
              'Öğle sıcağında (35°C üzeri) kristalize uygulama yapmak — çok hızlı kurur, kristal oluşumu bozulur',
              'Dilatasyon derzlerini normal mastik ile doldurmak — havuz tipi esnek mastik şart',
              'Zemin ile duvar birleşiminde file takviyesi kullanmamak',
            ]}
          />

          <CheckList
            title="Uygulama Öncesi Kontrol Listesi"
            variant="check"
            items={[
              'Beton minimum 28 gün kürlenmiş',
              'Tüm çatlaklar ve petek boşluklar tamir edilmiş',
              'Boru geçişleri ve skimmer montajı tamamlanmış',
              'İç köşelerde kavis (paso) yapılmış',
              'Klora dayanımlı havuz tipi ürünler seçilmiş',
              'Hava sıcaklığı 8–30°C arasında (uygulama için ideal)',
              'Yağmur beklentisi yok',
            ]}
          />
        </section>

        {/* Bakım */}
        <section id="bakim">
          <h2>İzolasyonu Uzun Tutmanın Yolu: Düzenli Bakım</h2>
          <p>
            Doğru izolasyon yapıldıktan sonra düzenli bakım ile ömrü önemli ölçüde uzatılabilir:
          </p>

          <ComparisonTable
            headers={['Bakım İşlemi', 'Periyot', 'Neden Önemli']}
            rows={[
              { cells: ['Su kimyası kontrolü (pH, klor)', 'Haftalık', 'pH dengesizliği izolasyonu ve seramiği hızla yıpratır'] },
              { cells: ['Görsel kontrol — çatlak, renk değişimi', 'Aylık', 'Erken tespit = küçük tamir, büyük maliyet önlenir'] },
              { cells: ['Derz ve mastik kontrolü', '6 ayda bir', 'Derzler zamanla ayrılır, en sık sızıntı noktasıdır'] },
              { cells: ['Profesyonel bakım ve kontrol', 'Yıllık', 'Yüzey aşınması, kristalize tabaka kontrolü'] },
              { cells: ['Kapsamlı teknik değerlendirme', '5 yılda bir', 'Uzun vadeli sistem ömrü garantilenir'] },
            ]}
          />

          <InfoBox type="info" title="KKTC İkliminde Özel Öneri">
            Kış sezonunda (Kasım–Şubat) havuzu tamamen boşaltmayın. Su dolu havuz yeraltı suyu
            basıncına karşı denge oluşturur. Boş havuz bu dönemde dıştan gelen su baskısıyla
            kalkabilir ya da çatlayabilir.
          </InfoBox>
        </section>

        {/* Sonuç */}
        <section id="sonuc">
          <h2>Sonuç</h2>
          <p>
            KKTC&apos;de villa havuzu sahibi olmak büyük bir konfor — ama aynı zamanda büyük bir sorumluluk.
            Yıllık 38–42°C sıcaklık, 10+ UV indeksi, deniz tuzu ve kış yağmurlarının yarattığı çift yönlü
            su baskısı, havuz betonunu sürekli zorlar.
          </p>
          <p>
            Bu koşullarda kalıcı çözüm nettir: içten QIS CRS PROMAX kristalize sistem, dıştan çift kat
            bitüm membran, tüm detay noktalarına özel uygulama ve minimum 7 günlük su testi. Kısayol
            yoktur. Ama doğru yapıldığında 15–20 yıl sorunsuz çalışan bir havuz elde edilir.
          </p>
          <p>
            Girne ve KKTC genelinde 25 yılı aşkın deneyimimizle havuz izolasyonu, yenileme ve sızıntı
            tespiti konularında ücretsiz keşif yapıyoruz. Sorularınız için arayın ya da WhatsApp&apos;tan
            yazın.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/#iletisim"
              className="btn-primary text-center text-navy-dark no-underline"
            >
              Ücretsiz Keşif İsteyin
            </Link>
            <Link
              href="/hizmetler/izolasyon-ve-su-yalitimi"
              className="btn-secondary text-center no-underline"
            >
              İzolasyon Hizmetlerimiz
            </Link>
          </div>
        </section>
      </BlogContent>
    );
  }

  if (slug === 'balkonda-su-sizintisi-kktc-rehberi') {
    return (
      <BlogContent>
        {/* Giriş */}
        <section id="giris">
          <h2>Giriş</h2>
          <p>
            Yağmurlu bir kış sabahı alt komşunuz kapınızı çalıyor: &quot;Tavanımızdan su damliyor, balkonunuzdan geliyor.&quot;
            Ya da kendi balkonunuzda seramiklerin altında şüpheli ıslaklıklar fark ediyorsunuz — kuru havalarda
            bile gitmeden duran nem lekeleri. Bu iki senaryo, Kuzey Kıbrıs&apos;ta her kış onlarca ev sahibinin
            yaşadığı gerçek bir problem.
          </p>
          <p>
            <strong>Balkon sızıntısı</strong>, küçük bir konfor sorunu gibi görünse de gecikildiğinde ciddi yapısal
            hasara, alt kat anlaşmazlıklarına ve yüksek tamir maliyetlerine dönüşür. İyi haber şu: neden oluştuğu
            anlaşılır, kalıcı çözümü vardır ve KKTC iklim koşullarına özgün koruma yöntemleri mevcuttur.
          </p>
          <p>
            Bu rehberde, 25 yılı aşkın saha deneyimimizden derlenen gerçek tespitlerle balkon sızıntısının
            köklerini, KKTC iklimine özgün risk faktörlerini ve kalıcı çözüm yolunu adım adım ele alıyoruz.
          </p>
        </section>

        {/* KKTC İkliminin Balkona Etkisi */}
        <section id="iklim-etkisi">
          <h2>KKTC İkliminin Balkona Etkisi</h2>
          <p>
            Balkon sızıntısını anlamak için önce Kuzey Kıbrıs ikliminin balkona ne yaptığını anlamak gerekir.
            Akdeniz iklimi balkonlar için görünürde ideal görünse de, gerçekte son derece zorlu koşullar oluşturur.
          </p>

          <h3>Aşırı UV ve Isıl Genleşme</h3>
          <p>
            KKTC&apos;de güneş radyasyonu, Orta Avrupa&apos;nın yaklaşık 2-3 katı düzeyindedir. Yazın doğrudan
            güneş alan bir balkon döşemesi yüzey sıcaklığı 60-70°C&apos;ye ulaşır. Bu aşırı ısınma, betonu,
            seramiği ve altındaki yalıtım katmanını günde onlarca derece ısıl döngüye sokar. Her genleşme-büzülme
            döngüsü derz noktalarını, köşe birleşimlerini ve membran yüzeyini yavaşça yıpratır.
          </p>
          <p>
            Sonuç: Türkiye veya Avrupa&apos;da 15-20 yıl dayanabilecek bir membran, KKTC ikliminde 8-12 yılda
            UV yorgunluğu ve ısıl çatlama nedeniyle görevini yitirebilir.
          </p>

          <h3>Kış Yağışlarının Ani ve Yoğun Karakteri</h3>
          <p>
            KKTC kışları Orta Avrupa kadar uzun olmasa da yağışlar ani ve yoğun gelir. Kasım-Mart döneminde
            saatler içinde düşen 40-60 mm yağış, yetersiz meyilli bir balkonda hızla su birikintisine dönüşür.
            Biriken su, gözenekli beton veya açık derzlerden sızarak katlara ulaşır.
          </p>

          <h3>Deniz Tuzu Etkisi (Özellikle Girne Kıyısı)</h3>
          <p>
            Girne sahil şeridinde denizden gelen tuzlu hava, balkon betonunun gözeneklerine işler. Tuz, beton
            kristal yapısını bozar, gözenekleri genişletir ve su geçirgenliğini artırır. Aynı zamanda demir
            donatıların paslanmasını hızlandırır. Sahil balkonlarında bu etki, iç kesimdeki yapılara kıyasla
            sızıntı riskini belirgin biçimde yükseltir.
          </p>

          <InfoBox type="info" title="KKTC Balkonu ile Avrupa Balkonu Arasındaki Fark">
            <p>
              Aynı kalitede malzeme ile yapılmış iki balkon düşünün: biri Almanya&apos;da, biri Girne&apos;de.
              Almanya&apos;daki balkon 20 yıl sorunsuz dayanabilirken, Girne&apos;deki aynı sistem
              10-12 yılda bakım gerektirebilir. Sebep: UV dozu, ısıl döngü sayısı ve deniz tuzu.
              Bu nedenle KKTC&apos;de balkon izolasyonunda daha yüksek UV dayanımlı malzeme ve daha sık
              bakım şarttır.
            </p>
          </InfoBox>
        </section>

        {/* Sızıntının 5 Ana Nedeni */}
        <section id="nedenler">
          <h2>Balkon Sızıntısının 5 Ana Nedeni</h2>
          <p>
            Sahada karşılaştığımız balkon sızıntılarının neredeyse tamamı beş temel nedene dayanır.
            Genellikle bu nedenler tek başına değil, ikisi veya üçü bir arada ortaya çıkar.
          </p>

          <h3>1. Yanlış veya Yetersiz Meyil</h3>
          <p>
            Balkon döşemesinin gidere doğru en az %1.5-2 eğimli olması gerekir. Eğim eksikse su gidere
            ulaşamaz, döşemede birikir. Birikintili su, birkaç saat içinde mikro çatlaklar ve derzlerden
            sızarak aşağıya iner. Bu, en yaygın balkon sızıntısı nedenidir; eski yapılarda eğim ya hiç
            hesaplanmamış ya da zamanla düzleşmiştir.
          </p>

          <h3>2. Kapı Eşiği Detay Hatası</h3>
          <p>
            Balkon kapısının eşiği ile döşeme arasındaki birleşim noktası, en kritik su engeli noktasıdır.
            Bu birleşimde kullanılan mastik veya derz dolgusu UV etkisiyle sertleşip çatladığında, yağmur
            suyu eşik altından iç mekana kaçar. KKTC&apos;de yüksek UV nedeniyle bu nokta ortalama
            5-7 yılda bakım gerektirir.
          </p>

          <h3>3. Gider Çevresi Sızdırmazlık Sorunu</h3>
          <p>
            Balkon giderinin boruyla birleştiği nokta, üzerine membran veya manşon uygulanmadan
            bırakıldığında su için açık bir kapı oluşturur. Yıllarca biriken kir ve bitki artıkları
            gideri tıklarsa, biriken su mecburen döşemeden sızar. Bu neden özellikle bakımsız
            balkanlarda sık görülür.
          </p>

          <h3>4. Membran/Yalıtım Katmanının Yıpranması</h3>
          <p>
            İnşaat sırasında doğru uygulanan bir balkon yalıtım sistemi bile sonsuz ömürlü değildir.
            KKTC koşullarında çimento esaslı membranlar 10-15, likit poliüretan membranlar 12-18 yılda
            yenileme gerektirir. UV ışınlarıyla çatlayan, ısıl döngüyle yorulan membran artık suyu
            tutamaz. Üstelik bu hasar genellikle seramik altında gizlidir ve dışarıdan görülmez.
          </p>

          <h3>5. Genleşme Derzlerinin Bakımsızlığı</h3>
          <p>
            Döşeme ile duvar arasındaki köşe derzleri, balkanda termal hareket için bırakılmış
            kasıtlı boşluklardır. Bu derzler esnekliğini yitirdiğinde veya tamamen açıldığında,
            direkt su giriş yolu oluşur. Sert derz dolgusu yerine elastik mastik kullanılması
            ve 5-7 yılda bir yenilenmesi gerekir.
          </p>

          <CheckList
            title="Balkonunuzu Kontrol Edin"
            variant="warning"
            items={[
              'Yağmur sonrasında balkonda su birikintisi oluyor mu? (meyil sorunu)',
              'Kapı eşiği çevresinde nem veya leke var mı? (eşik detayı)',
              'Gider çevresi kirli, tıkalı veya açık mı?',
              'Seramik derzlerinde renk değişimi, kabarma veya dökülme var mı?',
              'Duvar-döşeme köşesindeki mastik/sıvada çatlak görünüyor mu?',
              'Alt komşuda tavan lekesi şikayeti var mı?',
            ]}
          />
        </section>

        {/* Alt Komşuya Su Kaçması */}
        <section id="alt-komsu">
          <h2>Alt Komşuya Su Kaçması: Nasıl İlerler, Ne Gerektirir?</h2>
          <p>
            Balkon sızıntısının en ciddi sonucu, alt katta yaşayan komşuya ulaşmasıdır. Bu süreç
            genellikle sinsi bir şekilde ilerler — fark edildiğinde hasar çoktan oluşmuştur.
          </p>

          <h3>Sızıntı Nasıl İlerler?</h3>
          <p>
            Balkon döşemesinden sızan su önce beton döşemenin içine işler. Betonun gözenekli yapısı
            suyu emer ve yavaş yavaş altındaki taşıyıcı kirişlere, kolonlara ulaştırır. Bu aşamada
            demir donatılar paslanmaya başlar — görünürde hiçbir belirti yoktur. Pas hacim genişlettiği
            için beton içeriden çatlamaya, parçalanmaya başlar. Son aşamada alt komşunun tavanında
            sarı-kahverengi lekeler, nem, sonunda sıva dökülmesi ortaya çıkar.
          </p>
          <p>
            Bu süreç balkon sızıntısından alt kat tavan lekesine kadar <strong>1-3 yıl</strong>
            {' '}sürebilir. Yani alt komşu şikâyet ettiğinde, sızıntı genellikle çok daha önceden başlamıştır.
          </p>

          <InfoBox type="warning" title="Yasal Sorumluluk: Üst Kat Yükümlüdür">
            <p>
              KKTC&apos;de kat mülkiyeti mevzuatına göre, kendi balkonundan alt komşuya zarar veren
              üst kat maliki sorumluluk taşır. Alt komşunun tavanındaki tamir masrafları, boyama,
              sıva ve olası eşya hasarları talep edilebilir. Uzun süren anlaşmazlıklarda hukuki
              süreç başlatılabilir. Balkon yalıtımına yapılan yatırım, bu tür anlaşmazlıkları
              başlamadan önler.
            </p>
          </InfoBox>
        </section>

        {/* Kalıcı Çözüm */}
        <section id="kalici-cozum">
          <h2>Kalıcı Çözüm: Adım Adım Balkon Su Yalıtımı</h2>
          <p>
            Kalıcı balkon su yalıtımı, mevcut kaplamanın kaldırılıp tüm sistemin sıfırdan
            yapılmasını gerektirir. Geçici yamalar belirtileri giderse de kaynağı çözmez.
            Doğru uygulama şu adımlardan oluşur:
          </p>

          <StepByStep
            title="Balkon Su Yalıtımı Uygulama Adımları"
            steps={[
              {
                title: 'Yüzey Hazırlığı ve Söküm',
                description: 'Mevcut seramik kaplama tamamen kaldırılır. Altındaki şap ve eski yalıtım katmanı temizlenir. Beton yüzeydeki çatlaklar, boşluklar ve hasarlı bölgeler tespit edilir. Derinliği 5 mm\'i geçen çatlaklar onarım harcıyla doldurulur ve 24 saat kürlenmeye bırakılır. Yüzeyin tamamen kuru olması şarttır — KKTC\'de yağmur sonrası en az 48 saat beklenmeli, nem ölçeriyle kontrol yapılmalıdır.',
              },
              {
                title: 'Eğim Şapı',
                description: 'Mevcut eğim yetersizse, gidere doğru %1.5-2 eğim verecek şekilde yeni şap atılır. Bu adım kritiktir: eğim olmadan en iyi membran dahi suyun durmasını engelleyemez. Şap en az C20/25 sınıfında, kalınlığı ise en az 3 cm olmalıdır. Şap kürlenirken üzeri ıslak bez ile korunmalı; KKTC\'nin kuru havasında çok hızlı kuruma çatlağa neden olabilir.',
              },
              {
                title: 'Bitumlu Astar',
                description: 'Tüm yüzeye bitumlu astar (primer) uygulanır. Astar, beton yüzeyin gözeneklerini kapatır ve üzerine uygulanacak membranın yapışmasını sağlar. Köşe ve gider çevreleri bu aşamada özellikle dikkatli işlenmeli; fırça ile ek kat astar yapılmalıdır. Astar tamamen kurumadan bir sonraki adıma geçilmemelidir.',
              },
              {
                title: 'Çimento Esaslı Su Yalıtımı — 2 Kat',
                description: 'Fleksibil çimento esaslı 2K su yalıtım malzemesi, mala veya rulo ile 2 kat uygulanır (toplam 2.5-3 kg/m²). Birinci kat tamamen kurumadan ikinci kat sürülmez. Köşe ve eşik birleşimlerine elastik köşe bandı gömülür; bu noktalar 3. kat alır. Gider çevresi hazır gider manşonu ile kapatılır. Bu katman sisteminizin kalbidir — atlanamaz veya inceltilemez.',
              },
              {
                title: 'Koruma Şapı',
                description: 'Yalıtım katmanı üzerine C20/25 beton koruma şapı (3-4 cm) atılır. Bu şap, kaplama altında yalıtımı mekanik hasardan korur. Şap içine çelik tel hasır veya cam elyaf takviyesi eklenmesi uzun vadeli çatlama riskini azaltır.',
              },
              {
                title: 'Dış Mekan Seramik ve Derz',
                description: 'Son olarak kaymaz, dona dayanıklı dış mekan seramiği fleks yapıştırıcı ile uygulanır. Derz dolgusu su geçirmez, UV dayanımlı fuga ile yapılır. Duvar-döşeme köşe derzleri sert dolgu yerine elastik mastik ile kapatılır; bu noktalar 5-7 yılda bir yenilenmelidir.',
              },
            ]}
          />

          <InfoBox type="tip" title="KKTC\'de En İyi Uygulama Dönemleri">
            <p>
              Balkon izolasyonu için ideal dönemler <strong>Mart-Mayıs</strong> ve <strong>Eylül-Kasım</strong>
              {' '}arası. Bu dönemlerde sıcaklık 15-28°C, nem dengeli, yağış riski düşük. Temmuz-Ağustos&apos;ta
              yüzey sıcaklığı 60°C&apos;yi geçebilir; membran ve şap malzemeleri çok hızlı kuruyarak
              çatlak oluşturur. Kış aylarında ise don ve ani yağış riski var. Şimdi Mart&apos;tayız
              — zamanlama mükemmel.
            </p>
          </InfoBox>
        </section>

        {/* Geçici vs Kalıcı */}
        <section id="gecici-vs-kalici">
          <h2>Geçici Tamir mi, Kalıcı Çözüm mü?</h2>
          <p>
            Çoğu balkon sahibinin ilk tepkisi geçici tamir olur: mastiği yenile, seramik derzine
            dolgu sür, gideri temizle. Bu yaklaşım kısa vadede işe yarayabilir, ancak kökteki
            sorunu çözmez. İkisi arasındaki farkı net görmek, doğru kararı vermenizi sağlar.
          </p>

          <ComparisonTable
            caption="Geçici Tamir vs Kalıcı Su Yalıtımı Sistemi"
            headers={['Parametre', 'Geçici Tamir', 'Kalıcı Sistem']}
            rows={[
              { cells: ['Maliyet', 'Düşük (kısa vadede)', 'Orta-yüksek (uzun vadede ekonomik)'] },
              { cells: ['Ömür', '1-3 yıl', '10-15 yıl'] },
              { cells: ['Etkinlik', 'Kısmi — semptomu giderir', 'Tam — kaynağı çözer'], highlight: true },
              { cells: ['Garanti', 'Yok', 'İşçilik + malzeme garantisi'] },
              { cells: ['Alt komşu riski', 'Devam eder', 'Ortadan kalkar'], highlight: true },
              { cells: ['Yapısal hasar önleme', 'Hayır', 'Evet — betonarme korunur'] },
              { cells: ['Tekrar müdahale', 'Her 1-3 yılda bir', 'Bakım: 7-10 yılda derz yenileme'] },
            ]}
          />

          <p>
            Basit bir hesapla: 3 yılda bir geçici tamir yaptıran bir balkon sahibi, 15 yılda
            5 kez müdahale ile kalıcı sistemin maliyetini geçmiş olur — üstelik her seferinde
            alt komşu riski devam eder, yapısal hasar birikir.
          </p>
        </section>

        {/* Sık Yapılan Hatalar */}
        <section id="hatalar">
          <h2>Sık Yapılan Hatalar</h2>
          <p>
            Balkon izolasyon uygulamalarında tekrar eden hatalar, genellikle maliyet kesme kaygısı
            veya teknik bilgi eksikliğinden kaynaklanır. Bu hataların farkında olmak, doğru firmayı
            seçmenizi kolaylaştırır.
          </p>

          <CheckList
            title="Kaçınılması Gereken Hatalar"
            variant="warning"
            items={[
              'Eski seramik sökmeden üstüne uygulama yapmak — eski kaplama altındaki sorun gizli kalır, membran beton yüzeyine değil seramiğe yapışır',
              'Eğim şapını atlamak — doğru membran + yanlış eğim = su hâlâ birikir, sorun çözülmez',
              'Tek kat membran uygulamak — tek kat mekanik hasara açık, çift kat (2.5-3 kg/m²) standarttır',
              'Gider manşonunu atlamak — gider çevresi en kritik nokta; manşonsuz uygulama buradan sızdırır',
              'Köşe bandını atlamak — duvar-döşeme köşesi ısıl hareket noktası; bant olmadan kaçınılmaz çatlak',
              'Sert derz dolgusuyla köşeleri doldurmak — köşeler esnek mastik ister; sert dolgu çatlar ve açılır',
              'Yazın öğle saatlerinde uygulama — yüzey 60°C\'de malzeme yanar gibi kurur, çatlak oluşur',
              'UV dayanımsız iç mekan mastiki kullanmak — dış balkon için özellikle dış mekan/UV dayanımlı mastik şart',
            ]}
          />
        </section>

        {/* Sonuç */}
        <section id="sonuc">
          <h2>Sonuç</h2>
          <p>
            Balkon sızıntısı KKTC&apos;de sık karşılaşılan, ancak erken müdahaleyle kolayca önlenebilecek
            bir sorundur. Bu rehberde ele aldıklarımızı özetlersek:
          </p>
          <ul>
            <li>KKTC&apos;nin yoğun UV&apos;ü, aşırı sıcakları ve deniz tuzu etkisi balkon sistemlerini Avrupa&apos;ya kıyasla daha hızlı yorar — bu nedenle KKTC&apos;ye özgün malzeme seçimi ve bakım takvimi şarttır</li>
            <li>Sızıntının 5 ana nedeni: yanlış meyil, eşik detay hatası, gider sorunu, membran yıpranması ve açık genleşme derzleri</li>
            <li>Alt komşuya ulaşan sızıntı hem yapısal hasar hem yasal sorumluluk doğurur; erken müdahale her iki riski de ortadan kaldırır</li>
            <li>Kalıcı çözüm 6 adımdan oluşur: söküm, eğim şapı, astar, 2K membran (2 kat), koruma şapı, kaplama</li>
            <li>Geçici tamir kısa vadede ucuz görünse de tekrarlayan müdahalelerle uzun vadede daha pahalıya gelir</li>
            <li>Uygulama için en uygun dönem Mart-Mayıs ve Eylül-Kasım aylarıdır</li>
          </ul>
          <p>
            <strong>Düzkar Dizayn</strong> olarak Girne, Lefkoşa ve KKTC genelinde balkon su yalıtımı
            uygulamaları gerçekleştiriyoruz. Teras, çatı ve bodrum yalıtımındaki 25 yılı aşkın deneyimimiz,
            saha gerçeklerine dayalı çözümler sunmamızı sağlıyor.
          </p>
          <p>
            Balkonunuzda sızıntı şüphesi var mı, yoksa koruyucu önlem almayı mı düşünüyorsunuz?{' '}
            <Link href="/#iletisim">Ücretsiz keşif talebinde bulunun</Link>
            {' '}— uzmanlarımız yerinde inceleme yaparak size en uygun çözümü önersin. Ayrıca{' '}
            <Link href="/hizmetler/izolasyon-ve-su-yalitimi">su yalıtımı hizmetlerimiz</Link>
            {' '}ve{' '}
            <Link href="/blog/kuzey-kibrista-izolasyonun-onemi">Kuzey Kıbrıs&apos;ta izolasyon rehberimiz</Link>
            {' '}hakkında daha fazla bilgi edinebilirsiniz.
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
