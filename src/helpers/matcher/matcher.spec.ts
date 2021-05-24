import { Matcher } from './matcher.factory'

describe('Matcher', () => {
    const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
        + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris '
        + 'nisi ut aliquip ex ea commodo consequat.'
    
    it('should return a match', () => {
        expect(
            Matcher('ipsum').findIn(str)
        ).toBeTruthy()
    })

    it('should return the index of the first character of the match', () => {
        expect(
            Matcher('ipsum').findIn(str)?.index
        ).toBe(str.indexOf('ipsum'))
    })

    it('should work when the match is at the end', () => {
        expect(
            Matcher('consequat.').findIn(str)
        ).toBeTruthy()
    })

    it('should work when the match is at the start', () => {
        expect(
            Matcher('Lorem').findIn(str)
        ).toBeTruthy()
    })

    it('should work when there are multiple candidates', () => {
        expect(
            Matcher('Lorem', 'ipsum', 'dolor').findIn(str)
        ).toBeTruthy()
    })

    it('should return the first match when there are multiple candidates', () => {
        expect(
            Matcher('Lorem', 'ipsum').findIn(str)?.found
        ).toBe('Lorem')
    })

    it('should return undefined when there are no matches', () => {
        expect(
            Matcher('nomatch').findIn(str)
        ).toBeUndefined()
    })

    it('should return the last match when at least one match has been found', () => {
        const matcher = Matcher('Lorem')
        matcher.findIn(str)
        expect(
            matcher.lastMatch?.found
        ).toBe('Lorem')
    })

    it('should work multiple times', () => {
        const matcher = Matcher('Lorem')
        matcher.findIn(str)
        const newStr = 'Ipsum dolor. Lorem.'
        expect(
            matcher.findIn(newStr)?.index
        ).toBe(newStr.indexOf('Lorem'))
    })
})