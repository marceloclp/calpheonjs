import { App } from '@typings/namespaces'

// enum Types {
//     AchievementRewards = 'achievementRewards',
//     RecipeMaterial = 'usedInRecipe',
// }

interface Generic {
    readonly a: string
    readonly type: string
    readonly l: App.Locales
}

/** Mabs the App queries to BDOCodex query tabs. */
interface Tabs {}

/**
 * Achievements whose rewards include the specified item.
 */
//
interface AchievementRewards extends Generic {
    readonly a: 'achievements'
    readonly type: 'reward'
    readonly item_id: string
}

//
interface MaterialOfRecipe extends Generic {
    readonly a: 'recipes'
    readonly type: 'material'
    readonly item_id: string
}

//
interface MaterialOfProcessing extends Generic {
    readonly a: 'mrecipes'
    readonly type: 'material'
    readonly item_id: string
}

//
interface MaterialOfDesign extends Generic {
    readonly a: 'designs'
    readonly type: 'material'
    readonly item_id: string
}

//
interface ProductOfRecipe extends Generic {
    readonly a: 'recipes'
    readonly type: 'product'
    readonly item_id: string
}

//
interface ProductOfProcessing extends Generic {
    readonly a: 'mrecipes'
    readonly type: 'product'
    readonly item_id: string
}

//
interface ProductOfDesign extends Generic {
    readonly a: 'designs'
    readonly type: 'product'
    readonly item_id: string
}

/** Returns the quests an NPC participates in.  */
interface QuestNPCs extends Generic {
    readonly a: 'quests'
    readonly type: 'npcusedinquests'
    /** NPC id */
    readonly id: string
}

/**
 * Returns the quest whose one of the rewards is the specified item.
 */
//
interface QuestRewards extends Generic {
    readonly a: 'quests'
    readonly type: 'questrewards'
    /** Item id. */
    readonly id: string
}

/**
 * Items dropped when killing a monster.
 */
interface NPCDrops extends Generic {
    readonly a: 'items'
    readonly type: 'npcdrop'
    /** NPC id. */
    readonly id: string
}

/**
 * Knowledges given (not dropped!) by the NPC.
 */
interface NPCKnowledgeGift extends Generic {
    readonly a: 'specialitems'
    readonly type: 'npcthemegift'
    /** NPC id */
    readonly id: string
}

/**
 * Exchanges offered by the specified NPC.
 */
interface NPCExchanges extends Generic {
    readonly a: 'exchangeitems'
    readonly type: 'npc'
    /** NPC id. */
    readonly id: string
}

/**
 * List of quests started by the NPC.
 */
interface NPCStartQuest extends Generic {
    readonly a: 'quests'
    readonly type: 'npcstartsquests'
    /** NPC id. */
    readonly id: string
}

/**
 * List of titles dropped by the specified NPC.
 */
interface NPCTitles extends Generic {
    readonly a: 'titles'
    readonly type: 'npc'
    /** NPC id. */
    readonly id: string
    /** This field is required for the query to work, no idea what it is. */
    readonly ng: string
}

/**
 * List of items the specified NPC sells.
 */
interface NPCSells extends Generic {
    readonly a: 'specialitems'
    readonly type: 'npcspecialselllist'
    /** NPC id. */
    readonly id: string
}

/**
 * NPCs who sell the specified item.
 */
interface ItemSellers extends Generic {
    readonly a: 'npcs'
    readonly type: 'sellspecialitems'
    readonly item_id: string
}

/**
 * Nodes where the monsters may drop the specified item.
 */
interface NodeDrops extends Generic {
    readonly a: 'nodes'
    readonly type: 'nodedrop'
    /** Item id. */
    readonly id: string
}

/**
 * The items dropped by opening the specified container (box).
 */
interface ContainerDrops extends Generic {
    readonly a: 'items'
    readonly type: 'contents'
    /** Container id */
    readonly id: string
}

/**
 * Containers (boxes) who drop the specified item.
 */
 interface ItemContainers extends Generic {
    readonly a: 'items'
    readonly type: 'container'
    /** Item id. */
    readonly id: string
}

/**
 * Exchanges whose one of the rewards is the specified item.
 */
interface ItemExchanges extends Generic {
    readonly a: 'exchangeitems'
    readonly type: 'item'
    /** Item id. */
    readonly id: string
}

/**
 * Gatherables who drop the specified item.
 */
interface ItemGatherables extends Generic {
    readonly a: 'drop'
    readonly type: 'gatherablesource'
    /** Item id. */
    readonly id: string
}

/**
 * List of shop items that reward with the specified item.
 */
export interface ItemGameShop extends Generic {
    readonly a: 'cashshop'
    readonly type: 'product'
    /** Item id. */
    readonly id: string
}



/**
 * NPC DROP GROUPS
 * (Dropped by NPC)
 * https://bdocodex.com/query.php?a=drop&type=npcdropgroups&id=10504&l=us&_=1615770396880
 * a = drop
 * type = npcdropgroups
 * id: string // item id
 * l = us
 */
/**
 * NPC USER DROP GROUPS
 * (Dropped by NPC)
 * https://bdocodex.com/query.php?a=drop&type=npcuserdropgroups&id=10504&l=us&_=1615770396884
 * a = drop
 * type = npcuserdropgroups
 * id: string // item id
 * l = us
 */
/**
 * DROP GROUP
 * (Loot group 1 Top 100 Players (100%))
 * (Loot group 2 Top 100 Players (0.1%))
 * https://bdocodex.com/query.php?a=drop&type=dropgroup&id=29015&l=us&_=1615776141345
 * https://bdocodex.com/query.php?a=drop&type=dropgroup&id=21000&l=us&_=1615776141346
 * a = drop
 * type = dropgroup
 * id (where is this id coming from?? its not the item, or the npc)
 */
/**
 * (Stealable items)
 * https://bdocodex.com/query.php?a=items&type=npcsteal&id=40009&l=us&_=1615776956890
 * a = items
 * type = npcsteal
 * id // npc id
 * NOTE = although npc id was 40009/1, the query id was 40009
 */