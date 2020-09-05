<template>
	<section>
		<section class="fox">
			<header class="fox__header">
				<img :src="fox.image" :alt="``" class="fox__header__image" loading="lazy" />
			</header>
			<hr>
			<article class="fox__text">

				<section class="fox__text__intro">
					<h1 class="fox__text__intro__title">{{ fox.name }} Fox</h1>
					<h3 class="fox__text__intro__subtitle">{{ fox.scientificName }}</h3>
				</section>

				<p class="fox__text__paragraph" v-for="description in fox.descriptions" :key="description.id"
				>{{ description }}</p>
			</article>

			<nuxt-link class="fox__link" to="/fox">Go Back</nuxt-link>
		</section>
	</section>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const fox = await $content("fox", params.slug).fetch();
		return { fox };
	},
	head() {
		return {
			title: `the Fox | ${this.fox.name}`,
		};
	},
};
</script>

<style lang="scss" scoped>
.fox {
	width: 100%;
	max-width: 28rem;
	margin-left: auto;
	margin-right: auto;
	padding-bottom: 1rem;

	&__header {
		width: 100%;

	&__image {
		padding: inherit 20%;
		}
	}

	&__text {
		padding: 1rem 0.25rem;

		&__intro {
			margin-top: 0;
			margin-bottom: 0.75rem;
			display: flex;
			justify-content: space-between;
			align-items: center;

			&__title {
				margin: 0;
				font-size: 1.75rem;
				font-weight: 400;
			}

			&__subtitle {
				margin: 0;
				font-size: 1.25rem;
				font-weight: 300;
				font-style: italic;
			}
		}

		&__paragraph {
			margin-bottom: 0.5rem;
			line-height: 1.5;
		}
	}

	&__link {
		position: relative;
		float: right;
	}
}
</style>
