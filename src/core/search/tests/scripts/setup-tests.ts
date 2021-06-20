import fs from 'fs/promises'
import path from 'path'
import fetch from 'node-fetch'
import chalk from 'chalk'

import { buildSearchURL } from '../../utils/build-search-url'
import { decomposeFileKey } from '../utils/decompose-file-key'

const logFile = (key: string, status: 'F' | 'D'): void => console.log(
    chalk.blackBright.bold('  @') +
    (status === 'F'
        ? chalk.greenBright.bold(` [${status}] `)
        : chalk.redBright.bold(` [${status}] `)) +
    chalk.whiteBright.bold(key)
);

(async function() {
    const rootDir = path.join(__dirname, '../../../../../')
    const mocksDir = path.join(rootDir, 'mocks/search')
    const cacheDir = path.join(rootDir, 'cache/search')
    await fs.mkdir(cacheDir, { recursive: true })

    const keys = await fs
        .readdir(mocksDir, { encoding: 'utf-8' })
        .then(keys => keys.map(k => k.split('.').slice(0, -1).join('.')))
    const missing = await fs
        .readdir(cacheDir, { encoding: 'utf-8' })
        .then(arr => keys.length - arr.length)
    if (missing === 0) return
    
    console.log(chalk
        .bgCyanBright.black
        .bold(` Preparing search tests (${missing}/${keys.length}) `)
    )
    
    await Promise.all(keys.map(async key => {
        const filePath = path.join(cacheDir, key + '.txt')
        try {
            await fs.access(filePath)
            logFile(key, 'F')
        }
        catch {
            logFile(key, 'D')

            const args = decomposeFileKey(key)
            const url = buildSearchURL(args)
            const text = await fetch(url)
                .then(response => response.text())
            await fs.writeFile(filePath, text)
        }
    }))
})()