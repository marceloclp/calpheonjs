import { App } from '@typings/namespaces'
import { getTestCases, expectObject } from '@tests/utils'
import * as Getters from '../../index'

const cases = getTestCases(
    'scraper',
    App.Entities.Types.Item,
    App.Entities.Items.Categories.Equipment
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
        it('getEnhancementStats()', () => {
            expectObject(Getters.Items.Equipments.getEnhancementStats(args))
                .toMatch(expected.enhancementStats)
        })
        it('getCaphrasStats()', () => {
            expectObject(Getters.Items.Equipments.getCaphrasStats(args))
                .toMatch(expected.caphrasStats)
        })
        it('getExclusiveTo()', () => {
            expectObject(Getters.Items.Equipments.getExclusiveTo(args))
                .toMatch(expected.exclusiveTo)
        })
        it('getFairyExp()', () => {
            expect(Getters.Items.Equipments.getFairyExp(args))
                .toBe(expected.fairyExp)
        })
    })
})