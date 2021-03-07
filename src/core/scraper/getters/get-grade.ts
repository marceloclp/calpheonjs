import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getters.types'

export const getGrade: Getter<number> = ({ $ }) => {
    return parseNumber($('.item_title').attr('class'), 0)
}
