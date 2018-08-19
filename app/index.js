const Koa = require('koa');


const app = new Koa();
const PORT = 4000;
const responseHandler = require('./middlewares/responseHandler');
const router = require('./routes');

app.use(responseHandler());

// Bootstrap application router
app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
