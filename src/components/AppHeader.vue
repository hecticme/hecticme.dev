<script setup lang="ts">
import { routes } from '~/router'

import ThemeToggler from '~/components/ThemeToggler.vue'
</script>

<template>
  <header class="border-b border-b-zinc-300 dark:border-b-zinc-700 border-dashed bg-prototype">
    <div class="size-container flex justify-between text-sm">
      <div class="border-x border-zinc-300 dark:border-zinc-700 border-dashed px-4 py-4 flex gap-6 font-medium bg-zinc-100 dark:bg-zinc-900">
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

      <div class="border-x border-zinc-300 dark:border-zinc-700 border-dashed px-4 py-4 flex gap-6 bg-zinc-100 dark:bg-zinc-900">
        <ThemeToggler />
      </div>
    </div>
  </header>
</template>
