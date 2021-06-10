import { BDO } from '@typings/namespaces'
import { toSnakeCase } from '@helpers/utils/to-snake-case'
import { Getter } from './getter.type'

const Lookup = {
    'equipment': BDO.Items.SubTypes.Equipment,
    'crafting_materials': BDO.Items.SubTypes.CraftingMaterial,
    'consumable': BDO.Items.SubTypes.Consumable,
    'general': BDO.Items.SubTypes.General,
    'socket_item': BDO.Items.SubTypes.SocketItem,
    'special_item': BDO.Items.SubTypes.SpecialItem,
    'license': BDO.Items.SubTypes.License,
    'installable_object': BDO.Items.SubTypes.InstallableObject,
}

export const getSubType: Getter<'subType'> = ({ $ }) => {
    const text = $('.category_text').text()
        .replace(/[^a-zA-Z ]/g, '')
    return Lookup[toSnakeCase(text)]
}
