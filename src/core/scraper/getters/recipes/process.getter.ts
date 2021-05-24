import { BDO } from '@typings/namespaces'
import { Getter } from '@core/scraper/typings'
import { toSnakeCase } from '@helpers/utils/to-snake-case'

const ProcessLookup: Record<string, BDO.LifeSkills.Recipes.Processes> = {
    'alchemy': BDO.LifeSkills.Recipes.Processes.Alchemy,
    'cooking': BDO.LifeSkills.Recipes.Processes.Cooking,
    'guild_processing': BDO.LifeSkills.Recipes.Processes.GuildProcessing,
}

export const getProcess: Getter<
    BDO.LifeSkills.Recipes.Processes
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