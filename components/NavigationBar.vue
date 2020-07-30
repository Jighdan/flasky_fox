<template>
	<nav class="nav__bar">
		<nuxt-link class="nav__link" to="/fox">Foxes</nuxt-link>
		<nuxt-link class="nav__link" to="/">Home</nuxt-link>
		<nuxt-link class="nav__link" to="/about">About</nuxt-link>
	</nav>
</template>

<script>
export default {
	name: "NavigationBar"
}
</script>

<style>
.nav__bar {
	/* Layout */
	max-width: 80%;
	margin-left: auto;
	margin-right: auto;
	padding: 0.25rem 1rem;
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	justify-content: space-evenly;
	align-items: center;
}

.nav__link {
	/* Layout */
	padding: 0.25rem 0.50rem;
	text-align: center;

	/* Font styling */
	color: black;
	font-size: 1rem;

	/* Animations */
	border-bottom: 2px solid white; 
}

.nav__link:hover {
	/* Font animation */
	font-weight: 900;

	/* Layout */
	border-bottom-color: black;
	border-radius: 2px;
}
</style>