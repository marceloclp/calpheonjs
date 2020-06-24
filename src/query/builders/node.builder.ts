import * as Queries from "../typings";
import { BDOCodex } from "../../typings";
import { Generic } from "./generic.builder";

export class Node extends Generic {
    static type = 'node';
    
    getPercentageValue(raw: string): number {
        return parseFloat(raw.replace(/\%/g, '')) || 0;
    }

    build(data: BDOCodex.Query.NodeDrop): Queries.Entities.Node[] {
        return data.aaData.map(arr => {
            const url = this.parseShortURL(arr[2]);

            return {
                type: 'node',
                id: arr[0],
                icon: this.parseIconURL(arr[1]),
                name: this.parseName(arr[2]),
                zone: arr[3],
                temperature: this.getPercentageValue(arr[4]),
                humidity: this.getPercentageValue(arr[5]),
                water: this.getPercentageValue(arr[6]),
                shortUrl: url,
            };
        });
    }
}