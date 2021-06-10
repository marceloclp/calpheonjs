import { BDO } from '@typings/namespaces'
import { Chars } from '@typings/utilities'
import { Matcher } from '@helpers/matcher'
import { toSnakeCase } from '@helpers/utils/to-snake-case'
import { Getter } from './getter.type'

const ClassesLookup: Record<string, BDO.Characters.Classes> = {
    'archer': BDO.Characters.Classes.Archer,
    'berserker': BDO.Characters.Classes.Berserker,
    'dark_knight': BDO.Characters.Classes.DarkKnight,
    'kunoichi': BDO.Characters.Classes.Kunoichi,
    'lahn': BDO.Characters.Classes.Lahn,
    'maehwa': BDO.Characters.Classes.Maehwa,
    'musa': BDO.Characters.Classes.Musa,
    'mystic': BDO.Characters.Classes.Mystic,
    'ninja': BDO.Characters.Classes.Ninja,
    'ranger': BDO.Characters.Classes.Ranger,
    'sorceress': BDO.Characters.Classes.Sorceress,
    'striker': BDO.Characters.Classes.Striker,
    'tamer': BDO.Characters.Classes.Tamer,
    'valkyrie': BDO.Characters.Classes.Valkyrie,
    'warrior': BDO.Characters.Classes.Warrior,
    'witch': BDO.Characters.Classes.Witch,
    'wizard': BDO.Characters.Classes.Wizard,
}

export const getExclusiveTo: Getter<'exclusiveTo'> = ({ $, id, locale, type }) => {
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