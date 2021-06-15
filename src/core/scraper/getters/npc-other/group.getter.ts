import { Chars } from '@typings/utilities'
import { Getter } from './getter.type'

export const getGroup: Getter<'group'> = ({ $ }) => {
    const element = $('.titles_cell').contents().toArray()
        .find(elem => $(elem).text().indexOf(Chars.SignLess) >= 0)
    if (!element) return
    const text = $(element).text()
    return text.substring(
        text.indexOf(Chars.SignLess) + 1,
        text.indexOf(Chars.SignGreater),
    )
}
