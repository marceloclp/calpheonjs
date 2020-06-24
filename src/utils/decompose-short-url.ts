import { App } from "../typings";
import { Scrapers } from "../scraper";

export const decomposeShortURL = (shortUrl: string) => {
    const args = shortUrl.split('/').filter(e => e);
    return {
        locale: args[0] as App.Locales,
        type: args[1] as Scrapers.EntityTypes,
        id: args.slice(2).join('/'),
    }
}