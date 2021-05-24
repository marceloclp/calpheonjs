import { App, BDO } from '@typings/namespaces'
import { Diff, Defined } from '@typings/utilities'
import { Entities, ScrapableEntity } from '@core/scraper/typings'

interface Args {
    readonly $: cheerio.Root
    readonly id: string
    readonly type: ScrapableEntity
    readonly locale: App.Locales
}

export class Builder<
    T extends ScrapableEntity,
    Entity extends Entities.Select<T> = Entities.Select<T>,
    SubTypes extends BDO.Entities.GetSubType<T> = BDO.Entities.GetSubType<T>,
> {
    private subTypes: Record<
        string,
        (entity: Entity, args: Args) => Entity
    > = {}

    constructor(
        private builder: (args: Args) => Entity
    ) {}

    static init(
        builder: (args: Args) => Defined<Entities.Generic>
    ) {
        return new Builder<any>(builder)
    }

    convert<NT extends ScrapableEntity>(
        builder: (args: Args) =>
            & { type: NT, subType: SubTypes }
            & Defined<Diff<Entities.Select<NT>, Entity>>
    ) {
        const newBuilder = (args: Args) => ({
            ...this.builder(args),
            ...builder(args),
        }) as unknown as Entities.Select<NT>
        return new Builder<NT>(newBuilder)
    }

    extend<S extends SubTypes>(
        subType: S,
        builder: (args: Args) => Defined<Diff<Entities.Select<T, S>, Entity>>
    ) {
        this.subTypes[subType as string] =
            (entity: Entity, args: Args) => ({
                ...entity,
                subType,
                ...builder(args),
            })
        return this
    }

    build(args: Args) {
        const entity = this.builder(args)
        if (entity.subType && entity.subType in this.subTypes)
            return this.subTypes[entity.subType](entity, args)
        return entity
    }
}