import Router from 'koa-router';

const user = new Router();

user.get('/', ctx => {
  ctx.status = 201;
  ctx.body = 'user!';
});

user.post('/', ctx => {
  ctx.status = 201;
  ctx.body = 'user-post!';
});

user.put('/', ctx => {
  ctx.status = 201;
  ctx.body = 'user-put!';
});

user.patch('/', ctx => {
  ctx.status = 201;
  ctx.body = 'user-patch!';
});

user.delete('/', ctx => {
  ctx.status = 201;
  ctx.body = 'user-delete!';
});

export default user;
