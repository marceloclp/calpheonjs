import { Query, QueryModes } from '@core/query'
import { Getter } from './getter.type'

const Lookup: Record<string, QueryModes> = {
    'questreward': QueryModes.QuestReward,
    'mproductofrecipe': QueryModes.ProcessingProduct,
    'mrecipematerial': QueryModes.ProcessingMaterial,
    'designmaterial': QueryModes.DesignMaterial,
    'productofdesign': QueryModes.DesignProduct,
    'usedinpuzzle': QueryModes.PatternMaterial,
    'usedasgift': QueryModes.GiftMaterial,
    'recipematerial': QueryModes.RecipeMaterial,
    'productofrecipe': QueryModes.RecipeProduct,
    'specialsoldbynpc': QueryModes.SoldByNPC,
    'exchangeableitems': QueryModes.ExchangeList,
    'droppedbynpc': QueryModes.DroppedByNPC,
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
        return { ...obj, [mode]: () => Query(mode, id) }
    }, {})
}
