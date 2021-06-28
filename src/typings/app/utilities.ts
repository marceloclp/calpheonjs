import { Locales } from './locales'

export type LocaleRecord<T> = Record<Locales, Record<string, T>>
