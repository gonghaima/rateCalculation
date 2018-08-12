import { raceResult, bets } from "./inputData";

const wBet = bets.filter(c => c.indexOf("Bet:W") > -1);
const pBet = bets.filter(c => c.indexOf("Bet:P") > -1);
const eBet = bets.filter(c => c.length == 12);

let resultArr = raceResult.split(":");
resultArr.shift();

//Win-start
const wList = wBet.map(c => Number(c.substr(8)));
const wwList = wBet
  .filter(c => c.substring(6, 7) === resultArr[0])
  .map(c => Number(c.substr(8)));
const wTotal = wList.reduce((a, b) => {
  return a + b;
}, 0);
const wwTotal = wwList.reduce((a, b) => {
  return a + b;
}, 0);
const wRate = (wTotal * 0.85) / wwTotal;
//Win-end

//Place-start
const pList = pBet.map(c => Number(c.substr(8)));
const p1 = pBet
  .filter(c => c.substring(6, 7) === resultArr[0])
  .map(c => Number(c.substr(8)));
const p2 = pBet
  .filter(c => c.substring(6, 7) === resultArr[1])
  .map(c => Number(c.substr(8)));
const p3 = pBet
  .filter(c => c.substring(6, 7) === resultArr[2])
  .map(c => Number(c.substr(8)));
const p1Total = p1.reduce((a, b) => {
  return a + b;
}, 0);
const p2Total = p2.reduce((a, b) => {
  return a + b;
}, 0);
const p3Total = p3.reduce((a, b) => {
  return a + b;
}, 0);

const pTotal =
  (pList.reduce((a, b) => {
    return a + b;
  }, 0) /
    3) *
  0.888;
const pRate1 = pTotal / p1Total;
const pRate2 = pTotal / p2Total;
const pRate3 = pTotal / p3Total;
//Place-end


//Exacta-start
const eList = eBet.map(c => Number(c.substr(10)));
const eeList = eBet
  .filter(c => c.substring(6, 7) === resultArr[0] && c.substring(8, 9) === resultArr[1])
  .map(c => Number(c.substr(10)));
const eTotal = eList.reduce((a, b) => {
  return a + b;
}, 0);
const eeTotal = eeList.reduce((a, b) => {
  return a + b;
}, 0);
const eRate = (eTotal * 0.82) / eeTotal;


const stdOut = `Win:${resultArr[0]}:\$${wRate}\n
Place:${resultArr[0]}:\$${pRate1}\n
Place:${resultArr[1]}:\$${pRate2}\n
Place:${resultArr[2]}:\$${pRate3}\n
Exacta:${resultArr[0],resultArr[1]}:\$${eRate}`
console.log(stdOut);

