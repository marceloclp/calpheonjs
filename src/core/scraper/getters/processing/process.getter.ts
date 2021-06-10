import { BDO } from '@typings/namespaces'
import { Chars } from '@typings/utilities'
import { toSnakeCase } from '@helpers/utils/to-snake-case'
import { Getter } from './getter.type'

const { Processes } = BDO.LifeSkills.Processing
const Lookup = {
    'shaking': Processes.Shaking,
    'grinding': Processes.Grinding,
    'chopping': Processes.Chopping,
    'drying': Processes.Drying,
    'filtering': Processes.Filtering,
    'heating': Processes.Heating,
    'simple_alchemy': Processes.SimpleAlchemy,
    'simple_cooking': Processes.SimpleCooking,
    'imperial_cuisine': Processes.ImperialCuisine,
    'imperial_alchemy': Processes.ImperialAlchemy,
    'guild_processing': Processes.GuildProcessing,
    'manufacture': Processes.Manufacture,
}

export const getProcess: Getter<'process'> = ({ $, id, type, locale }) => {
    const text = $('.category_text')
        .parent().find('.yellow_text').text()
    const lookup = toSnakeCase(text.split(Chars.Slash)[1])
    ;(!(lookup in Lookup)) && console.warn(
        `Unknown process ${lookup} found for /${locale}/${type}/${id}. ` +
        'Please report this warning by opening an issue on the GitHub page.'
    )
    return Lookup[lookup]
}
