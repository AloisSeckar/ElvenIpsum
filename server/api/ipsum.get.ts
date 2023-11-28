export default defineEventHandler(async (event) => {
  const options = getOptionsOrDefault(getQuery(event))

  if (options.minSentences > options.maxSentences || options.minWords > options.maxWords) {
    throw new Error('Invalid options - min cannot be more than max')
  }

  return await generateIpsum(event, options)
})
