import Router from 'koa-router';

const store = new Router();

store.get('/', ctx => {
  ctx.status = 201;
  ctx.body = 'store!';
});

store.post('/', ctx => {
  ctx.status = 201;
  ctx.body = 'store-post!';
});

store.put('/', ctx => {
  ctx.status = 201;
  ctx.body = 'store-put!';
});

store.patch('/', ctx => {
  ctx.status = 201;
  ctx.body = 'store-patch!';
});

store.delete('/', ctx => {
  ctx.status = 201;
  ctx.body = 'store-delete!';
});

export default store;
