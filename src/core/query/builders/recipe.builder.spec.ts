import { BDO } from '@typings/namespaces'
import { TestLoader } from '@core/query/tests/utils/test-loader'
import { Recipe } from '@core/query/builders'

describe('Query > Builders > Recipe', () => {
    const tests = new TestLoader()
        .filterByReturnType(BDO.Entities.Types.Recipe)
        .forHydrationLevel(1)
        .buildTests(Recipe)
    describe.each(tests)('%s', (_, expected, received) => {
        it('grade', () => {
            expect(received.grade).toBe(expected.grade)
        })
    })
})