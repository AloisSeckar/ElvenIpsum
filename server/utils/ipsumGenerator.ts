import type { H3Event, EventHandlerRequest } from 'h3'
import type { IpsumResults, NormalizedIpsumOptions } from '@/utils/types'

export async function generateIpsum (event: H3Event<EventHandlerRequest>, options: NormalizedIpsumOptions) {
  if (options.minSentences > options.maxSentences || options.minWords > options.maxWords) {
    throw new Error('Invalid options - min cannot be more than max')
  }

  const dictionary = await getElvenDictionary(event)

  const elvenIpsum: IpsumResults = {
    paragraphs: []
  }
  if (dictionary) {
    for (let p = 0; p < options.paragraphs; p++) {
      let paragraph = ''
      const sentences = getRandomIntInclusive(options.minSentences, options.maxSentences)
      for (let s = 0; s < sentences; s++) {
        let sentence = ''
        const words = getRandomIntInclusive(options.minWords, options.maxWords)
        for (let w = 0; w < words; w++) {
          if (sentence) {
            sentence += ' '
          }
          sentence += dictionary[Math.floor(Math.random() * dictionary?.length || 0)]
        }
        sentence += '.'
        if (paragraph) {
          paragraph += ' '
        }
        paragraph += capitalizeFirstLetter(sentence)
      }
      elvenIpsum.paragraphs.push(paragraph)
    }
  }

  return elvenIpsum
}

function getRandomIntInclusive (min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function capitalizeFirstLetter (text: string) {
  return text?.charAt(0).toUpperCase() + text?.slice(1)
}
