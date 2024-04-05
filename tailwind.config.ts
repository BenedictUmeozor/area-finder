import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light_bg: "#F5F5F5",
        lighter_bg: "#F3F7FE",
        lightest_bg: "#E5F0FD",
        last_light_bg: "#D4DCF1",
        dark_bg: "#101012",
        darker_bg: "#18181B",
        darkest_bg: "#242428",
        light_text: "#101012",
        lighter_text: "#18181B",
        lightest_text: "#484851",
        dark_text: "#FBFAFC",
        darker_text: "#E6E6E6",
        darkest_text: "#999999",
        last_dark_text: "#D4DCF1",
        light_button: "#3168FF",
        light_button_second: "#0D2159",
        dark_button: "#5378F6",
        dark_button_second: "#BACAF5",
      },
    },
  },
  plugins: [],
  darkMode: "media",
};
export default config;
