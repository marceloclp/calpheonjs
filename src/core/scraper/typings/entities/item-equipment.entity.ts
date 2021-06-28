import { BDO } from '@typings/namespaces'
import { Refs } from '../index'
import { Item } from './item.entity'
import { As } from './as.enum'

export interface ItemEquipment extends Item {
    as: As.ItemEquipment

    subType: BDO.Items.SubTypes.Equipment

    /**
     * The stats for each enhancement level done through black stones.
     * Equipment base stats are at index 0.
     */
    enhancements: {
        /** The new equipment stats at the enhancement level. */
        stats: BDO.Items.Equipments.Stats<string>
    
        /** The chance of sucess as a floating point. */
        successRate: number
    
        /** Max durability at a given enhancement level. */
        durability: number
    
        /** The required amount of Cron stones. */
        cronStonesAmount: {
            /** The amount required to enhance to the next level. */
            nextLvl: number
    
            /** The total amount required to enhance up to the next level. */
            total: number
        }
    
        /** Effects caused by the enhancement. */
        effects: {
            /** A list of effects caused by the item on a given enhancement level. */
            item: string[]
    
            /** A list of effects caused by the enhancement level itself. */
            enhancement: string[]
    
            /** A list of additional effects at a certain enhancement level. */
            additional: string[]
            
            /** A list of effects caused by equiping a number of set pieces. */
            set: Record<number, string[]>
        }
    
        /** The item required to perform the enhancement. */
        requiredItem?: Refs.Item<{
            /** The amount needed to perform the enhancement. */
            amount: number
    
            /** The equipment durability lost if the enhancement fails. */
            durabilityLossOnFailure: number
        }>
    
        perfectEnhancement?: {
            /** The amount needed to perform a 100% success rate enhancement. */
            amount: number
    
            /** The durability lost after a perfect enhancement. */
            durabilityLossOnFailure: number
        }
    }[]
    
    /** The stats for each enhancement level done through caphras upgrades. */
    caphras: Partial<Record<'atPlus18' | 'atPlus19' | 'atPlus20', {
        stats: BDO.Items.Equipments.Stats<string>

        /** The amount of Caphras stones required to perform the enhancement at each level. */
        amount: {
            /** The amount required to enhance to the next level. */
            toNextLevel: number
            
            /** The total amount required to enhance up to the next level. */
            toThisLevel: number
        }
    }[]>>
 
    /** Classes that can equip this item. An empty array means all classes are allowed. */
    exclusiveTo: BDO.Characters.Classes[]
 
    /** The experience points produced by feeding the equipment to a fairy. */
    fairyExp: number
}
