import { describe } from "mocha";
import { expect } from "chai";
import { Scraper } from "../../../src/scrapers/scraper";
import { scrapeMock as scrape } from "../../utils/scrape-mock";
import { App } from "../../../src/typings/app";

describe('https://bdocodex.com/us/item/9601/', () => {
    let item: Scraper;

    before(async () => {
        item = await scrape('9601');
    });

    it('#instanceOf', () => {
        expect(item).to.be.instanceOf(Scraper);
    });

    it('#url', () => {
        expect(item.url).to.equal('https://bdocodex.com/us/item/9601/');
    });
    
    it('#id', () => {
        expect(item.id).to.equal('9601');
    });
    
    it('#locale', () => {
        expect(item.locale).to.equal('us');
    });

    it('#type', () => {
        expect(item.type).to.equal('item');
    });

    it('#icon', () => {
        expect(item.icon).to.equal('https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00009601.png');
    });

    it('#name', () => {
        expect(item.name).to.equal('Balenos Meal');
    });

    it('#name_alt', () => {
        expect(item.name_alt).to.equal('발레노스 정식');
    });

    it('#category', () => {
        expect(item.category).to.equal('Consumable');
    });

    it('#category_id', () => {
        expect(item.category_id).to.equal(App.Categories.CONSUMABLE);
    });

    it('#weight', () => {
        expect(item.weight).to.equal('0.10 LT');
    });

    it('#grade', () => {
        expect(item.grade).to.equal(3);
    });

    it('#description', () => {
        expect(item.description).to.equal('The flavors of Balenos put into one dish.');
    });

    it('#prices', () => {
        expect(item.prices).to.eql({ buy: 115500, sell: 4620 });
    });
});