import { BDO } from '@typings/namespaces'

export type SubType<T extends BDO.Entities.Types> = {
    [BDO.Entities.Types.Item]: BDO.Items.SubTypes
    [BDO.Entities.Types.Knowledge]: never
    [BDO.Entities.Types.MaterialGroup]: never
    [BDO.Entities.Types.NPC]: BDO.NPCs.SubTypes
    [BDO.Entities.Types.Quest]: never
    [BDO.Entities.Types.Recipe]: never
    [BDO.Entities.Types.Processing]: never
    [BDO.Entities.Types.Design]: never
    [BDO.Entities.Types.WorkerSkill]: never
}[T]