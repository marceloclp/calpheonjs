import { App } from '@typings/namespaces'
import { GetterArgs } from '../getters/getters.types'
import * as Getters from '../getters'
import { Builder } from './builders.types'

export const buildKnowledge: Builder<
    App.Entities.Types.Knowledge
> = ({ $, id, type, locale }) => {
    const args: GetterArgs = { $, id, type, locale }

    const entity: App.Entities.Knowledge = {
        id,
        type: App.Entities.Types.Knowledge,
        icon: Getters.getIconURL(args),
        name: Getters.getName(args),
        description: Getters.getDescription(args),
        group: Getters.Knowledge.getGroup(args),
        obtainedFrom: Getters.getObtainedFrom(args),
    }

   return entity
}
