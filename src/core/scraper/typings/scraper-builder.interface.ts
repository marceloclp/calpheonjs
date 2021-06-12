import { BDO } from '@typings/namespaces'
import { Defined, Diff } from '@typings/utilities'
import { GetterArgs } from '../getters/getter.type'
import { Entities, ScrapableEntity } from '.'

export interface ScraperBuilder<SE extends ScrapableEntity = ScrapableEntity> {
    forGeneric: (
        builder: (args: GetterArgs) =>
            Omit<Defined<Entities.Generic>, 'type' | 'subType'>
    ) => ScraperBuilder<ScrapableEntity>

    forType: <
        NSE extends ScrapableEntity,
        R = Diff<Entities.Select<NSE>, Entities.Generic>,
    >(
        type: NSE,
        builder: (args: GetterArgs) =>
            BDO.Entities.SubType<NSE> extends never
                ? Omit<Defined<R>, 'type' | 'subType'>
                : Omit<Defined<R>, 'type'> & { subType: BDO.Entities.SubType<NSE> }
    ) => ScraperBuilder<NSE>

    forSubType: <
        ST extends BDO.Entities.SubType<SE>,
        R = Diff<Entities.Select<SE, ST>, Entities.Select<SE>>
    >(
        subType: ST,
        builder: (args: GetterArgs) =>
            Omit<Defined<R>, 'type' | 'subType'>
    ) => ScraperBuilder<SE>

    create: (
        pickBuilder: (type: ScrapableEntity) => { type: ScrapableEntity }
    ) => <RSE extends ScrapableEntity>(type: RSE, args: GetterArgs) => Entities.Generic<RSE>
}