import { Config } from '@jest/types'
import mapPaths from './scripts/jest-path-mapper'
import loadStore from './scripts/jest-store-loader'

export default (): Config.InitialOptions => ({
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: mapPaths(),
  resolver: undefined,
  rootDir: './src',
  globalSetup: '<rootDir>/../scripts/jest-global-setup.js',
  globals: {
    stores: {
      query: loadStore('query'),
      scraper: loadStore('scraper'),
    }
  },
})
