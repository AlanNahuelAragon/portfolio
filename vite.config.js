import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import replace from '@rollup/plugin-replace';

export default defineConfig({
  plugins: [
    react(),
    replace({
      'process.env.EMAILJS_SERVICE': JSON.stringify(process.env.EMAILJS_SERVICE),
      'process.env.EMAILJS_TEMPLATE_ID': JSON.stringify(process.env.EMAILJS_TEMPLATE_ID),
      'process.env.EMAILJS_PUBLIC_KEY': JSON.stringify(process.env.EMAILJS_PUBLIC_KEY),
      'process.env.CONTACT_EMAIL_ID': JSON.stringify(process.env.CONTACT_EMAIL_ID),
    })
  ],
  base:'https://alannahuelaragon.github.io/portfolio'
});