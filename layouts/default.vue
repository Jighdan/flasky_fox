<template>
  <main class="layout__default">
    <LayoutHeader />
    <Nuxt class="layout__default__page" />
    <footer class="layout__default__footer">
      <a href="https://github.com/Jighdan" hreflang="en" target="_blank">by @Jighdan</a>
    </footer>
  </main>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.layout__default {
  min-height: 99vh;
  display: grid;
  grid-template-rows: auto 1fr auto;

  &__page {
    padding: 5vh 7.5vw;
    display: grid;
    place-items: center;
  }

  &__footer {
    width: 100%;

    a {
      margin-right: 5%;
      position: relative;
      float: right;
      font-size: 0.90rem;
    }
  }
}
</style>
