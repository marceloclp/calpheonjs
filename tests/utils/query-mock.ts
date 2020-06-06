import * as cache from "./cache";
import * as Utils from "../../src/core/query/utils";
import * as Queries from "../../src/core/query/interfaces";
import { Query as QueryClass } from "../../src/core/query/query";
import { QueryTypes } from "../../src/core/query/enums";

class QueryClassMock extends QueryClass {
    async fetch(): Promise<string> {
        const key = [
            "query",
            this._locale,
            this._group,
            this._itemAs,
            this._id,
        ].join("-");
        if (cache.has(key))
            return cache.get(key);
        const data = await super.fetch();
        return cache.set(key, data);
    }
}

const QueryMock: Queries.IQuery = async <T = any>(
    id: string,
    type: QueryTypes | Queries.Descriptor,
    options?: Queries.Options
): Promise<Queries.Result<T>> => {
    let q = (typeof type === 'object' && type) || Utils.mapQueryType(type);

    const query = new QueryClassMock(
        id,
        q.group,
        q.itemAs,
        options?.locale,
        options?.db,
    );

    return await query.parse();
}

export default QueryMock;
export * from "../../src/core/query";