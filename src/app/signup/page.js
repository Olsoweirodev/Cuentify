"use client";

import { useState } from "react";
import { auth } from "../../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      setError("Kayıt başarısız. E-posta zaten kullanımda olabilir.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-card p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-secondary mb-6 text-center">Kayıt Ol</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form className="space-y-4" onSubmit={handleSignup}>
          <div>
            <label htmlFor="username" className="block text-muted mb-2">
              Kullanıcı Adı
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-accent text-secondary"
              placeholder="Kullanıcı adınızı girin"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-muted mb-2">
              E-posta Adresi
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-accent text-secondary"
              placeholder="ornek@eposta.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-muted mb-2">
              Şifre
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-accent text-secondary"
              placeholder="Şifrenizi girin"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-secondary font-semibold py-3 rounded-lg hover:bg-orange-600 transition shadow-md"
          >
            Kayıt Ol
          </button>
        </form>
        <p className="text-center text-muted mt-4">
          Zaten hesabınız var mı?{' '}
          <a href="/login" className="text-primary hover:underline">
            Giriş Yap
          </a>
        </p>
      </div>
    </div>
  );
}