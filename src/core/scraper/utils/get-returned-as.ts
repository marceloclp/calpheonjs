import { ScrapableEntity } from '../typings'
import { BDO_TYPE_TO_SCRAPER_TYPE } from '../config/constants'

export function getReturnedAs<T extends ScrapableEntity>(type: T) {
    if (type in BDO_TYPE_TO_SCRAPER_TYPE)
        return BDO_TYPE_TO_SCRAPER_TYPE[type]
    throw new Error(
        `The entity type ${type} is not yet scrapable. If you would like to ` +
        `request support for this type of entity, please report this error by ` +
        `opening an issue on the GitHub page.`
    )
}