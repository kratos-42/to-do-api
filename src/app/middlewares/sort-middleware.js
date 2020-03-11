export default (ctx, next) => {
  console.log('---', ctx.request);
  const sort = ctx.request.querystring.sort;

  if (sort) {
    ctx.request.options = { name: sort };
  }

  next();
};
