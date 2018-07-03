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
  background-position: center center;
}
.logo-hero {
  padding-bottom: 100px;
}
.accueil {
  min-height: 100vh !important;
  height: 100%;
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
.full {
  background: #fafbfc !important;
}
.full p {
  color: black !important;
  padding: 50px 20%;
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
  .full p {
    color: black !important;
    padding: 10%;
    text-align: justify;
  }
}
</style>
