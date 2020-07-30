<template>
  <main class="main">
    <NavigationBar />
    
    <section class="page__container">
      <Nuxt class="content" />
    </section>
  </main>
</template>

<script>
import NavigationBar from "../components/NavigationBar";

export default {
  components: {
    NavigationBar
  }
}
</script>

<style scoped>
.page__container {
  margin-top: 5vh;
  padding: 5vh 10vw;
  display: grid;
  place-items: center;
}

.content {
  max-width: 55vw;
}
</style>
