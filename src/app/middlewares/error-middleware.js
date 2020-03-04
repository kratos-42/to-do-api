export default async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.status = error.status || 500;
    if (error.status === 500) {
      ctx.body = 'Internal server error';
      ctx.app.emit('error', error, ctx);

      return;
    }

    ctx.body = {
      error: {
        message: error.message,
        properties: error.properties
      }
    };

    ctx.app.emit('error', error, ctx);
  }
};
