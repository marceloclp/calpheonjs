import { BDOCodex } from '@typings/namespaces'

export interface Data extends Record<number, BDOCodex.Enhancements.Level> {
    /** Localized translation for "Not Available". */
    readonly na: string

    /** Maximum enhancing level. */
    readonly max_enchant: string
}