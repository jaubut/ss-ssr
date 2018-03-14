<template>
  <div id="blocMission">
    <h3 class="title">{{ title }}</h3>
    <p class="text">{{ text }}</p>
    <div class="img"></div>
    <h4 class="signature">{{ signature }}</h4>
    <span>pst. principaux</span>
  </div>
</template>
<script>
export default {
  name: 'blocMission',
  props: ['title', 'text', 'signature', 'imgSource']
}
</script>
<style scoped>
#blocMission {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 5%;
}
#blocMission .title {
  font-family: "Germania One", cursive;
  font-size: 3rem;
  color: black;
}
#blocMission .text {
  font-family: "Barlow", sans-serif;
  text-align: justify;
  font-size: 0.9rem;
  color: #656565;
  padding: 5%;
  margin: 30px 0 0 0;
}
@media(min-width:468px) {
  #blocMission .text {
    margin-top: 0;
    font-size: 1.2rem;
    font-weight: 100;
    padding: 0 20%;
    margin: 50px 0 20px 0;
  }
}
#blocMission .img {
  height: 125px;
  width: 125px;
  border-radius: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(../assets/laureetsam-2.png);
}
#blocMission .signature {
  font-family: "Germania One", sans-serif;
  font-size: 1.5rem;
  color: black;
  margin-top: 15px;
}
#blocMission span {
  margin-top: 0;
  font-family: "Barlow", sans-serif;
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.6);
}
</style>
