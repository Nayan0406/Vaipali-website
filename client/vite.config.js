import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
  ],
})
