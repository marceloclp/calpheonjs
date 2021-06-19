import { OrArray, U } from '@typings/utilities'

interface Match<CandidateKeys extends U<string> = undefined> {
    /** The string that contained the candidate string. */
    readonly matchedStr: string

    /** One of the strings passed during initialization. */
    readonly candidateStr: string

    /**
     * If the matcher was created with a candidates map, then a
     * match also contains the candidate's key.
     */
    readonly candidateKey: CandidateKeys

    /** The start of the candidate string. */
    readonly startIdx: number

    /** The end of the candidate string. */
    readonly endIdx: number
}

export class Matcher<K extends U<string> = undefined> {
    private readonly matches: Record<string, U<Match<K>>> = {}
    private _lastMatch: U<Match<K>>

    get lastMatch() {
        return this._lastMatch
    }

    constructor(
        private readonly candidates: string[],

        private readonly candidatesLookup?: Record<string, K>,
    ) {}

    static initWith(...candidates: string[]) {
        return new Matcher(candidates)
    }

    static initWithMap<K extends string>(obj: Record<K, OrArray<string>>) {
        const allCandidates = Object
            .values<OrArray<string>>(obj)
            .reduce((arr, c) => {
                const candidates = Array.isArray(c) ? c : [c]
                return [...arr, ...candidates]
            }, []) as string[]
        const lookup: Record<string, K> = Object
            .entries<OrArray<string>>(obj)
            .reduce((lookup, [key, c]) => {
                const candidates = Array.isArray(c) ? c : [c]
                return candidates.reduce((lookup, candidate) => {
                    return { ...lookup, [candidate]: key }
                }, lookup)
            }, {})
        return new Matcher<K>(allCandidates, lookup)
    }

    findIn(str?: string): U<Match<K>> {
        const { candidates, matches } = this
        if (!str) return undefined
        if (str in matches) return matches[str]
        const idxs = Object.fromEntries(
            candidates.map(candidate => [candidate, 0])
        )
        for (let i = 0; i < str.length; i++) {
            for (const candidate of candidates) {
                if (str[i] === candidate[idxs[candidate]]) {
                    idxs[candidate]++
                } else idxs[candidate] = 0
                if (idxs[candidate] !== candidate.length)
                    continue
                return this.setMatch(str, {
                    matchedStr: str,
                    candidateStr: candidate,
                    candidateKey: this.candidatesLookup?.[candidate] as any,
                    startIdx: i - candidate.length + 1,
                    endIdx: i,
                })
            }
        }
        return this.setMatch(str, undefined)
    }

    private setMatch(str: string, match: U<Match<K>>): U<Match<K>> {
        this._lastMatch = match
        this.matches[str] = match
        return match
    }
}
