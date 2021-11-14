import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import api from './routes';
import createFakeData from './utils';

require('dotenv').config();

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
    createFakeData();
  })
  .catch(error => {
    console.log(error);
  });

const app = new Koa();
const router = new Router();

router.use('/', api.routes());

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server has been http://localhost:${PORT || 5500} started!`);
});
