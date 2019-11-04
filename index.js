const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const PORT = 3001;
const router = require('./router');
const app = new Koa();


app
  .use(cors())
  .use(bodyParser())
  .use(router.routes());


app.listen(PORT, () => console.log(`KOA server is running on http://localhost:${PORT}/`));