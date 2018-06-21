<template>
  <div id="Menu">
    <router-link to="/jesus">Jésus</router-link>
    <router-link to="/evenements">Événements</router-link>
    <router-link to="/impliquetoi">Implique-toi</router-link>
    <router-link to="/messages">Messages</router-link>
    <router-link to="/contacts">Fiche Contact</router-link>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data () {
    return {
      Hover: false
    }
  },
  methods: {
    openHover () {
      this.Hover = true
    },
    closeHover () {
      this.Hover = false
    }
  }
}
</script>
<style scoped>
#Menu {
  position: absolute;
  z-index: 0;
  background: rgba(255, 255, 255, 0.1);
  margin: 15% 2% 2% 2%;
  padding: 2% 2%;
  height: auto;
  width: 92%;
  display: flex;
  flex-flow: column wrap;
  border-radius: 5px;
  text-align: left;
  line-height: 2rem;
}
#Menu a {
  font-family: "Germania One", cursive;
  font-size: 2rem;
  width: inherit;
}
#Menu a:hover {
  transform: translateX(5px);
  transition: transform 0.5s ease-in-out;
}
.button-notif {
  margin-top: 25px;
}
@media screen and (min-width: 468px) {
  #Menu {
    margin: 5% 2% 2% 2%;
  }
}
</style>
