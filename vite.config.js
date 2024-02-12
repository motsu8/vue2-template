/** @type {import('vite').UserConfig} */
import vue from "@vitejs/plugin-vue2";

export default {
  plugins: [vue()],
  root: "./src",
  publicDir: "./public",
  server: {
    port: 5000,
    open: true,
    cors: false,
  },
};
