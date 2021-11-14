import Router from 'koa-router';

const menu = new Router();

menu.get('/', ctx => {
  ctx.status = 201;
  ctx.body = 'menu!';
});

menu.post('/', ctx => {
  ctx.status = 201;
  ctx.body = 'menu-post!';
});

menu.put('/', ctx => {
  ctx.status = 201;
  ctx.body = 'menu-put!';
});

menu.patch('/', ctx => {
  ctx.status = 201;
  ctx.body = 'menu-patch!';
});

menu.delete('/', ctx => {
  ctx.status = 201;
  ctx.body = 'menu-delete!';
});

export default menu;
