import Router from 'koa-router';

const admin = new Router();

admin.get('/', ctx => {
  ctx.status = 201;
  ctx.body = 'admin!';
});

admin.post('/', ctx => {
  ctx.status = 201;
  ctx.body = 'admin-post!';
});

admin.put('/', ctx => {
  ctx.status = 201;
  ctx.body = 'admin-put!';
});

admin.patch('/', ctx => {
  ctx.status = 201;
  ctx.body = 'admin-patch!';
});

admin.delete('/', ctx => {
  ctx.status = 201;
  ctx.body = 'admin-delete!';
});

export default admin;
