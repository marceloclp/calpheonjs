export type Range = [number, number]

export type Writeable<T> = { -readonly [P in keyof T]: T[P] }

export type Maybe<T> = T | undefined

export type Diff<T, K> = Omit<T, keyof K>

/**
 * Forces all keys of an interface required to be defined.
 * If a property is optional, it still requires a literal undefined to be passed.
 * This ensures that all properties of an interface are being defined.
 */
export type Defined<T> = {
    [P in keyof Required<T>]: Pick<T, P> extends Required<Pick<T, P>>
        ? T[P] : (T[P] | undefined)
}

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
    SignLess = '<',
    SignGreater = '>',
}