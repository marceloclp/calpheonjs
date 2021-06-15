import { cleanStr } from '@helpers/utils/clean-str'
import { Getter } from './getter.type'

export const getName: Getter<'name'> = ({ $ }) => {
    return cleanStr($('.item_title').text())
}
