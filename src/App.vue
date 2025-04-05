<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
</script>

<template>
  <div class="bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 min-h-screen">
    <AppHeader />

    <main class="size-container py-10">
      <RouterView />
    </main>
  </div>
</template>
