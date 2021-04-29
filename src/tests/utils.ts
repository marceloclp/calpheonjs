import fs from 'fs'
import path from 'path'
import cheerio from 'cheerio'
import { App } from '@typings/namespaces'
import { EntityLookup } from '@config/lookups'
import { TestData } from './types'
import { buildCodexURL } from '@helpers/utils/build-codex-url'

const mockPath = path.join(__dirname, '../../mocks')
const cachePath = path.join(__dirname, '../../cache')

export const getTestCases = <
    T extends App.Entities.Types,
    C extends App.Entities.SelectCategory<T>
>(
    group: 'scraper' | 'query',
    entityType?: T,
    entityCategory?: C,
): TestData<T, C>[] => {
    const fileNames = fs.readdirSync(
        path.join(mockPath, group),
        { encoding: 'utf-8' }
    )

    const tests: TestData<T, C>[] = []
    for (const fileName of fileNames) {
        const [
            locale,
            codexType,
            fileId
        ] = fileName.split('.')

        if (!(codexType in EntityLookup))
            continue
        if (entityType && entityType !== EntityLookup[codexType])
            continue

        const expected = require(path.join(mockPath, group, fileName))
        if (entityCategory && expected.category !== entityCategory)
            continue

        const type = EntityLookup[codexType]
        const html = fs.readFileSync(
            path.join(cachePath, group, `${locale}.${codexType}.${fileId}.txt`),
            { encoding: 'utf-8' }
        )

        const id = fileId.replace(/-/g, '/')
        const codexUrl = buildCodexURL({ locale: locale as App.Locales, type, id })
        
        tests.push([
            codexUrl,
            expected,
            {
                id,
                type,
                locale: locale as App.Locales,
                category: expected.category,
                $: cheerio.load(html),
            }
        ])
    }
    return tests
}

export const expectObject = <T = any>(result?: T) => {
    return {
        toMatch: (expected?: T) => {
            if (typeof expected === 'undefined')
                expect(result).toBeUndefined()
            else expect(result).toMatchObject(expected)
        }
    }
}