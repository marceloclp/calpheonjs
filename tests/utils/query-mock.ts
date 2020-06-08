import * as cache from "./cache";
import * as QueryUtils from "../../src/core/query/utils";
import { Queries } from "../../src/core";
import { Query as QueryClass } from "../../src/core/query/query";

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

const QueryMock: Queries.Query = async <T = any>(
    id: string,
    type: Queries.Types | Queries.Descriptor,
    options?: Queries.Options,
): Promise<Queries.Result<T>> => {
    let q = (typeof type === 'object' && type) || QueryUtils.mapQueryType(type);

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
export { Queries } from "../../src/core";