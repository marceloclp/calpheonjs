import { describe } from "mocha";
import { expect } from "chai";
import { scrapeMock as scrape } from "../../utils/scrape-mock";
import { EquipmentScraper } from "../../../src/core/scrapers/equipment.scraper";
import { App } from "../../../src/typings/app";

describe('https://bdocodex.com/us/item/10817/', () => {
    let item: EquipmentScraper;

    before(async () => {
        item = await scrape('10817') as EquipmentScraper;
    });

    it('#instanceOf', () => {
        expect(item).to.be.instanceOf(EquipmentScraper);
    });

    it('#category', () => {
        expect(item.category).to.equal('Equipment');
    });

    it('#category_id', () => {
        expect(item.category_id).to.equal(App.Categories.EQUIPMENT);
    });

    it('#weight', () => {
        expect(item.weight).to.equal('15.05 LT');
    });

    it('#description', () => {
        expect(item.description).to.equal('High-quality armor which gives less fatigue to its wearer');
    });

    it('#prices', () => {
        expect(item.prices).to.eql({ buy: 84000, sell: 16800, repair: 8400 });
    });

    it('#stats', () => {
        expect(item.stats).to.eql({
            damage: 0,
            defense: 5,
            accuracy: 0,
            evasion: 4,
            dmg_reduction: 1,
            h_evasion: 12,
            h_dmg_reduction: 2,
        });
    });

    it('#item_effects', () => {
        expect(item.item_effects).to.eql([
            'Knockdown/Bound Resistance +15%'
        ]);
    });

    it('#set_effects', () => {
        expect(item.set_effects).to.eql({
            2: ['Max Stamina +200'],
            3: ['Extra Damage to All Species +5'],
        })
    });
});