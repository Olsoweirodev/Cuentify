/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5E00", // Ana renk (turuncu, Wattpad’in turuncusu)
        secondary: "#FFFFFF", // Beyaz (metinler için)
        accent: "#121212", // Koyu arka plan (Wattpad benzeri)
        card: "#1E1E1E", // Kartlar için koyu gri
        muted: "#B0B0B0", // Açık gri (ikincil metinler için)
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Inter fontu
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to bottom, #FF5E00, #121212)", // Hero bölümü için gradient
        "story-pattern": "url('/pattern-bg.png')", // Hikaye bölümü için desen (isteğe bağlı)
      },
    },
  },
  plugins: [],
};