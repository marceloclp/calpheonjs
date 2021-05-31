import { BDO } from '@typings/namespaces'
import { TestLoader } from '@core/query/tests/utils/test-loader'
import { Quest } from '@core/query/builders'

describe('Query: Quests', () => {
    const tests = new TestLoader()
        .filterByReturnType(BDO.Entities.Types.Quest)
        .forHydrationLevel(1)
        .buildTests(Quest)
    describe.each(tests)('%s', (_, expected, received) => {
        it('id', () => {
            expect(received.id).toBe(expected.id)
        })
        it('name', () => {
            expect(received.name).toBe(expected.name)
        })
        it('icon', () => {
            expect(received.icon).toBe(expected.icon)
        })
        it('level', () => {
            expect(received.level).toBe(expected.level)
        })
        it('region', () => {
            expect(received.region).toBe(expected.region)
        })
        it('rewards', () => {
            expect(received.rewards).toMatchObject(expected.rewards)
        })
    })
})