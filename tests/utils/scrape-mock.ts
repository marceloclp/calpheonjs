import fs from "fs";
import cheerio from "cheerio";
import { join } from "path";
import { defaultOptions, scrape } from "../../src/utils/functions/scrape";
import { EntityTypes } from "../../src/enums";
import { ItemScraper } from "../../src/scrapers/item.scraper";
import { Scraper } from "../../src/scrapers/scraper";

export const scrapeMock = async (id: string, options = defaultOptions): Promise<Scraper> => {
    const path = join(__dirname, '../data/', [
        options.locale,
        options.type,
        id
    ].join('-') + '.txt');

    if (!fs.existsSync(path)) {
        const parser = await scrape(id, options);
        fs.writeFileSync(path, (parser as any).$.html());
    }

    const data = fs.readFileSync(path, { encoding: 'utf-8' });
    const $ = cheerio.load(data);
    
    let scraper;
    switch (options.type) {
        case EntityTypes.ITEM:
            scraper = ItemScraper;
            break;
        default:
            scraper = Scraper;
            break;
    }

    return new scraper(
        'https://' + [
            options.baseUrl,
            options.locale,
            options.type,
            id
        ].join('/') + '/',
        id,
        options.baseUrl,
        options.locale,
        options.type,
        $,
    );
}