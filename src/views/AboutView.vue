<script setup lang="ts">
import AppContacts from '~/components/AppContacts.vue'
</script>

<template>
  <div class="size-container">
    <h1 class="text-3xl sm:text-4xl font-semibold tracking-tight">
      Hello!
    </h1>

    <h2 class="mt-5 text-xl sm:text-2xl font-semibold tracking-tight">
      I'm Minh.
    </h2>

    <div class="mt-9 flex flex-col gap-4">
      <p>
        I do web development for a living, mostly on the Frontend. Driven by my obsession with detail, I'm passionate
        about crafting experiences that are engaging, intuitive and accessible.
      </p>

      <p>
        I don't have a specific goal at the moment. I'm simply focused on improving my development skills.
      </p>

      <p>
        Outside of programming, you will most likely see me playing video games. If not, I'm probably just enjoying some
        alone time. The silent helps calm my mind.
      </p>
    </div>

    <div class="mt-9 flex flex-col gap-2">
      <p>You can find me on these platforms</p>
      <AppContacts />
    </div>
  </div>
</template>
