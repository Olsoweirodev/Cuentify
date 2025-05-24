import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const appName = process.env.APP_NAME || 'Cuentify';
  const stories = [
    { id: '1', title: 'Kayıp Şehir', author: 'Alex', excerpt: 'Bir maceracı, ormanda gizli bir şehir keşfeder.' },
    { id: '2', title: 'Yıldızlı Geceler', author: 'Maya', excerpt: 'Yıldızların altında romantik bir hikaye.' },
    { id: '3', title: 'Ejderhanın İni', author: 'Sam', excerpt: 'Cesur bir şövalye, vahşi bir ejderhayla yüzleşir.' },
  ];

  return (
    <div className="bg-accent min-h-screen">
      {/* Hero Bölümü */}
      <div className="bg-hero-gradient text-center py-20">
        <div className="container mx-auto px-4">
          <Image
            src="/logo.png"
            alt={`${appName} Logosu`}
            width={150}
            height={150}
            className="mx-auto mb-6 rounded-full shadow-lg"
          />
          <h1 className="text-5xl font-bold text-white mb-4">
            {appName}'e Hoş Geldiniz
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Dünya çapında hikayeler paylaşabileceğiniz ve keşfedebileceğiniz bir platform.
          </p>
          <a
            href="/about"
            className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-600 transition shadow-md"
          >
            Daha Fazla Bilgi
          </a>
        </div>
      </div>

      {/* Hikaye Bölümü */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
          Öne Çıkan Hikayeler
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Link href={`/stories/${story.id}`} key={story.id}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-4">Yazar: {story.author}</p>
                <p className="text-gray-500">{story.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}