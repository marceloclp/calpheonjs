import { Item } from "./item.entity";

export interface Consumable extends Item {
    /** A list of effects caused by the consumption of the item. */
    effects: string[];

    /** Effects duration in seconds. */
    duration: number;

    /** Cooldown in seconds. */
    cooldown: number;
}