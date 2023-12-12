# Elven Ipsum
Lorem ipsum with Elvish words

Available at https://elven-ipsum.netlify.app/

## Usage
Hit `Generate` button to get a pure random and nonsensical text built from elvish words of [Quenya](https://en.wikipedia.org/wiki/Quenya) language.

You can use number inputs to adjust parameters:
* Paragraphs - total number of generated paragraphs `(min: 1, default: 5, max: 100)`
* Min sentences in paragraph - the smallest possible number of sentences (ended with `.`) in one paragraph. The actual number is randomized for each paragraph between min and max value `(min: 1, default: 5, max: 20)`
* Max sentences in paragraph - the largest possible number of sentences (ended with `.`) in one paragraph. The actual number is randomized for each paragraph between min and max value `(min: 1, default: 5, max: 20)`
* Min words in sentence - the smallest possible number of words (separated with space) in one sentence. The actual number is randomized for each sentence between min and max value `(min: 1, default: 5, max: 20)`
* Max words in sentence - the largest possible number of words (separated with space) in one sentence. The actual number is randomized for each sentence between min and max value `(min: 1, default: 5, max: 50)`

Minimum value can't be set higher than respective maximum value.

## API

The service is also available directly at https://elven-ipsum.netlify.app/api/ipsum accepting both GET and POST requests.

The parameters object is of following structure:

```ts
type IpsumOptions = {
  paragraphs?: number,
  minSentences?: number,
  maxSentences?: number,
  minWords?: number,
  maxWords?: number
}
```

Refer to `Usage` for exact meaning and possible values.

All values are optional. Empty options, invalid values and values out of possible bounds are ignored and the default will be used. If a minimum is provided higher than respective maximum a `401` error is thrown.

### Configuring GET request
Parameters can be passed as query parameters, e.g. `/api/ipsum?paragraphs=20`.

### Configuring POST request
Set request payload to an object of `IpsumOptions` data type.

### Response
Providing the request is valid, data are returned as an array of strings under `paragraphs` key:
```ts
type IpsumResults = {
  paragraphs: string[]
}
```
The number of results returned and their structure depends on the input parameters (or defaults).

 ## Troubleshooting
In case something went wrong, feel free to [open an issue here](https://github.com/AloisSeckar/ElvenIpsum/issues) or contact me directly.
