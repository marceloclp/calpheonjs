import { BDO } from '@typings/namespaces'
import { TestLoader } from '@core/scraper/tests/utils/test-loader'
import { Quest } from '@core/scraper/builders'
import { expect } from '@tests/utils/expect'

describe('Scraper: Quests', () => {
    const tests = new TestLoader()
        .filterByType(BDO.Entities.Types.Quest)
        .buildTests(Quest)
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
        it('getCategory()', () => {
            expect(received.category).toBe(expected.category)
        })
        it('getGroup()', () => {
            expect(received.group).toBe(expected.group)
        })
        it('getRegion()', () => {
            expect(received.region).toBe(expected.region)
        })
        it('getLevel()', () => {
            expect(received.level).toBe(expected.level)
        })
        it('getChain()', () => {
            expect(received.chain).toMatch(expected.chain)
        })
        it('getStartNPC()', () => {
            expect(received.startNPC).toMatch(expected.startNPC)
        })
        it('getEndNPC()', () => {
            expect(received.endNPC).toMatch(expected.endNPC)
        })
        it('getStory()', () => {
            expect(received.story).toBe(expected.story)
        })
        it('getRewards()', () => {
            expect(received.rewards).toMatch(expected.rewards)
        })
    })
})
