export const getCurrentLvl = (userExp:number, round?:boolean) => {
  const result = (((Math.sqrt(100 * (3 * userExp) + 25) + 50) / 100) * 0.3)
  if (round) return Math.round(result)
  return result
};
  
export const getLvlToExp = (userLvl:number) => {
  if (userLvl>0) return Math.round((((((((userLvl)/0.3)*100)-50)**2)-25)/300))
  return 1
};

export const getExpLeft = (userExp:number) => {
  const expToLvl = getLvlToExp(getCurrentLvl(userExp)+1)
  return expToLvl - userExp
};

export const qtyTroops = (coordination:number) => {
  if(coordination/20<1 && coordination<1){
    return 1;
  }
  return Math.floor(coordination/20);
};

export const getDamage = (terrainType:string, troopsType:string, level:number, strength:number, troops:number, partyBonusType:string, partyBonus:number, militaryBonus:number, warType:string, opponentStateSecurity?:number) => {
  const table = {
    forest: {
      tanks: -15,
      planes: -10,
      infantry: 20,
      missiles: -5
    },
    desert: {
      tanks: 3,
      planes: 3,
      infantry: 5,
      missiles: 2
    }
    marsh: {
      tanks: 5,
      planes: 2,
      infantry: 3,
      missiles: 4
    },
    // Add more terrain types and troop types as needed
  };
  if(strength<1 || troops<1 || level<1){
    return 1;
  }
  let result = Math.floor((strength/13)+troops+(level/15));
  if (partyBonusType === "damage") result += result + partyBonus;
  if (["coupDeEtat", "revolution"].includes(warType)) result *= ( 1 - opponentStateSecurity/100); 
  if (warType === 'statesWar') result *= (1 + militaryBonus/100);

  return result
};

export const reductionProductivity = (coordination:number, pro:boolean, happiness:number) => {
  let result = 0.1 - (coordination/20000)- (0.001*happiness)
  if(pro) return  parseFloat((result  - 0.02).toFixed(3));
  return parseFloat(result.toFixed(3));
}

export const reductionFatigue = (coordination:number, pro:boolean, healthSystem:number) => {
  let result = 0.1 - (coordination/20000) - (0.001*healthSystem)
  if(pro) return  parseFloat((result  - 0.02).toFixed(3));
  return parseFloat(result.toFixed(3));
}

export const expPerWork = (level:number, education:number, regionHigherEducation:number) => {
  let value = Math.floor((education/13 + level/15))
  value = value * (1 + regionHigherEducation/200)
  if (value > 1) return value;
  return 1;
}

export const costGun = (factoryLvl:number, pMissiles:number) => {
  return parseFloat(((pMissiles*(6+22+8))*(1-(factoryLvl/1000))).toFixed(2))
}

export const lvlStatSecs = (strenght:number, education:number, stateEduaction:number) => {
  let result:number;
  if (strenght > 150) result = ((strenght*2.5)*(strenght/200)-(education/2))*60
  result = (strenght/2)*60
  return result * (1-(stateEduaction/100))
}

export const productionResources = (resourceType:string, level:number, education:number, factoryLvl:number, partyBonusType:string, partyBonus:number, regionBasicEducation:number) => {
  const mapValues =(values:number[], keys:string[])=> {
    return Object.fromEntries(keys.map((key)=>{ return [key, values] }))
  }
  const ratios = {
    diamond: [30, 35, 30],
    iron: [3, 4, 3],
    lithium: [10, 15, 10],
    uranium: [9, 14, 9],
    infantry: [25, 30, 25],
    tank: [17, 22, 17],
    ...mapValues([20,25,20], ['missile', 'jet']),
    ...mapValues([3,4,3], ['iron', 'coal', 'oil', 'water']),
  };
  const [levelMod, eduMod, factoryMod] = ratios[resourceType]
  let result = Math.floor((level/levelMod)+(education/eduMod)+ (factoryLvl/factoryMod))
  if (partyBonusType === 'production') result += result * partyBonus
  result += result * (1 + regionBasicEducation/100)
  if (result > 1) return result;
  return 1
}

export const partyCurrentLevel = (partyTotalDamage:number, round?:boolean) => {
  const result = (((Math.sqrt(100 * (3 * partyTotalDamage) + 25) + 50) / 100) * 0.3)*30
  if (result < 1) return 1;
  if(round) return Math.floor(result)
  return result
};

export const getPartyLvlToExp = (partyLvl:number) => {
  if (partyLvl>0) return Math.round((((((((partyLvl/30)/0.3)*100)-50)**2)-25)/300))
  return 1
};

export const getPartyExpLeft = (partyTotalDamage:number) => {
  const expToLvl = getPartyLvlToExp(partyCurrentLevel(partyTotalDamage)+1)
  return expToLvl - partyTotalDamage
};

export const maxPartyMembers = (partyTotalDamage:number) => {
  return Math.floor(partyCurrentLevel(partyTotalDamage, true) * 10)
}

export const partyBonus = (partyTotalDamage:number) => {
  const partyLevel = partyCurrentLevel(partyTotalDamage, true)
  console.log('party level in here', partyLevel)
  return Math.floor(partyLevel * 0.25)
}

export const getFactoryLevel = (factoryExp:number, round?:boolean) => {
  const result = (((Math.sqrt(100 * (3 * factoryExp) + 25) + 50) / 100) * 0.3)*50
  if (round) return Math.round(result)*50
  return result
};
  
export const getFactoryExp = (factoryLevel:number) => {
  if (factoryLevel>0) return Math.round((((((((factoryLevel/50)/0.3)*100)-50)**2)-25)/300))
  return 1
};

export const getFactoryExpLeft = (factoryExp:number) => {
  const expToLvl = getFactoryExp(getFactoryLevel(factoryExp)+1)
  return expToLvl - factoryExp
};
