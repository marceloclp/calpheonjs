import { describe } from "mocha";
import { expect } from "chai";
import { scrapeMock as scrape } from "../../utils/scrape-mock";
import { Categories } from "../../../src/enums";
import { EquipmentScraper } from "../../../src/scrapers/equipment.scraper";

describe('https://bdocodex.com/us/item/703549/', () => {
    let item: EquipmentScraper;

    before(async () => {
        item = await scrape('703549') as EquipmentScraper;
    });

    it('#instanceOf', () => {
        expect(item).to.be.instanceOf(EquipmentScraper);
    });

    it('#url', () => {
        expect(item.url).to.equal('https://bdocodex.com/us/item/703549/');
    });
    
    it('#id', () => {
        expect(item.id).to.equal('703549');
    });
    
    it('#locale', () => {
        expect(item.locale).to.equal('us');
    });

    it('#type', () => {
        expect(item.type).to.equal('item');
    });

    it('#category', () => {
        expect(item.category).to.equal('Equipment');
    });

    it('#category_id', () => {
        expect(item.category_id).to.equal(Categories.EQUIPMENT);
    });

    it('#weight', () => {
        expect(item.weight).to.equal('0.10 LT');
    });

    it('#grade', () => {
        expect(item.grade).to.equal(3);
    });

    it('#description', () => {
        expect(item.description).to.equal('Arena of Arsha Exclusive Gauntlet.');
    });

    it('#prices', () => {
        expect(item.prices).to.eql({ buy: 1, repair: 0 });
    });

    it('#stats', () => {
        expect(item.stats).to.eql({
            damage: [114, 118],
            defense: 0,
            accuracy: 192,
            evasion: 0,
            dmg_reduction: 0,
        });
    });

    it('#item_effects', () => {
        expect(item.item_effects).to.eql([
            'Extra Damage to All Species +19',
            'Attack Speed +3 Level',
            'All Accuracy +16',
            'Ignore All Resistance +20%',
        ]);
    });

    it('#exclusive_to', () => {
        expect(item.exclusive_to).to.eql(['Striker', 'Mystic']);
    });

    it('#caphras_stats', () => {
        expect(item.caphras_stats).to.eql({ 18: [], 19: [], 20: [] });
    });
});