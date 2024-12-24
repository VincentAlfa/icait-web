import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "san-juan": {
          "50": "#f3f7fc",
          "100": "#e6eef8",
          "200": "#c8dcef",
          "300": "#97bfe2",
          "400": "#5f9dd1",
          "500": "#3a80bd",
          "600": "#2a659f",
          "700": "#235281",
          "800": "#21476d",
          "900": "#203c5a",
          "950": "#15263c",
        },
        saffron: {
          "50": "#fefde8",
          "100": "#fffdc2",
          "200": "#fff788",
          "300": "#ffea44",
          "400": "#fed811",
          "500": "#f2c204",
          "600": "#ce9400",
          "700": "#a46a04",
          "800": "#87520c",
          "900": "#734310",
          "950": "#432305",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
