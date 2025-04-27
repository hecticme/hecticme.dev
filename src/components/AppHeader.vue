<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { displayedRoutes } from '~/router'

import { Icon } from '@iconify/vue'
import ThemeToggler from '~/components/ThemeToggler.vue'
import AppSidebar from '~/components/AppSidebar.vue'

const isOpen = ref(false)
function toggleSidebar(shouldOpen?: boolean) {
  isOpen.value = typeof shouldOpen === 'boolean'
    ? shouldOpen
    : !isOpen.value
}

const router = useRouter()
router.afterEach(() => {
  toggleSidebar(false)
})
</script>

<template>
  <header class="border-b border-b-zinc-300 dark:border-b-zinc-700 border-dashed bg-prototype">
    <div class="size-container flex justify-between text-sm">
      <div class="border-x border-zinc-300 dark:border-zinc-700 border-dashed px-4 py-4 flex gap-6 font-medium bg-zinc-100 dark:bg-zinc-900">
        <RouterLink
          v-for="(item, index) of displayedRoutes"
          :key="index"
          active-class="text-zinc-700 dark:text-zinc-300"
          class="hidden md:inline text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
          :to="item.path"
        >
          {{ item.label }}
        </RouterLink>

        <button
          aria-label="Open Sidebar"
          class="md:hidden"
          @click="toggleSidebar()"
        >
          <Icon icon="ph:list-bold" />
        </button>
      </div>

      <div class="border-x border-zinc-300 dark:border-zinc-700 border-dashed px-4 py-4 flex gap-6 bg-zinc-100 dark:bg-zinc-900">
        <ThemeToggler />
      </div>
    </div>

    <AppSidebar
      :is-open="isOpen"
      @toggle-sidebar="toggleSidebar"
    />
  </header>
</template>
