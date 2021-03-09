import { Matcher } from './index'

describe('Matcher', () => {
    const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
        + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris '
        + 'nisi ut aliquip ex ea commodo consequat.'

    it('should return a match', () => {
        const matcher = Matcher(['ipsum'])
        expect(
            matcher.findIn(str)?.index
        ).toBe(str.indexOf('ipsum'))
    })

    it('should return a match when match is at the end', () => {
        const matcher = Matcher(['consequat.'])
        expect(
            matcher.findIn(str)?.index
        ).toBe(str.indexOf('consequat.'))
    })

    it('should return a match when match is at the start', () => {
        const matcher = Matcher(['Lorem'])
        expect(
            matcher.findIn(str)?.index
        ).toBe(str.indexOf('Lorem'))
    })

    it('should return a match when there are multiple candidates', () => {
        const matcher = Matcher(['Lorem', 'ipsum', 'dolor'])
        expect(
            matcher.findIn(str)?.found
        ).toBe('Lorem')
    })

    it('should return the first match when there are multiple matches', () => {
        const matcher = Matcher(['dolor', 'ipsum', 'sit'])
        expect(
            matcher.findIn(str)?.found
        ).toBe('ipsum')
    })

    it('should not return a match', () => {
        const matcher = Matcher(['nomatch'])
        expect(matcher.findIn(str)).toBeNull()
    })

    it('when a match is found should also have a lastMatch key', () => {
        const matcher = Matcher(['Lorem'])
        matcher.findIn(str)
        expect(matcher.lastMatch?.found).toBe('Lorem')
    })
})