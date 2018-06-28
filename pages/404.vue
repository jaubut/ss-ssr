<template>
  <div id="evenement">
    <carousel :per-page="1" :navigate-to="0" :autoplay=true :loop=true :paginationEnabled=false>
      <slide>
        <Hero  class="error accueil">
          <div class="text">
          <h1>404</h1>
          <p>Salut, Jésus t'aime :).</p>
        </div>
        </Hero>
      </slide>
    </carousel>
  </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'evenement',
  components: {
    Carousel,
    Slide
  }
}
</script>
<style scoped>
.error {
  background-image: url(https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9d6ca312a11aa516f76ad77f9264c65f&auto=format&fit=crop&w=375&q=80);
}
</style>
