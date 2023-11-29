export default defineEventHandler(async (event) => {
  try {
    const options = getOptionsOrDefault(getQuery(event))
    return await generateIpsum(event, options)
  } catch (err) {
    handleError(err)
  }
})
