import * as AppUtils from "../../shared/utils";
import * as Queries from "../typings";
import { BDOCodex } from "../../shared/typings";
import { Generic } from "./generic.builder";

export class NPC extends Generic {
    static get type() {
        return <const> "npc";
    }

    build(data: BDOCodex.Query.NPC): Queries.Entities.NPC[] {
        return data.aaData.map(arr => {
            const url = this.parseShortURL(arr[2]);

            return {
                type: NPC.type,
                id: arr[0].display,
                icon: this.parseIconURL(arr[1]),
                name: this.parseName(arr[2]),
                lvl: AppUtils.parseIntValue(arr[3], 1),
                hp: AppUtils.parseIntValue(arr[4]),
                defense: AppUtils.parseIntValue(arr[5]),
                evasion: AppUtils.parseIntValue(arr[6]),
                exp: AppUtils.parseIntValue(arr[7]),
                exp_skill: AppUtils.parseIntValue(arr[8]),
                karma: AppUtils.parseIntValue(arr[9]),
                shortUrl: url,
                scrape: this.ScrapeFactory(url) as any,
            };
        });
    }
}