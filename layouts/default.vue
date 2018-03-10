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
      </main>
    </transition>
    <ssFooter/>
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
      show: false
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
  
</style>
