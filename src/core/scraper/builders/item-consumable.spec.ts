import { TestLoader } from '../tests/utils/test-loader'
import { Entities } from '../typings'

describe('Scraper > ItemConsumable', () => {
    const tests = new TestLoader()
        .filterByAs(Entities.As.ItemConsumable)
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
        it('getEffects()', () => {
            expect(received.effects).toEqual(expected.effects)
        })
        it('getDuration()', () => {
            expect(received.duration).toBe(expected.duration)
        })
        it('getCooldown()', () => {
            expect(received.cooldown).toBe(expected.cooldown)
        })
    })
})