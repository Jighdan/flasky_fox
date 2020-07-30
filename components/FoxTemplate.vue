<template>
	<section class="fox__container">
		<header class="fox__image__container">
			<img :src="imageUrl" :alt="imageAlt" class="fox__image">
		</header>
		<h2 class="fox__name">{{ fox.name }} Fox</h2>
		<h4 class="fox__surname">{{ fox.scientificName }}</h4>
		<article class="fox__description">
			<p 
				class="fox__text"
				v-for="description in fox.descriptions"
				:key="description.id"
			>{{ description }}</p>
		</article>
	</section>
</template>

<script>
export default {
	name: "FoxTemplate",
	props: {
		fox: Object
	},
	computed: {
		imageUrl() { return require(`@/assets/images/${this.fox.name.replace(/\s+/g, "")}.jpg`); },
		imageAlt() { return `${this.fox.name} fox`; }
	}
}
</script>

<style>
.fox__container {
	max-width: 28rem;
}

.fox__image__container {
	width: 70%;
	margin-left: auto;
	margin-right: auto;
}

.fox__image {
	width: 100%;
	height: auto;
	padding: inherit 20%;
}

.fox__name {
	/* Layout */
	margin-top: 0.95rem;

	/* Font  Styling*/
	text-align: center;
}

.fox__surname {
	/* Layout */
	margin-top: 0;

	/* Font Styling */
	font-size: 0.95rem;
	font-weight: 300;
	font-style: italic;
	text-align: center;
}

.fox__text {
	/* Layout */
	margin-bottom: 1rem;

	/* Font Styling */
	font-size: 0.85rem;
	line-height: 1.5;
}
</style>