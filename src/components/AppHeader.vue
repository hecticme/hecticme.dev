<script setup lang="ts">
import { routes } from '~/router'

import ThemeToggler from '~/components/ThemeToggler.vue'
</script>

<template>
  <header class="border-b border-b-zinc-300 dark:border-b-zinc-700 border-dashed">
    <div class="size-container py-4 flex justify-between gap-2 text-sm font-medium">
      <div class="flex gap-6">
        <RouterLink
          v-for="(item, index) of routes"
          :key="index"
          active-class="text-zinc-700 dark:text-zinc-300"
          class="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
          :to="item.path"
        >
          {{ item.label }}
        </RouterLink>
      </div>

      <div class="flex gap-6">
        <ThemeToggler />
      </div>
    </div>
  </header>
</template>
