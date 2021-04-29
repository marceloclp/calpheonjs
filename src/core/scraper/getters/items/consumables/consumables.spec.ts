import { App } from '@typings/namespaces'
import { getTestCases, expectObject } from '@tests/utils'
import * as Getters from '../../index'

const cases = getTestCases(
    'scraper',
    App.Entities.Types.Item,
    App.Entities.Items.Categories.Consumable
)

describe('Others NPC Getters', () => {
    describe.each(cases)('%s', (_, expected, args) => {
        it('getIconURL()', () => {
            expect(Getters.getIconURL(args))
                .toBe(expected.icon)
        })
        it('getName()', () => {
            expect(Getters.getName(args))
                .toBe(expected.name)
        })
        it('getNameAlt()', () => {
            expect(Getters.getNameAlt(args))
                .toBe(expected.nameAlternative)
        })
        it('getGrade()', () => {
            expect(Getters.getGrade(args))
                .toBe(expected.grade)
        })
        it('getPrices()', () => {
            expectObject(Getters.Items.getPrices(args))
                .toMatch(expected.prices)
        })
        it('getWeight()', () => {
            expect(Getters.Items.getWeight(args))
                .toBe(expected.weight)
        })
        it('getEffects()', () => {
            expectObject(Getters.Items.Consumables.getEffects(args))
                .toMatch(expected.effects)
        })
        it('getDuration()', () => {
            expect(Getters.Items.Consumables.getDuration(args))
                .toBe(expected.duration)
        })
        it('getCooldown()', () => {
            expect(Getters.Items.Consumables.getCooldown(args))
                .toBe(expected.cooldown)
        })
    })
})