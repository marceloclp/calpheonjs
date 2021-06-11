import { BDO } from '@typings/namespaces'
import { Getter } from './getter.type'

const Lookup: Record<string, BDO.LifeSkills.Processing.Processes> = {
    'Shaking': BDO.LifeSkills.Processing.Processes.Shaking,
    'Grinding': BDO.LifeSkills.Processing.Processes.Grinding,
    'Chopping': BDO.LifeSkills.Processing.Processes.Chopping,
    'Drying': BDO.LifeSkills.Processing.Processes.Drying,
    'Filtering': BDO.LifeSkills.Processing.Processes.Filtering,
    'Heating': BDO.LifeSkills.Processing.Processes.Heating,
    'Simple Alchemy': BDO.LifeSkills.Processing.Processes.SimpleAlchemy,
    'Simple Cooking': BDO.LifeSkills.Processing.Processes.SimpleCooking,
    'Imperial Cuisine': BDO.LifeSkills.Processing.Processes.ImperialCuisine,
    'Imperial Alchemy': BDO.LifeSkills.Processing.Processes.ImperialAlchemy,
    'Guild Processing': BDO.LifeSkills.Processing.Processes.GuildProcessing,
    'Manufacture': BDO.LifeSkills.Processing.Processes.Manufacture,
}
export const getProcess: Getter<'process'> = (data) => {
    return Lookup[data[3]]
}