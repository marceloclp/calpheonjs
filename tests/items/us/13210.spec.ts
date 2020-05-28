import { describe } from "mocha";
import { expect } from "chai";
import { scrapeMock as scrape } from "../../utils/scrape-mock";
import { Categories } from "../../../src/enums";
import { EquipmentScraper } from "../../../src/scrapers/equipment.scraper";

describe('https://bdocodex.com/us/item/13210/', () => {
    let item: EquipmentScraper;

    before(async () => {
        item = await scrape('13210') as EquipmentScraper;
    });

    it('#instanceOf', () => {
        expect(item).to.be.instanceOf(EquipmentScraper);
    });

    it('#url', () => {
        expect(item.url).to.equal('https://bdocodex.com/us/item/13210/');
    });

    it('#id', () => {
        expect(item.id).to.equal('13210');
    });

    it('#locale', () => {
        expect(item.locale).to.equal('us');
    });

    it('#type', () => {
        expect(item.type).to.equal('item');
    });

    it('#icon', () => {
        expect(item.icon).to.equal('https://bdocodex.com/items/new_icon/06_pc_equipitem/00_common/01_weapon/00013210.png');
    });

    it('#name', () => {
        expect(item.name).to.equal('Kzarka Shortsword');
    });

    it('#name_alt', () => {
        expect(item.name_alt).to.equal('크자카 소검');
    });

    it('#category', () => {
        expect(item.category).to.equal('Equipment');
    });

    it('#category_id', () => {
        expect(item.category_id).to.equal(Categories.EQUIPMENT);
    });

    it('#weight', () => {
        expect(item.weight).to.equal('13.50 LT');
    });

    it('#grade', () => {
        expect(item.grade).to.equal(3);
    });

    it('#description', () => {
        expect(item.description).to.equal(`A Shortsword that has been filled with the energy of Evil Lord Kzarka. Its evil energy lends a sense of urgency to your moves.`);
    });

    it('#prices', () => {
        expect(item.prices).to.eql({ buy: 95000000, sell: 750000, repair: 43740 });
    })

    it('#enhancement_stats', () => {
        expect(item.enhancement_stats).to.eql([{
            stats: {
                damage: [18, 22],
                defense: 0,
                accuracy: 10,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 100.00,
            durability: 100,
            cron_value_next: 0,
            cron_value_total: 0,
            enchant_item_counter: 1,
            pe_item_counter: 0,
            durability_loss_on_failure: 5,
            pe_dura_dec: 0,
            required_enhancement_item: {
                id: '16001',
                icon: 'https://bdocodex.com/new_icon/03_etc/11_enchant_material/00000008.png',
                name: 'Black Stone (Weapon)',
            },
            enhancement_effects: [
                'Extra AP against monsters up (enhancement level PRI or up)',
                'Extra Damage to All Species Up',
                'All AP Up',
                'All Accuracy Up'
            ],
        }, {
            stats: {
                damage: [22, 26],
                defense: 0,
                accuracy: 20,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 100.00,
            durability: 100,
            cron_value_next: 0,
            cron_value_total: 0,
            enchant_item_counter: 1,
            pe_item_counter: 0,
            durability_loss_on_failure: 5,
            pe_dura_dec: 0,
            required_enhancement_item: {
                id: '16001',
                icon: 'https://bdocodex.com/new_icon/03_etc/11_enchant_material/00000008.png',
                name: 'Black Stone (Weapon)',
            },
            enhancement_effects: [
                'Extra AP against monsters up (enhancement level PRI or up)',
                'Extra Damage to All Species Up',
                'All AP Up',
                'All Accuracy Up'
            ],
        }, {
            stats: {
                damage: [25, 29],
                defense: 0,
                accuracy: 30,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 100.00,
            durability: 100,
            cron_value_next: 0,
            cron_value_total: 0,
            enchant_item_counter: 1,
            pe_item_counter: 0,
            durability_loss_on_failure: 5,
            pe_dura_dec: 0,
            required_enhancement_item: {
                id: '16001',
                icon: 'https://bdocodex.com/new_icon/03_etc/11_enchant_material/00000008.png',
                name: 'Black Stone (Weapon)',
            },
            enhancement_effects: [
                'Extra AP against monsters up (enhancement level PRI or up)',
                'Extra Damage to All Species Up',
                'All AP Up',
                'All Accuracy Up'
            ],
        }, {
            stats: {
                damage: [28, 32],
                defense: 0,
                accuracy: 40,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 100.00,
            durability: 100,
            cron_value_next: 0,
            cron_value_total: 0,
            enchant_item_counter: 1,
            pe_item_counter: 0,
            durability_loss_on_failure: 5,
            pe_dura_dec: 0,
            required_enhancement_item: {
                id: '16001',
                icon: 'https://bdocodex.com/new_icon/03_etc/11_enchant_material/00000008.png',
                name: 'Black Stone (Weapon)',
            },
            enhancement_effects: [
                'Extra AP against monsters up (enhancement level PRI or up)',
                'Extra Damage to All Species Up',
                'All AP Up',
                'All Accuracy Up'
            ],
        }, {
            stats: {
                damage: [30, 34],
                defense: 0,
                accuracy: 50,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 100.00,
            durability: 100,
            cron_value_next: 0,
            cron_value_total: 0,
            enchant_item_counter: 1,
            pe_item_counter: 0,
            durability_loss_on_failure: 5,
            pe_dura_dec: 0,
            required_enhancement_item: {
                id: '16001',
                icon: 'https://bdocodex.com/new_icon/03_etc/11_enchant_material/00000008.png',
                name: 'Black Stone (Weapon)',
            },
            enhancement_effects: [
                'Extra AP against monsters up (enhancement level PRI or up)',
                'Extra Damage to All Species Up',
                'All AP Up',
                'All Accuracy Up'
            ],
        }, {
            stats: {
                damage: [32, 36],
                defense: 0,
                accuracy: 60,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 100.00,
            durability: 100,
            cron_value_next: 0,
            cron_value_total: 0,
            enchant_item_counter: 1,
            pe_item_counter: 0,
            durability_loss_on_failure: 5,
            pe_dura_dec: 0,
            required_enhancement_item: {
                id: '16001',
                icon: 'https://bdocodex.com/new_icon/03_etc/11_enchant_material/00000008.png',
                name: 'Black Stone (Weapon)',
            },
            enhancement_effects: [
                'Extra AP against monsters up (enhancement level PRI or up)',
                'Extra Damage to All Species Up',
                'All AP Up',
                'All Accuracy Up'
            ],
        }, {
            stats: {
                damage: [35, 39],
                defense: 0,
                accuracy: 70,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 100.00,
            durability: 100,
            cron_value_next: 0,
            cron_value_total: 0,
            enchant_item_counter: 1,
            pe_item_counter: 0,
            durability_loss_on_failure: 5,
            pe_dura_dec: 0,
            required_enhancement_item: {
                id: '16001',
                icon: 'https://bdocodex.com/new_icon/03_etc/11_enchant_material/00000008.png',
                name: 'Black Stone (Weapon)',
            },
            enhancement_effects: [
                'Extra AP against monsters up (enhancement level PRI or up)',
                'Extra Damage to All Species Up',
                'All AP Up',
                'All Accuracy Up'
            ],
        }, {
            stats: {
                damage: [38, 42],
                defense: 0,
                accuracy: 80,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 90.00,
            durability: 100,
            cron_value_next: 0,
            cron_value_total: 0,
            enchant_item_counter: 1,
            pe_item_counter: 2,
            durability_loss_on_failure: 5,
            pe_dura_dec: 10,
            required_enhancement_item: {
                id: '16001',
                icon: 'https://bdocodex.com/new_icon/03_etc/11_enchant_material/00000008.png',
                name: 'Black Stone (Weapon)',
            },
            enhancement_effects: [
                'Extra AP against monsters up (enhancement level PRI or up)',
                'Extra Damage to All Species Up',
                'All AP Up',
                'All Accuracy Up'
            ],
        }, {
            stats: {
                damage: [43, 47],
                defense: 0,
                accuracy: 90,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 20.41,
            durability: 100,
            cron_value_next: 0,
            cron_value_total: 0,
            enchant_item_counter: 1,
            pe_item_counter: 3,
            durability_loss_on_failure: 5,
            pe_dura_dec: 20,
            required_enhancement_item: {
                id: '16001',
                icon: 'https://bdocodex.com/new_icon/03_etc/11_enchant_material/00000008.png',
                name: 'Black Stone (Weapon)',
            },
            enhancement_effects: [
                'Extra AP against monsters up (enhancement level PRI or up)',
                'Extra Damage to All Species Up',
                'All AP Up',
                'All Accuracy Up'
            ],
        }, {
            stats: {
                damage: [48, 52],
                defense: 0,
                accuracy: 100,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 14.29,
            durability: 100,
            cron_value_next: 0,
            cron_value_total: 0,
            enchant_item_counter: 1,
            pe_item_counter: 5,
            durability_loss_on_failure: 5,
            pe_dura_dec: 30,
            required_enhancement_item: {
                id: '16001',
                icon: 'https://bdocodex.com/new_icon/03_etc/11_enchant_material/00000008.png',
                name: 'Black Stone (Weapon)',
            },
            enhancement_effects: [
                'Extra AP against monsters up (enhancement level PRI or up)',
                'Extra Damage to All Species Up',
                'All AP Up',
                'All Accuracy Up'
            ],
        }, {
            stats: {
                damage: [53, 57],
                defense: 0,
                accuracy: 110,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 10.00,
            durability: 100,
            cron_value_next: 0,
            cron_value_total: 0,
            enchant_item_counter: 1,
            pe_item_counter: 7,
            durability_loss_on_failure: 5,
            pe_dura_dec: 40,
            required_enhancement_item: {
                id: '16001',
                icon: 'https://bdocodex.com/new_icon/03_etc/11_enchant_material/00000008.png',
                name: 'Black Stone (Weapon)',
            },
            enhancement_effects: [
                'Extra AP against monsters up (enhancement level PRI or up)',
                'Extra Damage to All Species Up',
                'All AP Up',
                'All Accuracy Up'
            ],
        }, {
            stats: {
                damage: [58, 62],
                defense: 0,
                accuracy: 120,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 6.67,
            durability: 100,
            cron_value_next: 0,
            cron_value_total: 0,
            enchant_item_counter: 1,
            pe_item_counter: 11,
            durability_loss_on_failure: 5,
            pe_dura_dec: 50,
            required_enhancement_item: {
                id: '16001',
                icon: 'https://bdocodex.com/new_icon/03_etc/11_enchant_material/00000008.png',
                name: 'Black Stone (Weapon)',
            },
            enhancement_effects: [
                'Extra AP against monsters up (enhancement level PRI or up)',
                'Extra Damage to All Species Up',
                'All AP Up',
                'All Accuracy Up'
            ],
        }, {
            stats: {
                damage: [63, 67],
                defense: 0,
                accuracy: 130,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 4.00,
            durability: 100,
            cron_value_next: 0,
            cron_value_total: 0,
            enchant_item_counter: 1,
            pe_item_counter: 17,
            durability_loss_on_failure: 5,
            pe_dura_dec: 60,
            required_enhancement_item: {
                id: '16001',
                icon: 'https://bdocodex.com/new_icon/03_etc/11_enchant_material/00000008.png',
                name: 'Black Stone (Weapon)',
            },
            enhancement_effects: [
                'Extra AP against monsters up (enhancement level PRI or up)',
                'Extra Damage to All Species Up',
                'All AP Up',
                'All Accuracy Up'
            ],
        }, {
            stats: {
                damage: [68, 72],
                defense: 0,
                accuracy: 140,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 2.50,
            durability: 100,
            cron_value_next: 0,
            cron_value_total: 0,
            enchant_item_counter: 1,
            pe_item_counter: 23,
            durability_loss_on_failure: 5,
            pe_dura_dec: 70,
            required_enhancement_item: {
                id: '16001',
                icon: 'https://bdocodex.com/new_icon/03_etc/11_enchant_material/00000008.png',
                name: 'Black Stone (Weapon)',
            },
            enhancement_effects: [
                'Extra AP against monsters up (enhancement level PRI or up)',
                'Extra Damage to All Species Up',
                'All AP Up',
                'All Accuracy Up'
            ],
        }, {
            stats: {
                damage: [73, 77],
                defense: 0,
                accuracy: 150,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 2.00,
            durability: 100,
            cron_value_next: 0,
            cron_value_total: 0,
            enchant_item_counter: 1,
            pe_item_counter: 29,
            durability_loss_on_failure: 5,
            pe_dura_dec: 100,
            required_enhancement_item: {
                id: '16001',
                icon: 'https://bdocodex.com/new_icon/03_etc/11_enchant_material/00000008.png',
                name: 'Black Stone (Weapon)',
            },
            enhancement_effects: [
                'Extra AP against monsters up (enhancement level PRI or up)',
                'Extra Damage to All Species Up',
                'All AP Up',
                'All Accuracy Up'
            ],
        }, {
            stats: {
                damage: [78, 82],
                defense: 0,
                accuracy: 160,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 11.76,
            durability: 100,
            cron_value_next: 0,
            cron_value_total: 0,
            enchant_item_counter: 1,
            pe_item_counter: 0,
            durability_loss_on_failure: 10,
            pe_dura_dec: 0,
            required_enhancement_item: {
                id: '16004',
                icon: 'https://bdocodex.com/new_icon/06_pc_equipitem/03_etc/12_doapplydirectlyitem/00000018.png',
                name: 'Concentrated Magical Black Stone (Weapon)',
            },
            enhancement_effects: [
                'Extra AP against monsters up (enhancement level PRI or up)',
                'Extra Damage to All Species Up',
                'All AP Up',
                'All Accuracy Up'
            ],
        }, {
            stats: {
                damage: [86, 90],
                defense: 0,
                accuracy: 168,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 7.69,
            durability: 100,
            cron_value_next: 0,
            cron_value_total: 0,
            enchant_item_counter: 1,
            pe_item_counter: 0,
            durability_loss_on_failure: 10,
            pe_dura_dec: 0,
            required_enhancement_item: {
                id: '16004',
                icon: 'https://bdocodex.com/new_icon/06_pc_equipitem/03_etc/12_doapplydirectlyitem/00000018.png',
                name: 'Concentrated Magical Black Stone (Weapon)',
            },
            enhancement_effects: [
                'Extra AP against monsters up (enhancement level PRI or up)',
                'Extra Damage to All Species Up',
                'All AP Up',
                'All Accuracy Up'
            ],
        }, {
            stats: {
                damage: [94, 98],
                defense: 0,
                accuracy: 176,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 6.25,
            durability: 100,
            cron_value_next: 34,
            cron_value_total: 34,
            enchant_item_counter: 1,
            pe_item_counter: 0,
            durability_loss_on_failure: 10,
            pe_dura_dec: 0,
            required_enhancement_item: {
                id: '16004',
                icon: 'https://bdocodex.com/new_icon/06_pc_equipitem/03_etc/12_doapplydirectlyitem/00000018.png',
                name: 'Concentrated Magical Black Stone (Weapon)',
            },
            enhancement_effects: [
                'Extra AP against monsters up (enhancement level PRI or up)',
                'Extra Damage to All Species Up',
                'All AP Up',
                'All Accuracy Up'
            ],
        }, {
            stats: {
                damage: [106, 110],
                defense: 0,
                accuracy: 184,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 2.00,
            durability: 100,
            cron_value_next: 127,
            cron_value_total: 161,
            enchant_item_counter: 1,
            pe_item_counter: 0,
            durability_loss_on_failure: 10,
            pe_dura_dec: 0,
            required_enhancement_item: {
                id: '16004',
                icon: 'https://bdocodex.com/new_icon/06_pc_equipitem/03_etc/12_doapplydirectlyitem/00000018.png',
                name: 'Concentrated Magical Black Stone (Weapon)',
            },
            enhancement_effects: [
                'Extra AP against monsters up (enhancement level PRI or up)',
                'Extra Damage to All Species Up',
                'All AP Up',
                'All Accuracy Up'
            ],
        }, {
            stats: {
                damage: [114, 118],
                defense: 0,
                accuracy: 192,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 0.30,
            durability: 100,
            cron_value_next: 531,
            cron_value_total: 692,
            enchant_item_counter: 1,
            pe_item_counter: 0,
            durability_loss_on_failure: 10,
            pe_dura_dec: 0,
            required_enhancement_item: {
                id: '16004',
                icon: 'https://bdocodex.com/new_icon/06_pc_equipitem/03_etc/12_doapplydirectlyitem/00000018.png',
                name: 'Concentrated Magical Black Stone (Weapon)',
            },
            enhancement_effects: [
                'Extra AP against monsters up (enhancement level PRI or up)',
                'Extra Damage to All Species Up',
                'All AP Up',
                'All Accuracy Up'
            ],
        }, {
            stats: {
                damage: [122, 126],
                defense: 0,
                accuracy: 200,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 0,
            durability: 100,
            cron_value_next: 0,
            cron_value_total: 692,
            enhancement_effects: [
                'Extra AP against monsters up (enhancement level PRI or up)',
                'Extra Damage to All Species Up',
                'All AP Up',
                'All Accuracy Up'
            ],
        }]);
    });

    it('#exclusive_to', () => {
        expect(item.exclusive_to).to.eql(['Tamer', 'Kunoichi', 'Ninja']);
    });
});