<template>
  <div class="py-20 max-w-content mx-auto px-4">
    <h1 class="text-3xl font-bold mb-12 text-text-light-heading dark:text-text-dark-heading">
      Semyeong's Blog
    </h1>
    
    <div class="space-y-12">
      <article v-for="post in posts" :key="post.title" class="group cursor-pointer">
        <div class="text-text-light-muted dark:text-text-dark-muted text-sm mb-2 font-mono">
          {{ post.date }}
        </div>
        <h2 class="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
          {{ post.title }}
        </h2>
        <p class="text-text-light-body dark:text-text-dark-body leading-relaxed">
          {{ post.desc }}
        </p>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const posts = [
  {
    title: 'Project Vitesse: 미니멀리즘을 향한 여정',
    date: '2025-12-02',
    desc: '불필요한 것을 덜어내고 본질에 집중하는 블로그 구축기.'
  },
  {
    title: 'Nuxt 3로 다시 시작하기',
    date: '2025-12-02',
    desc: 'SvelteKit에서 Nuxt로 전환하며 배우는 것들.'
  }
]
</script>
