<script setup lang="ts">
import { useColorTheme } from '~/composables/useColorTheme'
import { Icon } from '@iconify/vue'

const { nextTheme, currentThemeIndex } = useColorTheme()
const themeIcons = {
  system: 'ph:monitor-duotone',
  light: 'ph:sun-duotone',
  dark: 'ph:moon-duotone',
}
</script>

<template>
  <button
    class="grid justify-center items-center overflow-hidden text-base text-zinc-500 hover:text-zinc-700 transition-colors"
    type="button"
    @click="nextTheme"
  >
    <Icon
      v-for="(value, key, index) in themeIcons"
      :key
      class="row-span-full col-span-full transition-[translate,scale]"
      :class="{
        'scale-40': index !== currentThemeIndex,
      }"
      :icon="value"
      :style="{
        translate: `${(index - currentThemeIndex) * 100}%`,
      }"
    />
  </button>
</template>
