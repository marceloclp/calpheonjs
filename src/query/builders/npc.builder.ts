import * as Queries from "../typings";
import { BDOCodex } from "../../typings";
import { Generic } from "./generic.builder";

export class NPC extends Generic {
    getStat(raw: string | number): number {
        if (typeof raw === 'number')
            return raw;
        if (typeof raw === 'string')
            return parseInt(raw.replace(/\D/g, '')) || 0;
        return 0;
    }

    getLvl(raw: string): number {
        return parseInt(raw) || 1;
    }

    build(data: BDOCodex.Query.NPC): Queries.Entities.NPC[] {
        return data.aaData.map(arr => {
            const url = this.parseShortURL(arr[2]);

            return {
                type: 'npc',
                id: arr[0].display,
                icon: this.parseIconURL(arr[1]),
                name: this.parseName(arr[2]),
                lvl: this.getLvl(arr[3]),
                hp: this.getStat(arr[4]),
                defense: this.getStat(arr[5]),
                evasion: this.getStat(arr[6]),
                exp: this.getStat(arr[7]),
                exp_skill: this.getStat(arr[8]),
                karma: this.getStat(arr[9]),
                shortUrl: url,
                scrape: this.ScrapeFactory(url) as any,
            };
        });
    }
}