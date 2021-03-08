import { App, BDO } from '@typings/namespaces'
import { Generic } from './generic'

export interface Quest extends Generic<App.Entities.Types.Quest> {
    region: string

    questCategory: BDO.Quests.Categories

    questType: BDO.Quests.Types

    level: number

    chain: App.Refs.Quest[]

    startNPC: App.Refs.NPC

    endNPC: App.Refs.NPC

    description?: string

    text?: string

    reward: App.Shared.Reward[]
}
