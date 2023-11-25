<template>
  <div class="content">
    <img
      src="/logo.webp"
      class="logo shadow"
      alt="Elven Ipsum - Lorem ipsum with Elvish words"
      title="Elven Ipsum - Lorem ipsum with Elvish words"
    >
    <div class="box shadow">
      <button @click="generate">
        Generate
      </button>
    </div>
    <div class="box shadow">
      {{ ipsum }}
    </div>
    <div>
      &copy; {{ new Date().getFullYear() }}
      <a href="https://alois-seckar.cz">Alois Sečkár</a>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Elven Ipsum',
  meta: [
    { name: 'description', content: 'Lorem ipsum with Elvish words' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const ipsum = ref('')
const generate = async () => {
  const { data } = await useFetch('/api/ipsum')
  if (data.value?.sentence) {
    ipsum.value = data.value?.sentence
  }
}
</script>

<style>
.content {
  margin: 2em;
  text-align: center;
}
.logo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.box {
  border: 1px solid black;
  border-radius: 2em;
  margin: 2em auto;
  padding: 1em;
}
.shadow {
  box-shadow: 0 0 50px 12px black;
}
</style>
