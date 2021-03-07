import { Generic } from "./generic.entity";

export interface Node extends Generic {
    type: 'node';

    /** The zone where the node is located. */
    zone: string;

    /** The temperature as a floating point. */
    temperature: number;

    /** The humidity as a floating point. */
    humidity: number;

    /** The water level as a floating point. */
    water: number;
}