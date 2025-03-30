<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
</script>

<template>
  <div class="bg-neutral-900 min-h-screen">
    <AppHeader />

    <main class="size-container py-10">
      <RouterView />
    </main>
  </div>
</template>
