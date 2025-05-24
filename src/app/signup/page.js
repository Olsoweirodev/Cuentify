export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-card p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-secondary mb-6 text-center">Kayıt Ol</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-muted mb-2">
              Kullanıcı Adı
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-accent text-secondary"
              placeholder="Kullanıcı adınızı girin"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-muted mb-2">
              E-posta Adresi
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-accent text-secondary"
              placeholder="ornek@eposta.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-muted mb-2">
              Şifre
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-accent text-secondary"
              placeholder="Şifrenizi girin"
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