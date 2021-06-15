import { Defined, Diff } from '@typings/utilities'
import { Entities, ScrapableEntity, Selectors } from '../typings'
import { GetterArgs } from '../getters/getter-args.interface'
import { getReturnedAs } from './get-returned-as'

export class CreateBuilder<A extends Entities.As> {
    constructor(
        private lookup: Record<string, (data: GetterArgs) => any> = {}
    ) {}

    static with(
        builder: (args: GetterArgs) => Defined<Entities.Generic>
    ) { return new CreateBuilder({ generic: builder }) }

    as<NA extends Entities.As>(
        _as: NA,
        builder: (args: GetterArgs) =>
            & Defined<Diff<Selectors.Entity<NA>, Entities.Generic>>
            & { as: Entities.As }
    ) {
        if (_as in this.lookup)
            throw new Error(`${_as} is being registered twice.`)
        this.lookup[_as] = builder
        return this as unknown as CreateBuilder<NA>
    }

    extend<NA extends Entities.As>(
        _as: NA,
        builder: (args: GetterArgs) =>
            Defined<Diff<Selectors.Entity<NA>, Selectors.Entity<A>>>
    ) {
        if (_as in this.lookup)
            throw new Error(`${_as} is being registered twice.`)
        this.lookup[_as] = builder
        return this
    }

    create() {
        return <T extends ScrapableEntity>(type: T) => {
            const _as = getReturnedAs(type)
            if (!(_as in this.lookup))
                throw new Error(`${_as} is not supported by the builders.`)
            return (args: GetterArgs): Selectors.Entity<typeof _as> => {
                const entity = {
                    ...this.lookup.generic(args),
                    ...this.lookup[_as](args),
                }
                return _as !== entity.as
                    ? { ...entity, ...this.lookup[entity.as](args) }
                    : entity
            }
        }
    }
}