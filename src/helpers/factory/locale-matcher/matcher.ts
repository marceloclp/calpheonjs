import { App } from '@typings/namespaces'

interface Match {
    readonly found: string
    readonly index: number
    readonly str: string
}
export class Matcher {
    private readonly cache: Record<string, Match | null> = {}
    private _lastMatch?: Match

    constructor(
        private readonly candidates: string[]
    ) {}

    get lastMatch() {
        return this._lastMatch
    }

    findIn(str: string): Match | null {
        if (!str) return null
        
        const { cache, candidates } = this
        if (str in cache) return cache[str]

        // We are checking in a single pass, so we need to check
        // every candidate at the same time as we iterate through
        // the string characters.
        //
        // To do this we use an object that remembers how many characters
        // of the string have been matched so far.
        // If at some point the number of matched chars matches the string
        // length, then we have found a match.
        const hash = candidates.reduce((obj, candidate) => {
            return { ...obj, [candidate]: 0 }
        }, {} as Record<string, number>)

        for (let i = 0; i < str.length; i++) {
            const char = str[i]
            for (const candidate of candidates) {
                if (char === candidate[hash[candidate]])
                    hash[candidate]++
                else hash[candidate] = 0

                if (hash[candidate] !== candidate.length)
                    continue
                const index = i - candidate.length + 1
                cache[str] = { found: candidate, index, str }
                this._lastMatch = cache[str] as Match
                return cache[str]
            }
        }

        cache[str] = null
        return null
    }
}

export const LocaleMatcher = (
    matches: Record<App.Locales, string[]>,
    locale: App.Locales,
): Matcher => {
    return new Matcher(matches[locale])
}
