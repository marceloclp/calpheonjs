import { Generic } from "./generic.entity";

export interface Node extends Generic {
    /** The zone where the node is located. */
    readonly zone: string;

    readonly temperature: number;

    readonly humidity: number;

    readonly water: number;
}