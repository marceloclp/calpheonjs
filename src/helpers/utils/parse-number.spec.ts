import { parseNumber } from './parse-number'

describe('parseNumber()', () => {
    it('should strip all non-digits from a string', () => {
        expect(parseNumber('item_title item_grade_4')).toBe(4)
    })

    it('should convert a string to a number', () => {
        expect(parseNumber('123')).toBe(123)
    })

    it('should be able to handle \'', () => {
        expect(parseNumber(`9'191'330`)).toBe(9191330)
    })
})