import { BDO } from '@typings/namespaces'
import { Item } from './item'

export interface Equipment extends Item<'equipment'> {
    /**
     * The base stats of the equipment as a string. If the stat is a range, then the
     * values are separated by a `~` (e.g., '17 ~ 23').
     */
    stats: BDO.Player.Stats<string>
    /** Effects caused at the base enhancement level (0). */
    effects: BDO.Equipments.BlackStones.Effects
    /**
     * The stats for each enhancement level done through black stones.
     * Note that at index 0 is the same as the base stats.
     */
    enhancementStats: BDO.Equipments.BlackStones.Set
    /** The stats for each enhancement level done through caphras upgrades. */
    caphrasStats?: BDO.Equipments.Caphras.Set
    /** Classes that can equip this item. An empty array means all classes are allowed. */
    exclusiveTo: BDO.Player.Classes[]
    /** The experience points produced by feeding the equipment to a fairy. */
    fairyExp: number
}