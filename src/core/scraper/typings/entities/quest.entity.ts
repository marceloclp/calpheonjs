import { BDO } from '@typings/namespaces'
import { Refs } from '../index'
import { Generic } from './generic.interface'
import { Gradeable } from './gradeable.interface'
import { As } from './as.enum'

export interface Quest extends Generic<As.Quest>, Gradeable {
    /** A quest belongs to a category. */
    category?: BDO.Quests.Categories

    /** A quest may belong to a group. */
    group?: BDO.Quests.Groups

    /** A quest may belong to a certain region. */
    region?: string

    /** A quest may have a minimum required level to be accepted by the player. */
    level?: number

    /** A quest may have be part of a chain of quests. */
    chain: Refs.Quest[]

    /** The entry point NPC. If undefined, then it's the Black Spirit. */
    startNPC?: Refs.NPC

    /** The end NPC. If undefined, then it's the Black Spirit. */
    endNPC?: Refs.NPC

    /** A quest may have a story. */
    story?: string
    
    /** A quest may reward the player upon completion. */
    rewards: {
        /** Upon competion the player is always awarded the following rewards. */
        standard: (
            | BDO.EXP<{ amount: number }>
            | Refs.Item<{ amount: number }>
            | Refs.NPC<{ amityGained: number }>
        )[]

        /** Upon completion the player be asked to choose one of the following rewards. */
        choseOneOf: (
            | BDO.EXP<{ amount: number }>
            | Refs.Item<{ amount: number }>
            | Refs.NPC<{ amityGained: number }>
        )[]

        /** Upon completion the player may be rewarded with a knowledge. */
        knowledge?: Refs.Knowledge
    }
}
