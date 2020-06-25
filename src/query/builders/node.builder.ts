import * as AppUtils from "../../shared/utils";
import * as Queries from "../typings";
import { BDOCodex } from "../../typings";
import { Generic } from "./generic.builder";

export class Node extends Generic {
    static get type() {
        return <const> "node";
    }

    build(data: BDOCodex.Query.NodeDrop): Queries.Entities.Node[] {
        return data.aaData.map(arr => {
            const url = this.parseShortURL(arr[2]);

            return {
                type: Node.type,
                id: arr[0],
                icon: this.parseIconURL(arr[1]),
                name: this.parseName(arr[2]),
                zone: arr[3],
                temperature: AppUtils.parsePercentageValue(arr[4]),
                humidity: AppUtils.parsePercentageValue(arr[5]),
                water: AppUtils.parsePercentageValue(arr[6]),
                shortUrl: url,
            };
        });
    }
}