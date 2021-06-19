import { App } from '@typings/namespaces'

export class LocaleLookup<T extends Object> {
    private readonly lookup: Partial<App.LocaleRecord<T[keyof T]>> = {}

    constructor(private readonly type: T) {}

    forLocale(locale: App.Locales, lookupFn: (arg: T) => Record<string, T[keyof T]>): this {
        if (locale in this.lookup) {
            throw new Error(`Locale ${locale} is being registered twice.`)
        }
        this.lookup[locale] = lookupFn(this.type)
        return this
    }

    init(locale: App.Locales) {
        if (!(locale in this.lookup))
            throw new Error(`Missing lookup object for locale ${locale}.`)
        const lookup = this.lookup[locale] as Record<string, T[keyof T]>
        return {
            has: (key: string) => key in lookup,
            get: (key: string) => lookup[key],
        }
    }
}