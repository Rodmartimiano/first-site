import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@typings": path.resolve(__dirname, "./../typings"),
      "@envconfigs": path.resolve(__dirname, "./../environment"),
    },
  },
  server: {
    port: 3450,
    host: "0.0.0.0",
  },
});
