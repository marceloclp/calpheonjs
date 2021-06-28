import { TestLoader } from '../tests/utils/test-loader'
import { Entities } from '../typings'

describe('Scraper > MaterialGroup', () => {
    const tests = new TestLoader()
        .filterByAs(Entities.As.MaterialGroup)
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
        it('getItems()', () => {
            expect(received.items).toEqual(
                expected.items.map(item => expect.objectContaining(item))
            )
        })
    })
})
