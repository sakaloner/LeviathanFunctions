import { 
    getCurrentLvl, getLvlToExp, getExpLeft, qtyTroops,
    partyCurrentLevel, getPartyLvlToExp, getPartyExpLeft,
    getDamage, reductionProductivity, reductionFatigue, 
    expPerWork, costGun, lvlStatSecs, productionResources,
    maxPartyMembers, partyBonus,
    getFactoryLevel, getFactoryExp, getFactoryExpLeft,
} from "../funcs";


test("getfactorylevel", () => {
    expect(getCurrentLvl(4000, true)).toBe(3);
    expect(getCurrentLvl(996389, true)).toBe(52);
    expect(getCurrentLvl(20000, true)).toBe(7);
    expect(getCurrentLvl(2000, true)).toBe(2);
    expect(getCurrentLvl(1000000, true)).toBe(52);
})

test("getLvlToExp", () => {
    let exp = 4000
    let level = getCurrentLvl(exp);
    expect(getLvlToExp(level)).toBe(exp);
    exp = 996389
    level = getCurrentLvl(exp);
    expect(getLvlToExp(level)).toBe(exp);
    exp = 20000
    level = getCurrentLvl(exp);
    expect(getLvlToExp(level)).toBe(exp);
    exp = 1000000
    level = getCurrentLvl(exp);
    expect(getLvlToExp(level)).toBe(exp);
})

test("getExpLeft", () => {
    let userExp = 4000;
    let currentLvl = getCurrentLvl(userExp);
    let expToNextLevel = getLvlToExp(currentLvl + 1);
    expect(getExpLeft(userExp)).toBe(expToNextLevel - userExp);
    userExp = 996389;
    currentLvl = getCurrentLvl(userExp);
    expToNextLevel = getLvlToExp(currentLvl + 1);
    expect(getExpLeft(userExp)).toBe(expToNextLevel - userExp);
    userExp = 20000;
    currentLvl = getCurrentLvl(userExp);
    expToNextLevel = getLvlToExp(currentLvl + 1);
    expect(getExpLeft(userExp)).toBe(expToNextLevel - userExp);
    userExp = 2000;
    currentLvl = getCurrentLvl(userExp);
    expToNextLevel = getLvlToExp(currentLvl + 1);
    expect(getExpLeft(userExp)).toBe(expToNextLevel - userExp);
    userExp = 100000;
    currentLvl = getCurrentLvl(userExp);
    expToNextLevel = getLvlToExp(currentLvl + 1);
    expect(getExpLeft(userExp)).toBe(expToNextLevel - userExp);

})

test("qtyTroops", () => {
    expect(qtyTroops(20)).toBe(1);
    expect(qtyTroops(500)).toBe(25);
    expect(qtyTroops(40)).toBe(2);
    expect(qtyTroops(150)).toBe(7);
    expect(qtyTroops(200)).toBe(10);
})

test("getDamage", () => {
    expect(getDamage(3,158,1,'noBonus',0)).toBe(13);
    expect(getDamage(52,700,25, 'noBonus', 0)).toBe(82);
    expect(getDamage(7,400,2, 'noBonus', 0)).toBe(33);
    expect(getDamage(2,150,8, 'noBonus', 0)).toBe(19);
    expect(getDamage(52,200,10, 'noBonus', 0)).toBe(28);
})

test("reductionProductivity", () => {
    expect(reductionProductivity(20, true, 3)).toBe(0.076);
    expect(reductionProductivity(500, true,0)).toBe(0.055);
    expect(reductionProductivity(40, false,10)).toBe(0.088);
    expect(reductionProductivity(150, false, 5)).toBe(0.087);
    expect(reductionProductivity(200, true, 7)).toBe(0.063);
})
test("reductionFatigue", () => {
    expect(reductionFatigue(20, true, 3)).toBe(0.076);
    expect(reductionFatigue(500, true,0)).toBe(0.055);
    expect(reductionFatigue(40, false,10)).toBe(0.088);
    expect(reductionFatigue(150, false,5)).toBe(0.087);
    expect(reductionFatigue(200, true, 7)).toBe(0.063);
})
test("expPerWork", () => {
    expect(expPerWork(3,1)).toBe(1);
    expect(expPerWork(52,500)).toBe(41);
    expect(expPerWork(7,20)).toBe(2);
    expect(expPerWork(2,150)).toBe(11);
    expect(expPerWork(52,200)).toBe(18);
})

test("costGun", () => {
    expect(costGun(30,2)).toBe(69.84);
    expect(costGun(20,24)).toBe(846.72);
    expect(costGun(10,2)).toBe(71.28);
    expect(costGun(10,7)).toBe(249.48);
    expect(costGun(1,11)).toBe(395.60);
})

test("lvlStatSecs", () => {
    expect(lvlStatSecs(158,1)).toBe(18693);
    expect(lvlStatSecs(700,500)).toBe(352500);
    expect(lvlStatSecs(400,20)).toBe(119400);
    expect(lvlStatSecs(150,150)).toBe(4500);
    expect(lvlStatSecs(200,200)).toBe(24000);
})

