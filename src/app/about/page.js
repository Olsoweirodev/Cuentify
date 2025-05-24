export default function About() {
  return (
    <div className="bg-accent min-h-screen">
      <div className="bg-hero-gradient text-center py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-4">Cuentify Hakkında</h1>
          <p className="text-xl text-gray-200 mb-8">
            Cuentify, dünya çapında hikayeler paylaşabileceğiniz ve keşfedebileceğiniz bir platformdur.
            Amacımız, hikayelerin gücüyle insanları bir araya getirmek.
          </p>
          <a
            href="/"
            className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-600 transition shadow-md"
          >
            Ana Sayfaya Dön
          </a>
        </div>
      </div>
    </div>
  );
}