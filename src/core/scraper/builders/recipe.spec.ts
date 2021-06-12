import { BDO } from '@typings/namespaces'
import { TestLoader } from '@core/scraper/tests/utils/test-loader'
import { expect } from '@tests/utils/expect'

describe('Scraper: Recipes', () => {
    const tests = new TestLoader()
        .filterByType(BDO.Entities.Types.Recipe)
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
        it('getMaterials()', () => {
            expect(received.materials).toMatch(expected.materials)
        })
        it('getProducts()', () => {
            expect(received.materials).toMatch(expected.materials)
        })
        it('getProcess()', () => {
            expect(received.process).toBe(expected.process)
        })
        it('getExp()', () => {
            expect(received.exp).toBe(expected.exp)
        })
        it('getMastery()', () => {
            expect(received.mastery).toMatch(expected.mastery)
        })
    })
})
