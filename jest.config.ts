import { Config } from '@jest/types'
import tsConfig from './tsconfig.json'
import loadStore from './scripts/load-store'

export default (): Config.InitialOptions => ({
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: Object
    .entries(tsConfig.compilerOptions.paths)
    .reduce((paths, [alias, [path]]) => Object.assign(paths, {
      [`^${alias.replace('*', '(.*)$')}`]:
        `<rootDir>/${path.replace('*', '$1')}`
    }), {}),
  resolver: undefined,
  rootDir: './src',
  globals: {
    stores: {
      query: loadStore('query'),
      scraper: loadStore('scraper'),
      search: loadStore('search'),
    }
  },
})
