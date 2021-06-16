import fetch from 'node-fetch'
import { Builder } from './builders'
import { Modes, Entities, Selectors } from './typings'
import { composeQueryURL } from './utils/compose-query-url'
export { Modes, Entities, Selectors } from './typings'

export async function QueryFn<M extends Modes>(mode: M, id: string) {
    const url = composeQueryURL({ mode, id })
    const data = await fetch(url)
        .then(response => response.text())
        .then(data => JSON.parse(data))
    return Builder<M>(mode)(data)
}
