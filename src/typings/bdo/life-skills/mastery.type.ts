import { BDO } from '@typings/namespaces'

/**
 * A life skill mastery level.
 * 
 * "Beginner 1" becomes ["beginner", 1]
 */
export type Mastery = [BDO.LifeSkills.Masteries, number]