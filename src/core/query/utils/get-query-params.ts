import { App } from '@typings/namespaces'

// TODO: create interface for return type, use app naming patterns
export const getQueryParams = (type: App.Query.Responses.Types, id: string) => {
    return {
        [App.Query.Responses.Types.QuestsByReward]: {
            a: 'quests',
            type: 'questrewards',
            id,
        }
    }[type]
}