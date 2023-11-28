import type { IpsumOptions } from '@/utils/types'

export function normalizeOption (option: number | undefined, def: number, max: number): number {
  if (!option || isNaN(option)) {
    option = def
  } else if (option < 1) {
    option = 1
  } else if (option > max) {
    option = max
  }
  return option
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
    // TODO easier string to int handling
    paragraphs: normalizeOption(parseInt(query.paragraphs || '-1'), 5, 100),
    minSentences: normalizeOption(parseInt(query.minSentences || '-1'), 5, 20),
    maxSentences: normalizeOption(parseInt(query.maxSentences || '-1'), 10, 20),
    minWords: normalizeOption(parseInt(query.minWords || '-1'), 5, 20),
    maxWords: normalizeOption(parseInt(query.maxWords || '-1'), 15, 50)
  }
}
