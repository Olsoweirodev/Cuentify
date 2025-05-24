import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cuentify",
  description: "Dünya çapında hikayeler paylaşabileceğiniz ve keşfedebileceğiniz bir platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-accent text-secondary`}>
        {/* Navigasyon Çubuğu */}
        <nav className="bg-card shadow-lg">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/">
              <span className="text-2xl font-bold text-primary">Cuentify</span>
            </Link>
            <div className="flex items-center space-x-6">
              {/* Arama Çubuğu */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Hikaye ara..."
                  className="bg-accent text-secondary placeholder-muted border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <svg
                  className="absolute right-3 top-2.5 h-5 w-5 text-muted"
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
              {/* Navigasyon Bağlantıları */}
              <div className="flex space-x-6">
                <Link href="/">
                  <span className="text-muted hover:text-primary transition">Ana Sayfa</span>
                </Link>
                <Link href="/about">
                  <span className="text-muted hover:text-primary transition">Hakkında</span>
                </Link>
                <Link href="/login">
                  <span className="text-muted hover:text-primary transition">Giriş Yap</span>
                </Link>
                <Link href="/signup">
                  <span className="text-muted hover:text-primary transition">Kayıt Ol</span>
                </Link>
                <Link href="/profile">
                  <span className="text-muted hover:text-primary transition">Profil</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* İçerik */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-card py-6 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted">
              © 2025 Cuentify. Tüm hakları saklıdır.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-muted hover:text-primary transition">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-muted hover:text-primary transition">
                Kullanım Şartları
              </a>
              <a href="#" className="text-muted hover:text-primary transition">
                İletişim
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}