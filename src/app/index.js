import 'reflect-metadata';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
<<<<<<< HEAD
=======
import cors from '@koa/cors';
import errorMiddleware from 'app/middlewares/error-middleware';
>>>>>>> be6a81d... Initial commit
import router from 'router';

export default () => {
  const app = new Koa();

  app
<<<<<<< HEAD
    .use(router.routes())
    .use(router.allowedMethods())
    .use(bodyParser());
=======
    .use(cors({
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Origin': '*'
    }))
    .use(bodyParser())
    .use(errorMiddleware)
    .use(router.routes())
    .use(router.allowedMethods());
>>>>>>> be6a81d... Initial commit

  return app;
};
