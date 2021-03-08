import { App } from '@typings/namespaces'
import { GetterArgs } from '../getters/getters.types'
import * as Getters from '../getters'
import { Builder } from './builders.types'

export const buildKnowledge: Builder<
    App.Entities.Knowledge
> = ({ $, id, type, locale }) => {
    const getterArgs: GetterArgs = { $, id, type, locale }

    const knowledge: App.Entities.Knowledge = {
        id,
        type: App.Entities.Types.Knowledge,
        icon: Getters.getIconURL(getterArgs),
        name: Getters.getName(getterArgs),
        nameAlternative: Getters.getNameAlt(getterArgs),
        description: Getters.getDescription(getterArgs),
        group: Getters.getGroup(getterArgs),
        obtainedFrom: Getters.getObtainedFrom(getterArgs),
    }

    return knowledge
}
