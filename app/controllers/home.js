const pkginfo = require('../../package.json');
const { BETS, RACE_RESULT } = require('../constants/data');
// const rules = require('../config/pricingRules');

const requireDir = require('require-dir');

const rawRules = requireDir('../config/pricingRules');
const rulesResult = Object.entries(rawRules).map(([key, value]) =>
  value(BETS, RACE_RESULT));

// const spec = require('../spec');

/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - Public
 *     summary: Get API information.
 *     operationId: getApiInfo
 *     responses:
 *       200:
 *         description: Describe general API information
 */
exports.getApiInfo = (ctx) => {
  // BUSINESS LOGIC
  const data = {
    name: pkginfo.name,
    version: pkginfo.version,
    description: pkginfo.description,
    author: pkginfo.author,
  };

  return ctx.res.ok({
    data,
    message: 'Hello, world!',
  });
};

/**
 * @swagger
 * /spec:
 *   get:
 *     tags:
 *       - Public
 *     summary: Get Open API specification.
 *     operationId: getSwaggerSpec
 *     responses:
 *       200:
 *         description: Describe Swagger Open API Specification
 */
exports.getSwaggerSpec = (ctx) => {
  //   ctx.body = spec;
  ctx.body = 'spec';
};

exports.calcRate = (ctx) => {
  ctx.body = JSON.stringify(ctx.request.body);
  const rulesResult1 = Object.entries(rawRules).map(([key, value]) =>
    value(ctx.request.body.BETS, ctx.request.body.RACE_RESULT));

  // reduce to one array
  const rulesResult2 = [...rulesResult1].reduce((a, b) => [...a, ...b]);
  ctx.body = rulesResult2;
  return ctx.res.ok({
    data: rulesResult2,
    message: 'successful!',
  });
};
