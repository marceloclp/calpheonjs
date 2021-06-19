import { Matcher } from './matcher'

describe('Matcher', () => {
    const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
        + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    it('should create a new instance of Matcher', () => {
        expect(Matcher.initWith('Lorem ipsum'))
            .toBeInstanceOf(Matcher)
    })
    describe('when using a single candidate', () => {
        it('should return a match when the candidate is at the start', () => {
            const match = Matcher
                .initWith('Lorem')
                .findIn(str)
            expect(match).toEqual({
                matchedStr: str,
                candidateStr: 'Lorem',
                startIdx: 0,
                endIdx: 4,
            })
        })
        it('should return a match when the candidate is in the middle', () => {
            const match = Matcher
                .initWith('ipsum')
                .findIn(str)
            expect(match).toEqual({
                matchedStr: str,
                candidateStr: 'ipsum',
                startIdx: 6,
                endIdx: 10,
            })
        })
        it('should return a match when the candidate is at the end', () => {
            const match = Matcher
                .initWith('aliqua.')
                .findIn(str)
            expect(match).toEqual({
                matchedStr: str,
                candidateStr: 'aliqua.',
                startIdx: 116,
                endIdx: 122,
            })
        })
        it('should return undefined when there are no matches', () => {
            expect(Matcher.initWith('invalid').findIn(str))
                .toBeUndefined()
        })
    })
    describe('when using multiple candidates', () => {
        it('should return the first match found', () => {
            const match = Matcher
                .initWith('Lorem', 'ipsum')
                .findIn(str)
            expect(match).toEqual({
                matchedStr: str,
                candidateStr: 'Lorem',
                startIdx: 0,
                endIdx: 4,
            })
        })
        it('should return undefined when there are no matches', () => {
            expect(Matcher.initWith('invalid1', 'invalid2').findIn(str))
                .toBeUndefined()
        })
    })
    describe('when using a candidates map', () => {
        it('should also return the candidate key on match', () => {
            const match = Matcher
                .initWithMap({ myKey: 'ipsum' })
                .findIn(str)
            expect(match).toEqual({
                matchedStr: str,
                candidateStr: 'ipsum',
                candidateKey: 'myKey',
                startIdx: 6,
                endIdx: 10,
            })
        })
        it('should still work with multiple candidates', () => {
            const match = Matcher
                .initWithMap({ myKey: ['ipsum', 'Lorem'] })
                .findIn(str)
            expect(match).toEqual({
                matchedStr: str,
                candidateStr: 'Lorem',
                candidateKey: 'myKey',
                startIdx: 0,
                endIdx: 4,
            })
        })
    })
    describe('when a match has been found', () => {
        let matcher: Matcher
        beforeEach(() => {
            matcher = Matcher.initWith('Lorem')
            matcher.findIn(str)
        })
        it('should have a last match', () => {
            expect(matcher.lastMatch).toEqual({
                matchedStr: str,
                candidateStr: 'Lorem',
                startIdx: 0,
                endIdx: 4,
            })
        })
    })
})