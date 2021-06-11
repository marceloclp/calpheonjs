import { BDOCodex } from '@typings/namespaces'
import { SortRow } from '../sort-row.interface'

export interface Design extends
    BDOCodex.Query.Responses.Generic {

    /** Empty string. */
    readonly 3: string;

    /** The skill level, but it's always the same as designs do not require skil level. */
    readonly 4: SortRow;

    /** Empty string. */
    readonly 5: string;

    /** HTML string containing the required materials. */
    readonly 6: string;

    /** HTML string containing the resulting products. */
    readonly 7: string;

    /** A stringified array containing the materials ids. */
    readonly 8: string;

    readonly 9: string;

    readonly 10: string;

    readonly 11: string;

    readonly 12: string;
}