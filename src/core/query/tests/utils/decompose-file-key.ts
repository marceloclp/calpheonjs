import { App, BDOCodex } from '@typings/namespaces'
import { BuildableEntity, Modes } from '@core/query/typings'
import { ModeLookup } from '@core/query/utils/mode.lookup'
import { getReturnType } from '@core/query/utils/get-return-type'

interface FileKeyArguments {
    readonly id: string
    readonly mode: Modes
    readonly returns: BuildableEntity
    readonly locale: App.Locales
}

export const decomposeFileKey = (fileKey: string): FileKeyArguments => {
    const [a, type, fileId, locale] = fileKey.split('.') as [
        BDOCodex.Query.As,
        BDOCodex.Query.Types,
        string,
        App.Locales,
    ]
    const mode = ModeLookup
        .toQueryType({ a, type })
    return {
        id: fileId.replace(/-/g, '/'),
        mode,
        returns: getReturnType(mode),
        locale,
    }
}