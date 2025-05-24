import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';

export default async function StoryDetail({ params }) {
  const { id } = params;

  // JSON dosyasını oku
  const filePath = path.join(process.cwd(), 'data', 'stories.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const stories = JSON.parse(fileContents);

  // ID'ye göre hikayeyi bul
  const story = stories.find((s) => s.id === id);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-secondary mb-4">Hikaye Bulunamadı</h1>
          <Link href="/">
            <span className="text-primary hover:underline">Ana Sayfaya Dön</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="bg-hero-gradient text-center py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-secondary mb-4">{story.title}</h1>
          <p className="text-xl text-muted mb-2">Yazar: {story.author}</p>
          <span className="inline-block text-sm bg-primary text-secondary px-2 py-1 rounded-full">
            {story.category}
          </span>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="bg-card p-8 rounded-lg shadow-md">
          <p className="text-muted leading-relaxed">{story.content}</p>
        </div>
        <div className="mt-6 text-center">
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