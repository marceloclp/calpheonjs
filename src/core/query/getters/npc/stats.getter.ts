import { BDO } from '@typings/namespaces'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

export const getStats: Getter<'stats'> = (data) => {
    return {
        [BDO.Characters.Attributes.HP]: parseNumber(data[4]),
        [BDO.Characters.Attributes.Defense]: parseNumber(data[5]),
        [BDO.Characters.Attributes.Evasion]: parseNumber(data[6]),
    }
}