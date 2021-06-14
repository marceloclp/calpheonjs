import fs from 'fs/promises'
import path from 'path'
import fetch from 'node-fetch'
import { decomposeFileKey } from '../utils/decompose-file-key'
import { composeQueryURL } from '../../utils/compose-query-url'

async function setupTests() {
    const root = path.join(__dirname, '../../../../../')
    const mocks = path.join(root, 'mocks/query')
    const cache = path.join(root, 'cache/query')

    const keys = (await fs.readdir(mocks, { encoding: 'utf-8' }))
        .map(key => key.split('.').slice(0, -1).join('.'))

    await Promise.all(keys.map(async key => {
        const filePath = path.join(cache, key + '.txt')
        try {
            await fs.readFile(filePath, { encoding: 'utf-8' })
        } catch {
            const args = decomposeFileKey(key)
            const url = composeQueryURL(args)
            const response = await fetch(url)
            await fs.writeFile(filePath, await response.text())
        }
    }))
}
setupTests()