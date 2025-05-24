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
        background: "#121212", // Koyu arka plan (Wattpad benzeri)
        surface: "#1E1E1E", // Kartlar ve yüzeyler için hafif açık koyu renk
        primary: "#FF6F61", // Canlı bir kırmızı-turuncu (düğmeler ve vurgular için)
        secondary: "#E0E0E0", // Açık gri-beyaz (metinler için)
        muted: "#A0A0A0", // Soluk gri (ikincil metinler için)
        accent: "#2A2A2A", // Hafif açık koyu renk (vurgular için)
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #1E1E1E 0%, #121212 100%)", // Daha sade bir gradient
      },
      boxShadow: {
        "custom": "0 4px 12px rgba(0, 0, 0, 0.3)", // Daha yumuşak gölgeler
        "custom-hover": "0 6px 16px rgba(0, 0, 0, 0.4)", // Hover durumunda daha belirgin gölge
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Daha modern bir font
      },
    },
  },
  plugins: [],
};