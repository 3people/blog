<template>
  <div class="min-h-screen bg-base">
    <header class="sticky top-0 z-50 bg-base/80 backdrop-blur-md w-full">
      <nav class="w-full px-4 py-4 flex items-center justify-end">
        <ThemeToggle />
      </nav>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
