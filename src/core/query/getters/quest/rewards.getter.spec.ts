import { getRewards } from './rewards.getter'

describe('Query > Getters > getRewards()', () => {
    describe('when there are only standard rewards', () => {
        const rewards = getRewards([
            { "display": "101\/1",  "sort_value": "1010001" },
            "<div class=\"iconset_wrapper_big\">\r\n<a href=\"\/us\/quest\/101\/1\/\">\r\n" +
                "<div class=\"icon_wrapper\">[img src=\"\/items\/quest\/viragi.png\" class=\"qtooltip list_icon_big\" " +
                "data-id=\"quest--1\" data-quest_group=\"101\" alt=\"icon\"]<\/div>\r\n<\/a><\/div>",
            "<a href=\"\/us\/quest\/101\/1\/\" class=\"qtooltip item_grade_0\" data-id=\"quest--1\" " +
                "data-quest_group=\"101\"><b>[Co-op] The Owner of Biraghi&#39;s Den<\/b><\/a>",
            "32",
            { "display": "All", "sort_value": "0" },
            { "display": "9'191'330", "sort_value": 9191330 },
            { "display": "0", "sort_value": 0 },
            "0",
            "<div class=\"iconset_wrapper_medium inlinediv\">\r\n<a href=\"\/us\/item\/55\/\" " +
                "class=\"qtooltip\" data-id=\"item--55\" data-enchant=\"0\">\r\n<div " +
                "class=\"icon_wrapper\">[img src=\"\/items\/new_icon\/06_pc_equipitem\/00_common\/00_etc\/00000000_skillpoint.png\" " +
                "alt=\"icon\" class=\"list_icon_medium\"]<\/div>\r\n\r\n<\/a><\/div><div class=\"iconset_wrapper_medium inlinediv\">\r\n" +
                "<a href=\"\/us\/item\/16002\/\" class=\"qtooltip\" data-id=\"item--16002\" data-enchant=\"0\">\r\n" +
                "<div class=\"icon_wrapper\">[img src=\"\/items\/new_icon\/03_etc\/11_enchant_material\/00000007.png\" alt=\"icon\" " +
                "class=\"list_icon_medium\"]<\/div>\r\n\r\n<\/a><\/div><div class=\"iconset_wrapper_medium inlinediv\">\r\n" +
                "<a href=\"\/us\/item\/491\/\" class=\"qtooltip\" data-id=\"item--491\" data-enchant=\"0\">\r\n" +
                "<div class=\"icon_wrapper\">[img src=\"\/items\/new_icon\/06_pc_equipitem\/00_common\/00_etc\/00000491.png\" " +
                "alt=\"icon\" class=\"list_icon_medium\"]<\/div>\r\n\r\n<\/a><\/div>",
            "[1,25,22,21]",
            "0"
        ])
        it('should return all items as standard rewards', () => {
            expect(rewards.standard).toMatchObject([
                { type: 'exp', name: 'EXP', amount: 9191330 },
                { type: 'exp', name: 'Skill EXP', amount: 0 },
                { type: 'exp', name: 'Contribution EXP', amount: 0 },
                { type: 'item', id: '55', icon: '/items/new_icon/06_pc_equipitem/00_common/00_etc/00000000_skillpoint.png', amount: 1 },
                { type: 'item', id: '16002', icon: '/items/new_icon/03_etc/11_enchant_material/00000007.png', amount: 1 },
                { type: 'item', id: '491', icon: '/items/new_icon/06_pc_equipitem/00_common/00_etc/00000491.png', amount: 1 },
            ])
        })
        it('should return an empty array for choseOneOf', () => {
            expect(rewards.choseOneOf).toMatchObject([])
        })
    })

    describe('when there are chooseable rewards', () => {
        const rewards = getRewards([
            { "display": "167\/1", "sort_value": "1670001" },
            "<div class=\"iconset_wrapper_big\">\r\n<a href=\"\/us\/quest\/167\/1\/\">\r\n" +
                "<div class=\"icon_wrapper\">[img src=\"\/items\/quest\/stupidtree.png\" class=\"qtooltip list_icon_big\" " +
                "data-id=\"quest--1\" data-quest_group=\"167\" alt=\"icon\"]<\/div>\r\n<\/a><\/div>",
            "<a href=\"\/us\/quest\/167\/1\/\" class=\"qtooltip item_grade_0\" data-id=\"quest--1\" " +
                "data-quest_group=\"167\"><b>[Co-op] A Large Living Tree<\/b><\/a>",
            "40",
            { "display": "All", "sort_value": "0" },
            { "display": "27'445'161", "sort_value": 27445161 },
            { "display": "0", "sort_value": 0 },
            "0",
            "<div class=\"iconset_wrapper_medium inlinediv\">\r\n<a href=\"\/us\/item\/53\/\" " +
                "class=\"qtooltip\" data-id=\"item--53\" data-enchant=\"0\">\r\n<div class=\"icon_wrapper\">" +
                "[img src=\"\/items\/new_icon\/06_pc_equipitem\/00_common\/00_etc\/00000000_skillpoint.png\" alt=\"icon\" " +
                "class=\"list_icon_medium\"]<\/div>\r\n\r\n<\/a><\/div><div class=\"iconset_wrapper_medium inlinediv\">\r\n" +
                "<a href=\"\/us\/item\/491\/\" class=\"qtooltip\" data-id=\"item--491\" data-enchant=\"0\">\r\n<div " +
                "class=\"icon_wrapper\">[img src=\"\/items\/new_icon\/06_pc_equipitem\/00_common\/00_etc\/00000491.png\" " +
                "alt=\"icon\" class=\"list_icon_medium\"]<\/div>\r\n\r\n<\/a><\/div><div class=\"iconset_wrapper_medium " +
                "inlinediv\">\r\n<a href=\"\/us\/item\/16002\/\" class=\"qtooltip\" data-id=\"item--16002\" data-enchant=\"0\">\r\n" +
                "<div class=\"icon_wrapper\">[img src=\"\/items\/new_icon\/03_etc\/11_enchant_material\/00000007.png\" alt=\"icon\" " +
                "class=\"list_icon_medium\"]<\/div>\r\n\r\n<\/a><\/div><br>Choose<br><div class=\"iconset_wrapper_medium " +
                "inlinediv\">\r\n<a href=\"\/us\/item\/10889\/\" class=\"qtooltip\" data-id=\"item--10889\" data-enchant=\"0\">\r\n" +
                "<div class=\"icon_wrapper\">[img src=\"\/items\/new_icon\/06_pc_equipitem\/00_common\/13_hel\/00010889.png\" " +
                "alt=\"icon\" class=\"list_icon_medium\"]<\/div>\r\n\r\n<\/a><\/div><div class=\"iconset_wrapper_medium inlinediv\">\r\n" +
                "<a href=\"\/us\/item\/10891\/\" class=\"qtooltip\" data-id=\"item--10891\" data-enchant=\"0\">\r\n<div " +
                "class=\"icon_wrapper\">[img src=\"\/items\/new_icon\/06_pc_equipitem\/00_common\/11_hand\/00010891.png\" alt=\"icon\" " +
                "class=\"list_icon_medium\"]<\/div>\r\n\r\n<\/a><\/div><div class=\"iconset_wrapper_medium inlinediv\">\r\n<a " +
                "href=\"\/us\/item\/10892\/\" class=\"qtooltip\" data-id=\"item--10892\" data-enchant=\"0\">\r\n<div class=\"icon_wrapper\">" +
                "[img src=\"\/items\/new_icon\/06_pc_equipitem\/00_common\/12_foot\/00010892.png\" alt=\"icon\" class=\"list_icon_medium\"]" +
                "<\/div>\r\n\r\n<\/a><\/div>",
            "[1,25,21,22,2,2,2]",
            "0"
        ])
        it('should return all standard rewards as normal', () => {
            expect(rewards.standard).toMatchObject([
                { type: 'exp', name: 'EXP', amount: 27445161 },
                { type: 'exp', name: 'Skill EXP', amount: 0 },
                { type: 'exp', name: 'Contribution EXP', amount: 0 },
                { type: 'item', id: '53', icon: '/items/new_icon/06_pc_equipitem/00_common/00_etc/00000000_skillpoint.png', amount: 1 },
                { type: 'item', id: '491', icon: '/items/new_icon/06_pc_equipitem/00_common/00_etc/00000491.png', amount: 1 },
                { type: 'item', id: '16002', icon: '/items/new_icon/03_etc/11_enchant_material/00000007.png', amount: 1 },
            ])
        })
        it('should return all chooseable rewards', () => {
            expect(rewards.choseOneOf).toMatchObject([
                { type: 'item', id: '10889', icon: '/items/new_icon/06_pc_equipitem/00_common/13_hel/00010889.png', amount: 1 },
                { type: 'item', id: '10891', icon: '/items/new_icon/06_pc_equipitem/00_common/11_hand/00010891.png', amount: 1 },
                { type: 'item', id: '10892', icon: '/items/new_icon/06_pc_equipitem/00_common/12_foot/00010892.png', amount: 1 },
            ])
        })
    })

    describe('when amity is also a reward', () => {
        const rewards = getRewards([
            { "display": "3530\/250", "sort_value": "35300250" },
            "<div class=\"iconset_wrapper_big\">\r\n<a href=\"\/us\/quest\/3530\/250\/\">\r\n" +
                "<div class=\"icon_wrapper\">[img src=\"\/items\/quest\/6_rutomb_elite_fighter.png\" " +
                "class=\"qtooltip list_icon_big\" data-id=\"quest--250\" data-quest_group=\"3530\" alt=\"icon\"]" +
                "<\/div>\r\n<\/a><\/div>",
            "<a href=\"\/us\/quest\/3530\/250\/\" class=\"qtooltip item_grade_0\" data-id=\"quest--250\" " +
                "data-quest_group=\"3530\"><b>[Defeat the Rhutums IV] An Endless Fight<\/b><\/a>",
            "0",
            { "display": "Southwestern Calpheon", "sort_value": "6" },
            { "display": "100", "sort_value": 100 },
            { "display": "0", "sort_value": 0 },
            "123",
            "<div class=\"iconset_wrapper_medium inlinediv\">\r\n<a href=\"\/us\/item\/2\/\" class=\"qtooltip\" " +
                "data-id=\"item--2\" data-enchant=\"0\">\r\n<div class=\"icon_wrapper\">[img src=\"\/items\/new_icon\/00000002_special.png\" " +
                "alt=\"icon\" class=\"list_icon_medium\"]<\/div>\r\n<div class=\"quantity_small nowrap\">3<\/div>\r\n<\/a><\/div><div " +
                "class=\"iconset_wrapper_medium inlinediv\">\r\n<a href=\"\/us\/item\/16001\/\" class=\"qtooltip\" data-id=\"item--16001\" " +
                "data-enchant=\"0\">\r\n<div class=\"icon_wrapper\">[img src=\"\/items\/new_icon\/03_etc\/11_enchant_material\/00000008.png\" " +
                "alt=\"icon\" class=\"list_icon_medium\"]<\/div>\r\n<div class=\"quantity_small nowrap\">2<\/div>\r\n<\/a><\/div><div " +
                "class=\"iconset_wrapper_medium inlinediv\">\r\n<a href=\"\/us\/item\/16002\/\" class=\"qtooltip\" data-id=\"item--16002\" " +
                "data-enchant=\"0\">\r\n<div class=\"icon_wrapper\">[img src=\"\/items\/new_icon\/03_etc\/11_enchant_material\/00000007.png\" " +
                "alt=\"icon\" class=\"list_icon_medium\"]<\/div>\r\n<div class=\"quantity_small nowrap\">2<\/div>\r\n<\/a><\/div><br>Amity: 20",
            "[24,24,22,22,3,1]",
            "1"
        ])
        it('should return all standard rewards as normal', () => {
            expect(rewards.standard).toMatchObject([
                { type: 'exp', name: 'EXP', amount: 100 },
                { type: 'exp', name: 'Skill EXP', amount: 0 },
                { type: 'exp', name: 'Contribution EXP', amount: 123 },
                { type: 'item', id: '2', icon: '/items/new_icon/00000002_special.png', amount: 3 },
                { type: 'item', id: '16001', icon: '/items/new_icon/03_etc/11_enchant_material/00000008.png', amount: 2 },
                { type: 'item', id: '16002', icon: '/items/new_icon/03_etc/11_enchant_material/00000007.png', amount: 2 },
            ])
        })
        it('should return all chooseable rewards', () => {
            expect(rewards.choseOneOf).toMatchObject([])
        })
    })
})
