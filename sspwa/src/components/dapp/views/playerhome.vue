<template>
  <div id="playerhome" class="page">
    <div class="page-title">
      <h1 ref="title">Welcome {{ player.name }}!</h1>
    </div>
    <div class="page-content" ref="content">
      <p>You can access the Challenges, Marketplace (coming soon), and Luckverse (coming soon) from here or from the menu activated by the button in the top left. Your LuckDNA Tokens (LDNA), Luckcoins (LKC), and LuckNFTs (LNFTS) are accessible from the bar at the bottom which can be hidden with the button in the top right.</p>
    </div>
    <div class="page-cta" ref="cta">
      <button class="background-animation" @click="challenges">Challenges</button>
      <button class="background-animation" @click="marketplace">Marketplace</button>
      <button class="background-animation" @click="luckverse">Luckverse</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'playerhome',
  computed: {
    player() {
      return this.$store.state.player;
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
    challenges() {
      this.$emit("load", "challenges");
    },
    marketplace() {
      this.$emit("load", "marketplace");
    },
    luckverse() {
      this.$emit("load", "luckverse");
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
  border-radius: 50px;
}
</style>
