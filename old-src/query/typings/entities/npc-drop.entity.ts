import { Generic } from "./generic.entity";

export interface NPCDrop extends Generic {
    type: 'npc_drop';

    /** How many items the entity drops. */
    amount: number;

    /** The drop chance percentage as a floating point. */
    chance: number;
}