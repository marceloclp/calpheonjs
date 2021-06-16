import { Generic } from './generic.interface'
import { HTMLString, SorteableField } from '../utilities'

export interface Quest extends Generic<SorteableField> {
    /** Level required to take the quest. */
    readonly 3: string

    /** Region where the quest is accepted. */
    readonly 4: SorteableField

    /** Amount of EXP rewarded upon completion. */
    readonly 5: SorteableField

    /** Amount of Skill EXP rewarded upon completion. */
    readonly 6: SorteableField

    /** Amount of Contribution EXP rewarded upon completion. */
    readonly 7: string

    /** Item rewards. */
    readonly 8: HTMLString
}