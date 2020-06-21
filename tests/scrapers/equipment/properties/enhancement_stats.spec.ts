import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../../../utils/scrape-mock";

describe('Equipments > enhancement stats', () => {
    /**
     * https://bdocodex.com/us/item/11629/
     * Tungrad Necklace
     */
    describe('11629', () => {
        let result: Scrapers.Result<Scrapers.Entities.Equipment>;

        before(async () => {
            result = await ScrapeMock('11629',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#enhancement_stats[0]', () => {
            expect(result.data.enhancement_stats[0]).to.deep.equal({
                stats: {
                    damage: 10,
                    defense: 0,
                    accuracy: 4,
                    evasion: 0,
                    dmg_reduction: 0,
                },
                success_rate: 25.00,
                durability: 100,
                cron_values: {
                    next_lvl: 62,
                    total: 62,
                },
                required_enhancement_item: {
                    type: 'item',
                    id: '11629',
                    icon: '/new_icon/06_pc_equipitem/00_common/15_necklace/00011629.png',
                    name: 'Tungrad Necklace',
                    shortUrl: '/us/item/11629/',
                    amount: 1,
                    durability_loss_on_failure: 10,
                },
                perfect_enhancement: {
                    amount: 0,
                    durability_loss_on_failure: 0,
                },
                item_effects: [
                    "Self-collectible Black Spirit's Rage +20%"
                ],
                enhancement_effects: [],
            });
        });

        it('#enhancement_stats[5]', () => {
            expect(result.data.enhancement_stats[5]).to.deep.equal({
                stats: {
                    damage: 35,
                    defense: 0,
                    accuracy: 24,
                    evasion: 0,
                    dmg_reduction: 0,
                },
                success_rate: 0,
                durability: 100,
                cron_values: {
                    next_lvl: 0,
                    total: 9872,
                },
                item_effects: [
                    "Self-collectible Black Spirit's Rage +20%"
                ],
                enhancement_effects: [],
            });
        });

        it('#enhancement_stats.length', () => {
            expect(result.data.enhancement_stats.length).to.equal(6);
        });
    });

    /**
     * https://bdocodex.com/us/item/13210/
     * Kzarka Shortsword
     */
    describe('13210', () => {
        let result: Scrapers.Result<Scrapers.Entities.Equipment>;

        before(async () => {
            result = await ScrapeMock('13210',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#enhancement_stats[1]', () => {
            expect(result.data.enhancement_stats[1]).to.deep.equal({
                stats: {
                    damage: [22, 26],
                    defense: 0,
                    accuracy: 20,
                    evasion: 0,
                    dmg_reduction: 0,
                },
                success_rate: 100.00,
                durability: 100,
                cron_values: {
                    next_lvl: 0,
                    total: 0,
                },
                required_enhancement_item: {
                    type: 'item',
                    id: '16001',
                    icon: '/new_icon/03_etc/11_enchant_material/00000008.png',
                    name: 'Black Stone (Weapon)',
                    shortUrl: '/us/item/16001/',
                    amount: 1,
                    durability_loss_on_failure: 5,
                },
                perfect_enhancement: {
                    amount: 0,
                    durability_loss_on_failure: 0,
                },
                item_effects: [
                    "Extra Damage to All Species +10",
                    "Attack Speed +3 Level"
                ],
                enhancement_effects: [
                    'Extra AP against monsters up (enhancement level PRI or up)',
                    'Extra Damage to All Species Up',
                    'All AP Up',
                    'All Accuracy Up'
                ],
            });
        });

        it('#enhancement_stats.length', () => {
            expect(result.data.enhancement_stats.length).to.deep.equal(21);
        });
    });
});