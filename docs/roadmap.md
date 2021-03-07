# Road Map

* Rename "H" stats to a more understandable name. H stats refer to bonuses stats inside the parenthesis (e.g., Defense: 45 (+13))
* Remove BDO namespace and have a single namespace App that contains everything.
* Add equipment space (head, foot, etc) property to equipment entity.
* At BDO.Equipments.Caphras.Set, make `FixedArray<20, Enhancement>` a type/interface and use that in `getCaphrasStats`.
* Rename nameAlternative to nameAlt
* Rename app category to something else, and have category name be the actual value of the gray text for now, until we support all categories.
* Move test utils to its own file.