<template>
	<article class="page__fox__index">
		<section class="page__fox__index__wrap">
			<h1 class="page__fox__index__wrap__title">All Foxes</h1>
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
		</section>
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

<style lang="scss">
.page__fox__index {
	&__wrap {
		margin-top: -20vh;

		&__title {
			margin-bottom: 0.75rem;
			text-align: center;
		}
	}
}
</style>
