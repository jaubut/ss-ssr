<template>
  <div id="evenement">
    <carousel :per-page="1" :navigate-to="0" :autoplay=true :loop=true :paginationEnabled=false>
      <slide>
        <Hero  class="chandail accueil">
          <div class="text">
          <h1>Chandails disponibles</h1>
          <p>2 pour 20$ 1 pour 15$</p>
        </div>
        </Hero>
      </slide>
      <slide>
        <Hero  class=" compassion accueil">
          <div class="text">
            <h1>Ministère Compassions</h1>
            <p>Amenez vos denrez non-périssable dans le vestibule.</p>
          </div>
        </Hero>
      </slide>
      <slide>
        <Hero class="hero-event accueil ">
          <div class="text">
            <h1>Bstudy</h1>
            <p>Tous les mercredis de 7@8.<br>Au Grendel</p>
          </div>
        </Hero>
      </slide>
      <slide>
        <Hero class=" campus accueil">
          <div class="text">
            <h1>Nouveau Campus @Grendel</h1>
            <p>À partir du 8 juillet. 1 fois par mois.</p>
          </div>
        </Hero>
      </slide>
      <slide>
        <Hero class=" dejeuner accueil">
          <div class="text">
            <h1>Déjeuner pour les femmes</h1>
            <p>Pour toutes les femmes :) Le 21 juillet @9h00.</p>
          </div>
        </Hero>
      </slide>
    </carousel>
    <div class="text-group">
      <h2 @click="dimanche =! dimanche">Dimanche matin</h2>
      <div class="separator"></div>
      <transition name="fade">
        <div class="text-desc" v-if="dimanche">
          <p>Notre communauté Sainte Scène a son rassemblement principal à Granby, le dimanche matin à 10h au 1236 rue St-Charles S.<br/> Vous y trouverez une expérience musicale avec louange, une équipe pastorale et des leaders qui partageront de tout cœur, le cœur de Dieu pour vous aider à grandir:  âme, corps, et esprit.  Ce n’est pas un spectacle, c’est une <strong>Sainte Scène</strong> pour toutes les générations, les familles, les célibataires, les ados et les enfants. Tous sont les bienvenus ! Nous sommes en communion tous les dimanches à 10h.  Fais partie de la <strong>Sainte Scène</strong>.<br/><a href="https://www.google.ca/maps/place/1236+Rue+Saint+Charles+S,+Granby,+QC+J2J+0L6/@45.3416945,-72.7487631,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc9c54fe2bf925d:0x1c5a162a6849e0e1!8m2!3d45.3416945!4d-72.7465744" target="_blank"><p>Lieu de rencontre: 1236 rue St-Charles S.</p></a></p>
          <p>Texte  <span><button class="button-notif">DIMANCHE</button></span> au <a href="sms:1-450-775-8112"><span class="phone-number">450.776.8493</span></a> pour recevoir toutes les notifs en liens avec le Dimanche.</p>
        </div>
      </transition>
      <h2 @click="intercession =! intercession">Intercession</h2>
      <transition name="fade">
        <div class="text-desc" v-if="intercession">
          <p>Le groupe d’Intercession est la première lumière allumée dans les coulisses de <strong>Sainte Scène</strong> chaque mercredi, vendredi et dimanche matin de 7h30 à 9h30. Fais partie de l’équipe de prière qui se rencontre pour intercéder les uns pour les autres, pour notre communauté, notre ville, notre région, notre province et notre nation. La prière active tout !<br/><a href="https://www.google.ca/maps/place/1236+Rue+Saint+Charles+S,+Granby,+QC+J2J+0L6/@45.3416945,-72.7487631,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc9c54fe2bf925d:0x1c5a162a6849e0e1!8m2!3d45.3416945!4d-72.7465744" target="_blank"><p>Lieu de rencontre: 1236 rue St-Charles S.</p></a></p>
          <p>Texte  <span><button class="button-notif">INTERCESSION</button></span> au <a href="sms:1-450-775-8112"><span class="phone-number">450.776.8493</span></a> pour recevoir toutes les notifs en liens avec l'Intercession.</p>
        </div>
      </transition>
      <h2 @click="bstudy =! bstudy">Bstudy</h2>
      <transition name="fade">
        <div class="text-desc" v-if="bstudy">
          <p>Nos études bibliques se tiennent le mercredi soir à 19h au Grendel Design.  Ces moments de connexion ne sont pas des enseignements mais plutôt des partages sur des chapitres de la Bible lus par tous et dirigés par un de nos leaders passionnés.  Le Bstudy fait partie de la vie active dans les coulisses de <strong>Sainte Scène</strong> pour renverser la statistique que plus de 90% des chrétiens n’ont jamais lu la Bible de A à Z.  C’est une place d’échanges où nous pouvons être vrais, mettre les cartes sur la table et avoir des réponses à plein de questions simples ou profondes. Veux-tu aller plus loin ? Participe au Bstudy.<br/><a href="https://goo.gl/maps/ATv8oSgHqLD2" target="_blank"><p>Lieu de rencontre: 164 rue Cowie.</p></a></p>
          <p>Texte  <span><button class="button-notif">BSTUDY</button></span> au <a href="sms:1-450-775-8112"><span class="phone-number">450.776.8493</span></a> pour recevoir toutes les notifs en liens avec le Bstudy.</p>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'evenement',
  components: {
    Carousel,
    Slide
  },
  computed: {
    currentDate () {
      let today = new Date()
      return today.getDay()
    }
  },
  data() {
    return {
      dimanche: false,
      intercession: false,
      bstudy: false
    }
  },
  head () {
    return {
      title: 'Événements',
      meta: [
        { property: 'og:url', content: 'https://www.saintescene.com/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Sainte Scène' },
        { property: 'og:description', content: 'On de loeuvre de Jésus.' },
        {property: 'og:image', content: '../assets/evenement-bstudy.jpg'}
      ]
    }
  }
}
</script>
<style scoped>
#evenement {
  width: 100%;
  height: 100%;
}
.picture {
  grid-area: 1/2/2/4;
  display: flex;
  height: 75px;
  width: 75px;
  border-radius: 100%;
  background: #B2152D;
  border: 3px solid #FA7E7E;
  justify-self: center;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.picture p {
  text-align: center;
  color: white;
  font-size: 0.9rem;
}

.line {
  border-right: 2px solid #B2152D;
  grid-area: 1/2/2/3;
  height: 100%;
  margin: 25% 0 10% 0;
}
.text-desc {
  padding: 5% 20%;
  background: #fafbfc;
}
.text-group {
  display: flex;
  flex-flow: column wrap;
  align-items: left;
  justify-content: center;
  color: black;
  padding: 10% 0%;
}
.text-group h2 {
  font-family: "Germania One", cursive;
  font-size: 2rem;
  margin: 25px;
  padding: 0 20%;
  opacity: .5;
  cursor: pointer;
}
.text-group h2:hover {
  opacity: 1;
}
@media(min-width:468px) {
  .text-group h2 {
    font-size: 5rem;
  }
}
.text-group span {
  font-family: "Germania One", cursive;
  font-size: 0.9rem;
  margin-top: -10px;
}
.text-group p {
  margin-top: 10%;
}
.separator {
  height: 1px;
  background: #fafbfc;
  width: 70%;
}
.hero-event {
  background-image: url(~/assets/evenement-bstudy.jpg);
}
.compassion {
  background-image: url(https://images.unsplash.com/photo-1513640127641-49ba81f8305c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7aa96678613e152a1fa0df75bf390160&auto=format&fit=crop&w=750&q=80);
}
.campus {
  background-image: url(~/assets/campus.jpg);
}
.chandail {
  background-image: url(~assets/chandail.jpg);
}
.dejeuner {
  background-image: url(https://images.unsplash.com/photo-1493807742375-fbc46d996e8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f0038573a81b1169576b6674a3ce202&auto=format&fit=crop&w=476&q=80);
}
.phone-number {
  color: #FA7E7E;
}
</style>
