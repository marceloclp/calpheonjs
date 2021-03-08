import { App, BDOCodex } from '@typings/namespaces'
import { LocaleMatcher } from '@helpers/factory/locale-matcher'
import { decomposeShortURL } from '@helpers/utils/short-url'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getters.types'

const ProductsDict = {
    [App.Locales.US]: ['Crafting Result'],
}

export const getProducts: Getter<App.Shared.Material[]> = ({ $, locale }) => {
    const matcher = LocaleMatcher(ProductsDict, locale)

    const row = $('.outer.item_info td').toArray().find(element => {
        const text = $(element).text()
        return !!matcher.findIn(text)
    })
    if (!row || !matcher.lastMatch) return []

    return $(row).find('img').toArray().map(element => {
        const parent = $(element.parent.parent)
        const shortUrl = parent.attr('href')
        const { type, id } = decomposeShortURL(shortUrl as string)

        const material: App.Shared.Material = {
            type: type === BDOCodex.Entities.Types.Item
                ? App.Entities.Types.Item
                : App.Entities.Types.MaterialGroup,
            id,
            name: $(row).find(`a[href="${shortUrl}"]`).last().text(),
            icon: $(element).attr('src') as string,
            amount: parseNumber(parent.text(), 1),
        }
        return material
    })
}