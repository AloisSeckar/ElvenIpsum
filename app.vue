<template>
  <div class="content">
    <img
      src="/logo.webp"
      class="logo shadow"
      alt="Elven Ipsum - Lorem ipsum with Elvish words"
      title="Elven Ipsum - Lorem ipsum with Elvish words"
    >
    <div class="box shadow">
      <TheInput @generate="generate" />
    </div>
    <div class="box shadow">
      <TheOutput :ipsum="ipsum" />
    </div>
    <div>
      &copy; {{ new Date().getFullYear() }}
      <a href="https://alois-seckar.cz">Alois Sečkár</a>
    </div>
    <UNotifications />
  </div>
</template>

<script setup lang="ts">
import type { IpsumResults } from './utils/types'

useHead({
  title: 'Elven Ipsum',
  meta: [
    { name: 'description', content: 'Lorem ipsum with Elvish words' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const ipsum = ref<IpsumResults>()
const generate = async (options: IpsumOptions) => {
  const { data } = await useFetch('/api/ipsum', { method: 'POST', body: options })
  if (data.value) {
    ipsum.value = data.value
  } else {
    ipsum.value = undefined
  }
}
</script>

<style scoped>
.content {
  margin: 2em;
  text-align: center;
}
.logo {
  margin: auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.box {
  border: 1px solid black;
  border-radius: 2em;
  margin: 2em auto;
  padding: 1em 2em;
}
.shadow {
  box-shadow: 0 0 50px 12px black;
}
</style>
