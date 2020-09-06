<template functional>
	<section class="section__intro">
    <h1>fox</h1>
    <h4>- fäks</h4>
    <ol>
      <li><span>Any of various carnivorous mammals of the fog family related to, but <br>smaller than wolves with shorter legs, more pointed muzzle, large <br>erect ears, and long bushy tail.</span></li>
      <li><span>A very clever crafty person.</span></li>
      <li><span>A good-looking young woman or man.</span></li>
    </ol>
  </section>
</template>

<style lang="scss" scoped>
.section__intro {
  width: max-content;

  h1 {
    margin-bottom: 1rem;
    font-size: 2.25em;
  }

  h4 {
    margin-top: 0;
    font-weight: 300;
    font-style: italic;
  }

  ol {
    padding: auto 5%;

    li {
      margin-bottom: 0.50rem;

      span {
        position: relative;
        left: 2.5%;
      }
    }
  }
}
</style>