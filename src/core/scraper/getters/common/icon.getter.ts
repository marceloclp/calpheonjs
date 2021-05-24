import { Getter } from '@core/scraper/typings'

export const getIcon: Getter<string> = ({ $ }) => {
    const html = $('script[type="application/ld+json"]').html()
    return typeof html === 'string' ? JSON.parse(html).image : ''
}