import { App, BDO } from '@typings/namespaces'

export interface Effects {
    /** A list of effects caused by the item on a given enhancement level. */
    item: string[]
    /** A list of effects caused by the enhancement level itself. */
    enhancement: string[]
    /** Additional effects at a certain enhancement level. */
    additional: string[]
    /** A list of effects caused by equiping a number of set pieces. */
    set: Record<number, string[]>
}

export interface Enhancement {
    /** The new equipment stats at the enhancement level. */
    stats: BDO.Player.Stats<string>
    /** The chance of sucess as a floating point. */
    successRate: number
    /** Max durability at a given enhancement level. */
    durability: number
    /** The required amount of Cron stones. */
    cronStonesAmount: {
        /** The amount required to enhance to the next level. */
        nextLvl: number
        /** The total amount required to enhance up to the next level. */
        total: number
    }
    /** Effects caused by the enhancement. */
    effects: Effects
    /** The item required to perform the enhancement. */
    requiredItem?: App.Refs.Item & {
        /** The amount needed to perform the enhancement. */
        amount: number
        /** The equipment durability lost if the enhancement fails. */
        durabilityLossOnFailure: number
    }
    perfectEnhancement?: {
        /** The amount needed to perform a 100% success rate enhancement. */
        amount: number
        /** The durability lost. */
        durabilityLossOnFailure: number
    }
}

export type Set = Enhancement[]
