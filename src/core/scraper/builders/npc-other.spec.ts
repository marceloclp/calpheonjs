import { TestLoader } from '../tests/utils/test-loader'
import { Entities } from '../typings'

describe('Scraper > NPCOther', () => {
    const tests = new TestLoader()
        .filterByAs(Entities.As.NPCOther)
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
        it('getGroup()', () => {
            expect(received.group).toBe(expected.group)
        })
        it('getLevel()', () => {
            expect(received.level).toBe(expected.level)
        })
        it('getStats()', () => {
            expect(received.stats).toEqual(expected.stats)
        })
        it('getMobType()', () => {
            expect(received.mobType).toBe(expected.mobType)
        })
        it('getKnowledge()', () => {
            if (!received.knowledge)
                return expect(true).toBeTruthy()
            expect(received.knowledge).toEqual(expected.knowledge)
        })
        it('getDroppedExp()', () => {
            expect(received.droppedExp).toEqual(expected.droppedExp)
        })
        it('getDroppedKarma()', () => {
            expect(received.droppedKarma).toBe(expected.droppedKarma)
        })
    })
})