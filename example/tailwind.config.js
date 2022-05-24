/* eslint-disable global-require */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [require('../index')],
};
