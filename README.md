<div style="text-align: center">
    <img src="./docs/images/calpheonjs.png" />
    </br>
</div>

**Calpheon.js** is an interface to retrieve data about the **Black Desert Online (BDO)** game by scraping [BDOCodex](https://bdocodex.com/us/). It's built using Typescript so you know exactly what is being returned.

## Roadmap

This are the features that will be prioritized on future releases:
* Add support to all query types.
* Query using a search term.
* Add scraping support to:
    * Skills
    * Achievements
    * Nodes
    * Houses

## Installation
```
npm install calpheonjs
```

## Usage

```ts
import { Scrape, Item } from "calpheonjs";

const scrape = async (id: string, type: string) => {
    // Use Scrape if you don't know the entity type you are scraping.
    const entity = await Scrape(id, type);

    // Or use the proper scraper if you know what you are requesting.
    // Assume the entity you are requesting is an item.
    const item = await Item(id);

    console.log(item.data);
};
scrape('9213', 'item');
```

This is the output.
```json
{
    "id": "9213",
    "icon": "/items/new_icon/03_etc/07_productmaterial/00009213.png",
    "name": "Beer",
    "name_alt": "맥주",
    "type": "item",
    "category": "Consumable",
    "description": "A mild alcoholic drink brewed from cereal grains",
    "prices": {
        "buy": 2150,
        "sell": 86
    },
    "grade": 1,
    "weight": 0.1,
    "effects": [
        "Worker Stamina Recovery +2",
        "(Use through the Worker Menu on the World Map)."
    ],
    "duration": 0,
    "cooldown": 0
}
```

You can also query directly from the item, or using the provided `Query` function.

```ts
import { Item, Query, Queries } from "calpheonjs";

const scrape = async (id: string, type: string) => {
    const item = await Item(id);
    const recipes = await item.data.product_of_recipe();

    // Or you can use the Query function by passing the item id and the query type.
    // This is useful in case you don't care about the item data, only about the query results.
    const recipes = await Query('9213', Queries.Types.PRODUCT_IN_RECIPE);

    console.log(recipes.data);
};
scrape('9213');
```

This is the output.
```json
[{
    "type": "recipe",
    "shortUrl": "/us/recipe/122/",
    "id": "122",
    "icon": "/items/new_icon/03_etc/07_productmaterial/00009213.png",
    "name": "Beer",
    "process": "Cooking",
    "skill_lvl": {
        "mastery": "Beginner",
        "lvl": 1
    },
    "exp": 400,
    "materials": [{
        "type": "material_group",
        "shortUrl": "/us/materialgroup/1/",
        "id": "1",
        "icon": "/items/new_icon/03_etc/07_productmaterial/00007005.png",
        "amount": 5
    }, {
        "type": "item",
        "shortUrl": "/us/item/9059/",
        "id": "9059",
        "icon": "/items/new_icon/03_etc/07_productmaterial/00009059.png",
        "amount": 6
    }, {
        "type": "item",
        "shortUrl": "/us/item/9002/",
        "id": "9002",
        "icon": "/items/new_icon/03_etc/07_productmaterial/00009002.png",
        "amount": 1
    }, {
        "type": "item",
        "shortUrl": "/us/item/9005/",
        "id": "9005",
        "icon": "/items/new_icon/03_etc/07_productmaterial/00009005.png",
        "amount": 2
    }],
    "products": [{
        "type": "item",
        "shortUrl": "/us/item/9213/",
        "id": "9213",
        "icon": "/items/new_icon/03_etc/07_productmaterial/00009213.png",
        "amount": 1
    }, {
        "type": "item",
        "shortUrl": "/us/item/9283/",
        "id": "9283",
        "icon": "/items/new_icon/03_etc/07_productmaterial/00009283.png",
        "amount": 1
    }]
}, ...]
```

## Contributing

If you wish to help with this project, please follow the steps below. Any help is appreciated, but please stick to the same patterns that have been used accross the codebase.

1) Fork this repository.
2) Work on the features you want.
3) Make sure that all tests are passing by running `npm run test` or `yarn test`.
4) Create a PR when you are done.

Please follow this [guide](https://github.com/conventional-changelog/commitlint/#what-is-commitlint) when naming your commits.