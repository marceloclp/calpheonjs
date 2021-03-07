import { BDO } from '@typings/namespaces'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getters.types'

export const getGrade: Getter<BDO.Grade> = ({ $ }) => {
    return parseNumber($('.item_title').attr('class'), 0) as BDO.Grade
}
