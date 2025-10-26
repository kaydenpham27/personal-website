import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    open: true,
  },
  base: "/personal-website/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
});
