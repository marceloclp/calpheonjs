import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

export const getQuantity: Getter<'quantity'> = (data) => {
    return parseNumber(data[3])
}
