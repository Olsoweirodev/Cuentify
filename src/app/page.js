import Image from 'next/image';

export default function Home() {
  const appName = process.env.APP_NAME || 'Cuentify';

  return (
    <div className="relative bg-gray-100">
      <div className="container mx-auto px-4 py-16 text-center">
        <Image
          src="/logo.png"
          alt={`${appName} Logo`}
          width={150}
          height={150}
          className="mx-auto mb-4"
        />
        <h1 className="text-5xl font-bold text-primary mb-4">
          Welcome to {appName}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A global storytelling platform to share and discover amazing stories.
        </p>
        <a
          href="/about"
          className="inline-block bg-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-600 transition"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}