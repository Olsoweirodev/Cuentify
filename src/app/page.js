import Image from 'next/image';
import Link from 'next/link';
import SearchStories from './SearchStories';

export const metadata = {
  title: "Cuentify",
  description: "Dünya çapında hikayeler paylaşabileceğiniz ve keşfedebileceğiniz bir platform.",
};

export default function Home() {
  const appName = process.env.APP_NAME || 'Cuentify';

  return (
    <div className="min-h-screen">
      {/* Hero Bölümü */}
      <div className="bg-hero-gradient text-center py-24">
        <div className="container mx-auto px-4">
          <Image
            src="/logo.png"
            alt={`${appName} Logosu`}
            width={150}
            height={150}
            className="mx-auto mb-6 rounded-full shadow-custom border-4 border-primary"
          />
          <h1 className="text-5xl font-bold text-secondary mb-4">
            {`${appName}\'e Hoş Geldiniz`}
          </h1>
          <p className="text-xl text-muted mb-8">
            Dünya çapında hikayeler paylaşabileceğiniz ve keşfedebileceğiniz bir platform.
          </p>
          <Link href="/about">
            <span className="inline-block bg-primary text-secondary font-semibold py-3 px-8 rounded-lg hover:bg-orange-600 transition-all shadow-custom">
              Daha Fazla Bilgi
            </span>
          </Link>
        </div>
      </div>

      {/* Arama ve Hikaye Bölümü */}
      <SearchStories />
    </div>
  );
}