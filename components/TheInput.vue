<template>
  <FormKit type="form" :value="input" submit-label="Generate" @submit="$emit('generate', input)">
    <FormKit type="number" name="paragraphs" label="Paragraphs" />
    <FormKit type="number" name="minSentences" label="Min sentences in paragraph" />
    <FormKit type="number" name="maxSentences" label="Max sentences in paragraph" />
    <FormKit type="number" name="minWords" label="Min words in sentence" />
    <FormKit type="number" name="maxWords" label="Nax words in sentence" />
  </FormKit>
</template>

<script setup lang="ts">
defineEmits<{
  generate: [input: IpsumOptions]
}>()

const input = ref<IpsumOptions>({
  paragraphs: 5,
  minSentences: 5,
  maxSentences: 10,
  minWords: 5,
  maxWords: 15
})
</script>
