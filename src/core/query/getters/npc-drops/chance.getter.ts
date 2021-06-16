import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

export const getChance: Getter<'chance'> = (data) => {
    return parseNumber(data[4])
}
