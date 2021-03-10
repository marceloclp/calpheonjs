import { BDO } from '@typings/namespaces'
import { Chars } from '@typings/utilities'
import { Matcher } from '@helpers/factory/matcher'
import { toSnakeCase } from '@helpers/utils/to-snake-case'
import { Getter } from './getters.types'

const ClassesLookup: Record<string, BDO.Players.Classes> = {
    'archer': BDO.Players.Classes.Archer,
    'berserker': BDO.Players.Classes.Berserker,
    'dark_knight': BDO.Players.Classes.DarkKnight,
    'kunoichi': BDO.Players.Classes.Kunoichi,
    'lahn': BDO.Players.Classes.Lahn,
    'maehwa': BDO.Players.Classes.Maehwa,
    'musa': BDO.Players.Classes.Musa,
    'mystic': BDO.Players.Classes.Mystic,
    'ninja': BDO.Players.Classes.Ninja,
    'ranger': BDO.Players.Classes.Ranger,
    'sorceress': BDO.Players.Classes.Sorceress,
    'striker': BDO.Players.Classes.Striker,
    'tamer': BDO.Players.Classes.Tamer,
    'valkyrie': BDO.Players.Classes.Valkyrie,
    'warrior': BDO.Players.Classes.Warrior,
    'witch': BDO.Players.Classes.Witch,
    'wizard': BDO.Players.Classes.Wizard,
}

export const getExclusiveTo: Getter<BDO.Players.Classes[]> = ({ $, id, locale, type }) => {
    const matcher = Matcher('Exclusive')

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