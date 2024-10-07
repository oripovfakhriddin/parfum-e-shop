import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#65B968",
        "boxdark-1": "#24303F",
        "boxdark-2": "#1A222C",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
