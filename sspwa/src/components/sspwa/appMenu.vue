<template>
  <div id="appMenu">
    <button class="background-animation" @click="load">Home</button>
    <button class="background-animation" @click="load">Learn More</button>
    <button class="background-animation" @click="load">Coming Soon</button>
    <button class="background-animation" @click="view"><img alt="View on GitHub" src="../../assets/github-mark.svg">GitHub</button>
  </div>
</template>

<script>
export default {
  name: 'appMenu',
  methods: {
    load() {
      this.$emit("toggle", "appMenu");
      if (event.target.innerText == "Home") {
        this.$emit("load", "home");
      }
      if (event.target.innerText == "Learn More") {
        this.$emit("load", "learnmore");
      }
      if (event.target.innerText == "Coming Soon") {
        this.$emit("load", "comingsoon");
      }
    },
    view() {
      this.$emit("toggle", "appMenu");
      window.open('https://github.com/laetadevelopment/luckdapp','_blank');
    }
  }
}
</script>

<style scoped>
#appMenu {
  width: 100%;
  height: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 15%;
  background: rgba(0,0,0,90%);
  border-top: 2px solid rgb(0,0,0);
  box-sizing: border-box;
}
#appMenu button {
  max-width: 47.5%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
#appMenu button img {
  max-height: 70%;
  margin-right: 5px;
}
</style>
