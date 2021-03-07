import { App } from '@typings/namespaces'
import { LocaleMatcher } from './matcher'

describe('LocaleMatcher', () => {
    const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
        + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris '
        + 'nisi ut aliquip ex ea commodo consequat.'

    it('should return a match', () => {
        const matcher = LocaleMatcher({
            [App.Locales.US]: ['ipsum'],
        }, App.Locales.US)
        expect(
            matcher.findIn(str)?.index
        ).toBe(str.indexOf('ipsum'))
    })

    it('should return a match when match is at the end', () => {
        const matcher = LocaleMatcher({
            [App.Locales.US]: ['consequat.'],
        }, App.Locales.US)
        expect(
            matcher.findIn(str)?.index
        ).toBe(str.indexOf('consequat.'))
    })

    it('should return a match when match is at the start', () => {
        const matcher = LocaleMatcher({
            [App.Locales.US]: ['Lorem'],
        }, App.Locales.US)
        expect(
            matcher.findIn(str)?.index
        ).toBe(str.indexOf('Lorem'))
    })

    it('should return a match when there are multiple candidates', () => {
        const matcher = LocaleMatcher({
            [App.Locales.US]: ['Lorem', 'ipsum', 'dolor'],
        }, App.Locales.US)
        expect(
            matcher.findIn(str)?.found
        ).toBe('Lorem')
    })

    it('should return the first match when there are multiple matches', () => {
        const matcher = LocaleMatcher({
            [App.Locales.US]: ['dolor', 'ipsum', 'sit'],
        }, App.Locales.US)
        expect(
            matcher.findIn(str)?.found
        ).toBe('ipsum')
    })

    it('should not return a match', () => {
        const matcher = LocaleMatcher({
            [App.Locales.US]: ['nomatch'],
        }, App.Locales.US)
        expect(matcher.findIn(str)).toBeNull()
    })

    it('when a match is found should also have a lastMatch key', () => {
        const matcher = LocaleMatcher({
            [App.Locales.US]: ['Lorem'],
        }, App.Locales.US)
        matcher.findIn(str)
        expect(matcher.lastMatch?.found).toBe('Lorem')
    })
})