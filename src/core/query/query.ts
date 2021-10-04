import fetch from 'node-fetch'
import { Builder } from './builders'
import { Modes } from './typings'
import { buildQueryURL } from './utils/build-query-url'
export { Modes, Entities, Selectors } from './typings'

export async function Query<M extends Modes>(mode: M, id: string) {
    const url = buildQueryURL({ mode, id })
    const data = await fetch(url)
        .then(response => response.text())
        .then(data => JSON.parse(data.trim()))
    return Builder<M>(mode)(data)
}
