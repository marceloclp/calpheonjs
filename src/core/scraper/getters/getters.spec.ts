import fs from 'fs'
import path from 'path'
import cheerio from 'cheerio'
import { App } from '@typings/namespaces'
import { GetterArgs } from './getters.types'
import * as Getters from './index'

describe('Getters', () => {
    const mockFilesDir = path.join(__dirname, '../../../../mock/json')
    const tests = fs
        .readdirSync(mockFilesDir, { encoding: 'utf-8' })
        .map(name => [name.split('.').slice(0, -1).join('.')])

    describe.each(tests)('%s', key => {
        const [locale, type, id] = key.split('.')
        const json = require(`../../../../mock/json/${key}.json`)
        const html = fs.readFileSync(
            path.resolve(__dirname, '../../../../mock/html', `${key}.html`),
            { encoding: 'utf-8' }
        )

        const options: GetterArgs = {
            $: cheerio.load(html),
            id,
            category: json.category,
            locale: locale as App.Locales,
            type: type as App.Entities.Types,
        }

        json.category && it('getCategory()', () => {
            expect(Getters.getCategory(options)).toBe(json.category)
        })
        json.cooldown && it('getCooldown()', () => {
            expect(Getters.getCooldown(options)).toBe(json.cooldown)
        })
        json.description && it('getDescription', () => {
            expect(Getters.getDescription(options)).toBe(json.description)
        })
        json.duration && it('getDuration()', () => {
            expect(Getters.getDuration(options)).toBe(json.duration)
        })
        json.effects && it('getEffects()', () => {
            expect(Getters.getEffects(options)).toMatchObject(json.effects)
        })
        json.grade && it('getGrade()', () => {
            expect(Getters.getGrade(options)).toBe(json.grade)
        })
        json.icon && it('getIconURL()', () => {
            expect(Getters.getIconURL(options)).toBe(json.icon)
        })
        json.nameAlternative && it('getNameAlt()', () => {
            expect(Getters.getNameAlt(options)).toBe(json.nameAlternative)
        })
        json.name && it('getName()', () => {
            expect(Getters.getName(options)).toBe(json.name)
        })
        json.prices && it('getPrices()', () => {
            expect(Getters.getPrices(options)).toMatchObject(json.prices)
        })
        json.weight && it('getWeight()', () => {
            expect(Getters.getWeight(options)).toBe(json.weight)
        })
    })
})