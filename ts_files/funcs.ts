export const getCurrentLvl = (y:number, round?:boolean) => {
    if(y>0) {
      if(round) return Math.floor((((Math.sqrt(100 * (3 * y) + 25) + 50) / 100) * 0.3))
      return (((Math.sqrt(100 * (3 * y) + 25) + 50) / 100) * 0.3)
    } 
    return 1
  };
  
export const getLvlToExp = (x:number) => {
  if (x>0) return Math.round(((((((x/0.3)*100)-50)**2)-25)/300))
  return 1
};


export const qtyTroops = (coordination:number) => {
  if(coordination/20<1 && coordination<1){
    return 1;
  }
  return Math.floor(coordination/20);
};

export const getDamage = (level:number, strength:number, troops:number, ) => {
  if(strength<1 || troops<1 || level<1){
    return 1;
  }
  return Math.floor((strength/13)+troops+(level/15));
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

export const expPerWork = (level:number, education:number) => {
  const value = Math.floor((education/13 + level/15))
  if (value > 1) return value;
  return 1;
}

export const costGun = (factoryLvl:number, pMissiles:number) => {
  return parseFloat(((pMissiles*(6+22+8))*(1-(factoryLvl/1000))).toFixed(2))
}

export const lvlStatSecs = (strenght:number, education:number) => {
  if (strenght > 150) return ((strenght*2.5)*(strenght/200)-(education/2))*60
  return (strenght/2)*60
}

export const productionResources = (resourceType:string, level:number, education:number, factoryLvl:number) => {
  console.log('entra en la ecuacion almenos')
  if (resourceType==="diamond") {
    const result = Math.floor((level/30)+(education/35)+ (factoryLvl/30))
    if (result > 1) return result;
    return 1;
  }
  const naturalResources = ["iron", "coal", "oil", "water"]
  if (naturalResources.includes(resourceType) ) {
    const result = Math.floor((level/3)+(education/4)+ (factoryLvl/3))
    if (result > 1) return result;
    return 1;
  }
  if (resourceType==="lithium") {
    const result = Math.floor((level/10)+(education/15)+ (factoryLvl/10))
    if (result > 1) return result;
    return 1;
  }
  if (resourceType==="uranium") {
    const result = Math.floor((level/9)+(education/14)+ (factoryLvl/9))
    if (result > 1) return result;
    return 1;
  }
  const airWeapons = ["missile", "jet"]
  if (airWeapons.includes(resourceType) ) {
    console.log('entro a las armas estas')
    const result = Math.floor((level/20)+(education/25)+ (factoryLvl/20))
    if (result > 1) return result;
    return 1;
  }
  if (resourceType==="infantry") {
    const result = Math.floor((level/25)+(education/30)+ (factoryLvl/25))
    if (result > 1) return result;
    return 1;
  }
  if (resourceType==="tank") {
    const result = Math.floor((level/17)+(education/22)+ (factoryLvl/17))
    if (result > 1) return result;
    return 1;
  }
}
