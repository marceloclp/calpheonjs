import { BDO } from '@typings/namespaces'
import { Matcher } from '@helpers/utils/matcher'
import { ShortURL } from '@helpers/utils/short-url'
import { createRef } from '@helpers/utils/create-ref'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

export const getDroppedKnowledge: Getter<'knowledge'> = ({ $ }) => {
    let matcher = Matcher.initWith('Knowledge drop chance:')
    const dcElement = $('.titles_cell').contents().toArray()
        .find(elem => {
            if (matcher.lastMatch)
                return elem.type === 'tag' && elem.tagName === 'b'
            matcher.findIn($(elem).text())
        })

    // To simplify things, we will assume the HTML structure is consistent.
    // This may not always be the case, but this can be improved later.
    matcher = Matcher.initWith('Knowledge:')
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
    const { type, id } = ShortURL.decompose(url)
    if (type !== BDO.Entities.Types.Knowledge)
        return
    return createRef({
        type,
        id,
        name: anchor.text(),
        icon: $(elements[idx+2]).find('img').attr('src'),
    }, { dropChance: parseNumber($(dcElement).text()) || undefined })
}
