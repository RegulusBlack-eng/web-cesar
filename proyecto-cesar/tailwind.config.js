/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          void: "#080A0F",
          card: "#111623",
          border: "#1E2638",
        },
        titanium: {
          DEFAULT: "#E2E8F0",
          muted: "#94A3B8",
        },
        photonic: {
          blue: "#2563EB",
          glow: "#3B82F6",
        },
        solar: {
          amber: "#F59E0B",
        },
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};
