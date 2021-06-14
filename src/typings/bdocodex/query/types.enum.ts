/**
 * This defines the position of the queried entity inside
 * the return object.
 * 
 * For example, a Types.Product means the queried entity is
 * the product of a recipe.
 */
export enum Types {
    Product = 'product',
    Material = 'material',
    GatherableSource = 'gatherablesource',
    QuestReward = 'questrewards',
    Sellable = 'sellspecialitems',
    NPCDropGroup = 'npcdropgroups',
}