import { BDO } from '@typings/namespaces'
import { Matcher } from '@helpers/utils/matcher'
import { ShortURL } from '@helpers/utils/short-url'
import { cleanStr } from '@helpers/utils/clean-str'
import { createRef } from '@helpers/utils/create-ref'
import { Getter } from './getter.type'

export const getPersonalSkill: Getter<'personalSkill'> = ({ $ }) => {
    const matcher = Matcher.initWith('Personal skill:')
    const elements = $('.outer.item_info td')
        .contents().toArray()
    let idx = elements.findIndex(elem => {
        return !!matcher.findIn($(elem).text())
    })
    if (idx === -1)
        return
    while (idx < elements.length) {
        const elem = elements[idx]
        if (elem.type === 'tag' && elem.tagName === 'table')
            break
        idx++
    }
    const anchors = $(elements[idx]).find('a').toArray()
    // First anchor refers to the icon, while second anchor contains
    // the name and effect.
    const first = $(anchors[0]), second = $(anchors[1])
    const url = first.attr('href')
    if (!url)
        return
    const { type, id } = ShortURL.decompose(url)
    if (type !== BDO.Entities.Types.WorkerSkill)
        return
    const texts = second.contents().toArray()
        .filter(elem => elem.type === 'text')

    return createRef({
        type,
        id,
        icon: first.find('img').attr('src'),
        name: cleanStr($(texts[0]).text()),
    }, { effect: cleanStr($(texts[1]).text()) })
}
