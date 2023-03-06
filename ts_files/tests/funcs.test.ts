import { getCurrentLvl, getLvlToExp, qtyTroops, getDamage, reductionProductivity, reductionFatigue, expPerWork, costGun, lvlStatSecs, productionResources } from "../funcs";


test("getCurrentLvl", () => {
    expect(getCurrentLvl(4000, true)).toBe(3);
    expect(getCurrentLvl(996389, true)).toBe(52);
    expect(getCurrentLvl(20000, true)).toBe(7);
    expect(getCurrentLvl(2000, true)).toBe(2);
    expect(getCurrentLvl(1000000, true)).toBe(52);
})

test("getExpToLvl", () => {
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

test("qtyTroops", () => {
    expect(qtyTroops(20)).toBe(1);
    expect(qtyTroops(500)).toBe(25);
    expect(qtyTroops(40)).toBe(2);
    expect(qtyTroops(150)).toBe(7);
    expect(qtyTroops(200)).toBe(10);
})

test("getDamage", () => {
    expect(getDamage(3,158,1)).toBe(13);
    expect(getDamage(52,700,25)).toBe(82);
    expect(getDamage(7,400,2)).toBe(33);
    expect(getDamage(2,150,8)).toBe(19);
    expect(getDamage(52,200,10)).toBe(28);
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
    expect(productionResources('diamond',3,1,30)).toBe(1);
    expect(productionResources('water',52,500,20)).toBe(149);
    expect(productionResources('oil',7,20,10)).toBe(10);  
    expect(productionResources('lithium',2,150,10)).toBe(11);
    expect(productionResources('uranium',52,200,1)).toBe(20);
    expect(productionResources('missile',52,200,1)).toBe(10);
    expect(productionResources('jet',52,200,1)).toBe(10);
    expect(productionResources('infantry',52,200,1)).toBe(8);
    expect(productionResources('tank',52,200,1)).toBe(12);
})