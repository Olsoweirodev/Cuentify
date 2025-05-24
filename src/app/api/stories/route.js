import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'data', 'stories.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const stories = JSON.parse(fileContents);
  return new Response(JSON.stringify(stories), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  const filePath = path.join(process.cwd(), 'data', 'stories.json');
  const newStory = await request.json();

  // Mevcut hikayeleri oku
  const fileContents = await fs.readFile(filePath, 'utf8');
  const stories = JSON.parse(fileContents);

  // Yeni hikayeyi ekle
  stories.push(newStory);

  // Dosyayı güncelle
  await fs.writeFile(filePath, JSON.stringify(stories, null, 2));

  return new Response(JSON.stringify(newStory), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}