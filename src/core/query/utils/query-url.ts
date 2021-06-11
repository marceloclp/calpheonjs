import { App, BDOCodex } from '@typings/namespaces'
import { BaseUrl, DefaultLocale } from '@config/constants'
import { Modes } from '@core/query/typings'
import { ModeLookup } from './mode.lookup'

interface QueryURLDescriptor {
    readonly id: string
    readonly mode: Modes
    readonly locale?: App.Locales
}

export class QueryURL {
    private static factory = (key: string, params: BDOCodex.Query.Descriptor) =>
        (id: string) => ({ ...params, [key]: id })

    /**
     * Queries use an inconsistent naming for the entity id that is being queried.
     * Sometimes it's reffered to as `item_id`, other times as `id`.
     */
    private static keyLookup: Record<Modes, string> = {
        [Modes.QuestReward]: 'id',
        [Modes.RecipeMaterial]: 'item_id',
        [Modes.RecipeProduct]: 'item_id',
        [Modes.ProcessingMaterial]: 'item_id',
        [Modes.ProcessingProduct]: 'item_id',
        [Modes.DesignMaterial]: 'item_id',
        [Modes.DesignProduct]: 'item_id',
    }

    private static lookup = Object
        .entries(QueryURL.keyLookup)
        .reduce((obj, [mode, key]) => {
            const params = ModeLookup
                .toCodexDescriptor(mode as Modes)
            return { ...obj, [mode]: QueryURL.factory(key, params) }
        }, {} as Record<Modes, (id: string) => {}>)

    static compose({ id, mode, locale = DefaultLocale }: QueryURLDescriptor) {
        if (!(mode in QueryURL.lookup)) {
            throw new Error(
                `Attempted to compose a query url with an invalid query mode ${mode}. ` +
                `Please report this error by opening an issue on the GitHub page.`
            )
        }
        return BaseUrl + '/query.php?' + Object
            .entries({ ...QueryURL.lookup[mode](id), l: locale })
            .reduce((str, [key, value]) => {
                return value ? `${str}&${key}=${value}` : str
            }, '')
    }
}