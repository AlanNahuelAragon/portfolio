import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
//import replace from '@rollup/plugin-replace';

export default defineConfig({
  plugins: [
    react(),
  ],
  base:'https://alannahuelaragon.github.io/portfolio'
});