<template>
	<section class="fox__link">
		<hr>
    <nuxt-link class="fox__link__item" v-for="fox in allFoxes" :key="fox.id" :to="fox.path">{{ fox.name }}</nuxt-link>
  </section>
</template>

<script>
export default {
	data() {
    return {
      allFoxes: [],
    };
  },
	async fetch() {
    // Gets only the foxes names
    this.allFoxes = await this.$content("fox").only(["name"]).fetch();
  },
}
</script>

<style lang="scss" scoped>
.fox__link {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
  flex-wrap: wrap;
  
  &__item {
    margin: 1rem 0.25rem;
	  padding: 0.15rem 0.75rem;
	  font-size: 1rem;
		text-align: center;
  }
}
</style>