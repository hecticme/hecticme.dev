<script setup lang="ts">
import { routes } from '~/router'

import ThemeToggler from '~/components/ThemeToggler.vue'
</script>

<template>
  <header class="border-b border-b-neutral-700">
    <div class="size-container py-4 flex justify-between gap-2 text-sm font-medium">
      <div class="flex gap-6">
        <RouterLink
          v-for="(item, index) of routes"
          :key="index"
          class="text-zinc-500 hover:text-zinc-300 transition-colors"
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
