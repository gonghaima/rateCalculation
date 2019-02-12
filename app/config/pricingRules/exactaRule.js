const utils = require('../../constants/utils');

const exactaConfig = (bets, raceResult) => {
  const eBet = bets.filter(c => c.length === 12);

  const resultArr = raceResult.split(':');
  const eList = eBet.map(c => Number(c.substr(10)));
  const eeList = eBet
    .filter(c =>
      c.substring(6, 7) === resultArr[1] && c.substring(8, 9) === resultArr[2])
    .map(c => Number(c.substr(10)));
  const eTotal = utils.sum(eList);
  const eeTotal = utils.sum(eeList);
  const eRate = (Math.round(((eTotal * 100 * 0.82)) / eeTotal)) / 100;
  const result = [`Exacta:${resultArr[1]},${resultArr[2]}:$${eRate}`];
  return result;
};

module.exports = exactaConfig;
