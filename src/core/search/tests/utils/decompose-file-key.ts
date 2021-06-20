import { App } from '@typings/namespaces'

export function decomposeFileKey(fileKey: string) {
    const [term, locale] = fileKey.split('.')
    return { locale: locale as App.Locales, term }
}