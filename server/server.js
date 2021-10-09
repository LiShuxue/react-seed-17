const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');

// require all the mock data
const router = require('./mock');

// Koa part, use koa to start the mock server
const app = new Koa();
app.use(
  cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
    allowHeaders: ['Content-Type'],
  })
);
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

// start the mock server
app.listen(4000, '0.0.0.0', () => {
  console.log('mock server starting...');
});
