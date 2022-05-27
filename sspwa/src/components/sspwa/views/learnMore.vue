<template>
  <div v-if="showLearnMore" id="learnMore" class="page">
    <div class="page-title">
      <h1 ref="title">Learn More</h1>
    </div>
    <div class="page-content" ref="content">
      <p>Players are able to view their home screen once they have entered their name and linked their wallet. From there they can access the Challenges, Marketplace (coming soon), and Luckverse (coming soon) or they can be accessed from the menu activated by the button in the top left. The LuckDNA (LDNA), Luckcoins (LKC), and LuckNFTs (LNFTS) in their wallet are accessible at all times from the buttons in the bar at the bottom of the screen. The first challenge available is the Luck Challenge. The HiLo challenge will be available soon and will allow players to challenge other players to a new game of luck.</p>
      <p>A player must have at least one LDNA in their connected wallet to start the Luck Challenge. The propability of winning the Luck Challenge is exactly 50%. If the challenge is won the player recieves one new LDNA in their wallet. If the challenge is lost one LDNA from their wallet is burned making the token available to be minted again. If the total supply of LDNA is reached the challenge becomes unavailable until LDNA is burned.</p>
    </div>
    <div class="page-cta" ref="cta">
      <button class="background-animation" @click="view"><img alt="View on GitHub" src="../../../assets/github-mark.svg">GitHub</button>
      <button class="background-animation" @click="load">Home</button>
      <button class="background-animation" @click="load">Coming Soon</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'learnMore',
  data() {
    return {
      showLearnMore: true
    }
  },
  methods: {
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
      if (event.target.innerText == "Home") {
        this.$emit("load", "home");
      }
      if (event.target.innerText == "Coming Soon") {
        this.$emit("load", "comingsoon");
      }
    },
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
