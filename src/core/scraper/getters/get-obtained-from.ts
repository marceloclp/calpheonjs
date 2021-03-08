import { LocaleMatcher } from '@helpers/factory/locale-matcher'
import { App } from '@typings/namespaces'
import { cleanStr } from '@helpers/utils/clean-str'
import { decomposeShortURL } from '@helpers/utils/short-url'
import { Getter } from './getters.types'

const ObtainedFromDict = {
    [App.Locales.US]: ['Obtained from'],
}

export const getObtainedFrom: Getter<
    App.Refs.Ref | undefined
> = ({ $, locale }) => {
    const matcher = LocaleMatcher(ObtainedFromDict, locale)
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
    const img = anchor.parent().find('img')
    const { type, id } = decomposeShortURL(anchor.attr('href') as string)

    return {
        id,
        type,
        name: cleanStr(anchor.text()),
        icon: img.attr('src') as string,
    }
}