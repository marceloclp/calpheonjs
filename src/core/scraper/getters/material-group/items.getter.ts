import { BDO } from '@typings/namespaces'
import { ShortURL } from '@helpers/utils/short-url'
import { createRef } from '@helpers/utils/create-ref'
import { Entities } from '../../typings'
import { Getter } from './getter.type'

export const getItems: Getter<'items'> = ({ $ }) => {
    const elements = $('hr.hr_long')
        .parent().children().toArray()
    const items: Entities.MaterialGroup['items'] = []
    for (let i = 0; i < elements.length; i++) {
        const elem = elements[i]
        if (elem.type !== 'tag' || elem.tagName !== 'div')
            continue
        const node = $(elem)
        const url = node.find('a').attr('href')
        if (!url) continue

        const { type, id } = ShortURL.decompose(url)
        if (type !== BDO.Entities.Types.Item) continue

        items.push(createRef({
            type,
            id,
            icon: node.find('img').attr('src'),
            name: $(elements[i+1]).text(),
        }))
    }
    return items
}
