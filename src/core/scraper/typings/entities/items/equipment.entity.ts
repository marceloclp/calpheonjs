import { BDO } from '@typings/namespaces'
import { Item } from './item.entity'

export interface Equipment extends
    Item<BDO.Items.SubTypes.Equipment> {

    /**
     * The stats for each enhancement level done through black stones.
     * Equipment base stats are at index 0.
     */
    enhancements: BDO.Items.Equipments.Enhancement[]
    
    /** The stats for each enhancement level done through caphras upgrades. */
    caphras: {
        atPlus18?: BDO.Items.Equipments.Caphras[]
        atPlus19?: BDO.Items.Equipments.Caphras[]
        atPlus20?: BDO.Items.Equipments.Caphras[]
    }
 
    /** Classes that can equip this item. An empty array means all classes are allowed. */
    exclusiveTo: BDO.Characters.Classes[]
 
    /** The experience points produced by feeding the equipment to a fairy. */
    fairyExp: number
}