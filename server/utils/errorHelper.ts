export function handleError (err: unknown) {
  if (err instanceof Error && err.message?.startsWith('Invalid options')) {
    throw createError({ statusCode: 400, statusMessage: err.message })
  } else {
    console.error(err)
    throw createError({ statusCode: 500, statusMessage: 'Something went wrong. Please, try again' })
  }
}
