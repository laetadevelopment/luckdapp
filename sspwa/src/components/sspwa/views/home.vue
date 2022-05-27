<template>
  <div v-if="showHome" id="home" class="page">
    <div class="page-title">
      <h1 ref="title">Home</h1>
    </div>
    <div class="page-content" ref="content">
      <h2>The mission of LuckD.App is to create a gamified metaverse using blockchain technology that allows players to accumulate different tokens based on their luck in different challenges.</h2>
      <p>LuckD.App is a decentralized application (DApp) powered by smart contracts. A single screen progressive web application (<a href="https://sspw.app" title="Interact with the SSPWA Template">SSPWA</a>) enables user interaction with LuckDApp. When a new player is created two LuckDNA (LDNA) are minted. The player receives their first LDNA for free and one LDNA is sent to the treasury. Each LDNA has a completely random color and opacity combination assigned to it. The combination is unique so no LDNA is the same as another. The total supply of LDNA is 1,694,498,816. If the total supply is reached no new players can be created.</p>
    </div>
    <div class="page-cta" ref="cta">
      <button class="background-animation" @click="view"><img alt="View on GitHub" src="../../../assets/github-mark.svg">GitHub</button>
      <button class="background-animation" @click="load">Learn More</button>
      <button class="background-animation" @click="load">Coming Soon!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      showHome: true
    }
  },
  methods: {
    // TODO: refactor this method to be dynamic and enlarge font as well
    overflow() {
      if (this.$refs.title) {
        if (this.$refs.title.scrollHeight > this.$refs.title.clientHeight) {
          this.$refs.title.style.fontSize = "4vw";
          if (this.$refs.title.scrollHeight > this.$refs.title.clientHeight) {
            this.$refs.title.style.fontSize = "3vw";
            if (this.$refs.title.scrollHeight > this.$refs.title.clientHeight) {
              this.$refs.title.style.fontSize = "2vw";
              if (this.$refs.title.scrollHeight > this.$refs.title.clientHeight) {
                this.$refs.title.style.fontSize = "1vw";
              }
            }
          }
        }
      }
      if (this.$refs.content) {
        if (this.$refs.content.scrollHeight > this.$refs.content.clientHeight) {
          this.$refs.content.style.fontSize = ".8em";
          if (this.$refs.content.scrollHeight > this.$refs.content.clientHeight) {
            this.$refs.content.style.fontSize = ".7em";
            if (this.$refs.content.scrollHeight > this.$refs.content.clientHeight) {
              this.$refs.content.style.fontSize = ".6em";
              if (this.$refs.content.scrollHeight > this.$refs.content.clientHeight) {
                this.$refs.content.style.fontSize = ".5em";
              }
            }
          }
        }
      }
    },
    view() {
      window.open('https://github.com/laetadevelopment/luckdapp','_blank');
    },
    load() {
      if (event.target.innerText == "Learn More") {
        this.$emit("load", "learnmore");
      }
      if (event.target.innerText == "Coming Soon!") {
        this.$emit("load", "comingsoon");
      }
    }
  },
  mounted() {
    this.overflow();
    window.addEventListener("resize", this.overflow);
  }
}
</script>

<style scoped>
.page-cta button {
  max-width: 30%;
}
.page-cta button img {
  max-height: 70%;
  margin-right: 5px;
}
</style>
