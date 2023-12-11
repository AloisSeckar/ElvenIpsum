<template>
  <div class="mx-auto max-w-[1100px]" style="box-shadow: none !important;">
    <h1 class="mb-4 text-2xl">
      Customize your Elven ipsum
    </h1>
    <FormKit
      type="form"
      :value="formData"
      :form-class="cssForm"
      submit-label="Generate"
      :submit-attrs="cssSubmit"
      @submit="handle"
    >
      <FormKit
        type="number"
        number="integer"
        name="paragraphs"
        label="Number of paragraphs"
        :min="1"
        :max="100"
        :wrapper-class="cssInput"
      />
      <FormKit
        type="number"
        number="integer"
        name="minSentences"
        label="Min sentences in paragraph"
        :min="1"
        :max="20"
        :wrapper-class="cssInput"
      />
      <FormKit
        type="number"
        number="integer"
        name="maxSentences"
        label="Max sentences in paragraph"
        :min="1"
        :max="20"
        :wrapper-class="cssInput"
      />
      <FormKit
        type="number"
        number="integer"
        name="minWords"
        label="Min words in sentence"
        :min="1"
        :max="20"
        :wrapper-class="cssInput"
      />
      <FormKit
        type="number"
        number="integer"
        name="maxWords"
        label="Max words in sentence"
        :min="1"
        :max="50"
        :wrapper-class="cssInput"
      />
    </FormKit>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  generate: [input: IpsumOptions]
}>()

const cssForm = 'mx-auto flex flex-row items-end gap-x-2'
const cssInput = 'items-center grow'
const cssSubmit = {
  inputClass: 'px-2 font-bold bg-amber-100',
  wrapperClass: 'mb-5 grow-0'
}

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

<style scoped>
.items-start {
  align-items: center;
}
</style>
