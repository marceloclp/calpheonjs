import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

export const getDroppedExp: Getter<'droppedExp'> = (data) => {
    return {
        base: parseNumber(data[7]),
        skill: parseNumber(data[8]),
    }
}