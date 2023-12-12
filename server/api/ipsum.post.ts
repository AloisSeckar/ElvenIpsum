import type { IpsumOptions } from '@/utils/types'

export default defineEventHandler(async (event) => {
  try {
    const postOptions: IpsumOptions = await readBody(event)
    const options = {
      paragraphs: normalizeOption(postOptions.paragraphs, 5, 100),
      minSentences: normalizeOption(postOptions.minSentences, 5, 20),
      maxSentences: normalizeOption(postOptions.maxSentences, 10, 20),
      minWords: normalizeOption(postOptions.minWords, 5, 20),
      maxWords: normalizeOption(postOptions.maxWords, 15, 50)
    }

    return await generateIpsum(event, options)
  } catch (err) {
    handleError(err)
  }
})
