const pkginfo = require('../../package.json');

const requireDir = require('require-dir');

const fs = require('fs');

const rawRules = requireDir('../config/pricingRules');

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
    message: 'Healthy!',
  });
};


exports.getSwaggerSpec = (ctx) => {
  ctx.body = JSON.parse(fs.readFileSync('app/openapi.json', 'utf8'));
};

exports.calcRate = (ctx) => {
  const resultArray = Object.entries(rawRules).map(([key, value]) =>
    value(ctx.request.body.BETS, ctx.request.body.RACE_RESULT));

  const formatResult = [...resultArray].reduce((a, b) => [...a, ...b]);
  return ctx.res.ok({
    data: formatResult,
    message: 'successful!',
  });
};
