export async function method(ctx: Context, next: () => Promise<any>) {
  if (ctx.method.toUpperCase() !== 'GET') {
    ctx.status = 405
    return
  }

  await next()
}
