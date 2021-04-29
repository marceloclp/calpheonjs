import { BDOCodex } from '@typings/namespaces'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from '../getter.types'

export const getLevel: Getter<
    BDOCodex.Queries.Response.Quest,
    number
> = (data) => {
    return parseNumber(data[3])
}