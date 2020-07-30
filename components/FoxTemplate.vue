<template>
	<section class="fox__container">
		<img src="#" alt="#" class="fox__image">
		<h2 class="fox__name">{{ fox.name }}</h2>
		<article class="fox__description" v-for="description in fox.descriptions" :key="description.id">
			<p class="fox__text">{{ description }}</p>
		</article>
	</section>
</template>

<script>
export default {
	name: "FoxTemplate",
	props: {
		fox: Object
	}
}
</script>

<style>
.fox__container {
	max-width: 28rem;
}

.fox__image {
	width: 100%;
	height: auto;
	padding: inherit 20%;
}

.fox__name {
	/* Layout */
	margin-bottom: 1rem;

	/* Font  Styling*/
	text-align: center;
}

.fox__description {

	/* Font Styling */
	font-size: 0.85rem;
}
</style>