import Router from '@koa/router';
import healthController from 'health/controllers/health-controller';
import toDoController from 'to-do/controllers/to-do-controller';

// Initialize Koa router.
const router = new Router();

// Register routes.
healthController(router);
toDoController(router);

export default router;
