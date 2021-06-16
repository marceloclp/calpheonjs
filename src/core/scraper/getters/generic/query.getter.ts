import QueryFn, { Query } from '@core/query'
import { Getter } from './getter.type'

const Lookup: Record<string, Query.Modes> = {
    'questreward': Query.Modes.QuestReward,
    'mproductofrecipe': Query.Modes.ProcessingProduct,
    'mrecipematerial': Query.Modes.ProcessingMaterial,
    'designmaterial': Query.Modes.DesignMaterial,
    'productofdesign': Query.Modes.DesignProduct,
    'usedinpuzzle': Query.Modes.PatternMaterial,
    'usedasgift': Query.Modes.GiftMaterial,
    'recipematerial': Query.Modes.RecipeMaterial,
    'productofrecipe': Query.Modes.RecipeProduct,
    'specialsoldbynpc': Query.Modes.SoldByNPC,
    'exchangeableitems': Query.Modes.ExchangeList,
    'droppedbynpc': Query.Modes.DroppedByNPC,
    // 'droppedbynpcuser': Query.Modes.DroppedByNPC,
}

export const getQuery: Getter<'query'> = ({ $, id }) => {
    return $('[data-toggle="tab"]').toArray().reduce((obj, elem) => {
        const text = $(elem).attr('href')
        if (!text)
            return obj
        const tabName = text.slice(6)
        if (!(tabName in Lookup))
            return obj
        const mode = Lookup[tabName]
        return { ...obj, [mode]: () => QueryFn(mode, id) }
    }, {})
}
