export function birthdayCakeCandles(candles) {
  const candlesObj = {};
  candles.forEach((c) => {
    if (candlesObj.hasOwnProperty(c)) {
      candlesObj[c] = candlesObj[c] + 1;
    } else {
      candlesObj[c] = 1;
    }
  });

  const candle_list = [];
  Object.keys(candlesObj).forEach((k) => {
    candle_list.push({
      candle: k,
      quantity: candlesObj[k],
    });
  });

  const { quantity } = candle_list
    .sort((a, b) => a.quantity - b.quantity)
    .pop();
  return quantity;
}
