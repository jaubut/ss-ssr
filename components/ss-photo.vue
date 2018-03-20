<template>
  <div id="photo-api" :class="SectionPhoto">
    <div v-for="photo in photos" :key="photo.fields.title" :class="IndexPhoto" :style="{ 'background-image': 'url(' + photo.fields.file.url + ')' }"></div>
  </div>
</template>
<script>

export default {
  name: 'photo-api',
  props: ['IndexPhoto', 'SectionPhoto', 'photo']
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