test("productionResources", () => {
    expect(productionResources('diamond',3,1,30, 'noBonus', 0)).toBe(1);
    expect(productionResources('water',52,500,20, 'noBonus', 0)).toBe(149);
    expect(productionResources('oil',7,20,10, 'noBonus', 0)).toBe(10);  
    expect(productionResources('lithium',2,150,10, 'noBonus', 0)).toBe(11);
    expect(productionResources('uranium',52,200,1, 'noBonus', 0)).toBe(20);
    expect(productionResources('missile',52,200,1, 'noBonus', 0)).toBe(10);
    expect(productionResources('jet',52,200,1, 'noBonus', 0)).toBe(10);
    expect(productionResources('infantry',52,200,1, 'noBonus', 0)).toBe(8);
    expect(productionResources('tank',52,200,1, 'noBonus', 0)).toBe(12);
})

test("partyCurrentLevel", () => {
    expect(partyCurrentLevel(4000, true)).toBe(103);
    expect(partyCurrentLevel(996389, true)).toBe(1560);
    expect(partyCurrentLevel(20000, true)).toBe(224);
    expect(partyCurrentLevel(2000, true)).toBe(74);
    expect(partyCurrentLevel(1000000, true)).toBe(1563);
})

test("getPartyExpToLvl", () => {
    let exp = 4000
    let level = partyCurrentLevel(exp);
    expect(getPartyLvlToExp(level)).toBe(exp);
    exp = 996389
    level = partyCurrentLevel(exp);
    expect(getPartyLvlToExp(level)).toBe(exp);
    exp = 20000
    level = partyCurrentLevel(exp);
    expect(getPartyLvlToExp(level)).toBe(exp);
    exp = 1000000
    level = partyCurrentLevel(exp);
    expect(getPartyLvlToExp(level)).toBe(exp);
})

test("getPartyExpLeft", () => {
    let partyExp = 4000;
    let currentLvl = partyCurrentLevel(partyExp);
    let expToNextLevel = getPartyLvlToExp(currentLvl + 1);
    expect(getPartyExpLeft(partyExp)).toBe(expToNextLevel - partyExp);

    partyExp = 996389;
    currentLvl = partyCurrentLevel(partyExp);
    expToNextLevel = getPartyLvlToExp(currentLvl + 1);
    expect(getPartyExpLeft(partyExp)).toBe(expToNextLevel - partyExp);

    partyExp = 20000;
    currentLvl = partyCurrentLevel(partyExp);
    expToNextLevel = getPartyLvlToExp(currentLvl + 1);
    expect(getPartyExpLeft(partyExp)).toBe(expToNextLevel - partyExp);

    partyExp = 2000;
    currentLvl = partyCurrentLevel(partyExp);
    expToNextLevel = getPartyLvlToExp(currentLvl + 1);
    expect(getPartyExpLeft(partyExp)).toBe(expToNextLevel - partyExp);

    partyExp = 100000;
    currentLvl = partyCurrentLevel(partyExp);
    expToNextLevel = getPartyLvlToExp(currentLvl + 1);
    expect(getPartyExpLeft(partyExp)).toBe(expToNextLevel - partyExp);

})

test("maxPartyMembers", () => {
    expect(maxPartyMembers(100)).toBe(200);
    expect(maxPartyMembers(300)).toBe(310);
    expect(maxPartyMembers(100000)).toBe(4970);
    expect(maxPartyMembers(1)).toBe(60);
    expect(maxPartyMembers(5000)).toBe(1140);  
})

test("partyBonus", () => {
    expect(partyBonus(100)).toBe(5);
    expect(partyBonus(300)).toBe(7);
    expect(partyBonus(100000)).toBe(124);
    expect(partyBonus(1)).toBe(1);
    expect(partyBonus(5000)).toBe(28);
})

test("getFactoryLvl", () => {
    expect(getFactoryLevel(100, true)).toBe(1650);
    expect(getFactoryLevel(300, true)).toBe(2650);
    expect(getFactoryLevel(100000, true)).toBe(41450);
    expect(getFactoryLevel(1, true)).toBe(500);
    expect(getFactoryLevel(5000, true)).toBe(9550);
})

test("getFactoryExp", () => {
    let exp = 4000
    let level = getFactoryLevel(exp);
    expect(getFactoryExp(level)).toBe(exp);
    exp = 40000
    level = getFactoryLevel(exp);
    expect(getFactoryExp(level)).toBe(exp);
    exp = 100000
    level = getFactoryLevel(exp);
    expect(getFactoryExp(level)).toBe(exp);
    exp = 200
    level = getFactoryLevel(exp);
    expect(getFactoryExp(level)).toBe(exp);
    exp = 3000003
    level = getFactoryLevel(exp);
    expect(getFactoryExp(level)).toBe(exp);
})

test("getFactoryExpLeft", () => {
    let factoryExp = 4000;
    let factoryLevel = getFactoryLevel(factoryExp);
    let expToNextLevel = getFactoryExp(factoryLevel + 1);
    expect(getFactoryExpLeft(factoryExp)).toBe(expToNextLevel - factoryExp);
    factoryExp = 699999;
    factoryLevel = getFactoryLevel(factoryExp);
    expToNextLevel = getFactoryExp(factoryLevel + 1);
    expect(getFactoryExpLeft(factoryExp)).toBe(expToNextLevel - factoryExp);
    factoryExp = 9999999;
    factoryLevel = getFactoryLevel(factoryExp);
    expToNextLevel = getFactoryExp(factoryLevel + 1);
    expect(getFactoryExpLeft(factoryExp)).toBe(expToNextLevel - factoryExp);
    factoryExp = 10;
    factoryLevel = getFactoryLevel(factoryExp);
    expToNextLevel = getFactoryExp(factoryLevel + 1);
    expect(getFactoryExpLeft(factoryExp)).toBe(expToNextLevel - factoryExp);
})