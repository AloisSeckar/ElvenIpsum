import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event): Promise<IpsumResults> => {
  const options: IpsumOptions = await readBody(event)

  const client = await serverSupabaseClient(event)
  const { data } = await client
    .from('elrh_elven_words')
    .select('word')
    .order('word', { ascending: true })

  const elvenIpsum: IpsumResults = {
    paragraphs: []
  }
  if (data) {
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
          sentence += data[Math.floor(Math.random() * data?.length || 0)]?.word
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
})

function getRandomIntInclusive (min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function capitalizeFirstLetter (text: string) {
  return text?.charAt(0).toUpperCase() + text?.slice(1)
}
