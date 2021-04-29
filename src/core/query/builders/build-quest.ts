import { App, BDOCodex } from '@typings/namespaces'
import { Builder } from './builders.types'
import * as Getters from '../getters'

export const buildQuest: Builder<
    App.Entities.Types.Quest,
    BDOCodex.Queries.Response.Quest
> = (data) => {
    return data.aaData.map(entry => ({
        type: App.Entities.Types.Quest,
        id: entry[0].display,
        
    }))
}