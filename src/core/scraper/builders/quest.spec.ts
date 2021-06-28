import { TestLoader } from '../tests/utils/test-loader'
import { Entities } from '../typings'

describe('Scraper > Quest', () => {
    const tests = new TestLoader()
        .filterByAs(Entities.As.Quest)
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
            expect(received.chain).toEqual(
                expected.chain.map(quest => expect.objectContaining(quest))
            )
        })
        it('getStartNPC()', () => {
            if (!received.startNPC)
                return expect(true).toBeTruthy()
            expect(received.startNPC).toEqual(
                expect.objectContaining(expected.startNPC)
            )
        })
        it('getEndNPC()', () => {
            if (!received.endNPC)
                return expect(true).toBeTruthy()
            expect(received.endNPC).toEqual(
                expect.objectContaining(expected.endNPC)
            )
        })
        it('getStory()', () => {
            expect(received.story).toBe(expected.story)
        })
        it('getRewards()', () => {
            expect(received.rewards).toMatchObject(expected.rewards)
        })
    })
})
