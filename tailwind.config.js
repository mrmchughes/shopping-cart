const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: ["Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        "auto-fill-295": "repeat(auto-fill, minmax(295px, 1fr))",
        "auto-fill-350": "repeat(auto-fill, minmax(350px, 1fr))",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
