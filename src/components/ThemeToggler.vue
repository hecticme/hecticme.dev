<script setup lang="ts">
import { useColorTheme } from '~/composables/useColorTheme'
import { Icon } from '@iconify/vue'

const { nextTheme, selectedTheme } = useColorTheme()
const themeIcons = {
  system: 'ph:monitor-duotone',
  light: 'ph:sun-duotone',
  dark: 'ph:moon-duotone',
}
</script>

<template>
  <button
    class="grid justify-center items-center text-base text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
    type="button"
    @click="nextTheme"
  >
    <Icon
      v-for="(value, key) in themeIcons"
      v-show="selectedTheme === key"
      :key
      class="col-span-full"
      :icon="value"
    />
  </button>
</template>
