<template>
  <div v-if="showHome" id="home" class="page">
    <div class="page-title">
      <h1 ref="title">Home</h1>
    </div>
    <div class="page-content" ref="content">
      <h2>The mission of LuckD.App is to create a gamified metaverse using blockchain technology that allows players to accumulate different tokens based on pure luck.</h2>
      <p>LuckD.App is a decentralized application (DApp) powered by smart contracts. A single screen progressive web application (<a href="https://sspw.app" title="Interact with the SSPWA Template">SSPWA</a>) enables user interaction with LuckDApp. The option to download LuckD.App to your device is provided when you visit https://luckd.app in a supported web browser. When a new player is created two LuckDNA Tokens (LDNA) are minted. The player receives their first LDNA for free and one LDNA is sent to the treasury. Each LDNA has a completely random color and opacity combination assigned to it. The combination is unique so no LDNA is the same as another. The total supply of LDNA is 1,694,498,816. If the total supply is reached no new players can be created.</p>
    </div>
    <div class="page-cta" ref="cta">
      <button class="background-animation" @click="view">View on GitHub</button>
      <button class="background-animation" @click="load">Learn More</button>
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
    },
    view() {
      window.open('https://github.com/laetadevelopment/luckdapp','_blank');
    },
    load() {
      this.$emit("load", "learnMore");
    }
  },
  mounted() {
    this.overflow();
    window.addEventListener("resize", this.overflow);
  }
}
</script>
