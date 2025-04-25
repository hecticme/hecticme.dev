<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const email = 'hi@hecticme.dev'
const socialLinks = [
  {
    href: 'https://github.com/hecticme',
    iconName: 'mingcute:github-line',
  },
  {
    href: 'https://x.com/ngminh_me',
    iconName: 'mingcute:social-x-line',
  },
  {
    href: 'https://bsky.app/profile/hecticme.dev',
    iconName: 'mingcute:bluesky-social-line',
  },
]

const copyTimeout = ref<ReturnType<typeof setTimeout> | null>(null)
async function copyEmail() {
  await navigator.clipboard.writeText(email)

  if (copyTimeout.value !== null) {
    clearTimeout(copyTimeout.value)
    copyTimeout.value = null
  }

  copyTimeout.value = setTimeout(() => {
    copyTimeout.value = null
  }, 1000)
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <div class="border border-zinc-300 dark:border-zinc-700 border-dashed flex items-center gap-1.5 px-2 py-1 bg-prototype">
      <a
        class="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
        :href="`mailto:${email}`"
      >
        {{ email }}
      </a>
      <button
        class="grid"
        @click="copyEmail"
      >
        <Transition>
          <Icon
            v-if="!copyTimeout"
            class="w-4 h-4 row-span-full col-span-full"
            icon="ph:copy-simple-duotone"
          />
          <Icon
            v-else
            class="w-4 h-4 row-span-full col-span-full"
            icon="ph:check-square-duotone"
          />
        </Transition>
      </button>
    </div>

    <div class="flex gap-2">
      <a
        v-for="(link, index) of socialLinks"
        :key="index"
        class="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
        :href="link.href"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Icon
          class="w-5 h-5"
          :icon="link.iconName"
        />
      </a>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 150ms var(--default-transition-timing-function),
    scale 150ms var(--default-transition-timing-function);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  scale: 0.4;
}
</style>
