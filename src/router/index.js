import healthController from 'health/controllers/health-controller';
import Router from '@koa/router';

// Initialize Koa router.
const router = new Router();

// Register routes.
healthController(router);

export default router;
