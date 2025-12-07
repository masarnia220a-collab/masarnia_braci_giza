/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        interte: ["var(--font-inter)"], // Overrides default font-sans
        albert: ["var(--font-albert-sans)"], // Creates font-albert
      },
      colors: {
        // BRAND COLORS
        brand: {
          red: "#A51B31",
          redDark: "#3F0A13", // from gradient end stop
        },

        // TEXT COLORS
        text: {
          primary: "#000000",
          secondary: "#3B2E2A",
        },

        // BACKGROUND COLORS
        background: {
          soft: "#FFF5E1",
          softer: "#FFE9E1",
        },

        // SUPPORT COLORS
        gold: "#ECC861",

        // NEUTRALS
        gray: {
          100: "#FFFFFF",
          200: "#F5F5F5",
          300: "#D9D9D9",
          400: "#3B2E2A",
          500: "#00000099", // 60%
          600: "#00000094", // 58%
          900: "#000000",
        },

        // BORDERS
        border: {
          light: "#D9D9D9",
        },
      },

      // GRADIENT FROM FIGMA
      backgroundImage: {
        "headline-gradient":
          "linear-gradient(90deg, #A51B31 39%, #3F0A13 100%)",
      },

      // RADIUS
      borderRadius: {
        card: "18px",
        section: "24px",
      },

      // SHADOWS
      boxShadow: {
        card: "0 4px 18px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
