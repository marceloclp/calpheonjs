import { App } from '@typings/namespaces'
import { Types } from './types'

export interface IQuery {
    (type: string, id: string): Promise<any[]>
    (type: Types.ProductInRecipe, itemId: string): Promise<App.Refs.Recipe[]>
    (type: Types.ProductInProcessing, itemId: string): Promise<App.Refs.Recipe[]>
    (type: Types.QuestReward, npcId: string): Promise<App.Refs.NPC[]>
}