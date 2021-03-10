import { App, BDO } from '@typings/namespaces'
import { Generic } from './generic'

export enum Categories {
    Lodging = 'lodging',
    Other = 'other',
    Worker = 'worker',
}

export interface NPC extends Generic<App.Entities.Types.NPC> {
    category: Categories
    /** An NPC has a grade, similar to items. */
    grade: BDO.Grade
}

export interface Other extends NPC {
    category: Categories.Other
    /** An NPC may have a group (the text inside <>). */
    group?: string
    /** An NPC may have player stats. */
    stats?: Partial<App.Shared.NPCs.Stats>
    /** An NPC may be a boss. */
    mobType?: BDO.NPCs.MobTypes
    /** An NPC may have a knowledge associated with it. */
    knowledge?: App.Refs.Knowledge<{ dropChance?: number }>
    // TODO: https://bdocodex.com/us/npc/27051/
    summonedByItem?: App.Refs.Item
}

export interface Worker extends NPC {
    category: Categories.Worker
    /** Whether the worker can be sold. */
    sellable: boolean
    /** The amount of staming the worker has. This does not change with level. */
    stamina: number
    /** Stats, price and experience for each level. */
    levels: App.Shared.NPCs.Workers.Level[]
    /** The range of which each stat can increase upon level up. */
    statsGrowth: App.Shared.NPCs.Workers.Stats
    /**
     * The precursor NPC required to acquire this worker.
     * Usually the current worker but at a previous grade.
     */
    obtainedFrom?: App.Refs.NPC
    /** Chances of acquiring a skill based on its level (artisan, professional, etc). */
    skillLevelAcquireChance: Record<BDO.NPCs.Workers.SkillLevels, number>
    /** A worker may have a personal skill that is independent of level. */
    personalSkill?: App.Refs.WorkerSkill
}

export type Select<C extends Categories> =
    C extends Categories.Worker
        ? Worker
    : Other
