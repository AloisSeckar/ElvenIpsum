export function handleError (err: unknown) {
  if (err instanceof Error) {
    throw createError({ statusCode: 400, statusMessage: err.message })
  } else {
    throw createError({ statusCode: 400, statusMessage: 'Something went wrong' })
  }
}
