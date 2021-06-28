import { BDO } from '@typings/namespaces'
import { Refs } from '../index'
import { Generic } from './extendables/generic.interface'
import { As } from './as.enum'

export interface Quest extends Generic<As.Quest> {
    /** A quest may have a minimum required level to be accepted by the player. */
    level: number

    /** A quest may belong to a certain region. */
    region?: string
    
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
    }
}
