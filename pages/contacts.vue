<template>
  <div id="Don">
    <Hero class="hero-don"> <div class="text"><h1>Liste de contacts</h1></div> </Hero>
    <iframe class="airtable-embed" src="https://airtable.com/embed/shrBSU1H7ZvL0Gl8C?backgroundColor=green" frameborder="0" onmousewheel="" width="100%" height="960" style="background: transparent;"></iframe>
  </div>
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style scoped>
  #Don {
  width: 100%;
  height: 100%;
}

.hero-don {
  background-image: url(~/assets/membre-photo.jpg);
  background-position: center !important;
}
</style>
