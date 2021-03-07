module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@config/(.*)$': '<rootDir>/src/config/$1',
    '^@core/(.*)$': '<rootDir>/src/core/$1',
    '^@helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '^@typings/(.*)$': '<rootDir>/src/typings/$1',
  },
  resolver: undefined,
  globalSetup: './scripts/jest-global-setup.js',
};