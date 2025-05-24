export default function Login() {
  return (
    <div className="bg-accent min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-secondary mb-6 text-center">Giriş Yap</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-600 mb-2">
              E-posta Adresi
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="ornek@eposta.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-600 mb-2">
              Şifre
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Şifrenizi girin"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition shadow-md"
          >
            Giriş Yap
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Hesabınız yok mu?{' '}
          <a href="#" className="text-primary hover:underline">
            Kayıt Ol
          </a>
        </p>
      </div>
    </div>
  );
}