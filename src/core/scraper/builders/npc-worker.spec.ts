import { TestLoader } from '../tests/utils/test-loader'
import { Entities } from '../typings'

describe('Scraper > NPCWorker', () => {
    const tests = new TestLoader()
        .filterByAs(Entities.As.NPCWorker)
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
        it('getSellable()', () => {
            expect(received.sellable).toBe(expected.sellable)
        })
        it('getStamina()', () => {
            expect(received.stamina).toBe(expected.stamina)
        })
        it('getLevels()', () => {
            expect(received.levels).toEqual(expected.levels)
        })
        it('getStatsGrowth()', () => {
            expect(received.statsGrowth).toEqual(expected.statsGrowth)
        })
        it('getObtainedFrom()', () => {
            if (!received.obtainedFrom)
                return expect(true).toBeTruthy()
            expect(received.obtainedFrom).toEqual(expected.obtainedFrom)
        })
        it('getAcquireChanceTable()', () => {
            expect(received.acquireChanceTable).toEqual(expected.acquireChanceTable)
        })
        it('getPersonalSkill()', () => {
            if (!received.personalSkill)
                return expect(true).toBeTruthy()
            expect(received.personalSkill).toEqual(expected.personalSkill)
        })
    })
})