import { describe } from "mocha";
import { expect } from "chai";
import { Scraper } from "../../../src/scrapers/scraper";
import { scrapeMock as scrape } from "../../utils/scrape-mock";

describe('https://bdocodex.com/us/item/9746/', () => {
    let item: Scraper;

    before(async () => {
        item = await scrape('9746');
    });

    it('#url', () => {
        expect(item.url).to.equal('https://bdocodex.com/us/item/9746/');
    });
    
    it('#id', () => {
        expect(item.id).to.equal('9746');
    });
    
    it('#locale', () => {
        expect(item.locale).to.equal('us');
    });

    it('#type', () => {
        expect(item.type).to.equal('item');
    });

    it('#icon', () => {
        expect(item.icon).to.equal('https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00009746.png');
    });

    it('#name', () => {
        expect(item.name).to.equal('Abyssal Brass Ingot');
    });

    it('#name_alt', () => {
        expect(item.name_alt).to.equal('심연의 황동 주괴');
    });

    it('#category', () => {
        expect(item.category).to.equal('Crafting Materials');
    });

    it('#weight', () => {
        expect(item.weight).to.equal('0.10 LT');
    });

    it('#grade', () => {
        expect(item.grade).to.equal(3);
    });

    it('#description', () => {
        expect(item.description).to.equal(`A Brass Ingot imbued with mystical powers. An unknown force seems to seep out from deep within. The item is used to create Hughol's Weapon.`);
    });

    it('#prices', () => {
        expect(item.prices).to.eql({ buy: 124626, sell: 12400 });
    });
});