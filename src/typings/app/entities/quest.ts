import { App, BDO } from '@typings/namespaces'
import { Generic } from './generic'

export interface Quest extends Generic<App.Entities.Types.Quest> {
    /** A quest has a category (story, black spirit, etc). */
    category: BDO.Quests.Categories
    /** A quest may belong to a certain region. */
    region?: string
    /** A quest may belong to a group. */
    group?: BDO.Quests.Groups
    /** A quest may have a minimum required level to be accepted by the player. */
    level?: number
    /** A quest may have be part of a chain of quests. */
    chain: App.Refs.Quest[]
    /** The entry point NPC. If undefined, then it's the Black Spirit. */
    startNPC?: App.Refs.NPC
    /** The end NPC. If undefined, then it's the Black Spirit. */
    endNPC?: App.Refs.NPC
    /** A quest may have a story. */
    story?: string
    /** A quest may reward the player upon completion. */
    rewards: App.Shared.Quests.Rewards
}
