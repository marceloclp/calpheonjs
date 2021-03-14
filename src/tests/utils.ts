import fs from 'fs'
import path from 'path'
import cheerio from 'cheerio'
import { App } from '@typings/namespaces'
import { EntityLookup } from '@config/lookups'
import { MockPath } from './constants'
import { TestData } from './types'
import { buildCodexURL } from '@helpers/utils/build-codex-url'

export const getTestCases = <
    T extends App.Entities.Types,
    C extends App.Entities.SelectCategory<T>
>(
    entityType: T,
    entityCategory?: C
): TestData<T, C>[] => {
    const fileNames = fs.readdirSync(
        path.join(MockPath, 'json'),
        { encoding: 'utf-8' }
    )

    const tests: TestData<T, C>[] = []
    for (const fileName of fileNames) {
        const [locale, codexType, fileId] = fileName.split('.')
        if (!(codexType in EntityLookup))
            continue
        if (entityType !== EntityLookup[codexType])
            continue
        const expected = require(
            path.join(MockPath, 'json', fileName)
        )
        if (entityCategory && expected.category !== entityCategory)
            continue
        const type = EntityLookup[codexType]
        const id = fileId.replace(/-/g, '/')
        const html = fs.readFileSync(
            path.join(MockPath, 'html', `${locale}.${codexType}.${fileId}.html`),
            { encoding: 'utf-8' }
        )
        tests.push([
            buildCodexURL({ locale: locale as App.Locales, type, id }),
            expected, {
                id,
                type,
                locale: locale as App.Locales,
                category: expected.category,
                $: cheerio.load(html),
        }])
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