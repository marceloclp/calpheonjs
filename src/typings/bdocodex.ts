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

    export interface PageInfo {
        readonly '@context': string;

        readonly '@type': string;

        readonly image: string;

        readonly name: string;

        readonly description: string;

        readonly url: string;
    }

    export namespace Query {
        export interface API {
            /** The type of crafting. */
            readonly a: 'mrecipes' | 'recipes';

            /** No idea */
            readonly type: 'product';

            readonly item_id: string;

            readonly l: 'us';
        }

        export namespace Results {

            export interface Recipe {
                readonly aaData: {
                    /** Entity id. */
                    readonly 0: string;
    
                    /** HTML for the icon. */
                    readonly 1: string;
    
                    /** HTML for the recipe name. */
                    readonly 2: string;
    
                    /** Processing type. */
                    readonly 3: string;
    
                    readonly 4: {
                        /** The required level to complete this recipe. */
                        readonly display: string;
    
                        readonly sort_value: string;
                    };
    
                    /** EXP. */
                    readonly 5: string;
    
                    /** HTML for the materials. */
                    readonly 6: string;
    
                    /** HTML for the products. */
                    readonly 7: string;
    
                    /** A stringified array containing the materials ids. */
                    readonly 8: string;
    
                    readonly 9: string;
    
                    readonly 10: string;
    
                    readonly 11: string;
                }[];
            }

            export interface NPCDrop {
                readonly aaData: {
                    /** NPC id. */
                    readonly 0: string;

                    /** HTML for the icon. */
                    readonly 1: string;

                    /** HTML for the name of NPC. */
                    readonly 2: string;

                    /** Quantity as a string. */
                    readonly 3: string;

                    /** Drop chance in string format as a porcentage. */
                    readonly 4: string;
                }[];
            }

            export interface NodeDrop {
                readonly aaData: {
                    /** Node id.  */
                    readonly 0: string;

                    /** HTML for the icon. */
                    readonly 1: string;

                    /** HTML for the node name. */
                    readonly 2: string;

                    /** Zone name. */
                    readonly 3: string;

                    /** Temperature in string as a porcentage. */
                    readonly 4: string;

                    /** Humidity in string as a porcentage. */
                    readonly 5: string;

                    /** Water in string as a porcentage. */
                    readonly 6: string;
                }[];
            }

            export interface Item {
                readonly aaData: {
                    /** Item id. */
                    readonly 0: string;

                    /** HTML for the icon. */
                    readonly 1: string;

                    /** HTML for the item name. */
                    readonly 2: string;

                    /** Item level. */
                    readonly 3: number;

                    readonly 4: string;

                    readonly 5: string;
                }[];
            }

            export interface NPC {
                readonly aaData: {
                    readonly 0: {
                        /** NPC id. */
                        readonly display: string;

                        readonly sort_value: string;
                    };

                    /** HTML for the icon. */
                    readonly 1: string;

                    /** HTML for the NPC name. */
                    readonly 2: string;

                    /** Level. */
                    readonly 3: string;

                    /** HP. */
                    readonly 4: string;

                    /** Defense. */
                    readonly 5: string;

                    /** Evasion. */
                    readonly 6: string;

                    /** EXP. */
                    readonly 7: string;

                    /** Skill EXP. */
                    readonly 8: string;

                    /** Karma. */
                    readonly 9: string;
                }[];
            }

            export interface Quest {
                readonly aaData: {
                    readonly 0: {
                        /** Quest id. */
                        readonly display: string;

                        readonly sort_value: string;
                    };

                    /** HTML for the icon. */
                    readonly 1: string;

                    /** HTML for the quest name. */
                    readonly 2: string;

                    /** Level required to take the quest. */
                    readonly 3: string;

                    readonly 4: {
                        /** Region. */
                        readonly display: string;

                        readonly sort_value: number | string;
                    };

                    readonly 5: {
                        /** EXP. */
                        readonly display: string;

                        readonly sort_value: number | string;
                    };

                    readonly 6: {
                        /** Skill EXP. */
                        readonly display: string;

                        readonly sort_value: number | string;
                    };

                    /** Contribution EXP. */
                    readonly 7: string;

                    /** Big weird HTML string containing rewards. */
                    readonly 8: string;

                    readonly 9: string;

                    readonly 10: string;
                }[];
            }

        }
    }
}