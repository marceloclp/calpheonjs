import { Chars } from '@typings/utilities'

export const BaseUrl = 'https://bdocodex.com'

export const DecorationChars = [
    Chars.Dash,
    Chars.DoubleDots,
    Chars.Hyphen,
    Chars.LineBreak,
    Chars.Space,
    Chars.Star,
].join('')

/**
 * Chars that divide an entity property and value.
 * (e.g., Item Effect: Critical Hit & Casting Speed +1)
 */
export const DividerChars = [
    Chars.DoubleDots
].join('')

/**
 * Chars that potentially divide entity groups.
 * (e.g., description, item effect)
 */
export const GroupBreakChars = [
    Chars.Dash,
    Chars.Hyphen,
    Chars.Star,
].join('')