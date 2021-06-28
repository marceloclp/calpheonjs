import { BDO } from '@typings/namespaces'
import { Matcher } from '@helpers/utils/matcher'
import { ShortURL } from '@helpers/utils/short-url'
import { createRef } from '@helpers/utils/create-ref'
import { cleanStr } from '@helpers/utils/clean-str'
import { Getter } from './getter.type'

export const getObtainedFrom: Getter<'obtainedFrom'> = ({ $ }) => {
    const matcher = Matcher.initWith('Obtained from')
    const elements = $('.outer.item_info td').contents().toArray()

    let idx = elements.findIndex(elem => {
        const text = $(elem).text()
        return !!matcher.findIn(text)
    })
    if (idx === -1) return
    for (idx = idx + 1; idx < elements.length; idx++) {
        const elem = elements[idx]
        if (elem.type === 'tag' && elem.tagName === 'a')
            break
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
        name: cleanStr(anchor.text()),
        icon: anchor.parent().find('img').attr('src'),
    })
}
