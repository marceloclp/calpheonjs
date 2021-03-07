import { Reward } from "./reward.interface";

export interface Rewards {
    /** Rewards that are always received when the quest is finished. */
    standard: Reward[];

    /** The user must choose one before completion. */
    choose: Reward[];

    /** Array of amity received. Each index is for a different NPC. */
    amity: number[];
}