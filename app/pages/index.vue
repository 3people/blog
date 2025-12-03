<template>
  <div class="py-20 max-w-content mx-auto px-4">
    <h1 class="text-3xl font-bold mb-12 text-text-light-heading dark:text-text-dark-heading">
      Semyeong's Blog
    </h1>

    <div class="space-y-12">
      <NuxtLink v-for="post in posts" :key="post.path" :to="post.path" class="group block">
        <article>
          <div class="text-text-light-muted dark:text-text-dark-muted text-sm mb-2 font-mono">
            {{ post.date }}
          </div>
          <h2
            class="text-xl font-semibold mb-3 text-text-light-heading dark:text-text-dark-heading group-hover:text-accent transition-colors"
          >
            {{ post.title }}
          </h2>
          <p class="text-text-light-body dark:text-text-dark-body leading-relaxed">
            {{ post.description }}
          </p>
        </article>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Post {
  path: string
  title: string
  date: string
  description?: string
}

const {data: posts} = await useAsyncData('posts', async () => {
  const items = await queryCollection('content').all()
  return (items as unknown as Post[]).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
})
</script>
