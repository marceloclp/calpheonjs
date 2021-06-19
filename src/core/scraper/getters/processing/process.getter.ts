import { App, BDO } from '@typings/namespaces'
import { Chars } from '@typings/utilities'
import { LocaleLookup } from '@helpers/utils/locale-lookup'
import { Getter } from './getter.type'

const ProcessLookup = new LocaleLookup(BDO.LifeSkills.Processing.Processes)
    .forLocale(App.Locales.US, (P) => ({
        'Shaking': P.Shaking,
        'Grinding': P.Grinding,
        'Chopping': P.Chopping,
        'Drying': P.Drying,
        'Filtering': P.Filtering,
        'Heating': P.Heating,
        'Simple Alchemy': P.SimpleAlchemy,
        'Simple Cooking': P.SimpleCooking,
        'Imperial Cuisine': P.ImperialCuisine,
        'Imperial Alchemy': P.ImperialAlchemy,
        'Guild Processing': P.GuildProcessing,
        'Manufacture': P.Manufacture,
    }))

export const getProcess: Getter<'process'> = ({ $, id, type, locale }) => {
    const lookup = ProcessLookup.init(locale)
    const process = $('.category_text')
        .parent().find('.yellow_text').text()
        .split(Chars.Slash)[1]
        .trim()
    ;(!lookup.has(process)) && console.warn(
        `Unknown process ${lookup} found for /${locale}/${type}/${id}.` +
        App.REPORT_ISSUE_MESSAGE,
    )
    return lookup.get(process)
}
