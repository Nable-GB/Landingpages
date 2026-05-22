import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#030308",
        graphite: "#0d111a",
        panel: "rgba(13, 17, 30, 0.72)",
        cyanline: "#38d5ff",
        violetline: "#9b5cff",
        mintline: "#2ff0b4",
      },
      boxShadow: {
        glow: "0 0 44px rgba(56, 213, 255, 0.22)",
        violet: "0 0 44px rgba(155, 92, 255, 0.24)",
      },
      backgroundImage: {
        "network-grid": "url('/assets/network-grid.svg')",
        "world-network": "url('/assets/world-network.svg')",
        "hero-generated": "url('/assets/speednano-hero-generated.webp')",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
