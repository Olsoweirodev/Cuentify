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
        primary: "#FF5E00", // Ana renk (turuncu)
        secondary: "#1F2937", // Koyu gri (başlıklar için)
        accent: "#F3F4F6", // Açık gri (arka planlar için)
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Inter fontu
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to bottom, #FF5E00, #F3F4F6)", // Hero bölümü için gradient
        "story-pattern": "url('/pattern-bg.png')", // Hikaye bölümü için desen (isteğe bağlı)
      },
    },
  },
  plugins: [],
};
