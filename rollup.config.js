import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import preserveDirectives from "rollup-plugin-preserve-directives";
import esbuild from "rollup-plugin-esbuild";

/** @type {import("rollup").InputOptions} */
const sharedConfig = {
  sourcemap: true,
  preserveModules: true,
  preserveModulesRoot: "./src",
};

export default [
  {
    input: "src/index.ts",
    external: [/node_modules/],
    plugins: [
      peerDepsExternal(),
      postcss({
        modules: true,
        inject: { insertAt: "top" },
      }),
      esbuild({
        tsconfig: "tsconfig.json",
      }),
      preserveDirectives(),
    ],
    onwarn(warning, warn) {
      if (
        warning.code === "MODULE_LEVEL_DIRECTIVE" &&
        warning.message.includes(`use client`)
      ) {
        return;
      }
      warn(warning);
    },
    output: [
      {
        dir: "dist/cjs",
        format: "cjs",
        ...sharedConfig,
        plugins: [
          esbuild({
            tsconfig: "tsconfig.cjs.json",
          }),
        ],
      },
      {
        dir: "dist/esm",
        format: "es",
        ...sharedConfig,
        plugins: [
          esbuild({
            tsconfig: "tsconfig.esm.json",
          }),
        ],
      },
    ],
  },
];
