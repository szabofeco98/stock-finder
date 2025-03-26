module.exports = {
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'always',
  tabWidth: 2,
  useTabs: false,
  printWidth: 140,
  trailingComma: 'es5',
  overrides: [
    {
      files: '*.json',
      options: {
        trailingComma: 'none',
      },
    },
  ],
};
