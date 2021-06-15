import { TestLoader } from '../tests/utils/test-loader'
import { Entities } from '../typings'

describe('Scraper > Recipe', () => {
    const tests = new TestLoader()
        .filterByAs(Entities.As.Recipe)
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
            expect(received.materials).toEqual(expected.materials)
        })
        it('getProducts()', () => {
            expect(received.materials).toEqual(expected.materials)
        })
        it('getProcess()', () => {
            expect(received.process).toBe(expected.process)
        })
        it('getExp()', () => {
            expect(received.exp).toBe(expected.exp)
        })
        it('getMastery()', () => {
            expect(received.mastery).toEqual(expected.mastery)
        })
    })
})