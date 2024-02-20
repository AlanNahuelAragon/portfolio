import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import replace from '@rollup/plugin-replace';

export default defineConfig({
  plugins: [
    react(),
    replace({
      'process.env.EMAILJS_SERVICE': JSON.stringify(process.env.EMAILJS_SERVICE),
      'process.env.EMAILJS_TEMPLATE': JSON.stringify(process.env.EMAILJS_TEMPLATE),
      'process.env.EMAILJS_OPTIONS': JSON.stringify(process.env.EMAILJS_OPTIONS),
      'process.env.CONTACT_EMAIL': JSON.stringify(process.env.CONTACT_EMAIL),
    })
  ],
  base:'https://alannahuelaragon.github.io/portfolio'
});