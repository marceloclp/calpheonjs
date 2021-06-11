import { BDOCodex } from '@typings/namespaces'
import { SortRow } from '../sort-row.interface'

export interface Processing extends
    BDOCodex.Query.Responses.Generic {
    
    /** Recipe id. */
    readonly 0: string;

    /** Processing type. */
    readonly 3: string;

    /** The required level to be able to craft this recipe. */
    readonly 4: SortRow;

    /** EXP awarded upon successful craft. */
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