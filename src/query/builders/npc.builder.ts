import * as Queries from "../typings";
import { BDOCodex } from "../../typings";
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
                lvl: this.parseIntValue(arr[3], 1),
                hp: this.parseIntValue(arr[4]),
                defense: this.parseIntValue(arr[5]),
                evasion: this.parseIntValue(arr[6]),
                exp: this.parseIntValue(arr[7]),
                exp_skill: this.parseIntValue(arr[8]),
                karma: this.parseIntValue(arr[9]),
                shortUrl: url,
                scrape: this.ScrapeFactory(url) as any,
            };
        });
    }
}