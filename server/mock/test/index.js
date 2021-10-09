const Router = require('koa-router');
const router = new Router();

const testData1 = require('./test1.json');
const testData2 = require('./test2.json');

router.get('/test/get', (ctx) => {
  ctx.status = 200;
  ctx.body = testData1;
});

router.post('/test/post', (ctx) => {
  ctx.status = 200;
  ctx.body = testData2;
});

module.exports = router;
