import { Defined, Diff } from '@typings/utilities'
import { QueryableEntity, Selectors } from '@core/query/typings'

export class Builder<T extends QueryableEntity> {
    constructor(
        private builder: (data: Selectors.Response<T>) => Selectors.ReturnEntity<T>
    ) {}

    static init(
        builder: (data: Selectors.Response) => Defined<Selectors.ReturnEntity>
    ) {
        return new Builder<QueryableEntity>(builder as any)
    }

    forType<NT extends QueryableEntity>(
        builder: (data: Selectors.Response<NT>) =>
            & { type: NT }
            & Defined<Diff<Selectors.ReturnEntity<NT>, Selectors.ReturnEntity<T>>>
    ) {
        const newBuilder = (data: Selectors.Response<NT>) => ({
            ...this.builder(data as unknown as Selectors.Response<T>),
            ...builder(data),
        }) as unknown as Selectors.ReturnEntity<NT>
        return new Builder<NT>(newBuilder)
    }

    build(data: Selectors.Response<T>) {
        return this.builder(data)
    }
}