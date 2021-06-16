import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

export const getDroppedKarma: Getter<'droppedKarma'> = (data) => {
    return parseNumber(data[9])
}