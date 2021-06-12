import { BDO } from '@typings/namespaces'
import { TestLoader } from '@core/scraper/tests/utils/test-loader'
import { expect } from '@tests/utils/expect'

describe('Scraper: Material Group', () => {
    const tests = new TestLoader()
        .filterByType(BDO.Entities.Types.MaterialGroup)
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
            expect(received.items).toMatch(expected.items)
        })
    })
})
