/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm2': '600px', // Custom screen at 600px
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        clashdisplay: ["--clashVariable", "sans-serif"],
      },
      boxShadow: {
        custom: "20px 20px 15px 10px red", // Custom shadow value
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(45deg, rgba(125, 184, 255, 0.14) 20%, #FFFFFF 100%)",
      },
    },
  },
  plugins: [],
};
