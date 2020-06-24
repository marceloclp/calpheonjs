import * as Refs from "./refs";
import * as Quests from "../interfaces/quests";
import { Generic } from "./generic.entity";

export interface Quest extends Generic {
    /** The region the quest belongs to. */
    region: string;

    /** The quest category. */
    q_category: string;

    /** The quest type. */
    q_type: string;

    /** The level required to accept the quest. */
    lvl: number;

    /** If the quest is exclusive to some classes. */
    exclusive_to: string[];

    /** The quest chain this quest belongs to. */
    quest_chain: Refs.Quest[];

    /** The NPC who will give the quest. */
    npc_start?: Refs.NPC;

    /** The NPC who will finish the quest. */
    npc_end?: Refs.NPC;

    /** The quest description. */
    description?: string;

    /** A quest usually contains a poem-like text for storytelling purposes. */
    text: string[];

    /** Rewards received on quest completion. */
    rewards: Quests.Rewards;
}