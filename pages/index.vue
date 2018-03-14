<template>
  <div id="Index">
    <div class="video">
      <video autoplay muted>
        <source src="~/assets/videohd.webm" type="video/webm">
        <source src="~/assets/videohd.mp4" type="video/mp4">
        <h1>Sainte Scène</h1>
      </video>
    </div>
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
      <div v-for="photo in photos.slice(0, 24)" :key="photo.fields.title" class="photo" :style="{ 'background-image': 'url(' + photo.fields.file.url + '?w=500&h=500)' }"></div>
    </div>
  </div>
</template>
<script>
import {createClient} from '@/plugins/contentful'
import BlocMission from '@/components/ss-bloc-mission'
import BlocMessage from '@/components/ss-bloc-message'

const client = createClient()

export default {
  name: 'Index',
  components: {
    BlocMission,
    BlocMessage
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
  }
}
</script>
<style scoped>
#Index {
  width: 100%;
  height: 100%;
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
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;
  min-height: 250px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.photo-section {
  width: 100%;
  display: grid;
  grid-template: 1fr 1fr/1fr 1fr;
  grid-gap: 5px;
  justify-content: center;
  text-align: center;
  margin: 1% 0;
}

@media(min-width:468px) {
  .photo-section {
    grid-template: 45% 25% 25%/repeat(auto-fill, 23%);
  }
}

</style>
