<template>
  <div>
    <div v-for="paragraph in ipsum?.paragraphs" :key="paragraph" class="output">
      {{ paragraph }}
    </div>
    <button v-if="!!ipsum" @click="toClipboard">
      Copy to clipboard
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  ipsum?: IpsumResults
}>()

function toClipboard () {
  let text = ''
  props.ipsum?.paragraphs.forEach((p) => {
    if (text) {
      text += '\n\n'
    }
    text += p
  })

  navigator.clipboard.writeText(text).then(function () {
    console.log('Text successfully copied to clipboard')
    useToast().add({
      title: 'Copied',
      timeout: 1000
    })
  }).catch(function (err) {
    console.error('Error in copying text: ', err)
  })
}
</script>
