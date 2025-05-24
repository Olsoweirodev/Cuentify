import Image from 'next/image';
import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';

export default async function Home() {
  const appName = process.env.APP_NAME || 'Cuentify';
  
  // JSON dosyasını oku
  const filePath = path.join(process.cwd(), 'data', 'stories.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const stories = JSON.parse(fileContents);

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
            className="mx-auto mb-6 rounded-full shadow-lg border-4 border-secondary"
          />
          <h1 className="text-5xl font-bold text-secondary mb-4">
            {`${appName}\'e Hoş Geldiniz`}
          </h1>
          <p className="text-xl text-muted mb-8">
            Dünya çapında hikayeler paylaşabileceğiniz ve keşfedebileceğiniz bir platform.
          </p>
          <Link href="/about">
            <span className="inline-block bg-primary text-secondary font-semibold py-3 px-8 rounded-lg hover:bg-orange-600 transition shadow-md">
              Daha Fazla Bilgi
            </span>
          </Link>
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
              <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-primary">
                    {story.title}
                  </h3>
                  <span className="text-sm bg-primary text-secondary px-2 py-1 rounded-full">
                    {story.category}
                  </span>
                </div>
                <p className="text-muted mb-4">Yazar: {story.author}</p>
                <p className="text-muted">{story.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}