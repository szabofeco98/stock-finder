// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`;

module.exports = {
  "**/*.{js,jsx,ts,tsx}": [buildEslintCommand],
  "**/*.{js,ts,tsx,html,css,scss,md,yml,json}": [
    "prettier --list-different --write",
  ],
};
