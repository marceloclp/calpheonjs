import { App, BDO } from '@typings/namespaces'
import { Chars } from '@typings/utilities'
import { LocaleMatcher } from '@helpers/factory/locale-matcher'
import { toSnakeCase } from '@helpers/utils/to-snake-case'
import { Getter } from './getters.types'

const ClassesLookup: Record<string, BDO.Player.Classes> = {
    'archer': BDO.Player.Classes.Archer,
    'berserker': BDO.Player.Classes.Berserker,
    'dark_knight': BDO.Player.Classes.DarkKnight,
    'kunoichi': BDO.Player.Classes.Kunoichi,
    'lahn': BDO.Player.Classes.Lahn,
    'maehwa': BDO.Player.Classes.Maehwa,
    'musa': BDO.Player.Classes.Musa,
    'mystic': BDO.Player.Classes.Mystic,
    'ninja': BDO.Player.Classes.Ninja,
    'ranger': BDO.Player.Classes.Ranger,
    'sorceress': BDO.Player.Classes.Sorceress,
    'striker': BDO.Player.Classes.Striker,
    'tamer': BDO.Player.Classes.Tamer,
    'valkyrie': BDO.Player.Classes.Valkyrie,
    'warrior': BDO.Player.Classes.Warrior,
    'witch': BDO.Player.Classes.Witch,
    'wizard': BDO.Player.Classes.Wizard,
}

const ExclusiveDict = {
    [App.Locales.US]: ['Exclusive'],
}

export const getExclusiveTo: Getter<BDO.Player.Classes[]> = ({ $, id, locale, type }) => {
    const matcher = LocaleMatcher(ExclusiveDict, locale)

    $('.outer.item_info td').contents().toArray().find(element => {
        const text = $(element).text()
        if (!!matcher.findIn(text)) return true
    })
    if (!matcher.lastMatch) return []

    const { str: text } = matcher.lastMatch
    const stripped = text
        .substr(text.indexOf(Chars.DoubleDots) + 1)

    return stripped.split(Chars.Comma).map(name => {
        const classText = toSnakeCase(name)
        !(classText in ClassesLookup) && console.warn(
            `Unknown class ${classText} found for /${locale}/${type}/${id}. ` +
            'Please report this warning by opening an issue on the GitHub page.'
        )
        return ClassesLookup[classText]
    })
}