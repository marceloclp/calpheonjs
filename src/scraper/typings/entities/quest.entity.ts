import * as Refs from "./refs";
import * as Quests from "../interfaces/quests";
import { Generic } from "./generic.entity";

export interface Quest extends Generic {
    region: string;

    q_category: string;

    q_type: string;

    lvl: number;

    exclusive_to: string[];

    quest_chain: Refs.Quest[];

    npc_start?: Refs.NPC;

    npc_end?: Refs.NPC;

    description?: string;

    text: string[];

    rewards: {
        standard: Quests.Reward[],

        choose: Quests.Reward[],
    }
}