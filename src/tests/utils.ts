import fs from 'fs'
import path from 'path'
import cheerio from 'cheerio'
import { App, BDOCodex } from '@typings/namespaces'
import { EntityLookup } from '@config/lookups'
import { MockPath } from './constants'
import { TestCase, TestCaseData } from './types'

export const getTestCases = (): TestCase[] => {
    return fs.readdirSync(
        path.join(MockPath, 'json'),
        { encoding: 'utf-8' }
    ).map(fileName => {
        const [locale, type, id] = fileName.split('.')
        if (!(type in EntityLookup)) {
            return
        }
        return [fileName, {
            id: id.replace(/-/g, '/'),
            type: type as BDOCodex.Entities.Types,
            locale: locale as App.Locales,
        }]
    }).filter(Boolean) as TestCase[]
}

export const getTestCaseData = (
    { id, type, locale }: TestCase[1]
): TestCaseData => {
    const key = `${locale}.${type}.${id.replace(/\//g, '-')}`
    const expected = require(path.join(MockPath, 'json', key + '.json'))
    const html = fs.readFileSync(
        path.join(MockPath, 'html', key + '.html'),
        { encoding: 'utf-8' },
    )
    return [
        expected,
        cheerio.load(html),
    ]
}
