import { Getter } from './getter.type'

export const getIcon: Getter<'icon'> = ({ $ }) => {
    const html = $('script[type="application/ld+json"]').html()
    return typeof html === 'string' ? JSON.parse(html).image : ''
}