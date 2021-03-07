import { BDO } from '@typings/namespaces'
import { Item } from './item'

export interface Equipment extends Item<'equipment'> {
    /**
     * The base stats of the equipment as a string. If the stat is a range, then the
     * values are separated by a `~` (e.g., '17 ~ 23').
     */
    stats: BDO.Player.Stats<string>
    /** The stats for each enhancement level done through black stones. */
    enhancementStats: BDO.Equipments.BlackStones.Set
    /** The stats for each enhancement level done through caphras upgrades. */
    caphrasStats: BDO.Equipments.Caphras.Set
    /** A list of effects caused by the equipment. */
    itemEffects: string[]
    /** The effects caused by equiping 2 or more of the same equipment group. */
    setEffects: Record<number, string[]>
    /** Classes that can equip this item. An empty array means all classes are allowed. */
    exclusiveTo: BDO.Player.Classes[]
    /** The experience points produced by feeding the equipment to a fairy. */
    fairyExp: number
}