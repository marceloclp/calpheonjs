import { App, BDOCodex } from '@typings/namespaces'
import { getQueryMode } from '@core/query/utils/get-query-mode'

export function decomposeFileKey(fileKey: string) {
    const [as, type, fileId, locale] = fileKey.split('.') as [
        BDOCodex.Query.As,
        BDOCodex.Query.Types,
        string,
        App.Locales,
    ]
    return {
        locale,
        id: fileId.replace(/-/g, '/'),
        mode: getQueryMode({ as, type }),
    }
}