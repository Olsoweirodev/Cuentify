"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SearchStories() {
  const [stories, setStories] = useState([]);
  const [filteredStories, setFilteredStories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchStories = async () => {
      const res = await fetch('/api/stories');
      const data = await res.json();
      setStories(data);
      setFilteredStories(data);
    };
    fetchStories();
  }, []);

  useEffect(() => {
    const filtered = stories.filter(
      (story) =>
        story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStories(filtered);
  }, [searchTerm, stories]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Hikaye, yazar veya kategori ara..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full bg-surface text-secondary placeholder-muted border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          />
          <svg
            className="absolute right-3 top-3.5 h-5 w-5 text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
          Öne Çıkan Hikayeler
        </h2>
        {filteredStories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredStories.map((story) => (
              <Link href={`/stories/${story.id}`} key={story.id}>
                <div className="card p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-primary">
                      {story.title}
                    </h3>
                    <span className="text-sm bg-primary text-secondary px-2 py-1 rounded-full">
                      {story.category}
                    </span>
                  </div>
                  <p className="text-muted mb-2">Yazar: {story.author}</p>
                  <p className="text-muted">{story.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted">Aramanıza uygun hikaye bulunamadı.</p>
        )}
      </div>
    </>
  );
}