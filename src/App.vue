<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>

<template>
  <div class="bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 flex flex-col min-h-screen">
    <AppHeader />

    <main class="py-10 flex-1">
      <RouterView v-slot="{ Component }">
        <Transition
          mode="out-in"
          name="fade"
        >
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity, translate;
  transition-duration: 150ms;
  transition-timing-function: var(--default-transition-timing-function);
}

.fade-enter-from {
  translate: 0 -0.25rem;
  opacity: 0;
}

.fade-leave-to {
  translate: 0 0.25rem;
  opacity: 0;
}
</style>
