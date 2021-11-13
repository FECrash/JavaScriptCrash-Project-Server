import Koa from 'koa';
import Router from 'koa-router';

const PORT = '5500';

const app = new Koa();
const router = new Router();

router.get('/', ctx => {
  ctx.body = '바닐라 앱 서버';
});

app.use(router.routes());

app.listen(PORT, () => {
  console.log(`Server has been http://localhost:${PORT || 5500} started!`);
});
