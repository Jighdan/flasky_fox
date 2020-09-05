<template>
	<article class="page__error">
		<article class="page__error__wrap">
			<h1 class="page__error__wrap__title">404</h1>
			<p class="page__error__wrap__text">The page you were looking for couldn't be found!</p>
			<nuxt-link class="page__error__wrap__link" to="/">Go Home</nuxt-link>
		</article>
	</article>
</template>

<style lang="scss" scoped>
.page__error {
	&__wrap {
		margin-top: -20vh;
		text-align: center;

		&__title {
			margin-bottom: 1rem;
			font-size: 3rem;
			font-weight: 600;
		}

		&__text {
			font-size: 1.25rem;
		}

		&__link {
			margin-top: 2rem;
			position: relative;
			float: right;
		}
	}
}
</style>
