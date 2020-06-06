import fs from "fs";
import cheerio from "cheerio";
import { join } from "path";
import { defaultOptions } from "../../src/core/scrape";
import { Scraper } from "../../src/core/scrapers/scraper";
import ScrapeFactory from "../../src/core/scrapers";
import { fetch } from "../../src/core/fetch";

export const scrapeMock = async (id: string, options = defaultOptions): Promise<Scraper> => {
    const url = 'https://' + [
        options.baseUrl,
        options.locale,
        options.type,
        id
    ].join('/') + '/';
    const path = join(__dirname, '../data/', [
        options.locale,
        options.type,
        id
    ].join('-') + '.txt');

    let raw: string;
    if (!fs.existsSync(path)) {
        raw = await fetch(url);
        fs.writeFileSync(path, raw);
    } else {
        raw = fs.readFileSync(path, { encoding: 'utf-8' });
    }
    const $ = cheerio.load(raw);

    return ScrapeFactory(
        url,
        id,
        options.baseUrl,
        options.locale,
        options.type,
        $,
    );
}