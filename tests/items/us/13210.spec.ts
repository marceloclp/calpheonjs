import { describe } from "mocha";
import { expect } from "chai";
import { Scraper } from "../../../src/scrapers/scraper";
import { scrapeMock as scrape } from "../../utils/scrape-mock";
import { Categories } from "../../../src/enums";

describe('https://bdocodex.com/us/item/13210/', () => {
    let item: Scraper;

    before(async () => {
        item = await scrape('13210');
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
});