import { describe } from "mocha";
import { expect } from "chai";
import { scrapeMock as scrape } from "../../utils/scrape-mock";
import { Categories } from "../../../src/enums";
import { EquipmentScraper } from "../../../src/scrapers/equipment.scraper";

describe('https://bdocodex.com/us/item/11629/', () => {
    let item: EquipmentScraper;

    before(async () => {
        item = await scrape('11629') as EquipmentScraper;
    });

    it('#instanceOf', () => {
        expect(item).to.be.instanceOf(EquipmentScraper);
    });

    it('#url', () => {
        expect(item.url).to.equal('https://bdocodex.com/us/item/11629/');
    });

    it('#id', () => {
        expect(item.id).to.equal('11629');
    });

    it('#locale', () => {
        expect(item.locale).to.equal('us');
    });

    it('#type', () => {
        expect(item.type).to.equal('item');
    });

    it('#icon', () => {
        expect(item.icon).to.equal('https://bdocodex.com/items/new_icon/06_pc_equipitem/00_common/15_necklace/00011629.png');
    });

    it('#name', () => {
        expect(item.name).to.equal('Tungrad Necklace');
    });

    it('#name_alt', () => {
        expect(item.name_alt).to.equal('툰그라드 목걸이');
    });

    it('#category', () => {
        expect(item.category).to.equal('Equipment');
    });

    it('#category_id', () => {
        expect(item.category_id).to.equal(Categories.EQUIPMENT);
    });

    it('#weight', () => {
        expect(item.weight).to.equal('1.00 LT');
    });

    it('#grade', () => {
        expect(item.grade).to.equal(3);
    });

    it('#description', () => {
        expect(item.description).to.equal(`A necklace used in Ancient Tungrad. The Ancient Energy housed within allows your potential to flourish.`);
    });

    it('#prices', () => {
        expect(item.prices).to.eql({ buy: 125000000, sell: 335000, repair: 10000 });
    });

    it('#enhancement_stats', () => {
        expect(item.enhancement_stats).to.eql([{
            stats: {
                damage: 10,
                defense: 0,
                accuracy: 4,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 25.00,
            durability: 100,
            cron_value_next: 62,
            cron_value_total: 62,
            enchant_item_counter: 1,
            pe_item_counter: 0,
            durability_loss_on_failure: 10,
            pe_dura_dec: 0,
            required_enhancement_item: {
                id: '11629',
                icon: 'https://bdocodex.com/new_icon/06_pc_equipitem/00_common/15_necklace/00011629.png',
                name: 'Tungrad Necklace',
            },
            enhancement_effects: [],
        }, {
            stats: {
                damage: 15,
                defense: 0,
                accuracy: 8,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 10.00,
            durability: 100,
            cron_value_next: 187,
            cron_value_total: 249,
            enchant_item_counter: 1,
            pe_item_counter: 0,
            durability_loss_on_failure: 10,
            pe_dura_dec: 0,
            required_enhancement_item: {
                id: '11629',
                icon: 'https://bdocodex.com/new_icon/06_pc_equipitem/00_common/15_necklace/00011629.png',
                name: 'Tungrad Necklace',
            },
            enhancement_effects: [],
        }, {
            stats: {
                damage: 20,
                defense: 0,
                accuracy: 12,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 7.50,
            durability: 100,
            cron_value_next: 562,
            cron_value_total: 811,
            enchant_item_counter: 1,
            pe_item_counter: 0,
            durability_loss_on_failure: 10,
            pe_dura_dec: 0,
            required_enhancement_item: {
                id: '11629',
                icon: 'https://bdocodex.com/new_icon/06_pc_equipitem/00_common/15_necklace/00011629.png',
                name: 'Tungrad Necklace',
            },
            enhancement_effects: [],
        }, {
            stats: {
                damage: 25,
                defense: 0,
                accuracy: 16,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 2.50,
            durability: 100,
            cron_value_next: 1562,
            cron_value_total: 2373,
            enchant_item_counter: 1,
            pe_item_counter: 0,
            durability_loss_on_failure: 10,
            pe_dura_dec: 0,
            required_enhancement_item: {
                id: '11629',
                icon: 'https://bdocodex.com/new_icon/06_pc_equipitem/00_common/15_necklace/00011629.png',
                name: 'Tungrad Necklace',
            },
            enhancement_effects: [],
        }, {
            stats: {
                damage: 30,
                defense: 0,
                accuracy: 20,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 0.50,
            durability: 100,
            cron_value_next: 7499,
            cron_value_total: 9872,
            enchant_item_counter: 1,
            pe_item_counter: 0,
            durability_loss_on_failure: 10,
            pe_dura_dec: 0,
            required_enhancement_item: {
                id: '11629',
                icon: 'https://bdocodex.com/new_icon/06_pc_equipitem/00_common/15_necklace/00011629.png',
                name: 'Tungrad Necklace',
            },
            enhancement_effects: [],
        }, {
            stats: {
                damage: 35,
                defense: 0,
                accuracy: 24,
                evasion: 0,
                dmg_reduction: 0,
            },
            success_rate: 0,
            durability: 100,
            cron_value_next: 0,
            cron_value_total: 9872,
            enhancement_effects: [],
        }]);
    });

    it('#stats', () => {
        expect(item.stats).to.eql({
            damage: 10,
            defense: 0,
            accuracy: 4,
            evasion: 0,
            dmg_reduction: 0,
        });
    });
});