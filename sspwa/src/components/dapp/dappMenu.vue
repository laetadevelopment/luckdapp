<template>
  <div id="dappMenu">
    <button class="background-animation" @click="home">Home</button>
    <button class="background-animation" @click="challenges">Challenges</button>
    <button class="background-animation" @click="marketplace">Marketplace</button>
    <button class="background-animation" @click="luckverse">Luckverse</button>
  </div>
</template>

<script>
export default {
  name: 'dappMenu',
  methods: {
    home() {
      this.$emit("toggle", "dappMenu");
      this.$emit("load", "playerhome");
    },
    challenges() {
      this.$emit("toggle", "dappMenu");
      this.$emit("load", "challenges");
    },
    marketplace() {
      this.$emit("toggle", "dappMenu");
      this.$emit("load", "marketplace");
    },
    luckverse() {
      this.$emit("toggle", "dappMenu");
      this.$emit("load", "luckverse");
    }
  }
}
</script>

<style scoped>
#dappMenu {
  width: 100%;
  height: 75%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 15%;
  background: rgba(0,0,0,90%);
  border-top: 2px solid rgb(0,0,0);
  box-sizing: border-box;
}
#dappMenu button {
  max-width: 47.5%;
  margin: 10px 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
