import { BDO, BDOCodex } from '@typings/namespaces'
import { ShortURL } from '@helpers/utils/short-url'
import { parseNumber } from '@helpers/utils/parse-number'

export function Builder(result: BDOCodex.Search.Result) {
    return {
        id: result.value,
        type: ShortURL.decompose(result.link).type,
        name: result.name,
        grade: parseNumber(result.grade) as BDO.Grade,
        icon: `${result.icon_path}/${result.icon}`,
    }
}