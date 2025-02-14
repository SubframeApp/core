import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"
import resolve from "@rollup/plugin-node-resolve"
import terser from "@rollup/plugin-terser"
import typescript from "rollup-plugin-typescript2"

const packageJson = require("./package.json")

/**@type {import("rollup").RollupOptions[]} */
const rollupOptions = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        inlineDynamicImports: true,
        format: "cjs",
      },
      {
        file: packageJson.module,
        inlineDynamicImports: true,
        format: "esm",
      },
    ],
    plugins: [
      typescript({ tsconfig: "./tsconfig.json" }),
      json(),
      resolve({
        preferBuiltins: true,
        exportConditions: ["node", "default"],
      }),
      commonjs(),
      terser(),
    ],
  },
]

export default rollupOptions
