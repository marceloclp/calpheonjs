import { describe } from "mocha";
import { expect } from "chai";
import { Scraper } from "../../../src/scrapers/scraper";
import { scrapeMock as scrape } from "../../utils/scrape-mock";
import { Categories } from "../../../src/enums";

describe('https://bdocodex.com/us/item/11629/', () => {
    let item: Scraper;

    before(async () => {
        item = await scrape('11629');
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
});