const winConfig = (bets, raceResult) => {
  const resultArr = raceResult.split(':');
  const wBet = bets.filter(c => c.indexOf('Bet:W') > -1);
  const wList = wBet.map(c => Number(c.substr(8)));
  const wwList = wBet
    .filter(c => c.substring(6, 7) === resultArr[1])
    .map(b => Number(b.substr(8)));
  const wTotal = wList.reduce((a, b) => a + b, 0);
  const wwTotal = wwList.reduce((a, b) => a + b, 0);
  const wRate = Math.round((wTotal * 100 * 0.85) / wwTotal) / 100;
  const result = [`Win:${resultArr[1]}:$${wRate}`];
  return result;
};

module.exports = winConfig;
