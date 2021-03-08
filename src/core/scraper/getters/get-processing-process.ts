import { BDO } from '@typings/namespaces'
import { Chars } from '@typings/utilities'
import { toSnakeCase } from '@helpers/utils/to-snake-case'
import { Getter } from './getters.types'

const ProcessLookup: Record<string, BDO.LifeSkills.Processing> = {
    'shaking': BDO.LifeSkills.Processing.Shaking,
    'grinding': BDO.LifeSkills.Processing.Grinding,
    'chopping': BDO.LifeSkills.Processing.Chopping,
    'drying': BDO.LifeSkills.Processing.Drying,
    'filtering': BDO.LifeSkills.Processing.Filtering,
    'heating': BDO.LifeSkills.Processing.Heating,
    'simple_alchemy': BDO.LifeSkills.Processing.SimpleAlchemy,
    'simple_cooking': BDO.LifeSkills.Processing.SimpleCooking,
    'imperial_cuisine': BDO.LifeSkills.Processing.ImperialCuisine,
    'imperial_alchemy': BDO.LifeSkills.Processing.ImperialAlchemy,
    'guild_processing': BDO.LifeSkills.Processing.GuildProcessing,
    'manufacture': BDO.LifeSkills.Processing.Manufacture,
}

export const getProcessingProcess: Getter<
    BDO.LifeSkills.Processing
> = ({ $, id, type, locale }) => {
    const text = $('.category_text')
        .parent().find('.yellow_text').text()
    const processText = toSnakeCase(text.split(Chars.Slash)[1])
    ;(!(processText in ProcessLookup)) && console.warn(
        `Unknown process ${processText} found for /${locale}/${type}/${id}. ` +
        'Please report this warning by opening an issue on the GitHub page.'
    )
    return ProcessLookup[processText] || processText
}
