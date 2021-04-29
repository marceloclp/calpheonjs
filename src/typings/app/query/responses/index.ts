import { App } from '@typings/namespaces'

export enum Types {
    QuestsByReward = 'questsByReward'
}

export interface QuestRewards {
    type: Types.QuestsByReward
    url: string
    queriedEntity: App.Refs.Item
    data: App.Query.Entities.Quest[]
}

export type Select<T extends Types> =
    T extends Types.QuestsByReward
        ? QuestRewards
    : QuestRewards