import * as Utils from "./utils";
import * as Queries from "./interfaces";
import { Query as QueryClass } from "./query";
import { QueryTypes } from "./enums";
import { IQuery } from "./interfaces";

export const Query: IQuery = async <T = any>(
    id: string,
    type: QueryTypes | Queries.Descriptor,
    options?: Queries.Options
): Promise<Queries.Result<T>> => {
    let q = (typeof type === 'object' && type) || Utils.mapQueryType(type);

    const query = new QueryClass(
        id,
        q.group,
        q.itemAs,
        options?.locale,
        options?.db
    );

    return await query.parse();
}