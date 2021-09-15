import type {Config} from "@jest/types";

const ignorePatterns = [
  '/node_modules/',
  '<rootDir>/.stryker-tmp/',
]

export const baseConfig: Config.InitialOptions = {
  collectCoverage: true,
  coverageDirectory: "./coverage/",
  coveragePathIgnorePatterns: ignorePatterns,
  coverageReporters: ['json', 'lcovonly', 'text', 'clover'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  errorOnDeprecated: true,
  moduleDirectories: [
    "node_modules"
  ],
  testPathIgnorePatterns: ignorePatterns,
  transformIgnorePatterns: ignorePatterns,
  watchman: true
}

const config = {
  ...baseConfig,
  projects: ["<rootDir>/packages/openalpr"]
};

export default config;
