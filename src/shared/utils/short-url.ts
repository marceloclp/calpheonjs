import { App } from "../../shared/typings";

export const decomposeShortURL = (shortUrl: string) => {
    const args = shortUrl.split('/').filter(e => e);
    return {
        locale: args[0] as App.Locales,
        type: args[1],
        id: args.slice(2).join('/'),
    }
}

export const composeShortURL = (
    id: string,
    type: string,
    locale: App.Locales.US,
): string => {
    if (!id || !type || !locale)
        return undefined as unknown as string;
    return '/' + [locale, type, id].join('/') + '/'
}