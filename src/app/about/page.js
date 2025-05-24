import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="bg-hero-gradient text-center py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-secondary mb-4">Cuentify Hakkında</h1>
          <p className="text-xl text-muted mb-8">
            Cuentify, dünya çapında hikayeler paylaşabileceğiniz ve keşfedebileceğiniz bir platformdur.
            Amacımız, hikayelerin gücüyle insanları bir araya getirmek.
          </p>
          <Link href="/">
            <span className="inline-block bg-primary text-secondary font-semibold py-3 px-8 rounded-lg hover:bg-orange-600 transition shadow-md">
              Ana Sayfaya Dön
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}