import { BDO } from '@typings/namespaces'
import { Getter } from './getter.type'

const Lookup: Record<string, BDO.LifeSkills.Recipes.Processes> = {
    'Alchemy': BDO.LifeSkills.Recipes.Processes.Alchemy,
    'Cooking': BDO.LifeSkills.Recipes.Processes.Cooking,
    'Guild Processing': BDO.LifeSkills.Recipes.Processes.GuildProcessing,
}
export const getProcess: Getter<'process'> = (data) => {
    return Lookup[data[3]]
}