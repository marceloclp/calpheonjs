import cheerio from "cheerio";
import * as AppUtils from "../../utils";
import * as Queries from "../typings";
import { BDOCodex } from "../../typings";
import { Generic } from "./generic.builder";

export class NPCDrop extends Generic {
    getName(raw: string): string {
        const str = cheerio.load(raw)
            .root()
            .text();
        return AppUtils.cleanStr(str);
    }

    getAmount(raw: string): number {
        return parseInt(raw) || 1;
    }

    getChance(raw: string): number {
        return parseFloat(raw.replace(/\%/g, ''));
    }

    build(data: BDOCodex.Query.NPCDrop): Queries.Entities.NPCDrop[] {
        return data.aaData.map(arr => {
            const url = this.parseShortURL(arr[2]);

            return {
                type: 'npc_drop',
                id: arr[0],
                icon: this.parseIconURL(arr[1]),
                name: this.getName(arr[2]),
                amount: this.getAmount(arr[3]),
                chance: this.getChance(arr[4]),
                shortUrl: url,
            }
        });
    }
}