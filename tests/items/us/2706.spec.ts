import { describe } from "mocha";
import { expect } from "chai";
import { Scraper } from "../../../src/scrapers/scraper";
import { scrapeMock as scrape } from "../../utils/scrape-mock";
import { Categories } from "../../../src/enums";

describe('https://bdocodex.com/us/item/2706/', () => {
    let item: Scraper;

    before(async () => {
        item = await scrape('2706');
    });

    it('#url', () => {
        expect(item.url).to.equal('https://bdocodex.com/us/item/2706/');
    });
    
    it('#id', () => {
        expect(item.id).to.equal('2706');
    });
    
    it('#locale', () => {
        expect(item.locale).to.equal('us');
    });

    it('#type', () => {
        expect(item.type).to.equal('item');
    });

    it('#icon', () => {
        expect(item.icon).to.equal('https://bdocodex.com/items/new_icon/03_etc/06_housing/inhouse_f_dff_bed_01.png');
    });

    it('#name', () => {
        expect(item.name).to.equal('Calpheon Handcrafted Bed');
    });

    it('#name_alt', () => {
        expect(item.name_alt).to.equal('칼페온산 수제 침대');
    });

    it('#category', () => {
        expect(item.category).to.equal('Installable Object');
    });

    it('#category_id', () => {
        expect(item.category_id).to.equal(Categories.INSTALLABLE_OBJECT);
    });

    it('#weight', () => {
        expect(item.weight).to.equal('42.00 LT');
    });

    it('#grade', () => {
        expect(item.grade).to.equal(1);
    });

    it('#description', () => {
        expect(item.description).to.equal('A bed made of Calpheonian birch with fancy decorations. Decorative carvings were all handcrafted at Calpheon Workshop. Lie down on it to recover Energy faster.');
    });

    it('#prices', () => {
        expect(item.prices).to.eql({ buy: 58134, sell: 17440 });
    });
});