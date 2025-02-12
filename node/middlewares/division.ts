export async function division(ctx: Context, next: () => Promise<any>) {
  const {a, b} = ctx.query;

  ctx.body = {
    result: Number(a) / Number(b)
  }

  next();
}


