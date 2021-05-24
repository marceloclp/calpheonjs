import { Match, MatchesMap } from './matcher.types'

export const Matcher = (...candidates: string[]) => {
    const _matches: MatchesMap = {}

    return {
        lastMatch: undefined as Match | undefined,
        findIn: function (str: string): Match | undefined {
            if (!str) return undefined
            if (str in _matches) return _matches[str]

            const indexes = candidates.reduce((obj, candidate) => {
                return { ...obj, [candidate]: 0 }
            }, {} as Record<string, number>)

            for (let i = 0; i < str.length; i++) {
                const char = str[i]
                for (const c of candidates) {
                    if (char === c[indexes[c]])
                        indexes[c]++
                    else indexes[c] = 0

                    if (indexes[c] !== c.length)
                        continue
                    
                    const match: Match = {
                        str,
                        found: c,
                        index: i - c.length + 1,
                    }
                    this.lastMatch = match
                    _matches[str] = match
                    return match
                }
            }

            _matches[str] = undefined
            return undefined
        }
    }
}