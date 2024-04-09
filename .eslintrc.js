// eslint-disable-next-line no-undef
module.exports = {
  env: {
      browser: true,
      es2020: true,
      node: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'airbnb-base', 'prettier'],
  parserOptions: { ecmaVersion: 12, sourceType: 'module' },
  plugins: ['vue', 'prettier'],
  rules: { 'prettier/prettier': 'error' },
}
