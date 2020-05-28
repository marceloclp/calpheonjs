import { describe } from "mocha";
import { expect } from "chai";
import { scrapeMock as scrape } from "../../utils/scrape-mock";
import { Categories } from "../../../src/enums";
import { EquipmentScraper } from "../../../src/scrapers/equipment.scraper";

describe('https://bdocodex.com/us/item/10991/', () => {
    let item: EquipmentScraper;

    before(async () => {
        item = await scrape('10991') as EquipmentScraper;
    });

    it('#instanceOf', () => {
        expect(item).to.be.instanceOf(EquipmentScraper);
    });

    it('#url', () => {
        expect(item.url).to.equal('https://bdocodex.com/us/item/10991/');
    });
    
    it('#id', () => {
        expect(item.id).to.equal('10991');
    });
    
    it('#locale', () => {
        expect(item.locale).to.equal('us');
    });

    it('#type', () => {
        expect(item.type).to.equal('item');
    });

    it('#name', () => {
        expect(item.name).to.equal(`Beia's Black Magic Gloves`);
    });

    it('#category', () => {
        expect(item.category).to.equal('Equipment');
    });

    it('#category_id', () => {
        expect(item.category_id).to.equal(Categories.EQUIPMENT);
    });

    it('#weight', () => {
        expect(item.weight).to.equal('17.00 LT');
    });

    it('#description', () => {
        expect(item.description).to.equal('A pair of gloves that Beia, the Chief Investigator of Tarif, left as a farewell present. There is writing on its decoration.');
    });

    it('#prices', () => {
        expect(item.prices).to.eql({ buy: 1200000, sell: 120000, repair: 3250 });
    });

    it('#stats', () => {
        expect(item.stats).to.eql({
            damage: 0,
            defense: 38,
            accuracy: 0,
            evasion: 19,
            h_evasion: 61,
            dmg_reduction: 19,
        });
    });
});