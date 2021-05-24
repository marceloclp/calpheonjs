import { BDO } from '@typings/namespaces'

export interface Level {
    /** The price the worker can be sold at, if sellable. */
    sellPrice?: number

    /** Experience required to level up to next level. */
    expToNextLevel: number

    /** Chance of upgrading to a higher grade worker. */
    upgradeChance: number

    /** Maximum stats possible for the current level. */
    maxStats: BDO.NPCs.Workers.Stats<number>
}