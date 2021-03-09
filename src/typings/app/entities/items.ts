import { App, BDO } from '@typings/namespaces'
import { Generic } from './generic'

export enum Categories {
    Consumable = 'consumable',
    CraftingMaterial = 'craftingMaterial',
    Equipment = 'equipment',
    General = 'general',
    InstallableObject = 'installableObject',
    License = 'license',
    SocketItem = 'socketItem',
    SpecialItem = 'specialItem',
}

export interface Item extends Generic<App.Entities.Types.Item> {
    category: Categories
    /** An item has a grade. */
    grade: BDO.Grade
    /** An item may be sellable or buyable. */
    prices?: App.Shared.Prices
    /** The item weight in LT as a floating point. */
    weight: number
}

export interface Consumable extends Item {
    category: Categories.Consumable
    /** A list of effects caused on item consumption. */
    effects: string[]
    /** Duration of the effects, in seconds. */
    duration: number
    /** Cooldown until the item can be used again, in seconds. */
    cooldown: number
}

export interface Equipment extends Item {
    category: Categories.Equipment
    /**
     * The base stats of the equipment as a string. If the stat is a range, then the
     * values are separated by a `~` (e.g., '17 ~ 23').
     */
    stats: App.Shared.Equipments.Stats
    /** Effects caused at the base enhancement level (0). */
    effects: App.Shared.Equipments.Effects
    /**
     * The stats for each enhancement level done through black stones.
     * Note that at index 0 is the same as the base stats.
     */
    enhancementStats: App.Shared.Equipments.Enhancements.Set
    /** The stats for each enhancement level done through caphras upgrades. */
    caphrasStats?: App.Shared.Equipments.Caphras.Set
    /** Classes that can equip this item. An empty array means all classes are allowed. */
    exclusiveTo: BDO.Players.Classes[]
    /** The experience points produced by feeding the equipment to a fairy. */
    fairyExp: number
}

export type Select<C extends Categories> =
    C extends Categories.Consumable
        ? Consumable
    : C extends Categories.Equipment
        ? Equipment
    : Item
