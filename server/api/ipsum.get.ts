export default defineEventHandler(async (event) => {
  const options = getOptionsOrDefault(getQuery(event))
  console.log(options)

  const dictionary = await getElvenDictionary(event)

  let sentence = ''
  if (dictionary) {
    for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
      if (sentence) {
        sentence += ' '
      }
      sentence += dictionary[Math.floor(Math.random() * dictionary?.length || 0)]
    }
  }

  return {
    sentence
  }
})
