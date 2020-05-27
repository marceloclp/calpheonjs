import { describe } from "mocha";
import { expect } from "chai";
import { Scraper } from "../../../src/scrapers/scraper";
import { scrapeMock as scrape } from "../../utils/scrape-mock";
import { Categories } from "../../../src/enums";

describe('https://bdocodex.com/us/item/16832/', () => {
    let item: Scraper;

    before(async () => {
        item = await scrape('16832');
    });

    it('#url', () => {
        expect(item.url).to.equal('https://bdocodex.com/us/item/16832/');
    });
    
    it('#id', () => {
        expect(item.id).to.equal('16832');
    });
    
    it('#locale', () => {
        expect(item.locale).to.equal('us');
    });

    it('#type', () => {
        expect(item.type).to.equal('item');
    });

    it('#icon', () => {
        expect(item.icon).to.equal('https://bdocodex.com/items/new_icon/06_pc_equipitem/00_common/00_etc/00016832.png');
    });

    it('#name', () => {
        expect(item.name).to.equal('Magic Pickaxe');
    });

    it('#name_alt', () => {
        expect(item.name_alt).to.equal('마력이 깃든 곡괭이');
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
        expect(item.description).to.equal('A gathering tool made for extracting ore and minerals from rock. It increases luck when gathering.');
    });

    it('#prices', () => {
        expect(item.prices).to.eql({ buy: 40000, sell: 4000, repair: 0 });
    });
});