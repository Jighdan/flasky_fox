<template>
	<section class="foxes__index">
		<nuxt-link class="fox__link" to="/fox/ArabianRed">Arabian Red</nuxt-link>
		<nuxt-link class="fox__link" to="/fox/Artic">Artic</nuxt-link>
		<nuxt-link class="fox__link" to="/fox/Fennec">Fennec</nuxt-link>
		<nuxt-link class="fox__link" to="/fox/Gray">Gray</nuxt-link>
		<nuxt-link class="fox__link" to="/fox/Kit">Kit</nuxt-link>
		<nuxt-link class="fox__link" to="/fox/Red">Red</nuxt-link>
		<nuxt-link class="fox__link" to="/fox/Swift">Swift</nuxt-link>
		<nuxt-link class="fox__link" to="/fox/TibetanSand">Tibetan Sand</nuxt-link>
	</section>
</template>

<style>
.foxes__index {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
}

.fox__link {
	/* Layout */
	margin: 1rem 0.25rem;
	padding: 0.15rem 0.75rem;
	border-left: 1.5px solid white;
	border-right: 1.5px solid white;

	/* Font Styling */
	font-size: 1rem;
	text-align: center;
	color: black;
}

.fox__link:hover {
	border-color: black;
}
</style>