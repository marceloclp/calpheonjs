import { App } from '@typings/namespaces'

export interface Level {
    /** The price the worker can be sold at, if sellable. */
    sellPrice?: number
    /** Experience required to level up to next level. */
    expToNextLevel: number
    /** Maximum stats possible for the current level. */
    maxStats: App.Shared.NPCs.Workers.Stats<number>
}
