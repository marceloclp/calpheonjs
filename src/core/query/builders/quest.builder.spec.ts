import { BDO } from '@typings/namespaces'
import { TestLoader } from '@core/query/tests/utils/test-loader'
import { Quest } from '@core/query/builders'

describe('Query > Builders > Quests', () => {
    const tests = new TestLoader()
        .filterByReturnType(BDO.Entities.Types.Quest)
        .forHydrationLevel(1)
        .buildTests(Quest)
    describe.each(tests)('%s', (_, expected, received) => {
        it('level', () => {
            expect(received.level).toBe(expected.level)
        })
        it('region', () => {
            expect(received.region).toBe(expected.region)
        })
        it.skip('rewards', () => {
            expect(received.rewards).toMatchObject(expected.rewards)
        })
    })
})