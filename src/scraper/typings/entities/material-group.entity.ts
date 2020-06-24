import * as Refs from "./refs";
import { Generic } from "./generic.entity";

export interface MaterialGroup extends Generic {
    items: Refs.Item[];
}