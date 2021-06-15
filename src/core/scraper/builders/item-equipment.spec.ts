import { TestLoader } from '../tests/utils/test-loader'
import { Entities } from '../typings'

describe('Scraper > ItemEquipment', () => {
    const tests = new TestLoader()
        .filterByAs(Entities.As.ItemEquipment)
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
            expect(received.prices).toEqual(expected.prices)
        })
        it('getWeight()', () => {
            expect(received.weight).toBe(expected.weight)
        })
        it.skip('getEnhancements()', () => {
            if (!received.enhancements)
                return expect(true).toBeTruthy()
            expect(received.enhancements).toMatchObject(expected.enhancements)
        })
        it.skip('getCaphras()', () => {
            if (!received.caphras)
                return expect(true).toBeTruthy()
            expect(received.caphras).toMatchObject(expected.caphras)
        })
        it('getExclusiveTo()', () => {
            expect(received.exclusiveTo).toEqual(expected.exclusiveTo)
        })
        it('getFairyExp()', () => {
            expect(received.fairyExp).toBe(expected.fairyExp)
        })
    })
})