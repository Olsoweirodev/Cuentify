"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebase";

export default function Write() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!auth.currentUser) {
      setError("Hikaye yazmak için giriş yapmalısınız.");
      return;
    }

    const newStory = {
      id: Date.now().toString(),
      title,
      excerpt,
      content,
      category,
      author: auth.currentUser.email.split("@")[0],
    };

    try {
      const res = await fetch("/api/stories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStory),
      });

      if (res.ok) {
        router.push("/");
      } else {
        setError("Hikaye kaydedilemedi.");
      }
    } catch (err) {
      setError("Bir hata oluştu.");
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-secondary mb-8 text-center">
          Yeni Hikaye Yaz
        </h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" className="block text-muted mb-2">
              Hikaye Başlığı
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-accent text-secondary"
              placeholder="Hikaye başlığını girin"
              required
            />
          </div>
          <div>
            <label htmlFor="excerpt" className="block text-muted mb-2">
              Özet
            </label>
            <input
              type="text"
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-accent text-secondary"
              placeholder="Hikayenin kısa bir özetini girin"
              required
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-muted mb-2">
              Hikaye İçeriği
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-accent text-secondary"
              placeholder="Hikayenizi buraya yazın"
              rows="10"
              required
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-muted mb-2">
              Kategori
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-accent text-secondary"
              required
            >
              <option value="">Kategori seçin</option>
              <option value="Macera">Macera</option>
              <option value="Romantizm">Romantizm</option>
              <option value="Fantastik">Fantastik</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-secondary font-semibold py-3 rounded-lg hover:bg-orange-600 transition shadow-md"
          >
            Hikayeyi Paylaş
          </button>
        </form>
      </div>
    </div>
  );
}