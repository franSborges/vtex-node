export async function multiplication(ctx: Context, next: () => Promise<any>) {
  const {a, b} = ctx.query;

  ctx.body = {
    result: Number(a) * Number(b)
  }

  await next();
}
