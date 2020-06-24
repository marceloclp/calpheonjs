import * as Queries from "../typings";
import { BDOCodex } from "../../typings";
import { Generic } from "./generic.builder";

export class NPCDrop extends Generic {
    static get type() {
        return <const> "npc_drop";
    }

    build(data: BDOCodex.Query.NPCDrop): Queries.Entities.NPCDrop[] {
        return data.aaData.map(arr => {
            const url = this.parseShortURL(arr[2]);

            return {
                type: NPCDrop.type,
                id: arr[0],
                icon: this.parseIconURL(arr[1]),
                name: this.parseName(arr[2]),
                amount: this.parseIntValue(arr[3], 1),
                chance: this.parsePercentageValue(arr[4]),
                shortUrl: url,
            }
        });
    }
}