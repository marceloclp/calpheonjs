import { App, BDO } from '@typings/namespaces'
import { Generic } from './generic'

export enum Categories {
    Lodging = 'lodging',
    Worker = 'worker',
    Other = 'other',
}

export interface NPC extends Generic<App.Entities.Types.NPC> {
    category: Categories
    /** An NPC may have a level. */
    lvl?: number
    /** An NPC may have player stats. */
    stats?: Partial<BDO.Players.Stats>
    /** An NPC may reward the player with experience points when killed. */
    exp?: number
    /** An NPC may reward the player with skill experience points when killed. */
    expSkill?: number
    /** The karma given by the NPC when killed. */
    karma?: number
    /** An NPC may be a boss. */
    bossType?: 'boss' | 'awakenedBoss'
    /** An NPC may give a knowledge when interacted with (through killing, chatting, etc). */
    knowledge?: App.Refs.Knowledge
}

export interface Worker extends NPC {
    category: Categories.Worker
    /** A worker has a grade. */
    grade: BDO.Grade
    /** Whether the worker can be sold. */
    sellable: boolean
    /** The maximum possible stats for a worker, if it hit the lottery. */
    maxBaseStats: App.Shared.Workers.Stats
    /** Information about each level. */
    levelsInfo: App.Shared.Workers.Level[]
    /** The range of which each stat can increase upon level up. */
    statsGrowth: App.Shared.Workers.Growth
    /**
     * The precursor NPC required to acquire this worker.
     * Usually the current worker but at a previous grade.
     */
    obtainedFrom?: App.Refs.NPC
}

export type Select<C extends Categories> =
    C extends Categories.Worker
        ? Worker
    : NPC
