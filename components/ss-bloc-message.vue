<template>
  <transition name="fade">
    <iframe
      class="video-iframe"
      :src="message.fields.urlYoutube"
      frameborder="0"
      allow="autoplay"
      allowfullscreen>
    </iframe>
  </transition>
</template>
<script>
export default {
  name: 'blocMessage',
  props: ['message']
}
</script>
<style scoped>
#blocMessage {
  grid-column: span 1;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  overflow: hidden;
}
iframe {
  grid-column: span 1;
}
.video-iframe {
  width: 100%;
  min-height: 350px;
}
.play {
  position: absolute;
  height: 75px;
  width: auto;
  cursor: pointer;
}
.text {
  height: 100%;
  width: 100%;
  padding: 100% 0;
  background: rgba(178, 21, 45, 0.3);
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.text .h3 {
  font-family: "Germania One", cursive;
  font-size: 4rem;
  color: white;
}
.text .p {
  font-family: "Barlow", sans-serif;
  color: white;
  font-size: 0.8rem;
  padding-bottom: 50px;
}
.text .lire {
  background-color: #B2152D;
  color: white;
  align-self: center;
}
.active {
  opacity: 0;
  width: 0;
  height: 0;
}
@media(max-width:468px) {
  #blocMessage {
    grid-column: span 2;
  }
  iframe {
    grid-column: span 2;
  }
  .text .h3 {
    font-size: 2rem;
  }
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 80px;
  height: 35px;
  border: none;
}
.btn:hover {
  cursor: pointer;
  transform: translateX(5px);
  transition: transform ease-in-out 0.5s;
}
.title {
  font-family: "Germania One", cursive;
  font-size: 2rem;
  color: white;
}

</style>
