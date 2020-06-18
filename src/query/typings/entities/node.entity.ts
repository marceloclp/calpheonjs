import { Generic } from "./generic.entity";

export interface Node extends Generic {
    type: 'node';

    /** The zone where the node is located. */
    zone: string;

    temperature: number;

    humidity: number;

    water: number;
}