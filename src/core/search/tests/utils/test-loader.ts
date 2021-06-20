import { BDO } from '@typings/namespaces'
import { Builder } from '@core/search/builder/builder'
import { Entity } from '@core/search/typings'
import { buildCodexURL } from '@helpers/utils/build-codex-url'
import { decomposeFileKey } from './decompose-file-key'
import { TestStore } from './test-store'

export class TestLoader {
    private readonly store = new TestStore()
    private keys = this.store.getKeys()

    filterByTerm(term: string) {
        this.keys = this.keys.filter(key => {
            return decomposeFileKey(key).term === term
        })
        return this
    }

    buildTests() {
        type R = [string, [string, Entity, Entity][]]
        return this.keys.map(key => {
            const { term } = decomposeFileKey(key)
            const name = TestLoader.buildGroupName({ term })
            return [name, this.buildGroupTests(key)] as R
        })
    }

    private buildGroupTests(fileKey: string) {
        type R = [string, Entity, Entity]
        const results = this.store
            .getResponseForFile(fileKey)
            .map(result => Builder(result))
        return this.store.getMockForFile(fileKey).map((expected, i) => {
            const name = TestLoader.buildTestName(expected)
            return [name, expected, results[i]] as R
        })
    }

    static buildGroupName({ term }: { term: string }) {
        return `Term: ${term}`
    }
    static buildTestName({ type, id }: { type: BDO.Entities.Types, id: string }) {
        return buildCodexURL({ type, id })
    }
}