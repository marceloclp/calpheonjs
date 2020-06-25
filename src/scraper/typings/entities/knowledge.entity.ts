import { Generic } from "./generic.entity";
import * as Refs from "./refs";

export interface Knowledge extends Generic {
    group?: string;

    obtained_from?: Refs.NPC;
}