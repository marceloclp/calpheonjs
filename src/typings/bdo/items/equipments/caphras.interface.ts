import { BDO } from '@typings/namespaces'

export interface Caphras {
    stats: BDO.Items.Equipments.Stats<string>

    /** The amount of Caphras stones required to perform the enhancement at each level. */
    amount: {
        /** The amount required to enhance to the next level. */
        toNextLevel: number
        
        /** The total amount required to enhance up to the next level. */
        toThisLevel: number
    }
}