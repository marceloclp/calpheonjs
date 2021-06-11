import { Defined, Diff } from '@typings/utilities'
import { BuildableEntity, Selectors } from '@core/query/typings'

export class Builder<BE extends BuildableEntity> {
    constructor(
        private builder: (data: Selectors.Response<BE>) =>
            Selectors.ReturnEntity<BE>
    ) {}

    static init(
        builder: (data: Selectors.Response) => Defined<Selectors.ReturnEntity>
    ) {
        return new Builder<BuildableEntity>(builder as any)
    }

    forType<NBE extends BuildableEntity>(
        builder: (data: Selectors.Response<NBE>) =>
            & { type: NBE }
            & Defined<Diff<Selectors.ReturnEntity<NBE>, Selectors.ReturnEntity<BE>>>
    ) {
        const newBuilder = (data: Selectors.Response<NBE>) => ({
            ...this.builder(data as unknown as Selectors.Response<BE>),
            ...builder(data),
        }) as unknown as Selectors.ReturnEntity<NBE>
        return new Builder<NBE>(newBuilder)
    }

    build(data: Selectors.Response<BE>) {
        return this.builder(data)
    }
}