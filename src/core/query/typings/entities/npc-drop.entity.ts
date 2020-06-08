import { Generic } from "./generic.entity";

export interface NPCDrop extends Generic {
    /** How many items the entity drops. */
    readonly amount: number;

    /** The drop chance percentage as a floating point. */
    readonly chance: number;
}