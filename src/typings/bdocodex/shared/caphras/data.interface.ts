import { BDOCodex } from '@typings/namespaces'

export interface Data {
    /** At +18, the enhancement for each level of Caphras upgrade. */
    readonly 18: BDOCodex.Shared.Caphras.Set

    /** At +19, the enhancement for each level of Caphras upgrade. */
    readonly 19: BDOCodex.Shared.Caphras.Set

    /** At +20, the enhancement for each level of Caphras upgrade. */
    readonly 20: BDOCodex.Shared.Caphras.Set

    /** Maps the BDOCodex stats to its in-game name. */
    readonly stats_names: BDOCodex.Shared.Characters.Stats<string>
}