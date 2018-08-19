'use static';

const Router = require('koa-router');
const bodyParser = require('koa-body');
const homeController = require('./controllers/home');

const router = new Router();
router.get('/', homeController.getApiInfo);
router.get('/spec', homeController.getSwaggerSpec);
router.post('/', bodyParser(), homeController.calcRate);
// router.post('/', bodyParser(), (ctx)=>{
//     ctx.body='rerew3224242423432523esf';
// });

module.exports = router;
