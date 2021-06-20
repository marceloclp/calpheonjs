import fetch from 'node-fetch'
import { BDOCodex } from '@typings/namespaces'
import { Builder } from './builder/builder'
import { buildSearchURL } from './utils/build-search-url'

export async function Search(term: string) {
    const url = buildSearchURL({ term })
    const data: BDOCodex.Search.Result[] = await fetch(url)
        .then(response => response.text())
        .then(data => JSON.parse(data))
    return data.map(result => Builder(result))
}