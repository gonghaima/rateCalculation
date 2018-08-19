const placeConfig = (bets, raceResult) => {
  const pBet = bets.filter(c => c.indexOf('Bet:P') > -1);
  const resultArr = raceResult.split(':');

  const pList = pBet.map(c => Number(c.substr(8)));
  const p1 = pBet
    .filter(c => c.substring(6, 7) === resultArr[1])
    .map(c => Number(c.substr(8)));
  const p2 = pBet
    .filter(c => c.substring(6, 7) === resultArr[2])
    .map(c => Number(c.substr(8)));
  const p3 = pBet
    .filter(c => c.substring(6, 7) === resultArr[3])
    .map(c => Number(c.substr(8)));
  const p1Total = p1.reduce((a, b) => a + b, 0);
  const p2Total = p2.reduce((a, b) => a + b, 0);
  const p3Total = p3.reduce((a, b) => a + b, 0);

  const pTotal =
      (pList.reduce((a, b) => a + b, 0) /
        3) *
      0.88;

  const pRate1 = `Place:${resultArr[1]}:$${Math.round((pTotal * 100) / p1Total) / 100}`;
  const pRate2 = `Place:${resultArr[2]}:$${Math.round((pTotal * 100) / p2Total) / 100}`;
  const pRate3 = `Place:${resultArr[3]}:$${Math.round((pTotal * 100) / p3Total) / 100}`;
  // const result = `\nPlace:${resultArr[1]}:$${pRate1}\nPlace:${resultArr[2]}:$${pRate2}\nPlace:${resultArr[3]}:$${pRate3}`;
  const result = [pRate1, pRate2, pRate3];
  return result;
};

module.exports = placeConfig;
