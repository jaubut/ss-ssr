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
  display: grid;
  grid-template: 50% 50% / 50% 50%;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  margin-bottom: 50px;
  backdrop-filter: brightness(0.5);
  -webkit-backdrop-filter: brightness(0.5);
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
.text {
  grid-area: 1/1/3/3;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
}
.text h1 {
  font-family: "Germania One", cursive;
  font-size: 5rem;
}
.text p {
  color: white;
}
@media(max-width:468px) {
  .text h1 {
    font-size: 3rem;
  }
}
</style>
