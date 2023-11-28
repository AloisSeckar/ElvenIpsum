import type { H3Event, EventHandlerRequest } from 'h3'
import { serverSupabaseClient } from '#supabase/server'

let elvenDictionary: string[] = []

export async function getElvenDictionary (event: H3Event<EventHandlerRequest>) {
  if (elvenDictionary.length === 0 || await cacheExpired()) {
    console.debug('Fetching dictionary from DB')
    const client = await serverSupabaseClient(event)
    const { data } = await client
      .from('elrh_elven_words')
      .select('word')
      .order('word', { ascending: true })

    if (data) {
      elvenDictionary = data.map(w => w.word as string)
      await useStorage().setItem('lastFetch', new Date().toISOString())
    }
  }

  return elvenDictionary
}

async function cacheExpired () {
  console.debug('check for cache')
  const lastFetch = await useStorage().getItem<string>('lastFetch')
  console.debug('value = ' + lastFetch)
  if (lastFetch) {
    const oneHour = 2 * 1000 * 60 * 60
    const now = new Date()
    return now.getTime() - new Date(lastFetch).getTime() > oneHour
  }
  return true
}
