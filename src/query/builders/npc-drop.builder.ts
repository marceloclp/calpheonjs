import * as AppUtils from "../../shared/utils";
import * as Queries from "../typings";
import { BDOCodex } from "../../shared";
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
                amount: AppUtils.parseIntValue(arr[3], 1),
                chance: AppUtils.parsePercentageValue(arr[4]),
                shortUrl: url,
            }
        });
    }
}