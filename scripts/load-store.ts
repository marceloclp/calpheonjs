import fs from 'fs'
import path from 'path'

export default function (folder: 'query' | 'scraper') {
    const mocksDir = path.join(__dirname, '../mocks')
    const cacheDir = path.join(__dirname, '../cache')

    const keys = fs.readdirSync(
        path.join(mocksDir, folder),
        { encoding: 'utf-8' },
    ).map(key => key.split('.').slice(0, -1).join('.'))

    const cache = keys.reduce((obj, key) => {
        const data = fs.readFileSync(
            path.join(cacheDir, folder, key + '.txt'),
            { encoding: 'utf-8' },
        )
        return { ...obj, [key]: data }
    }, {})

    const mocks = keys.reduce((obj, key) => {
        const data = fs.readFileSync(
            path.join(mocksDir, folder, key + '.json'),
            { encoding: 'utf-8' },
        )
        return { ...obj, [key]: JSON.parse(data) }
    }, {})

    return { keys, cache, mocks }
}
