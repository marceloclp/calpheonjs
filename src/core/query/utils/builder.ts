import { App } from '@typings/namespaces'
import { Defined } from '@typings/utilities'
import { Entities, GetResponseData, QueryableEntity } from '@core/query/typings'

interface Args {
    readonly locale: App.Locales
}
type BuilderFn<T extends QueryableEntity> =
    (data: GetResponseData<T>, args: Args) => Defined<Entities.Select<T>>

export class Builder<T extends QueryableEntity> {
    constructor(
        private builder: BuilderFn<T>
    ) {}

    static forType<NT extends QueryableEntity>(builder: BuilderFn<NT>) {
        return new Builder<NT>(builder)
    }

    build(data: GetResponseData<T>, args: Args) {
        return this.builder(data, args) as unknown as Entities.Select<T>
    }
}