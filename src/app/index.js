import 'reflect-metadata';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import router from 'router';

export default () => {
  const app = new Koa();

  app
    .use(router.routes())
    .use(router.allowedMethods())
    .use(bodyParser());

  return app;
};
