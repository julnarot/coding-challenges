export function prepareGifts(gifts) {
    const giftsObj = {};
    gifts.forEach(g=>{giftsObj[g]=g});
    return Object.keys(giftsObj).map(g=>Number(g))
  }