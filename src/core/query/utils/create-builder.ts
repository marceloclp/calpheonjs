import { Defined, Diff } from '@typings/utilities'
import { Entities, Modes, Selectors } from '../typings'
import { getReturnedAs } from './get-returned-as'

export class CreateBuilder {
    constructor(
        private lookup: Record<string, (data: any) => any> = {}
    ) {}

    static with(
        builder: (data: Selectors.Response) =>
            Defined<Omit<Entities.Generic, 'as' | 'type'>>
    ) { return new CreateBuilder({ generic: builder }) }

    as<NA extends Entities.As>(
        _as: NA,
        builder: (data: Selectors.Response<NA>) =>
            & Defined<Diff<Selectors.Entity<NA>, Entities.Generic>>
            & { type: Selectors.BDOType<NA> }
    ) {
        if (_as in this.lookup)
            throw new Error(`${_as} is being registered twice.`)
        this.lookup[_as] = builder
        return this
    }

    create() {
        return <M extends Modes>(mode: M) => {
            const as = getReturnedAs(mode)
            if (!(as in this.lookup))
                throw new Error(`${as} is not supported by the builders.`)
            return (data: Selectors.Response<typeof as>) => ({
                ...this.lookup.generic(data),
                ...this.lookup[as](data),
                as,
            }) as Selectors.Entity<typeof as>
        }
    }
}