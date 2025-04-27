import { ref, computed, watch } from 'vue'
import { LOCAL_STORAGE_THEME_KEY } from '~/constants/storage'

function getInitialThemeIndex(themes: Array<string>) {
  const storageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
  if (!storageTheme) {
    return 0
  }

  const storageThemeIndex = themes.indexOf(storageTheme)
  return storageThemeIndex === -1
    ? 0
    : storageThemeIndex
}

export function useColorTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const possibleThemes = [
    'system',
    'light',
    'dark',
  ]
  const maxThemeIndex = possibleThemes.length - 1
  const currentThemeIndex = ref(getInitialThemeIndex(possibleThemes))
  const selectedTheme = computed(() => possibleThemes[currentThemeIndex.value])

  function nextTheme() {
    if (currentThemeIndex.value === maxThemeIndex) {
      currentThemeIndex.value = 0
      localStorage.removeItem(LOCAL_STORAGE_THEME_KEY)
    } else {
      currentThemeIndex.value += 1
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, selectedTheme.value)
    }
  }

  watch(
    currentThemeIndex,
    newThemeIndex => {
      if (newThemeIndex === 0 && prefersDark) {
        document.documentElement.classList.add('dark')
        return
      }

      switch (newThemeIndex) {
        case 0:
          document.documentElement.classList.remove(...possibleThemes)
          break
        case 1:
          document.documentElement.classList.remove('dark')
          break
        case 2:
          document.documentElement.classList.add('dark')
          break
      }
    },
    {
      immediate: true,
    }
  )

  return {
    nextTheme,
    selectedTheme,
    currentThemeIndex,
  }
}
