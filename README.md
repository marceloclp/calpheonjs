# Calpheon.js

**Calpheon.js** is an interface to retrieve data about the game by scraping [BDO Codex](https://bdocodex.com/us/). It's built using Typescript so you know exactly what is going to be returned.

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

## Contributing

If you wish to help with this project, please follow the steps below. Any help is appreciated, but please stick to the same patterns that have been used accross the codebase.

1) Fork this repository.
2) Work on the features you want.
3) Make sure that all tests are passing by running `npm run test` or `yarn test`.
4) Create a PR when you are done.
