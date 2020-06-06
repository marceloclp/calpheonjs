import { Generic } from "./generic.entity";

export interface Item extends Generic {
    /** The level required to use the item. */
    readonly lvl: number;
}