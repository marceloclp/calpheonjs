/** A string that contains unparsed HTML. */
export type HTMLString = string

/** An object describing a field that can be sorted. */
export interface SorteableField {
    /** Field value. */
    readonly display?: string
    readonly sort_value?: string | number
}