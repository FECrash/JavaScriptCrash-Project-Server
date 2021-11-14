import Router from 'koa-router';
import user from './user';
import menu from './menu';
import store from './store';
import admin from './admin';

const router = new Router();

router.use('/user', user.routes());
router.use('/menu', menu.routes());
router.use('/store', store.routes());
router.use('/admin', admin.routes());

export default router;
