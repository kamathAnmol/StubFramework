import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import {terser} from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import image from "@rollup/plugin-image";
import postcssImport from "postcss-import";
export default [
  {
    input: "./src/components/index.js",
    output: [
      {
        file: "./build-esm/index.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      postcss({
        plugins: [postcssImport()],
        minimize: true,
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        extensions: [".js", ".jsx"],
        babelHelpers: "bundled",
      }),
      resolve({extensions: [".js", ".jsx", ".css"], browser: true}),
      terser(),
      peerDepsExternal(),
      commonjs(),
      image(),
      alias({
        entries: [{find: "@components", replacement: "./src/components"}],
      }),
    ],
  },
];
