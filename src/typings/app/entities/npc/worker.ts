import { App, BDO } from '@typings/namespaces'
import { NPC } from './npc'

export interface Worker extends NPC<'worker'> {
    /** A worker has a grade. */
    grade: BDO.Grade
    /** Whether the worker can be sold. */
    sellable: boolean
    /** The maximum possible stats for a worker, if it hit the lottery. */
    maxBaseStats: BDO.NPCs.Workers.Stats
    /** Information about each level. */
    levelsInfo: BDO.NPCs.Workers.Level[]
    /** The range of which each stat can increase upon level up. */
    statsGrowth: BDO.NPCs.Workers.Growth
    /**
     * The precursor NPC required to acquire this worker.
     * Usually the current worker but at a previous grade.
     */
    obtainedFrom?: App.Refs.NPC
}