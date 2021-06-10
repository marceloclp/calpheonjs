import { BDO } from '@typings/namespaces'
import { toSnakeCase } from '@helpers/utils/to-snake-case'
import { Getter } from './getter.type'

const { Processes } = BDO.LifeSkills.Recipes
const ProcessLookup = {
    'alchemy': Processes.Alchemy,
    'cooking': Processes.Cooking,
    'guild_processing': Processes.GuildProcessing,
}

export const getProcess: Getter<'process'> = ({ $, id, type, locale }) => {
    const text = $('.category_text')
        .parent().find('.yellow_text').text()
    const processText = toSnakeCase(text)
    ;(!(processText in ProcessLookup)) && console.warn(
        `Unknown process ${processText} found for /${locale}/${type}/${id}. ` +
        'Please report this warning by opening an issue on the GitHub page.'
    )
    return ProcessLookup[processText] || processText
}