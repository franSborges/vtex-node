export async function generateRandomNumber(ctx: Context, next: () => Promise<any>) {
  const { max } = ctx.vtex.route.params|| {};

  ctx.body = {
    result: Math.floor(Math.random() * Number(max))
  }

  next();
}
