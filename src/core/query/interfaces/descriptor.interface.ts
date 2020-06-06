import { Groups, ItemAs } from "../enums";

/**
 * Describes a BDOCodex query with a remapped interface.
 */
export interface Descriptor {
    /** Refers to the `a` parameter in a BDOCodex query. */
    readonly group: Groups;

    /** Refers to the `type` parameter in a BDOCodex query. */
    readonly itemAs: ItemAs;
}