import { App } from "../../shared/typings";

/**
 * Decomposes a BDOCodex short url into locale, type and id.
 * 
 * @param shortUrl - The url to be decomposed.
 */
export const decomposeShortURL = (shortUrl: string) => {
    const args = shortUrl.split('/').filter(e => e);
    return {
        locale: args[0] as App.Locales,
        type: args[1],
        id: args.slice(2).join('/'),
    }
}

/**
 * Composes a BDO short url.
 * 
 * @param id     - The entity id.
 * @param type   - The entity type.
 * @param locale - An accepted locale.
 */
export const composeShortURL = (
    id: string,
    type: string,
    locale: App.Locales.US,
): string => {
    if (!id || !type || !locale)
        return undefined as unknown as string;
    return '/' + [locale, type, id].join('/') + '/'
}