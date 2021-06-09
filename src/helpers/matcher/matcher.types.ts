export interface Match {
    /** The candidate found. */
    readonly found: string

    /** The start index where the candidate is. */
    readonly index: number

    /** The string matched. */
    readonly str: string
}

export interface Matcher {
    /** Last match found. */
    readonly lastMatch?: Match
    
    /** Finds a match, if it exists, in a given string. */
    readonly findIn: (str: string) => Match | undefined
}

export type MatchesMap = Record<string, Match | undefined>

export type MatcherMap<T extends string | number | symbol = string> = Record<T, Matcher>