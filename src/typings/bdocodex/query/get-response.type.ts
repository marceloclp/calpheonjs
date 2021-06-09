import * as Responses from './responses'
import { Types } from './types.enum'

export type GetResponse<T extends Types> = {
    [Types.QuestReward]: Responses.Quest,
    [Types.RecipeMaterial]: Responses.Recipe,
}[T]