import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      outputDir: "dist",
      skipDiagnostics: false,
    })],
  build: {
    lib: {
      entry: "src/entry.ts",
      name: "TvMenu",
      fileName: format => `tv-menu.${format}.js`,
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: ["vue", "@todovue/tv-search", "@todovue/tv-button"],
      output: {
        exports: 'named'
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    }
  }
});
