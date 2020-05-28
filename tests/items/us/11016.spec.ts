import { describe } from "mocha";
import { expect } from "chai";
import { scrapeMock as scrape } from "../../utils/scrape-mock";
import { Categories } from "../../../src/enums";
import { EquipmentScraper } from "../../../src/scrapers/equipment.scraper";

describe('https://bdocodex.com/us/item/11016/', () => {
    let item: EquipmentScraper;

    before(async () => {
        item = await scrape('11016') as EquipmentScraper;
    });

    it('#instanceOf', () => {
        expect(item).to.be.instanceOf(EquipmentScraper);
    });

    it('#category', () => {
        expect(item.category).to.equal('Equipment');
    });

    it('#category_id', () => {
        expect(item.category_id).to.equal(Categories.EQUIPMENT);
    });

    it('#weight', () => {
        expect(item.weight).to.equal('11.00 LT');
    });

    it('#description', () => {
        expect(item.description).to.equal('Shoes of Muskan. It makes your footsteps feel even lighter.');
    });

    it('#prices', () => {
        expect(item.prices).to.eql({ buy: 75000000, sell: 24000, repair: 16000 });
    });

    it('#stats', () => {
        expect(item.stats).to.eql({
            damage: 0,
            defense: 4,
            accuracy: 0,
            evasion: 3,
            dmg_reduction: 1,
            h_evasion: 6,
        });
    });

    it('#item_effects', () => {
        expect(item.item_effects).to.eql([
            'All Evasion Up'
        ]);
    });

    it('#set_effects', () => {
        expect(item.set_effects).to.eql({
            3: ['Max Stamina +200'],
            4: [
                'Attack Speed +1 Level',
                'Casting Speed +1 Level',
            ],
        })
    });
});