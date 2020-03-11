export default router => {
  router.get('GET /health', '/health', ctx => {
    ctx.body = { message: 'OK' };
  });
}
