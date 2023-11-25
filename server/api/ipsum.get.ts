import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const { data } = await client
    .from('elrh_elven_words')
    .select('word')
    .order('word', { ascending: true })

  let sentence = ''
  if (data) {
    for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
      if (sentence) {
        sentence += ' '
      }
      sentence += data[Math.floor(Math.random() * data?.length || 0)]?.word
    }
  }

  return {
    sentence
  }
})
