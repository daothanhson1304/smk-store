// craco.config.js
module.exports = {
  babel: {
    plugins: ['babel-plugin-macros'],
  },
  style: {
    postOptions: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
