const utils = require('../../constants/utils');

const placeConfig = (bets, raceResult) => {
  const pBet = bets.filter(c => c.indexOf('Bet:P') > -1);
  const resultArr = raceResult.split(':');

  const betsAmountTotal =
    (utils.sum(pBet.map(c => Number(c.substr(8)))) / 3) * 0.88;

  const filterData = (data, searchTerm) =>
    data
      .filter(c => c.substring(6, 7) === searchTerm)
      .map(c => Number(c.substr(8)));

  const placeList = [1, 2, 3].map(index => filterData(pBet, resultArr[index]));

  const subTotal = placeList.map(i => utils.sum(i));

  const formatter = (data, total, subTotal) =>
    `Place:${data}:$${Math.round((total * 100) / subTotal) / 100}`;

  const result = [0, 1, 2]
    .map((index) => {
      const tempArr = [];
      tempArr.push(resultArr[index + 1], betsAmountTotal, subTotal[index]);
      return tempArr;
    })
    .map(item => formatter(item[0], item[1], item[2]));

  return result;
};

module.exports = placeConfig;
