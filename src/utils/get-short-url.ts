import { App } from "../typings";

export const getShortURL = (
    id: string,
    type: App.EntityTypes,
    locale: App.Locales.US,
): string => {
    if (!id || !type || !locale)
        return undefined as unknown as string;
    return '/' + [locale, type, id].join('/') + '/'
}