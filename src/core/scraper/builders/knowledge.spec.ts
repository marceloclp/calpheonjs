import { TestLoader } from '../tests/utils/test-loader'
import { Entities } from '../typings'

describe('Scraper > Knowledge', () => {
    const tests = new TestLoader()
        .filterByAs(Entities.As.Knowledge)
        .buildTests()
    describe.each(tests)('%s', (_, expected, received) => {
        it('getIcon()', () => {
            expect(received.icon).toBe(expected.icon)
        })
        it('getName()', () => {
            expect(received.name).toBe(expected.name)
        })
        it('getNameAlternative()', () => {
            expect(received.nameAlternative).toBeUndefined()
        })
        it('getGroup()', () => {
            expect(received.group).toBe(expected.group)
        })
        it('getObtainedFrom()', () => {
            if (!received.obtainedFrom)
                return expect(true).toBeTruthy()
            expect(received.obtainedFrom).toEqual(
                expect.objectContaining(expected.obtainedFrom)
            )
        })
    })
})