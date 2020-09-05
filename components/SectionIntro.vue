<template>
	<section class="section__intro">
    <h2 class="section__intro__title">fox</h2>
    <h4 class="section__intro__subtitle">- fäks</h4>
    <ol class="section__intro__definition">
      <li class="section__intro__definition__item"><span>Any of various carnivorous mammals of the fog family related to, but <br>smaller than wolves with shorter legs, more pointed muzzle, large <br>erect ears, and long bushy tail.</span></li>
      <li class="section__intro__definition__item"><span>A very clever crafty person.</span></li>
      <li class="section__intro__definition__item"><span>A good-looking young woman or man.</span></li>
    </ol>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.section__intro {
  width: max-content;

  &__title {
    font-size: 2.25em;
  }

  &__subtitle {
    margin-top: 0;
    font-weight: 300;
    font-style: italic;
  }

  &__definition {
    padding: auto 5%;

    &__item {
      margin-bottom: 0.50rem;

      span {
        position: relative;
        left: 2.5%;
      }
    }
  }
}
</style>