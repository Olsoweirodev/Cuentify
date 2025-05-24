import Link from 'next/link';

export default function Profile() {
  const user = {
    username: "KullanıcıAdı",
    bio: "Merhaba! Ben bir hikaye yazarıyım ve fantastik hikayeler yazmayı seviyorum.",
    stories: [
      { id: "3", title: "Ejderhanın İni", category: "Fantastik" },
    ],
  };

  return (
    <div className="min-h-screen">
      <div className="bg-hero-gradient text-center py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-secondary mb-4">{user.username}</h1>
          <p className="text-xl text-muted mb-8">{user.bio}</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
          Yazdığım Hikayeler
        </h2>
        {user.stories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {user.stories.map((story) => (
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
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted">Henüz hikaye yazmadınız.</p>
        )}
      </div>
    </div>
  );
}