import { BDO } from '@typings/namespaces'
import { toSnakeCase } from '@helpers/utils/to-snake-case'
import { Getter } from '../getters.types'

const ProcessLookup: Record<string, BDO.Recipes.Processes> = {
    'alchemy': BDO.Recipes.Processes.Alchemy,
    'cooking': BDO.Recipes.Processes.Cooking,
    'guild_processing': BDO.Recipes.Processes.GuildProcessing,
}

export const getProcess: Getter<
    BDO.Recipes.Processes
> = ({ $, id, type, locale }) => {
    const text = $('.category_text')
        .parent().find('.yellow_text').text()
    const processText = toSnakeCase(text)
    ;(!(processText in ProcessLookup)) && console.warn(
        `Unknown process ${processText} found for /${locale}/${type}/${id}. ` +
        'Please report this warning by opening an issue on the GitHub page.'
    )
    return ProcessLookup[processText] || processText
}