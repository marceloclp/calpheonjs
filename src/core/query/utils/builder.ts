import { Defined, Diff } from '@typings/utilities'
import { QueryableEntity, Selectors } from '@core/query/typings'

export class Builder<T extends QueryableEntity> {
    constructor(
        private builder: (data: Selectors.Data<T>) => Selectors.Entity<T>
    ) {}

    static init(
        builder: (data: Selectors.Data) => Defined<Selectors.Entity>
    ) {
        return new Builder<QueryableEntity>(builder as any)
    }

    forType<NT extends QueryableEntity>(
        builder: (data: Selectors.Data<NT>) =>
            & { type: NT }
            & Defined<Diff<Selectors.Entity<NT>, Selectors.Entity<T>>>
    ) {
        const newBuilder = (data: Selectors.Data<NT>) => ({
            ...this.builder(data as unknown as Selectors.Data<T>),
            ...builder(data),
        }) as unknown as Selectors.Entity<NT>
        return new Builder<NT>(newBuilder)
    }

    build(data: Selectors.Data<T>) {
        return this.builder(data)
    }
}