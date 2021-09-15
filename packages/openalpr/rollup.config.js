import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';
import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";

const plugins = [
  resolve(),
  commonjs(),
  json(),
  typescript()
];

export default [
  {
    input: pkg.source,
    external: ['axios', 'debug'],
    output: {
      name: 'openalpr',
      file: pkg.browser,
      format: 'umd',
      globals: {axios: 'axios', debug: 'debug'}
    },
    plugins
  },
  {
    input: pkg.source,
    external: ['axios', 'debug'],
    output: [
      {file: pkg.main, format: 'cjs'},
      {file: pkg.module, format: 'es'}
    ],
    plugins
  },
  {
    input: 'src/toBase64.ts',
    external: ['debug'],
    output: {
      name: 'toBase64',
      file: 'dist/toBase64.js',
      format: 'umd',
      globals: {debug: 'debug'}
    },
    plugins
  },
  {
    input: 'src/express-middleware.ts',
    external: ['axios', 'debug'],
    output: {
      name: 'express-middleware',
      file: 'dist/express-middleware.js',
      format: 'umd',
      globals: {axios: 'axios', debug: 'debug'}
    },
    plugins
  }
];
