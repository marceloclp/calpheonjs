import { Generic } from "./generic.entity";

export interface Item extends Generic {
    type: 'item';

    /** The level required to use the item. */
    lvl: number;
}