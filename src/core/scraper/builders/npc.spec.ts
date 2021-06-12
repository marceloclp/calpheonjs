import { BDO } from '@typings/namespaces'
import { TestLoader } from '@core/scraper/tests/utils/test-loader'
import { expect } from '@tests/utils/expect'

describe('Scraper: NPCs', () => {
    describe('All', () => {
        const tests = new TestLoader()
            .filterByType(BDO.Entities.Types.NPC)
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
        })
    })
    describe('Others', () => {
        const tests = new TestLoader()
            .filterByType(BDO.Entities.Types.NPC)
            .filterBySubType(BDO.NPCs.SubTypes.Other)
            .buildTests()
        describe.each(tests)('%s', (_, expected, received) => {
            it('getGroup()', () => {
                expect(received.group).toBe(expected.group)
            })
            it('getStats()', () => {
                expect(received.stats).toMatch(expected.stats)
            })
            it('getMobType()', () => {
                expect(received.mobType).toBe(expected.mobType)
            })
            it('getKnowledge()', () => {
                expect(received.knowledge).toMatch(expected.knowledge)
            })
        })
    })
    describe('Workers', () => {
        const tests = new TestLoader()
            .filterByType(BDO.Entities.Types.NPC)
            .filterBySubType(BDO.NPCs.SubTypes.Worker)
            .buildTests()
        describe.each(tests)('%s', (_, expected, received) => {
            it('getSellable()', () => {
                expect(received.sellable).toBe(expected.sellable)
            })
            it('getStamina()', () => {
                expect(received.stamina).toBe(expected.stamina)
            })
            it('getLevels()', () => {
                expect(received.levels).toMatch(expected.levels)
            })
            it('getStatsGrowth()', () => {
                expect(received.statsGrowth).toMatch(expected.statsGrowth)
            })
            it('getObtainedFrom()', () => {
                expect(received.obtainedFrom).toMatch(expected.obtainedFrom)
            })
            it('getAcquireChanceTable()', () => {
                expect(received.acquireChanceTable).toMatch(expected.acquireChanceTable)
            })
            it('getPersonalSkill()', () => {
                expect(received.personalSkill).toMatch(expected.personalSkill)
            })
        })
    })
})
