import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        inc: "cubic-bezier(0.13, 0.53, 0.38, 0.97)",
        outc: "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      fontFamily: {
        coolvetica: ["coolvetica"],
        montserrat: ["'Montserrat'"],
        display: ["DM Serif Display"],
      },
      colors: {
        primary: "#c98d76",
        secondary: "#da7b56",
        tertiary: "#aeaeae",
      },
    },
  },
  plugins: [],
};
export default config;
