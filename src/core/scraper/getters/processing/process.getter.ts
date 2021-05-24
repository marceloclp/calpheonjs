import { BDO } from '@typings/namespaces'
import { Getter } from '@core/scraper/typings'
import { Chars } from '@typings/utilities'
import { toSnakeCase } from '@helpers/utils/to-snake-case'

const Lookup: Record<string, BDO.LifeSkills.Processing.Processes> = {
    'shaking': BDO.LifeSkills.Processing.Processes.Shaking,
    'grinding': BDO.LifeSkills.Processing.Processes.Grinding,
    'chopping': BDO.LifeSkills.Processing.Processes.Chopping,
    'drying': BDO.LifeSkills.Processing.Processes.Drying,
    'filtering': BDO.LifeSkills.Processing.Processes.Filtering,
    'heating': BDO.LifeSkills.Processing.Processes.Heating,
    'simple_alchemy': BDO.LifeSkills.Processing.Processes.SimpleAlchemy,
    'simple_cooking': BDO.LifeSkills.Processing.Processes.SimpleCooking,
    'imperial_cuisine': BDO.LifeSkills.Processing.Processes.ImperialCuisine,
    'imperial_alchemy': BDO.LifeSkills.Processing.Processes.ImperialAlchemy,
    'guild_processing': BDO.LifeSkills.Processing.Processes.GuildProcessing,
    'manufacture': BDO.LifeSkills.Processing.Processes.Manufacture,
}

export const getProcess: Getter<
    BDO.LifeSkills.Processing.Processes
> = ({ $, id, type, locale }) => {
    const text = $('.category_text')
        .parent().find('.yellow_text').text()
    const lookup = toSnakeCase(text.split(Chars.Slash)[1])
    ;(!(lookup in Lookup)) && console.warn(
        `Unknown process ${lookup} found for /${locale}/${type}/${id}. ` +
        'Please report this warning by opening an issue on the GitHub page.'
    )
    return Lookup[lookup]
}
