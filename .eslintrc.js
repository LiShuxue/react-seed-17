module.exports = {
  plugins: ['prettier'],
  extends: ['react-app', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
