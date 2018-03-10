<template>
  <div id="photo-api" :class="SectionPhoto">
    <div :class="IndexPhoto" v-for="photo in photos" :key="photo.id" :style="{ 'background-image': 'url(http://saintescene.imgix.net/' + photo.url + '.jpg)' }"></div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'photo-api',
  props: ['IndexPhoto', 'SectionPhoto'],
  computed: { 
    photos () { return this.$store.state.photos.photos }
  }
}
</script>
<style scoped>
.photo {
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;
  min-height: 250px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
