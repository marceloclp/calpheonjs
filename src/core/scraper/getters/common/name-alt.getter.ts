import { Getter } from '@core/scraper/typings'

export const getNameAlt: Getter<string | undefined> = ({ $ }) => {
    return $('.item_sub_title').text() || undefined
}
