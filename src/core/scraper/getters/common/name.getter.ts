import { Getter } from '@core/scraper/typings'
import { cleanStr } from '@helpers/utils/clean-str'

export const getName: Getter<string> = ({ $ }) => {
    return cleanStr($('.item_title').text())
}
