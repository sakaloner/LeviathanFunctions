# Leviathan Formulas

This library contains various formulas used in the game Leviathan War.

## getCurrentLvl(y: number, round?: boolean)

This function takes the amount of experience (y) as input and returns the user's level. If the optional second parameter, round, is set to true, the function will return the level rounded down to the nearest integer. If round is omitted or false, the function will return the level as a floating-point number.

Example:

```javascript
getCurrentLvl(1000); // returns 2
getCurrentLvl(1500, true); // returns 3
getCurrentLvl(2000); // returns 3.464
```
## getLvlToExp(x: number)

This function takes the user's level (x) as input and returns the amount of experience required to reach that level.

Example:

```javascript
getLvlToExp(1); // returns 268
getLvlToExp(2); // returns 1225
getLvlToExp(3); // returns 3015
```

## qtyTroops(coordination: number)
This function takes the coordination value as input and returns the number of troops  the user can deploy with that level of coordination.

Example:

```javascript
qtyTroops(20); // returns 1
qtyTroops(60); // returns 3
qtyTroops(100); // returns 5
```

## getDamage(level: number, strength: number, troops: number)

This function takes the level, strength, and number of troops as input and returns the damage that can be dealt.

Example:

```javascript
getDamage(1, 10, 5); // returns 6
getDamage(2, 20, 10); // returns 19
getDamage(3, 30, 15); // returns 32
```

## reductionPF(coordination: number, pro: boolean)

This function takes the coordination value and a boolean flag indicating whether the user has a pro account as input, and returns the reduction in the percentage of reduction in the Productivity and Fatigue stats.

Example:

```javascript
reductionPF(1000, true); // returns 0.078
reductionPF(2000, false); // returns 0.052
```

## expPerWork(level: number, education: number)

This function takes the user's level and education as input and returns the amount of experience gained per a work action.

Example:

```javascript
    expPerWork(1, 10); // returns 1
    expPerWork(2, 20); // returns 2
    expPerWork(3, 30); // returns 3
```

## costGun(factoryLvl: number, pMissiles: number)

This function takes the factory level and the Production Missiles stat as input and returns the cost to build an object of type gun.

Example:

```javascript
    costGun(100, 50); // returns 315.00
    costGun(200, 100); // returns 760.00
    costGun(300, 200); // returns 1620.00
```

## lvlStatSecs(strength: number, education: number)

This function takes the user's strength and education as input and returns the number of seconds the user needs to wait before leveling up an Stat of the type (Strenght, Education, Coordination, Luck).

Example:

```javascript
    lvlStatSecs(100, 20); // returns 1500
    lvlStatSecs(200, 30); // returns 7500
    lvlStatSecs(300, 40); // returns 16875
```

## productionResources(resourceType: string, level: number, education: number, factoryLvl: number)

This function takes the resource type, user's level and education, and factory level as input and returns the amount of resources produced per action.

### Parameters
- `resourceType`: A string representing the type of resource to produce. The possible values are:
    - `"diamond"`
    - `"oil"`
    - `"water"`
    - `"coal"`
    - `"iron"`
    - `"lithium"`
    - `"uranium"`
    - `"missile"`
    - `"jet"`
    - `"infantry"`
    - `"tank"`
- `level`: A number representing the user's level.
- `education`: A number representing the user's education level.
- `factoryLvl`: A number representing the user's factory level.

### Return Value

This function returns a number representing the amount of resources produced per action.

Example:

```javascript
productionResources("diamond", 5, 10, 3); // returns 1
productionResources("iron", 10, 20, 5); // returns 5
productionResources("missile", 15, 25, 10); // returns 1
```