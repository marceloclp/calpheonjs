import { Level } from "./level.interface";

/**
 * The enhancement data for an equipment.
 */
export interface Array extends Record<number, Level> {
    readonly na: string;

    readonly max_enchant: string;
}