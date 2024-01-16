import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //change default to show both finished and starter version
  // server: {
  //   port: 3001,
  // },
});
