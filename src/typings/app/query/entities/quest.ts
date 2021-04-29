import { App } from '@typings/namespaces'
import { Generic } from './generic'

export interface Quest extends Generic<App.Entities.Types.Quest> {
    id: string
    name: string
    icon: string
    level: number
    region: string
    rewards: App.Shared.Quests.Rewards
}