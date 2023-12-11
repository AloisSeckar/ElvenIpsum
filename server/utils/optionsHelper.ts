import type { IpsumOptions } from '@/utils/types'

export function normalizeOption (option: string | number | undefined, def: number, max: number): number {
  let optionValue = option ? (typeof option === 'string' ? parseInt(option) : option) : NaN
  if (isNaN(optionValue)) {
    optionValue = def
  } else if (optionValue < 1) {
    optionValue = 1
  } else if (optionValue > max) {
    optionValue = max
  }
  return optionValue
}

type QueryObject = {
  paragraphs?: string,
  minSentences?: string,
  maxSentences?: string,
  minWords?: string,
  maxWords?: string
}

export function getOptionsOrDefault (query: QueryObject): IpsumOptions {
  return {
    paragraphs: normalizeOption(query.paragraphs, 5, 100),
    minSentences: normalizeOption(query.minSentences, 5, 20),
    maxSentences: normalizeOption(query.maxSentences, 10, 20),
    minWords: normalizeOption(query.minWords, 5, 20),
    maxWords: normalizeOption(query.maxWords, 15, 50)
  }
}
