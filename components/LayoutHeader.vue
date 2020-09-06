<template functional>
	<header class="layout__header">
		<h1 class="layout__header__title">the Fox</h1>
    <nav class="layout__header__nav">
	  	<nuxt-link class="layout__header__nav__link" to="/">Home</nuxt-link>
	  	<nuxt-link class="layout__header__nav__link" to="/about">About</nuxt-link>
	  </nav>
	</header>
</template>

<style lang="scss" scoped>
.layout__header {
	&__title {
		text-align: center;
		letter-spacing: 1.5rem;
		user-select: none;
	}

	&__nav {
		max-width: 80%;
		margin-left: auto;
		margin-right: auto;
		padding: 0.25rem 1rem;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		justify-content: space-evenly;
		align-items: center;

		&__link {
			padding: 0.25rem 0.50rem;
			text-align: center;
		}
	}
}
</style>
