import * as Queries from "../typings";
import { BDOCodex } from "../../typings";
import { Generic } from "./generic.builder";

export class NPCDrop extends Generic {
    static get type() {
        return <const> "npc_drop";
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
                type: NPCDrop.type,
                id: arr[0],
                icon: this.parseIconURL(arr[1]),
                name: this.parseName(arr[2]),
                amount: this.getAmount(arr[3]),
                chance: this.getChance(arr[4]),
                shortUrl: url,
            }
        });
    }
}