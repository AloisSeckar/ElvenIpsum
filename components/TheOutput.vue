<template>
  <div>
    <div v-for="paragraph in ipsum?.paragraphs" :key="paragraph" class="text-justify mt-2 mb-6">
      {{ paragraph }}
    </div>
    <div v-if="!ipsum">
      Your Elven ipsum will appear here after you <strong>Generate</strong> it
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

  navigator.clipboard.writeText(text)
    .then(function () {
      useToast().add({
        title: 'Copied',
        timeout: 1000
      })
    })
    .catch(function (err) {
      useToast().add({
        title: 'Error: ' + err?.message,
        color: 'red',
        timeout: 1000
      })
    })
}
</script>
