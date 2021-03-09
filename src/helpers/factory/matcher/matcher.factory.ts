import { MatcherClass } from './matcher.class'
import { Matcher } from './matcher.types'

export const MatcherFactory = (candidates: string[]): Matcher => {
    return new MatcherClass(candidates)
}
