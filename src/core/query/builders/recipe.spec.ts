import { BDO } from '@typings/namespaces'
import { TestLoader } from '@core/query/tests/utils/test-loader'

describe('Query > Builders > Recipe', () => {
    const tests = new TestLoader()
        .filterByReturnType(BDO.Entities.Types.Recipe)
        .forHydrationLevel(1)
        .buildTests()
    describe.each(tests)('%s', (_, expected, received) => {
        it('grade', () => {
            expect(received.grade).toBe(expected.grade)
        })
        it('process', () => {
            expect(received.process).toBe(expected.process)
        })
        it('mastery', () => {
            expect(received.mastery).toEqual(expected.mastery)
        })
        it('exp', () => {
            expect(received.exp).toBe(expected.exp)
        })
        it('materials', () => {
            expect(received.materials).toEqual(expected.materials)
        })
        it('products', () => {
            expect(received.products).toEqual(expected.products)
        })
    })
})