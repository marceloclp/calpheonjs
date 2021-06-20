import { TestLoader } from '../tests/utils/test-loader'

describe('Search > Builder', () => {
    const tests = new TestLoader()
        .buildTests()
    describe.each(tests)('%s', (_, group) => {
        describe.each(group)('%s', (_, expected, received) => {
            it('id', () => {
                expect(received.id).toBe(expected.id)
            })
            it('type', () => {
                expect(received.type).toBe(expected.type)
            })
            it('name', () => {
                expect(received.name).toBe(expected.name)
            })
            it('grade', () => {
                expect(received.grade).toBe(expected.grade)
            })
            it('icon', () => {
                expect(received.icon).toBe(expected.icon)
            })
        })
    })
})