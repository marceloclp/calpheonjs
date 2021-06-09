import tsConfig from '../tsconfig.json'

export default function () {
    return Object
        .entries(tsConfig.compilerOptions.paths)
        .reduce((obj, [baseName, paths]) => {
            const name = '^' + baseName.replace('*', '(.*)$')
            const path = `<rootDir>/src/${paths[0].replace('*', '$1')}`
            return { ...obj, [name]: path }
        }, {})
}