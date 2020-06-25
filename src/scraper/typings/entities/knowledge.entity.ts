import * as Refs from "../refs";
import { Generic } from "./generic.entity";

export interface Knowledge extends Generic {
    group?: string;

    obtained_from?: Refs.NPC;
}