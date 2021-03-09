import { App } from '@typings/namespaces'

export interface Level {
    /** The new equipment stats at the enhancement level. */
    stats: App.Shared.Equipments.Stats
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
    effects: App.Shared.Equipments.Effects
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
        /** The durability lost after a perfect enhancement. */
        durabilityLossOnFailure: number
    }
}

/** All enhancement levels. */
export type Set = Level[]