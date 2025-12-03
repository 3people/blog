<template>
  <main class="max-w-content mx-auto px-4 py-20">
    <article v-if="page" class="prose dark:prose-invert max-w-none">
      <header class="mb-12 not-prose">
        <p class="text-text-light-muted dark:text-text-dark-muted text-sm mb-2 font-mono">
          {{ page.date }}
        </p>
        <h1 class="text-3xl font-bold text-text-light-heading dark:text-text-dark-heading">
          {{ page.title }}
        </h1>
      </header>
      <ContentRenderer :value="page" />
    </article>
    <div v-else class="py-20 text-center">
      <h1 class="text-2xl text-text-light-heading dark:text-text-dark-heading">
        페이지를 찾을 수 없습니다
      </h1>
    </div>
  </main>
</template>

<script setup lang="ts">
interface Page {
  path: string
  title: string
  date: string
  description?: string
  body: unknown
}

const route = useRoute()
const {data: page} = await useAsyncData(`page-${route.path}`, async () => {
  const item = await queryCollection('content').path(route.path).first()
  return item as unknown as Page | null
})
</script>
