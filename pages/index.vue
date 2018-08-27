<template>
  <div id="Index">
    <Carousel :per-page="1" :navigate-to="0" :autoplay=true :loop=true :paginationEnabled=false>
      <Slide v-for="photo in photos" :key="photo.fields.title" v-if="photo.fields.title === 'intro'" >
        <Hero class="accueil" :style="{'background-image': 'url(' + photo.fields.file.url + '?w=1200&h=1200' + ')'}">
          <div class="text">
            <img src="~/assets/logo-white.svg" height="250px" class="logo-hero" alt="">
            <div @click="scrollMeTo('first-page')" class="arrow">
              <i class="fas fa-angle-down"></i>
            </div>
          </div>
        </Hero>
      </Slide>
    </Carousel>
    <iframe ref="first-page" src="https://anchor.fm/saintescene/embed" height="auto" width="100%" frameborder="0" scrolling="no"></iframe>
    <BlocMission  title="Notre Mission"
                  text="Sainte Scène est une église non traditionnelle, une communion, une communauté, un corps, trois générations rassemblées pour Jésus. Elle dépasse les barrières des traditions tout en conservant sa fondation; elle est intime et glorieuse; poursuivant l’Esprit de Dieu. Sainte Scène est une scène apostolique, prophétique, et même artistique avec un seul mandat, Jésus."
                  signature="Samuel & Laure Gingras"
    ></BlocMission>
    <div class="tag">
      <h3>Messages</h3>
      <p>Voir tous <router-link to="/messages"><span class="link">les messages</span></router-link></p>
    </div>
    <div class="message-section">
      <template v-for="message in messages.slice(0, 2)">
        <BlocMessage :message="message" :key="message.fields.urlYoutube"></BlocMessage>
      </template>
    </div>
    <div class="photo-section">
      <div v-for="photo in photos.slice(0, 20)" :key="photo.fields.title">
        <img v-img:group :src="photo.fields.file.url + '?w=800&h=800'" class="photo">
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
import {createClient} from '@/plugins/contentful'
import BlocMission from '@/components/ss-bloc-mission'
import BlocMessage from '@/components/ss-bloc-message'

const client = createClient()

export default {
  name: 'Index',
  components: {
    BlocMission,
    BlocMessage,
    Carousel,
    Slide
  },
  asyncData ({ env, params }) {
    return Promise.all([
      client.getEntries({
        'content_type': 'message',
        order: '-sys.createdAt'
      }),
      client.getAssets({
        order: '-sys.createdAt'
      })
    ]).then(([entries, response]) => {
      return {
        messages: entries.items,
        photos: response.items
      }
    }).catch(console.error)
  },
  methods: {
    scrollMeTo(refName) {
    var element = this.$refs[refName];
    var top = element.offsetTop;

    window.scrollTo(0, top);
  }
  }
}
</script>
<style scoped>
#Index {
  width: 100%;
  height: 100%;
}
.arrow {
  height: 50px;
  width: 50px;
  background: #A50E2F;
  border-radius: 100%;
  position: absolute;
  bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.fa-angle-down {
  animation-name: bounce;
  animation-duration: 2.5s;
  animation-fill-mode: both;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.message-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  grid-gap: 10px;
  height: 100%;
  padding: 0 5% 3% 3%;
}

.tag {
  width: 100%;
  color: black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 5% 0;
}
.tag h3 {
  font-family: "Germania One", cursive;
  font-size: 3rem;
}

.link {
  color: #B2152D;
}

.video {
  width: 100%;
  height: 55vh;
  overflow: hidden;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background: #A50E2F;
}
.video video {
  width: 100%;
  height: auto;
}
.video img {
  width: 20%;
  height: auto;
}
.video h1 {
  font-family: "Germania One", cursive;
  font-weight: 400;
  font-size: 3rem;
}
.photo {
  width: auto; 
  height: 100%; 
}
.photo-section {
  display: flex;
  flex-flow: row wrap;
  padding: .5vw;
  text-align: center;
}
.photo-section div { 
  flex: auto; 
  height: 30vh; 
  margin: .5vw; 
}
.styles__episodeContainerInner___GWTzW {
  background: white;
}
@media(max-width:468px) {
  .photo {
    width: 100%; 
    height: auto; 
  }
  .photo-section div {
    height: auto;
  }
}
@keyframes bounce { 
  0%, 20%, 40%, 60%, 80%, 100% {
    transform: translateY(0);
    }
  50% {
    transform: translateY(-5px);
    }
} 
</style>
