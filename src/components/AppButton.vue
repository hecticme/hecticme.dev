<script setup lang="ts">
import {
  type HTMLAttributes,
  type PropType,
  computed,
} from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  asLink: {
    type: Boolean,
    required: false,
    default: false,
  },
  contentClass: {
    type: [
      String,
      Object,
      Array,
    ] as PropType<HTMLAttributes['class']>,
    required: false,
    default: '',
  },
})

const componentToRender = computed(
  () => props.asLink
    ? RouterLink
    : 'button'
)
</script>

<template>
  <component
    :is="componentToRender"
    class="group inline-block border border-zinc-300 dark:border-zinc-700 px-4 py-1 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
  >
    <span class="grid overflow-hidden">
      <span
        class="row-span-full col-span-full group-hover:-translate-y-full transition-[translate]"
        :class="props.contentClass"
      >
        <slot />
      </span>
      <span
        aria-hidden="true"
        class="row-span-full col-span-full translate-y-full group-hover:translate-none transition-[translate]"
        :class="props.contentClass"
      >
        <slot />
      </span>
    </span>
  </component>
</template>
