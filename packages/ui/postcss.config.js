// postcss.config.js
// export default {
//   plugins: {
//       "@tailwindcss/postcss": {},
//       "autoprefixer": {}
//   },
// };

module.exports = {
  plugins: [require('@tailwindcss/postcss')(), require('autoprefixer')()],
}