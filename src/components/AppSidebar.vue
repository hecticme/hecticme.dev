<script setup lang="ts">
import { displayedRoutes } from '~/router'
import { Icon } from '@iconify/vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'toggleSidebar',
])
</script>

<template>
  <Teleport to="#teleports">
    <Transition>
      <div
        v-if="props.isOpen"
        class="fixed inset-0 z-20 overflow-y-auto px-12 py-8 flex flex-col gap-10 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
      >
        <div class="flex justify-end">
          <button
            aria-label="Close Sidebar"
            type="button"
            @click="emit('toggleSidebar')"
          >
            <Icon
              class="w-6 h-6"
              icon="ph:x"
            />
          </button>
        </div>

        <div class="flex flex-col gap-4">
          <RouterLink
            v-for="(item, index) of displayedRoutes"
            :key="index"
            active-class="text-zinc-700 dark:text-zinc-300"
            class="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
            :to="item.path"
          >
            {{ item.label }}
          </RouterLink>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: transform 250ms var(--default-transition-timing-function);
}

.v-enter-from,
.v-leave-to {
  transform: translateX(-100%);
}
</style>
