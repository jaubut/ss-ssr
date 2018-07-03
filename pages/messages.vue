<template>
  <div id="messages">
    <Hero class="hero-messages">
       <div class="text"><h1>Messages</h1></div> 
    </Hero>
    <BlocMessage v-for="message in messages" :message="message" :key="message.fields.urlYoutube"></BlocMessage>
  </div>
</template>

<script>
import BlocMessage from '@/components/ss-bloc-message'
import {createClient} from '@/plugins/contentful'

const client = createClient()

export default {
  components: {
    BlocMessage
  },
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': 'message',
        order: '-sys.createdAt'
    }).then(entries => {
      return {
        messages: entries.items
      }
    })
    .catch(console.error)
  }
}
</script>

<style scoped>
  #messages {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    grid-auto-rows: auto;
    width: 100%;
  }
  .hero-messages {
    background-image: url(~/assets/sampreche.jpg);
    background-position: top center !important; 
    grid-column: span 2;
  }
</style>
