import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

export const getExp: Getter<'exp'> = (data) => {
    return parseNumber(data[5])
}