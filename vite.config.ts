import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 👈 Yeh line shamil karni hai
    // allowedHosts: [], // Aap isko hata bhi sakte hain ya khali chhod sakte hain
  },
});
