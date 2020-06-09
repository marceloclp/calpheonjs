export interface QuestReward<T = any> {
    /** Sometimes the quest reward is experience or buffs that don't contain ids. */
    type: 'ref' | 'unknown';

    /** The id may be non-existent depending on the reward type. */
    id?: string;

    icon: string;

    shortUrl?: string;

    /** The name will be present instead of the id if the type is `unknown`. */
    name?: string;

    amount: number;

    scrape?: () => Promise<T>;
}