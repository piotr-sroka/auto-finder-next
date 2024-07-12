import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#003049",
        "regal-blue-light": "#669BBC",
        "regal-red": "#780000",
        "regal-red-light": "#C1121F",
        "regal-beige": "#fff5e3",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
