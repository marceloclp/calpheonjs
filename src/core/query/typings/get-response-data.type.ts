import { BDO, BDOCodex } from '@typings/namespaces'

/** Maps the return type to the response object returned by the query. */
export type GetResponseData<T extends BDO.Entities.Types> =
    T extends BDO.Entities.Types.Quest
        ? BDOCodex.Queries.Response.Quest
    : any