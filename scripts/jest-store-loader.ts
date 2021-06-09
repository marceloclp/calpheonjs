import fs from 'fs'
import path from 'path'

export default function (module: 'query' | 'scraper') {
    const BASE_DIR = path.join(__dirname, '../')

    const keys = fs.readdirSync(
        path.join(BASE_DIR, `mocks/${module}`),
        { encoding: 'utf-8' },
    ).map(key => key.split('.').slice(0, -1).join('.'))

    const cache = keys.reduce((obj, key) => {
        try {
            const body = fs.readFileSync(
                path.join(BASE_DIR, `cache/${module}`, key + '.txt'),
                { encoding: 'utf-8' },
            )
            return { ...obj, [key]: body }
        } catch { return obj }
    }, {})

    const mocks = keys.reduce((obj, key) => {
        const body = fs.readFileSync(
            path.join(BASE_DIR, `mocks/${module}`, key + '.json'),
            { encoding: 'utf-8' },
        )
        return { ...obj, [key]: JSON.parse(body) }
    }, {})

    return { keys, cache, mocks }
}
