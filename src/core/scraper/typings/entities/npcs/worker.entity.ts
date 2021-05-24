import { BDO } from '@typings/namespaces'
import { NPC } from './npc.entity'

export interface Worker extends
    NPC<BDO.NPCs.SubTypes.Worker> {

    /** Whether the worker can be sold. */
    sellable: boolean

    /** The amount of staming the worker has. This does not change with level. */
    stamina: number

    /** Stats, price and experience for each level. */
    levels: BDO.NPCs.Workers.Level[]

    /** The range of which each stat can increase upon level up. */
    statsGrowth: BDO.NPCs.Workers.Stats<string>

    /**
     * The precursor NPC required to acquire this worker.
     * Usually the current worker but at a previous grade.
     */
    obtainedFrom?: BDO.Refs.NPC

    /** Chances of acquiring a skill based on its level (artisan, professional, etc). */
    acquireChanceTable: Record<BDO.NPCs.Workers.SkillLevels, number>

    /** A worker may have a personal skill that is independent of level. */
    personalSkill?: BDO.Refs.WorkerSkill
}