export type Writeable<T> = { -readonly [P in keyof T]: T[P] }

export type Maybe<T> = T | undefined

export type FixedArray<N extends number, T> =
    N extends 0 ? never[] : { 0: T, length: N } & ReadonlyArray<T>

export enum Chars {
    Comma = ',',
    Dash = '–',
    Dot = '.',
    DoubleDots = ':',
    Hyphen = '-',
    LineBreak = '\n',
    Space = ' ',
    Star = '※',
    Slash = '/',
}