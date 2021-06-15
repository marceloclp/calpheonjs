import { Getter } from './getter.type'

export const getNameAlt: Getter<'nameAlternative'> = ({ $ }) => {
    return $('.item_sub_title').text() || undefined
}
