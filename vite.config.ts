import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": "/src/app",
      "@assets": "/src/assets",
      "@pages": "/src/pages",
      "@features": "/src/features",
      "@entities": "/src/entities",
      "@shared": "/src/shared",
    },
  },
});
