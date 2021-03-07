import { App } from '@typings/namespaces'

/**
 * Recipe, design or processing material/product.
 */
export type Material = (App.Refs.Item | App.Refs.MaterialGroup) & {
    amount: number
}