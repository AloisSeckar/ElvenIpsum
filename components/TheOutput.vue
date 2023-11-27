<template>
  <div v-for="paragraph in ipsum?.paragraphs" :key="paragraph" class="output">
    {{ paragraph }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  ipsum?: IpsumResults
}>()
</script>
