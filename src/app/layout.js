"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <html lang="tr">
      <body className={`${inter.className} bg-background text-secondary`}>
        {/* Navigasyon Çubuğu */}
        <nav className="bg-surface shadow-custom sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/">
              <span className="text-2xl font-bold text-primary hover:text-orange-600 transition-colors">
                Cuentify
              </span>
            </Link>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-6">
                <Link href="/">
                  <span className="text-muted hover:text-primary transition-colors">
                    Ana Sayfa
                  </span>
                </Link>
                <Link href="/about">
                  <span className="text-muted hover:text-primary transition-colors">
                    Hakkında
                  </span>
                </Link>
                {user ? (
                  <>
                    <Link href="/write">
                      <span className="text-muted hover:text-primary transition-colors">
                        Hikaye Yaz
                      </span>
                    </Link>
                    <Link href="/profile">
                      <span className="text-muted hover:text-primary transition-colors">
                        Profil
                      </span>
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="text-muted hover:text-primary transition-colors"
                    >
                      Çıkış Yap
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login">
                      <span className="text-muted hover:text-primary transition-colors">
                        Giriş Yap
                      </span>
                    </Link>
                    <Link href="/signup">
                      <span className="text-muted hover:text-primary transition-colors">
                        Kayıt Ol
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* İçerik */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-surface py-6 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted">
              © 2025 Cuentify. Tüm hakları saklıdır.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-muted hover:text-primary transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                Kullanım Şartları
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                İletişim
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}