<template>
  <div id="Equipe">
    <h3>L'équipe</h3>
    <div class="main-container">
      <div v-for="item in items" :key="item.fields.name" class="container-team">
        <template v-if="item.fields.departement = 'benevole'">
          <div :style="{ 'background-image': 'url(' + item.fields.Photo[0].url + ')' }" class="photo-team"></div>
          <p class="name-team">{{ item.fields.Name }}</p>
          <p class="title-team">{{ item.fields.Titre }}</p>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Jesus',
  head () {
    return {
      title: 'Équipe',
      meta: [
        { property: 'og:url', content: 'https://www.saintescene.com/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Sainte Scène' },
        { property: 'og:description', content: 'On de loeuvre de Jésus.' },
        {property: 'og:image', content: '../assets/saintescene.jpeg'}
      ]
    }
  },
  data () {
    return {
      items: []
    }
  },  
  methods: {
    loadItems: function() {
      // Init variables
      var self = this
      var app_id = "appkbIaWleiR7gYtU";
      var app_key = "keyYpAgTFas9oMW80"; // Read Only Key! :D
      this.items = []
      axios.get(
        "https://api.airtable.com/v0/" + app_id + "/tbl68jNjDnGeJmXhr", {
          headers: {
            Authorization: "Bearer " + app_key
          }
        }
      ).then(function(response) {
        self.items = response.data.records
      }).catch(function(error) {
        console.log(error)
      })
    }
  },
  mounted () {
    this.loadItems()
  }
}
</script>
<style scoped>
  #Equipe {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  }
  h3 {
    padding: 50px;
    color: black;
    font-family: "Germania One", cursive;
    font-size: 1.75rem;
  }
  .main-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    padding: 5% 20%;
  }
  .container-team {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding-bottom: 25px;
  }
  .photo-team {
    height: 200px;
    width: 200px;
    border-radius: 100%;
    margin-bottom: 15px;
    background: blue;
    background-position: center center;
    background-size: cover;
  }
  .name-team {
    margin: 0;
  }
  .title-team {
    margin: 0;
    color: black;
    font-size: smaller;
  }
  @media(max-width:468px) {
    .photo-team {
      height: 100px;
      width: 100px;
    }
    .main-container {
      padding: 0;
    }
  }
</style>
