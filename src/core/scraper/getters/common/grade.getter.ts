import { BDO } from '@typings/namespaces'
import { Getter } from '@core/scraper/typings'
import { parseNumber } from '@helpers/utils/parse-number'

export const getGrade: Getter<BDO.Grade> = ({ $ }) => {
    return parseNumber($('.item_title').attr('class'), 0) as BDO.Grade
}