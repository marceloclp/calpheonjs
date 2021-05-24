import * as Getters from '@core/scraper/getters'
import { Builder } from '@core/scraper/utils/builder'

export const Generic = Builder
    .init(args => ({
        id: args.id,
        type: args.type,
        subType: undefined,
        icon: Getters.getIcon(args),
        name: Getters.getName(args),
        nameAlternative: Getters.getNameAlt(args),
        description: Getters.getDescription(args),
    }))