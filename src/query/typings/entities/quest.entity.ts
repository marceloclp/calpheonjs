import { Generic } from "./generic.entity";
import { QuestReward } from "./quest-reward.entity";

export interface Quest extends Generic {
    type: 'quest';

    /** The level required to unlock  */
    lvl: number;

    /** The region where the player can get the quest. */
    region: string;

    /** The exp given by completing the quest. */
    exp: number;

    /** The skill exp given by completing the quest. */
    exp_skill: number;
    
    /** The contribution exp given by completing the quest. */
    exp_contribution: number;

    /** The rewards received by completing the quest. */
    rewards: {
        /** Always received on quest completion. */
        items: QuestReward[];

        /** Choose one of the rewards on quest completion. */
        choose: QuestReward[];

        /** Amount of amity received on quest completion. */
        amity: number[];
    };
}