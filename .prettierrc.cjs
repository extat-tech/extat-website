module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  overrides: [
    {
      files: '*.css',
      options: {
        parser: 'css',
        plugins: ['prettier-plugin-tailwindcss']
      }
    }
  ]
}
