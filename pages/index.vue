<template>
  <article>
    <SectionIntro />
    <hr>
    <nav class="fox__link">
      <NuxtLink 
        v-for="fox of allFoxes" 
        :key="fox.slug"
        :to="{ name: 'fox-slug', params: { slug: fox.slug } }"
        class="fox__link__item">
          {{ fox.name }}
      </NuxtLink>
    </nav>
  </article>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
    const allFoxes = await $content("fox", params.slug)
      .only(["name", "slug"])
      .fetch();

    return { allFoxes };
  },
};
</script>
