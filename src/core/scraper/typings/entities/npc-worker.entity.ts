import { BDO } from '@typings/namespaces'
import { Refs } from '../index'
import { NPC } from './npc.entity'
import { As } from './as.enum'

export interface NPCWorker extends NPC {
    as: As.NPCWorker

    subType: BDO.NPCs.SubTypes.Worker

    /** Whether the worker can be sold. */
    sellable: boolean

    /** The amount of staming the worker has. This does not change with level. */
    stamina: number

    /** Stats, price and experience for each level. */
    levels: {
        /** The price the worker can be sold at, if sellable. */
        sellPrice?: number

        /** Experience required to level up to next level. */
        expToNextLevel: number

        /** Chance of upgrading to a higher grade worker. */
        upgradeChance: number

        /** Maximum stats possible for the current level. */
        maxStats: BDO.NPCs.Workers.Stats<number>
    }[]

    /** The range of which each stat can increase upon level up. */
    statsGrowth: BDO.NPCs.Workers.Stats<string>

    /**
     * The precursor NPC required to acquire this worker.
     * Usually the current worker but at a previous grade.
     */
    obtainedFrom?: Refs.NPC

    /** Chances of acquiring a skill based on its level (artisan, professional, etc). */
    acquireChanceTable: Record<BDO.NPCs.Workers.SkillLevels, number>

    /** A worker may have a personal skill that is independent of level. */
    personalSkill?: Refs.WorkerSkill
}
