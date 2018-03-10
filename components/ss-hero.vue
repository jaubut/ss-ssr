<template>
  <div class="hero">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Hero'
}
</script>
<style scoped>
.hero {
  height: 55vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  filter: grayscale(100%);
  margin-bottom: 50px;
}
.hero h1 {
  font-family: "Germania One", cursive;
  font-size: 5rem;
}
@media(max-width:468px) {
  .hero h1 {
    font-size: 3rem;
  }
}
.hero .black {
  color: black;
}

</style>
