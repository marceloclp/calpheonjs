import { BDO } from '@typings/namespaces'
import { TestLoader } from '@core/scraper/tests/utils/test-loader'
import { Knowledge } from '@core/scraper/builders'
import { expect } from '@tests/utils/expect'

describe('Scraper: Knowledge', () => {
    const tests = new TestLoader()
        .filterByType(BDO.Entities.Types.Knowledge)
        .buildTests(Knowledge)
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
        it('getGroup()', () => {
            expect(received.group).toBe(expected.group)
        })
        it('getObtainedFrom()', () => {
            expect(received.obtainedFrom).toMatch(expected.obtainedFrom)
        })
    })
})
