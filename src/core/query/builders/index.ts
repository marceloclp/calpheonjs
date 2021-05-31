export * from './quest.builder'

// import { App } from '@typings/namespaces'
// import { buildQuest } from './build-quest'
// import { Builder } from './builders.types'

// const BuildTable = {
//     [App.Query.Responses.Types.QuestsByReward]: buildQuest,
// }

// export const SelectBuilder = <
//     T extends App.Query.Responses.Types.QuestsByReward
// >(type: T): Builder<any, any> => {
//     if (type in BuildTable)
//         return BuildTable[type]
//     throw new Error('Query type is not yet supported.')
// }