export namespace BDOCodex {

    /**
     * Maps global stats identifiers to the stats keys.
     */
    export enum StatsEnum {
        HP              = 'hp',
        MP              = 'mp',
        DAMAGE          = 'damage',
        DEFENSE         = 'defense',
        ACCURACY        = 'accuracy',
        EVASION         = 'evasion',
        DMG_REDUCTION   = 'dreduction',
        H_DAMAGE        = 'hdamage',
        H_DEFENSE       = 'hdefense',
        H_ACCURACY      = 'haccuracy',
        H_EVASION       = 'hevasion',
        H_DMG_REDUCTION = 'hdreduction',
    }

    /**
     * Caphras enhancements object.
     */
    export namespace Caphras {
        /**
         * The enhancement data for each level (+1, ..., +20).
         */
        export interface Item {
            readonly count: string;

            readonly tcount: string;

            readonly stats: Record<StatsEnum, string>;
        }

        /**
         * The enhancement data for an equipment.
         */
        export interface Data {
            readonly 18: Caphras.Item[];

            readonly 19: Caphras.Item[];

            readonly 20: Caphras.Item[];

            readonly stats_names: {
                readonly damage: string;

                readonly defense: string;

                readonly accuracy: string;

                readonly evasion: string;

                readonly hp: string;

                readonly mp: string;
            }
        }
    }

    /**
     * Normal enhancement array for equipments.
     * Refers to the +1 to PEN enhancements.
     * 
     * It's named as "enchantment array" for some reason.
     */
    export namespace Enchantment {

        /**
         * The enhancement data for each level (+1, +2, etc).
         */
        export interface Item extends Record<StatsEnum, string> {
            readonly enchant_chance: string;

            readonly durability: string;

            readonly cron_value: string;

            readonly cron_tvalue: string;

            readonly edescription: string;
        
            readonly need_enchant_item_id: string;
        
            readonly need_enchant_item_icon: string;
        
            readonly need_enchant_item_name: string;
        
            readonly enchant_item_counter: string;
        
            readonly pe_item_counter: string;
        
            readonly fail_dura_dec: string;
        
            readonly pe_dura_dec: string;
        }

        /**
         * The enhancement data for an equipment.
         */
        export interface Array extends Record<number, Enchantment.Item> {
            readonly na: string;

            readonly max_enchant: string;
        }
    }

}