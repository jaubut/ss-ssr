<template>
  <div id="app">
    <header>
      <router-link to="/">
        <h1 class="logo">Sainte Scène</h1>
      </router-link>
      <img @click="trigger" class="burger" src="~/assets/burger-icon.svg" alt="burger">
    </header>
    <transition name="fade">
      <ssMenu v-on-click-outside="close" @click.native="show = false" v-if="show"></ssMenu>
    </transition>
    <transition name="transite">
      <main @click="show = false" :class="{ active: show}">
        <router-view></router-view>
        <button @click="toggle =! toggle" class="button-notif round-give">Donnez ici</button>
        <transition name="fade">
          <a v-if="toggle" href="https://paypal.me/saintescene" target="blank"><button class="button-notif round-give-2">PayPal</button></a>
        </transition>
        <transition name="fade">
          <a v-if="toggle" href="https://www.canadahelps.org/fr/dn/35836" target="blank"><button class="button-notif round-give-3">Cana don</button></a>
        </transition>
      </main>
    </transition>
    <ssFooter v-if="$route.path !== '/jesus'"/>
  </div>
</template>

<script>
import ssFooter from '@/components/ss-footer'
import ssMenu from '@/components/ss-menu'

export default {
  name: 'app',
  components: {
    ssFooter,
    ssMenu
  },
  head () {
    return {
      title: 'Accueil',
      titleTemplate: '%s | Sainte Scène'
    }
  }, 
  data () {
    return {
      show: false,
      toggle: false
    }
  },
  methods: {
    trigger () {
      this.show = !this.show
    },
    close () {
      this.show = false
    }
  }
}
</script>

<style>
  .round-give {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 25px;
  }
  .round-give-2 {
    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 25px;
    margin-bottom: 100px;
  }
  .round-give-3 {
    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 25px;
    margin-bottom: 175px;
  }
</style>
