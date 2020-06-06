import { App } from "./app";

export namespace BDO {
    export enum StatsEnum {
        // The base stat value.
        DAMAGE = 'damage',
        DEFENSE = 'defense',
        ACCURACY = 'accuracy',
        EVASION = 'evasion',
        DMG_REDUCTION = 'dmg_reduction',
    
        // The stat bonus value (inside the parenthesis).
        H_DAMAGE = 'h_damage',
        H_DEFENSE = 'h_defense',
        H_ACCURACY = 'h_accuracy',
        H_EVASION = 'h_evasion',
        H_DMG_REDUCTION = 'h_dmg_reduction',
    
        // Extra stats.
        HP = 'hp',
        MP = 'mp',
    }

    export interface Pricings {
        buy: number;
        sell: number;
        repair: number;
    }

    export type Stat = number | [number, number];

    export type Stats = Partial<Record<StatsEnum, Stat>>;

    export interface EntityReference {
        /** A type may be available if the context is not clear. */
        type?: App.EntityTypes;

        /** A shortened url might be available. */
        shortUrl?: string;

        /** The entity reference id. */
        id: string;

        /** The entity icon url. */
        icon: string;

        /** The entity name in the same language as the scraper. */
        name: string;
    }


    export namespace Equipment {

        export interface Enhancement {
            stats: BDO.Stats;

            /** The chance of success as a floating point. */
            success_rate: number;

            /** Max durability at a given enhancement level. */
            durability: number;

            /** The required amount of Cron Stones for next enhancement level. */
            cron_value_next: number;

            /** The required amount of Cron Stones for max enhancement level. */
            cron_value_total: number;

            /** The effects caused by the enhancement level. */
            enhancement_effects: string[];

            /** The durability lost if the enhancement fails. */
            durability_loss_on_failure?: number;

            // Not sure what those mean.
            // They are not available for the highest level.
            enchant_item_counter?: number;
            pe_item_counter?: number;
            pe_dura_dec?: number;

            /** The item required to perform the enhancement. */
            required_enhancement_item?: EntityReference;
        }

        export namespace Caphras {
            export interface Enhancement {
                stats: BDO.Stats;

                count_next: number;

                count_total: number;
            }

            export interface Wrapper {
                18?: BDO.Equipment.Caphras.Enhancement[];

                19?: BDO.Equipment.Caphras.Enhancement[];

                20?: BDO.Equipment.Caphras.Enhancement[];
            }
        }

    }

    export interface Recipe {
        readonly id: string;

        readonly icon: string;

        readonly name: string;

        readonly type: string;

        readonly skill_lvl: [string, number];

        readonly exp: number;

        readonly materials: BDO.EntityReference[];

        readonly products: BDO.EntityReference[];
    }
}