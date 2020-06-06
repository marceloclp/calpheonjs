import { Generic } from "./generic.entity";

/**
 * A reference entity contains only the most basic information about an entity.
 */
export interface Ref<T = any> extends Omit<Generic<T>, "name"> {}