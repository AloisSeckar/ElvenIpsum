<template>
  <FormKit type="form" :value="formData" submit-label="Generate" @submit="handle">
    <FormKit type="number" number="integer" name="paragraphs" label="Paragraphs" />
    <FormKit type="number" number="integer" name="minSentences" label="Min sentences in paragraph" />
    <FormKit type="number" number="integer" name="maxSentences" label="Max sentences in paragraph" />
    <FormKit type="number" number="integer" name="minWords" label="Min words in sentence" />
    <FormKit type="number" number="integer" name="maxWords" label="Max words in sentence" />
  </FormKit>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  generate: [input: IpsumOptions]
}>()

const formData = ref({
  paragraphs: 5,
  minSentences: 5,
  maxSentences: 10,
  minWords: 5,
  maxWords: 15
})

function handle (currentData: IpsumOptions) {
  emit('generate', currentData)
}
</script>
