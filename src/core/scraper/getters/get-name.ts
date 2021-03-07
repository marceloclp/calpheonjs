import { cleanStr } from '@helpers/utils/clean-str'
import { Getter } from './getters.types'

export const getName: Getter<string> = ({ $ }) => {
    return cleanStr($('.item_title').text())
}
