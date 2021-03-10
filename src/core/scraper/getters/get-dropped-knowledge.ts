import { App } from '@typings/namespaces'
import { Matcher } from '@helpers/factory/matcher'
import { decomposeShortURL } from '@helpers/utils/short-url'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getters.types'

export const getDroppedKnowledge: Getter<
    App.Refs.Knowledge<{ dropChance?: number }> | undefined
> = ({ $ }) => {
    let matcher = Matcher('Knowledge drop chance:')
    const dcElement = $('.titles_cell').contents().toArray()
        .find(elem => {
            if (matcher.lastMatch)
                return elem.type === 'tag' && elem.tagName === 'b'
            matcher.findIn($(elem).text())
        })

    const ref: Partial<App.Refs.Knowledge<{ dropChance?: number}>> = {
        type: App.Entities.Types.Knowledge,
        dropChance: parseNumber($(dcElement).text()) || undefined
    }

    // To simplify things, we will assume the HTML structure is consistent.
    // This may not always be the case, but this can be improved later.
    matcher = Matcher('Knowledge:')
    const rowElement = $('.outer.item_info td').toArray().find(elem => {
        return !!matcher.findIn($(elem).text())
    })
    const elements = $(rowElement).contents().toArray()
    const idx = elements.findIndex(elem => {
        return !!matcher.findIn($(elem).text())
    })
    
    const anchor = $(elements[idx+4])
    const url = anchor.attr('href')
    if (!url) return

    ref.icon = $(elements[idx+2]).find('img').attr('src') as string
    ref.name = anchor.text()
    ref.id = decomposeShortURL(url).id

    if (ref.id) return ref as App.Refs.Knowledge<{ dropChance?: number }>
}
