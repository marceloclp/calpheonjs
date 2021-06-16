import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

export const getLevel: Getter<'level'> = (data) => {
    return parseNumber(data[3])
}