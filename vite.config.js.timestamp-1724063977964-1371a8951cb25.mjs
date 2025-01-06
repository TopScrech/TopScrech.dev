// vite.config.js
import { svelte } from "file:///Users/topscrech/Library/Mobile%20Documents/com~apple~CloudDocs/Projects/WebStorm/TopScrech.dev/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
import routify from "file:///Users/topscrech/Library/Mobile%20Documents/com~apple~CloudDocs/Projects/WebStorm/TopScrech.dev/node_modules/@roxi/routify/lib/extra/vite-plugin/vite-plugin.js";
import { defineConfig } from "file:///Users/topscrech/Library/Mobile%20Documents/com~apple~CloudDocs/Projects/WebStorm/TopScrech.dev/node_modules/vite/dist/node/index.js";
import { mdsvex } from "file:///Users/topscrech/Library/Mobile%20Documents/com~apple~CloudDocs/Projects/WebStorm/TopScrech.dev/node_modules/mdsvex/dist/main.cjs.js";
import { resolve } from "path";
import postCssNesting from "file:///Users/topscrech/Library/Mobile%20Documents/com~apple~CloudDocs/Projects/WebStorm/TopScrech.dev/node_modules/postcss-nesting/dist/index.mjs";
var production = process.env.NODE_ENV === "production";
var vite_config_default = defineConfig({
  clearScreen: false,
  resolve: {
    alias: {
      "@": resolve("src"),
      "hitler": resolve("assets"),
      "comps": resolve("src/components")
    }
  },
  test: {
    environment: "jsdom",
    globals: true,
    server: {
      deps: {
        inline: [
          "@roxi/routify"
        ]
      }
    }
  },
  plugins: [
    routify(
      {
        render: {
          csr: {
            enable: production
          }
        }
      }
    ),
    svelte({
      compilerOptions: {
        dev: !production,
        hydratable: !!process.env.ROUTIFY_SSR_ENABLE
      },
      extensions: [".md", ".svelte"],
      preprocess: [mdsvex({ extension: "md" })]
    })
  ],
  css: { postcss: { plugins: [postCssNesting()] } },
  server: { port: 1337 }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvdG9wc2NyZWNoL0xpYnJhcnkvTW9iaWxlIERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL1Byb2plY3RzL1dlYlN0b3JtL1RvcFNjcmVjaC5kZXZcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy90b3BzY3JlY2gvTGlicmFyeS9Nb2JpbGUgRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvUHJvamVjdHMvV2ViU3Rvcm0vVG9wU2NyZWNoLmRldi92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvdG9wc2NyZWNoL0xpYnJhcnkvTW9iaWxlJTIwRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvUHJvamVjdHMvV2ViU3Rvcm0vVG9wU2NyZWNoLmRldi92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IHN2ZWx0ZSB9IGZyb20gJ0BzdmVsdGVqcy92aXRlLXBsdWdpbi1zdmVsdGUnXG5pbXBvcnQgcm91dGlmeSBmcm9tICdAcm94aS9yb3V0aWZ5L3ZpdGUtcGx1Z2luJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB7IG1kc3ZleCB9IGZyb20gJ21kc3ZleCdcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHBvc3RDc3NOZXN0aW5nIGZyb20gJ3Bvc3Rjc3MtbmVzdGluZydcblxuY29uc3QgcHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBjbGVhclNjcmVlbjogZmFsc2UsXG4gICAgcmVzb2x2ZToge1xuICAgICAgICBhbGlhczoge1xuICAgICAgICAgICAgJ0AnOiByZXNvbHZlKCdzcmMnKSxcbiAgICAgICAgICAgICdoaXRsZXInOiByZXNvbHZlKCdhc3NldHMnKSxcbiAgICAgICAgICAgIFwiY29tcHNcIjogcmVzb2x2ZSgnc3JjL2NvbXBvbmVudHMnKSxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB0ZXN0OiB7XG4gICAgICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgICAgICBnbG9iYWxzOiB0cnVlLFxuICAgICAgICBzZXJ2ZXI6IHtcbiAgICAgICAgICAgIGRlcHM6IHtcbiAgICAgICAgICAgICAgICBpbmxpbmU6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJAcm94aS9yb3V0aWZ5XCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIHJvdXRpZnkoe1xuICAgICAgICAgICAgICAgIHJlbmRlcjoge1xuICAgICAgICAgICAgICAgICAgICBjc3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogcHJvZHVjdGlvblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLFxuICAgICAgICBzdmVsdGUoe1xuICAgICAgICAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgZGV2OiAhcHJvZHVjdGlvbixcbiAgICAgICAgICAgICAgICBoeWRyYXRhYmxlOiAhIXByb2Nlc3MuZW52LlJPVVRJRllfU1NSX0VOQUJMRSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHRlbnNpb25zOiBbJy5tZCcsICcuc3ZlbHRlJ10sXG4gICAgICAgICAgICBwcmVwcm9jZXNzOiBbbWRzdmV4KHsgZXh0ZW5zaW9uOiAnbWQnIH0pXSxcbiAgICAgICAgfSksXG4gICAgXSxcbiAgICBjc3M6IHsgcG9zdGNzczogeyBwbHVnaW5zOiBbcG9zdENzc05lc3RpbmcoKV0gfSB9LFxuXG4gICAgc2VydmVyOiB7IHBvcnQ6IDEzMzcgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJjLFNBQVMsY0FBYztBQUNsZSxPQUFPLGFBQWE7QUFDcEIsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxjQUFjO0FBQ3ZCLFNBQVMsZUFBZTtBQUN4QixPQUFPLG9CQUFvQjtBQUUzQixJQUFNLGFBQWEsUUFBUSxJQUFJLGFBQWE7QUFFNUMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0gsS0FBSyxRQUFRLEtBQUs7QUFBQSxNQUNsQixVQUFVLFFBQVEsUUFBUTtBQUFBLE1BQzFCLFNBQVMsUUFBUSxnQkFBZ0I7QUFBQSxJQUNyQztBQUFBLEVBQ0o7QUFBQSxFQUVBLE1BQU07QUFBQSxJQUNGLGFBQWE7QUFBQSxJQUNiLFNBQVM7QUFBQSxJQUNULFFBQVE7QUFBQSxNQUNKLE1BQU07QUFBQSxRQUNGLFFBQVE7QUFBQSxVQUNKO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0w7QUFBQSxNQUFRO0FBQUEsUUFDQSxRQUFRO0FBQUEsVUFDSixLQUFLO0FBQUEsWUFDRCxRQUFRO0FBQUEsVUFDWjtBQUFBLFFBQ0o7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0gsaUJBQWlCO0FBQUEsUUFDYixLQUFLLENBQUM7QUFBQSxRQUNOLFlBQVksQ0FBQyxDQUFDLFFBQVEsSUFBSTtBQUFBLE1BQzlCO0FBQUEsTUFDQSxZQUFZLENBQUMsT0FBTyxTQUFTO0FBQUEsTUFDN0IsWUFBWSxDQUFDLE9BQU8sRUFBRSxXQUFXLEtBQUssQ0FBQyxDQUFDO0FBQUEsSUFDNUMsQ0FBQztBQUFBLEVBQ0w7QUFBQSxFQUNBLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUU7QUFBQSxFQUVoRCxRQUFRLEVBQUUsTUFBTSxLQUFLO0FBQ3pCLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
