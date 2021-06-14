/**
 * Modes defines the type of the required entity and the type
 * of the returned entity and its properties.
 */
export enum Modes {
    QuestReward = 'questReward',

    RecipeMaterial = 'recipeMaterial',
    RecipeProduct = 'recipeProduct',

    ProcessingMaterial = 'processingMaterial',
    ProcessingProduct = 'processingProduct',

    DesignMaterial = 'designMaterial',
    DesignProduct = 'designProduct',

    SoldByNPC = 'soldByNPC',
    DroppedByNPC = 'droppedByNPC',
}