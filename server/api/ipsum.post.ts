import type { IpsumOptions } from '@/utils/types'

export default defineEventHandler(async (event) => {
  const options: IpsumOptions = await readBody(event)
  options.paragraphs = normalizeOption(options.paragraphs, 5, 100)
  options.minSentences = normalizeOption(options.minSentences, 5, 20)
  options.maxSentences = normalizeOption(options.maxSentences, 10, 20)
  options.minWords = normalizeOption(options.minWords, 5, 20)
  options.maxWords = normalizeOption(options.maxWords, 15, 50)

  if (options.minSentences > options.maxSentences || options.minWords > options.maxWords) {
    throw new Error('Invalid options - min cannot be more than max')
  }

  return await generateIpsum(event, options)
})
