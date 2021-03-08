import { decomposeShortURL } from '@helpers/utils/short-url'
import { App } from '@typings/namespaces'
import { Getter } from './getters.types'

export const getBelongingItems: Getter<
    App.Refs.Item[]
> = ({ $ }) => {
    const elements = $('hr.hr_long')
        .parent().children().toArray()
    const items: App.Refs.Item[] = []
    for (let i = 0; i < elements.length; i++) {
        const elem = elements[i]
        if (elem.type !== 'tag' || elem.tagName !== 'div')
            continue
        const node = $(elem)
        const icon = node.find('img').attr('src') as string
        const url = node.find('a').attr('href') as string
        const { id } = decomposeShortURL(url)
        const name = $(elements[i+1]).text()
        items.push({ id, type: App.Entities.Types.Item, icon, name })
    }
    return items
}