import { BDO } from '@typings/namespaces'
import { TestLoader } from '@core/scraper/tests/utils/test-loader'
import { expect } from '@tests/utils/expect'

describe('Scraper: Items', () => {
    describe('All', () => {
        const tests = new TestLoader()
            .filterByType(BDO.Entities.Types.Item)
            .buildTests()
        describe.each(tests)('%s', (_, expected, received) => {
            it('getIcon()', () => {
                expect(received.icon).toBe(expected.icon)
            })
            it('getName()', () => {
                expect(received.name).toBe(expected.name)
            })
            it('getNameAlternative()', () => {
                expect(received.nameAlternative).toBe(expected.nameAlternative)
            })
            it('getGrade()', () => {
                expect(received.grade).toBe(expected.grade)
            })
            it('getPrices()', () => {
                expect(received.prices).toMatch(expected.prices)
            })
            it('getWeight()', () => {
                expect(received.weight).toBe(expected.weight)
            })
        })
    })
    describe('Consumables', () => {
        const tests = new TestLoader()
            .filterByType(BDO.Entities.Types.Item)
            .filterBySubType(BDO.Items.SubTypes.Consumable)
            .buildTests()
        describe.each(tests)('%s', (_, expected, received) => {
            it('getEffects()', () => {
                expect(received.effects).toMatch(expected.effects)
            })
            it('getDuration()', () => {
                expect(received.duration).toBe(expected.duration)
            })
            it('getCooldown()', () => {
                expect(received.cooldown).toBe(expected.cooldown)
            })
        })
    })
    describe('Equipments', () => {
        const tests = new TestLoader()
            .filterByType(BDO.Entities.Types.Item)
            .filterBySubType(BDO.Items.SubTypes.Equipment)
            .buildTests()
        describe.each(tests)('%s', (_, expected, received) => {
            it('getEnhancements()', () => {
                expect(received.enhancements).toMatch(expected.enhancements)
            })
            it('getCaphras()', () => {
                expect(received.caphras).toMatch(expected.caphras)
            })
            it('getExclusiveTo()', () => {
                expect(received.exclusiveTo).toMatch(expected.exclusiveTo)
            })
            it('getFairyExp()', () => {
                expect(received.fairyExp).toBe(expected.fairyExp)
            })
        })
    })
})
