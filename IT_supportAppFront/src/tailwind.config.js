// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "node_modules/flowbite/**/*.js" // Include Flowbite's content
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
