import type { H3Event, EventHandlerRequest } from 'h3'
import { serverSupabaseClient } from '#supabase/server'

let elvenDictionary: string[] = []

export async function getElvenDictionary (event: H3Event<EventHandlerRequest>): Promise<string[]> {
  if (elvenDictionary.length === 0) {
    console.debug('reloading words from DB')
    const client = await serverSupabaseClient(event)
    const { data } = await client
      .from('elrh_elven_words')
      .select('word')
      .order('word', { ascending: true })

    if (data) {
      elvenDictionary = data.map(w => w.word as string)
    }
  }

  return elvenDictionary
}
