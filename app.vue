<script setup lang="ts">
useSeoMeta({
  title: 'Portfolio',
})

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Pipusana` : 'Pipusana';
  }
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
