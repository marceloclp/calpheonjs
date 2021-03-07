import { Reward } from "./reward";

export interface Rewards {
    /** All rewards are given on quest completion. */
    standard: Reward[];

    /** Choose on of the following rewards on quest completion. */
    choose: Reward[];
}