/**
 * Modes defines the type of the required entity and the type
 * of the returned entity and its properties.
 */
export enum Modes {
    QuestReward = 'questReward',
    ExchangeList = 'exchangeList',

    RecipeMaterial = 'recipeMaterial',
    RecipeProduct = 'recipeProduct',

    PatternMaterial = 'patternMaterial',
    PatternProduct = 'patternProduct',

    ProcessingMaterial = 'processingMaterial',
    ProcessingProduct = 'processingProduct',

    DesignMaterial = 'designMaterial',
    DesignProduct = 'designProduct',

    SoldByNPC = 'soldByNPC',
    DroppedByNPC = 'droppedByNPC',

    DroppedByNode = 'droppedByNode',
}