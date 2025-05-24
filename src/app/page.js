import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image src="/logo.png" alt="Cuentify Logo" width={100} height={100} />
      <h1 className="text-4xl font-bold text-primary">Welcome to Cuentify</h1>
    </div>
  );
}
