const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./_drafts/**/*.html",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.md",
    "./*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
