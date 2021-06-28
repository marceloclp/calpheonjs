import { Entities } from '../typings'
import { TestLoader } from '../tests/utils/test-loader'

describe('Query > Builders > ExchangeItem', () => {
    const tests = new TestLoader()
        .filterByAs(Entities.As.ExchangeItem)
        .withDepthLevelOf(3)
        .buildTests()
    describe.each(tests)('%s', (_, expected, received) => {
        it('grade', () => {
            expect(received.grade).toBe(expected.grade)
        })
        it('quantity', () => {
            expect(received.quantity).toBe(expected.quantity)
        })
        it('tradeForItem', () => {
            expect(received.tradeForItem).toMatchObject(expected.tradeForItem)
        })
        it('tradeWith', () => {
            expect(received.tradeWith).toMatchObject(expected.tradeWith)
        })
    })
})
