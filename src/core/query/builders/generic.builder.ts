import { Builder } from '@core/query/utils/builder'
import * as Getters from '@core/query/getters'

export const Generic = Builder
    .init(data => ({
        id: Getters.getId(data),
        type: undefined,
        name: Getters.getName(data),
        icon: Getters.getIcon(data),
    }))