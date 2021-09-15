import * as pkg from "./package.json";
import {baseConfig} from "../../jest.config";

const config = {
  ...baseConfig,
  displayName: pkg.name,
  testEnvironment: 'node',
}

export default config;
