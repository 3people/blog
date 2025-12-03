<template>
  <button
    @click="toggle"
    class="px-4 py-2 text-sm font-medium text-text-light-body dark:text-text-dark-body hover:text-accent transition-colors"
  >
    {{ colorMode.preference === 'dark' ? 'light' : 'dark' }}
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

function toggle() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>
