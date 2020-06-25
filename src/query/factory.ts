import * as Utils from "./utils";
import * as Queries from "./typings";
import { Query as QueryClass } from "./query";
import { fetch } from "../shared/utils";
import Scrape from "../scraper";

export const Query: Queries.Query = async <T = any>(
    id: string,
    type: Queries.Types | Queries.Descriptor,
    options?: Queries.Options
): Promise<Queries.Result<T>> => {
    let q = (typeof type === 'object' && type) || Utils.mapQueryType(type);

    const query = new QueryClass(
        id,
        q.group,
        q.itemAs,
        options?.locale,
        options?.db,
        fetch,
        Scrape,
    );

    return await query.parse();
}