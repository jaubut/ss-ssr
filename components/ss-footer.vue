<template>
  <div id="Footer">
    <div class="social">
      <a href="https://www.youtube.com/channel/UCSX2aF_9i2D-wPd8gb9qfcw" target="_blanck">
        <i class="fab fa-youtube"></i>
      </a>
      <a href="https://www.facebook.com/Sainte-Sc%C3%A8ne-1529585407088599/" target="_blanck">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.instagram.com/saintescene/" target="_blank">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
    <div class="line"></div>
    <h1 class="footer-logo">Sainte Scène</h1>
    <div class="text-group">
      <div class="text">
        <h3>Nous rejoindre</h3>
        <a href="https://www.google.ca/maps/place/1236+Rue+Saint+Charles+S,+Granby,+QC+J2J+0L6/@45.3416945,-72.7487631,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc9c54fe2bf925d:0x1c5a162a6849e0e1!8m2!3d45.3416945!4d-72.7465744" target="_blank"><p><strong>Sainte Scène Saint-Charles:</strong> <br>1236, rue Saint-Charles Sud Granby, Qc, J2J 0L6</p></a>
        <a href="https://www.google.ca/maps/dir/''/Grandel+Design/data=!4m5!4m4!1m0!1m2!1m1!1s0x4cc9ce4811c8cfd7:0x645405085cf857e6?sa=X&ved=0ahUKEwi6mr7QnZrcAhVSdt8KHX9iBAIQ9RcIiwEwEA" target="_blank"><p><strong>Sainte Scène Cowie:</strong> <br>164 Rue Cowie local 217, Granby, QC J2G 3V5</p></a>
        <a href="tel:4503611838"><p>450-361-1838</p></a>
        <a href="mailto:allo@saintescene.com"><p>allo@saintescene.com</p></a>
      </div>
      <router-link to="evenements">
        <div class="text">
          <h3>Prochains Événements</h3>
          <p v-if="currentDate >= 5">Réunion Dimanche <span class="info">10h - 12h</span></p>
          <p>Intercession <span class="info" v-if="currentDate <= 3">Mercredi 7h30</span><span class="info" v-if="currentDate <= 5">Vendredi 7h30</span></p>
          <p v-if="currentDate <= 3">B Study<span class="info"> Mercredi 19h - 21h</span></p>
        </div>
      </router-link>
    </div>
    <img class="footer-coupe" src="~/assets/logo-coupe-rose.svg" alt="logo coupe rose">
    <div class="footer-right">
      <p>© 2018 sainte Scène <br>All rights reserved. <br>Crafted by <a href="https://www.jaubut.space" target="_blank"><span>Jérémie Aubut</span></a></p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  computed: {
    currentDate () {
      let today = new Date()
      return today.getDay()
    }
  }
}
</script>
<style scoped>
  #Footer {
  height: 100%;
  display: grid;
  grid-template: 5% 65% 20%/5% 45% 45% 5%;
  padding: 5% 0;
}
.social {
  grid-area: 1/2/2/4;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 25px;
  margin-top: -25px;
  font-size: 1.2em;
}
.social a {
  cursor: pointer;
  padding: 0 10px;
  transition: all ease-in-out 0.5s;
}
.social a:hover {
  transform: scale(1.5);
}
.line {
  grid-area: 1/2/2/4;
  width: 100%;
  border-top: 4.5px solid #F8C3C8;
}
.footer-logo {
  grid-area: 2/2/3/4;
  font-family: "Germania One", cursive;
  font-size: 1.5rem;
  font-weight: 200;
  margin: 15px;
}
.footer-coupe {
  grid-area: 3/3/4/4;
  height: 42px;
  align-self: end;
  margin-left: auto;
}
.text-group {
  grid-area: 2/2/3/4;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: left;
  padding: 5%;
}
@media(max-width:748px) {
  .text-group {
    justify-content: flex-start;
  }
}
.text {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 50px;
}
.text p {
  margin: 15px;
  color: white;
  font-size: 0.9rem;
}
.text h3 {
  font-family: "Germania One", cursive;
  font-weight: 100;
}
.text .info {
  color: #F8C3C8;
  font-size: 0.9rem;
}
.footer-right {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  grid-area: 3/2/4/4;
  margin-bottom: 15px;
}
.footer-right p {
  font-family: "Barlow", sans-serif;
  align-self: center;
  font-size: 0.6rem;
  color: white;
}
</style>
