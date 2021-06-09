import { BDOCodex } from '@typings/namespaces'
import { SortRow } from '../sort-row.interface'

export interface Quest extends
    BDOCodex.Query.Responses.Generic {
    
    /** Quest id. */
    readonly 0: SortRow

    /** Level required to take the quest. */
    readonly 3: string

    /** Region where the quest is accepted. */
    readonly 4: SortRow

    /** Amount of EXP rewarded upon completion. */
    readonly 5: SortRow

    /** Amount of Skill EXP rewarded upon completion. */
    readonly 6: SortRow

    /** Amount of Contribution EXP rewarded upon completion. */
    readonly 7: string

    /** HTML string containing the rewards. */
    readonly 8: string;

    readonly 9: string;

    readonly 10: string;
}