import { App, BDO } from '@typings/namespaces'
import { LocaleLookup } from '@helpers/utils/locale-lookup'
import { Getter } from './getter.type'

const ProcessLookup = new LocaleLookup(BDO.LifeSkills.Recipes.Processes)
    .forLocale(App.Locales.US, (P) => ({
        'Alchemy': P.Alchemy,
        'Cooking': P.Cooking,
        'Guild Processing': P.GuildProcessing,
    }))

export const getProcess: Getter<'process'> = ({ $, id, type, locale }) => {
    const lookup = ProcessLookup.init(locale)
    const process = $('.category_text')
        .parent().find('.yellow_text').text()
    ;(!lookup.has(process)) && console.warn(
        `Unknown process ${process} found for /${locale}/${type}/${id}. ` +
        App.REPORT_ISSUE_MESSAGE,
    )
    return lookup.get(process)
}