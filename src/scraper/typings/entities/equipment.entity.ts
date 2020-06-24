import * as Equipments from "../interfaces/equipments";
import { Item } from "./item.entity";

export interface Equipment extends Item {
    /** The base stats of the equipment. */
    stats: Equipments.Stats;

    /** An array containing the data for each enhancement level. */
    enhancement_stats: Equipments.Enhancement[];

    /** An object containing the data for each caphras upgrades. */
    caphras_stats: Equipments.Caphras.Wrapper;

    /** A list of effects caused by the equipment. */
    item_effects: string[];

    /** The effects caused by equiping 2 or more of the same equipment group. */
    set_effects: Record<number, string[]>;

    /** Classes that can equip the item. Empty means every character can equip. */
    exclusive_to: string[];

    /** The exp produced if the equipment is fed to a fairy. */
    fairy_exp: number;
}