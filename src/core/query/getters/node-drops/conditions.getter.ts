import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

export const getConditions: Getter<'conditions'> = (data) => {
    return {
        temperature: parseNumber(data[4]),
        humidity: parseNumber(data[5]),
        water: parseNumber(data[6]),
    }
}
