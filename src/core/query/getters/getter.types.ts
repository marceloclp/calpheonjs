import { BDOCodex } from '@typings/namespaces'

export type Getter<
    D extends BDOCodex.Queries.Response.Wrapper<any>,
    R
> = (data: D['aaData'][0]) => R