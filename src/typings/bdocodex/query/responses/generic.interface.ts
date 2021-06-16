import { HTMLString, SorteableField } from '../utilities'

export interface Generic<IDType extends string | SorteableField = string | SorteableField> {
    /** Entity id. */
    readonly 0: IDType

    /** Entity icon url. */
    readonly 1: HTMLString

    /** Entity name. */
    readonly 2: HTMLString
}