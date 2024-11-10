import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/PortofolioRidz/", // Menambahkan base path
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "/index.html", // Entry file tetap di public
    },
  },
});
