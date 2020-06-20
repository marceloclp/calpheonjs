import * as QueryUtils from "../../src/query/utils";
import { Queries } from "../../src";
import { Query as QueryClass } from "../../src/query/query";
import { fetchMock } from "./fetch-mock";
import ScrapeMock from "./scrape-mock";

const QueryMock: Queries.Query = async <T = any>(
    id: string,
    type: Queries.Types | Queries.Descriptor,
    options?: Queries.Options,
): Promise<Queries.Result<T>> => {
    let q = (typeof type === 'object' && type) || QueryUtils.mapQueryType(type);
    
    const fetch = (url: string) => fetchMock(url, [
        "query",
        options?.locale,
        q.group,
        q.itemAs,
        id.replace('/', '-'),
    ].join("-"));

    const query = new QueryClass(
        id,
        q.group,
        q.itemAs,
        options?.locale,
        options?.db,
        fetch,
        ScrapeMock,
    );

    return await query.parse();
}

export default QueryMock;
export { Queries } from "../../src";