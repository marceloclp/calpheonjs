import { BDO } from '@typings/namespaces'
import { parseNumber } from '@helpers/utils/parse-number'
import { substrOf } from '@helpers/utils/substr-of'
import { Getter } from './getter.type'

export const getGrade: Getter<'grade'> = (data) => {
    const text = substrOf(data[2], { left: 'item_grade_', right: ' ' })
    return parseNumber(text) as BDO.Grade
}