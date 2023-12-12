export type IpsumOptions = {
  paragraphs?: number,
  minSentences?: number,
  maxSentences?: number,
  minWords?: number,
  maxWords?: number
}

export type NormalizedIpsumOptions = {
  paragraphs: number,
  minSentences: number,
  maxSentences: number,
  minWords: number,
  maxWords: number
}

export type IpsumResults = {
  paragraphs: string[]
}
