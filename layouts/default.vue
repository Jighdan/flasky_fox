<template>
  <main class="layout__default">
    <LayoutHeader />
    <Nuxt class="layout__default__page" />
    <LayoutFooter />
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
}
</style>
