import { BDOCodex } from '@typings/namespaces'

export interface Level {
    /** Number of caphras stones required to enhance this level. */
    readonly count: string

    /** Number of caphras stones required to enhance up to this level. */
    readonly tcount: string

    /** Stats at the current enhancement level. */
    readonly stats: BDOCodex.Shared.Characters.Stats<string>
}