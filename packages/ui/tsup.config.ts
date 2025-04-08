import { defineConfig } from "tsup";

export default defineConfig((options:any) => ({
  entryPoints: ["src/button.tsx"],
  format: ["cjs", "esm"],
  dts: true,
    // Clean the `dist` directory before building.
  // This is useful to ensure the output is only the latest.
  clean: true,
  external: ["react"],
  ...options,
}));
