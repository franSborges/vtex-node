export async function generateRandomNumber(ctx: Context, next: () => Promise<any>) {
  const { max } = ctx.params;

  ctx.body = {
    result: Math.floor(Math.random() * max)
  }

  next();
}
