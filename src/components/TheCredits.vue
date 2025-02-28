<template>
  <ul class="list-none text-sky-7 dark:text-sky-6 pl-0 pb-4">
    <li class="inline mr-2">
      <div class="i-tabler-info-circle"></div>
      Created by
      <a :href="siteLink" target="_blank" class="text-sky-9 dark:text-sky-4"
        >Alberto Rico</a
      >
    </li>
    <li class="inline">
      <div class="i-tabler:brand-github"></div>
      Code on
      <a :href="repoLink" target="_blank" class="text-sky-7 dark:text-sky-4"
        >Github</a
      >
    </li>
  </ul>
</template>

<script setup lang="ts">
const siteLink = 'https://alrico.es';
const repoLink = 'https://github.com/alrico88/pressure-converter';
</script>
