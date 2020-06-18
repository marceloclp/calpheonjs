import { Item } from "./item.entity";

export interface Consumable extends Item {
    effects: string[];

    /** Effects duration in seconds. */
    duration: number;

    /** Cooldown in seconds. */
    cooldown: number;
}