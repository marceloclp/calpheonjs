import { BDO } from '@typings/namespaces'
import { Matcher } from '@helpers/utils/matcher'
import { ShortURL } from '@helpers/utils/short-url'
import { cleanStr } from '@helpers/utils/clean-str'
import { createRef } from '@helpers/utils/create-ref'
import { Getter } from './getter.type'

export const getStartNPC: Getter<'startNPC'> = ({ $ }) => {
    const matcher = Matcher.initWith('Start NPC:')
    const elements = $('.outer.item_info td').contents().toArray()

    let idx = elements.findIndex(elem => {
        return !!matcher.findIn($(elem).text())
    })
    if (!matcher.lastMatch)
        return
    if (elements[idx+2].type === 'tag')
        if ((elements[idx+2] as cheerio.TagElement).tagName === 'b')
            return
    while (idx < elements.length) {
        const elem = elements[idx]
        if (elem.type === 'tag' && elem.tagName === 'a')
            break
        idx++
    }

    const anchor = $(elements[idx])
    const url = anchor.attr('href')
    if (!url)
        return
    const { type, id } = ShortURL.decompose(url)
    if (type !== BDO.Entities.Types.NPC)
        return
    return createRef({
        id,
        type,
        name: cleanStr($(elements[idx+2]).text()),
        icon: anchor.find('img').attr('src'),
    })
}
