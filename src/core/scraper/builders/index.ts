import { App } from '@typings/namespaces'
import { Builder } from './builders.types'
import { buildItem } from './build-item'
import { buildKnowledge } from './build-knowledge'
import { buildMaterialGroup } from './build-material-group'
import { buildNPC } from './build-npc'
import { buildProcessing } from './build-processing'
import { buildQuest } from './build-quest'
import { buildRecipe } from './build-recipe'

const BuildTable = {
    [App.Entities.Types.Item]: buildItem,
    [App.Entities.Types.Knowledge]: buildKnowledge,
    [App.Entities.Types.MaterialGroup]: buildMaterialGroup,
    [App.Entities.Types.NPC]: buildNPC,
    [App.Entities.Types.Processing]: buildProcessing,
    [App.Entities.Types.Quest]: buildQuest,
    [App.Entities.Types.Recipe]: buildRecipe,
}

export const Build = <T extends App.Entities.Types>(type: T): Builder<any> => {
    if (type in BuildTable)
        return BuildTable[type as keyof typeof BuildTable] // TODO: remove this cast
    throw new Error('Entity type is not yet supported.')
}