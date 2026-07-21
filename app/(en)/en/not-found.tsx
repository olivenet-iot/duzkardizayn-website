import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function EnNotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="max-w-xl mx-auto px-4 py-16 text-center">
          <h1 className="font-heading text-8xl md:text-9xl font-bold text-gold-primary mb-4">
            404
          </h1>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark mb-4">
            Page not found
          </h2>
          <p className="text-gray-text text-lg mb-8">
            The page you were looking for may have moved, or it may never have
            existed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en"
              className="inline-flex items-center justify-center px-6 py-3 bg-gold-primary text-navy-dark font-semibold rounded-lg hover:bg-gold-dark transition-colors"
            >
              Back to home
            </Link>
            <Link
              href="/en#contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-navy-dark text-navy-dark font-semibold rounded-lg hover:bg-navy-dark hover:text-white transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
