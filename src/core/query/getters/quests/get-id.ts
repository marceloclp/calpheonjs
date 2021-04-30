import { BDOCodex } from '@typings/namespaces'
import { Getter } from '../getter.types'

export const getId: Getter<
    BDOCodex.Queries.Response.Quest,
    string
> = (data) => {
    return data[0].display
}