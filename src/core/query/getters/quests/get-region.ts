import { BDOCodex } from '@typings/namespaces'
import { Getter } from '../getter.types'

export const getRegion: Getter<
    BDOCodex.Queries.Response.Quest,
    string
> = (data) => {
    return data[4].display
}