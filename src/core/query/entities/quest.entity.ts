import { Generic } from "./generic.entity";
import { Ref } from "./ref.entity";

export interface Quest extends Generic {
    /** The level required to unlock  */
    readonly lvl: number;

    /** The region where the player can get the quest. */
    readonly region: string;

    /** The exp given by completing the quest. */
    readonly exp: number;

    /** The skill exp given by completing the quest. */
    readonly exp_skill: number;
    
    /** The contribution exp given by completing the quest. */
    readonly exp_contribution: number;

    /** The rewards received by completing the quest. */
    readonly rewards: {
        /** Always received on quest completion. */
        readonly items?: Ref[];

        /** Choose one of the rewards on quest completion. */
        readonly choose?: Ref[];

        /** Amount of amity received on quest completion. */
        readonly amity?: number[];
    };
}