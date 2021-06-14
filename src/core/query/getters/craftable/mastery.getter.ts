import { BDO } from '@typings/namespaces'
import { Chars } from '@typings/utilities'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

const Lookup: Record<string, BDO.LifeSkills.Masteries> = {
    'Beginner': BDO.LifeSkills.Masteries.Beginner,
    'Apprentice': BDO.LifeSkills.Masteries.Apprentice,
    'Skilled': BDO.LifeSkills.Masteries.Skilled,
    'Professional': BDO.LifeSkills.Masteries.Professional,
    'Artisan': BDO.LifeSkills.Masteries.Artisan,
    'Master': BDO.LifeSkills.Masteries.Master,
    'Guru': BDO.LifeSkills.Masteries.Guru,
}

export const getMastery: Getter<'mastery'> = (data) => {
    const text = data[4].display
    if (!text) return
    const args = text?.split(Chars.Space)
    const level = parseNumber(args.pop())
    const name = Lookup[args.join(Chars.Space)]
    return [name, level]
}